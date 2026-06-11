import { Link } from 'react-router-dom'
import { paths } from '../data/paths'
import { topics } from '../data/topics'
import { useProgress } from '../context/ProgressContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeader from '../components/ui/SectionHeader'
import PageHero from '../components/ui/PageHero'
import './PathPage.css'

function PathPage() {
  const { progress } = useProgress()

  const path = paths.find(path => path.id === 'ai-basics')

  if (!path) {
    return (
      <div className="path-page">
        <Card className="path-summary ui-card">
          <h1 className="path-title">Path not found</h1>
          <p className="path-copy">
            The learning path you tried to open does not exist right now.
          </p>
          <Link to="/browse" className="path-link">
            Go back to Browse
          </Link>
        </Card>
      </div>
    )
  }

  const pathProgress = progress.paths['ai-basics'] || { completedTopics: 0 }
  const totalTopics = path.topicIds.length
  const completedTopics = pathProgress.completedTopics || 0
  const completionPercent = Math.round((completedTopics / totalTopics) * 100)

  const topicCards = path.topicIds
    .map(topicId => topics.find(topic => topic.id === topicId))
    .filter(Boolean)

  const nextTopic =
    topicCards.find(
      topic => (progress.topics[topic.id]?.completedLessons || 0) < topic.lessons
    ) || null

  return (
    <div className="path-page">
      <section className="path-hero">
        <PageHero
  className="path-hero-main"
  eyebrow="Guided path"
  title={path.title}
  description={path.description}
  meta={[`${totalTopics} topics`, 'Beginner', `${completionPercent}% complete`]}
>
  {nextTopic ? (
    <Button to={`/topic/${nextTopic.id}`}>Open next topic</Button>
  ) : (
    <Button to="/dashboard">View My Learning</Button>
  )}
  <Button to="/browse" variant="secondary">
    Browse all mini-classes
  </Button>
</PageHero>
      </section>

      <section>
        <SectionHeader
          title="Path roadmap"
          description="Work through these topics in order to build a strong beginner foundation in AI."
        />
      </section>

      <section className="path-steps">
        {topicCards.map((topic, index) => {
          const completedLessons = progress.topics[topic.id]?.completedLessons || 0
          const isCompleted = completedLessons >= topic.lessons
          const isCurrent = !isCompleted && nextTopic?.id === topic.id

          let statusText = 'Not started'
          let statusClass = 'path-status'

          if (isCompleted) {
            statusText = 'Completed'
            statusClass = 'path-status done'
          } else if (isCurrent) {
            statusText = 'Recommended next'
            statusClass = 'path-status live'
          } else if (completedLessons > 0) {
            statusText = 'In progress'
            statusClass = 'path-status'
          }

          return (
            <Card key={topic.id} className="path-step-card ui-card">
              <div className={isCompleted ? 'path-step-number done' : 'path-step-number'}>
                {index + 1}
              </div>

              <div>
                <h3 className="path-step-title">{topic.title}</h3>
                <p className="path-step-copy">{topic.summary}</p>
                <div className="path-step-meta">
                  <span>{topic.level}</span>
                  <span>{topic.lessons} lessons</span>
                  <span>{topic.minutes} mins</span>
                  <span>{topic.price === 0 ? 'Free' : `£${topic.price}`}</span>
                </div>
                <span className={statusClass}>{statusText}</span>
              </div>

              <div className="path-step-action">
              <Button to={`/topic/${topic.id}`}>
                {isCompleted ? 'Review topic' : completedLessons > 0 ? 'Resume topic' : 'Start topic'}
              </Button>
              </div>
            </Card>
          )
        })}
      </section>

      <section className="path-summary-grid">
        <Card className="path-summary ui-card">
          <h3>What you will learn</h3>
          <p>
            Build a beginner-friendly understanding of what AI is, how it works, how to use it
            effectively, and how to stay safe when using it.
          </p>
        </Card>

        <Card className="path-summary ui-card">
          <h3>How to use this path</h3>
          <p>
            Move through one topic at a time, complete the short lessons, and return to your
            dashboard to track your overall progress.
          </p>
        </Card>

        <Card className="path-summary ui -card">
          <h3>Best next move</h3>
          <p>
            Finish the free fundamentals first, then continue into the paid beginner topics once
            you feel confident with the basics.
          </p>
        </Card>
      </section>
    </div>
  )
}

export default PathPage