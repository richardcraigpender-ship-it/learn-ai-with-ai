import { useParams } from "react-router-dom"
import { paths } from "../data/paths"
import { topics } from "../data/topics"
import { useProgress } from "../context/ProgressContext"
import Card from "../components/ui/Card"
import Button from "../components/ui/Button"
import SectionHeader from "../components/ui/SectionHeader"
import "./PathPage.css"

export default function PathPage() {
  const { id } = useParams()

  // Find the path by id or slug
  const path = paths.find((p) => p.id === id || p.slug === id)

  if (!path) {
    return (
      <div className="path-page">
        <section className="path-page__section">
          <Card>
            <h2>Path not found</h2>
            <p>The path you're looking for doesn't exist.</p>
            <p>Expected id or slug: <strong>{id || "nothing"}</strong></p>
            <Button to="/browse" variant="secondary">Go back to browse</Button>
          </Card>
        </section>
      </div>
    )
  }

  const { getTopicProgress } = useProgress()

  // Get progress for each topic in the path
  const pathTopics = path.topics?.map((topicId) => {
    const topic = topics.find((t) => t.id === topicId || t.slug === topicId)
    if (!topic) return null

    const progress = getTopicProgress(topic.id)
    return {
      topic,
      completedLessons: progress.completedLessons,
      totalLessons: progress.totalLessons || 0,
    }
  }).filter(Boolean) || []

  const totalCompleted = pathTopics.reduce((sum, t) => sum + t.completedLessons, 0)
  const totalLessons = pathTopics.reduce((sum, t) => sum + t.totalLessons, 0)
  const percentage = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0

  return (
    <div className="path-page">
      {/* Hero Section */}
      <section className="path-page__hero">
        <div className="path-page__hero-content">
          <h1>{path.title}</h1>
          <p>{path.description}</p>

          <div className="path-page__progress">
            <div className="path-page__progress-bar">
              <div className="path-page__progress-fill" style={{ width: `${percentage}%` }} />
            </div>
            <span>{totalCompleted}/{totalLessons} lessons ({percentage}%)</span>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="path-page__topics">
        <SectionHeader title="Topics in this path" />
        <div className="path-page__topic-cards">
          {pathTopics.map(({ topic, completedLessons, totalLessons }) => {
            const lessonPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0
            return (
              <Card key={topic.id} className="path-page__topic-card">
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <div className="path-page__topic-meta">
                  <span>Difficulty: {topic.difficulty}</span>
                  {topic.isFree && <span>Free</span>}
                  {!topic.isFree && <span>£{topic.price}</span>}
                </div>
                <Button to={`/topic/${topic.slug}`}>Start {topic.title}</Button>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}