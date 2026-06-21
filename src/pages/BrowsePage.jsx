import { topics } from "../data/topics"
import { useProgress } from "../context/ProgressContext"
import Card from "../components/ui/Card"
import Button from "../components/ui/Button"
import SectionHeader from "../components/ui/SectionHeader"
import "./BrowsePage.css"

export default function BrowsePage() {
  const { getTopicProgress } = useProgress()

  const categories = topics.reduce((acc, topic) => {
    acc[topic.category] = acc[topic.category] || []
    acc[topic.category].push(topic)
    return acc
  }, {})

  return (
    <div className="browse-page">
      <section className="browse-page__hero">
        <SectionHeader title="Browse Mini-Classes" />
        <p className="browse-page__hero-text">
          Explore our collection of short, focused lessons on AI fundamentals, practical skills, and ethics.
        </p>
      </section>

      <section className="browse-page__categories">
        {Object.entries(categories).map(([category, categoryTopics]) => (
          <div className="browse-page__category" key={category}>
            <SectionHeader title={category} />
            <div className="browse-page__cards">
              {categoryTopics.map((topic) => {
                const progress = getTopicProgress(topic.id)
                const completed = progress.completedLessons
                const total = progress.totalLessons
                const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

                return (
                  <Card key={topic.id} className="browse-page__card">
                    <div className="browse-page__card-header">
                      <div>
                        <h3>{topic.title}</h3>
                        <p className="browse-page__card-subtitle">
                        {topic.description || topic.summary || topic.notes}
                      </p>
                      </div>
                      <span className={`browse-page__difficulty ${topic.difficulty}`} />
                    </div>

                    {/* Progress bar */}
                    {completed > 0 && (
                      <div className="browse-page__progress">
                        <div className="browse-page__progress-bar">
                          <div className="browse-page__progress-fill" style={{ width: `${percentage}%` }} />
                        </div>
                        <span className="browse-page__progress-text">
                          {completed}/{total} ({percentage}%)
                        </span>
                      </div>
                    )}

                    <div className="browse-page__card-meta">
                      {topic.isFree && <span className="browse-page__free">Free</span>}
                      {!topic.isFree && <span className="browse-page__price">£{topic.price}</span>}
                      {topic.estimatedTime && <span className="browse-page__time">~{topic.estimatedTime} min</span>}
                    </div>

                  <Button to={`/topic/${topic.slug}`} variant="primary">
                  Start {topic.title}
                </Button>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}