import { Link } from 'react-router-dom'
import { topics } from '../data/topics'
import { paths } from '../data/paths'
import { useProgress } from '../context/ProgressContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeader from '../components/ui/SectionHeader'
import PageHero from '../components/ui/PageHero'


function DashboardPage() {
  const { progress } = useProgress()

  const aiBasicsPath = paths.find(path => path.id === 'ai-basics')
  const pathProgress = progress.paths['ai-basics'] || { completedTopics: 0 }

  const startedTopics = topics.filter(
    topic => (progress.topics[topic.id]?.completedLessons || 0) > 0
  )

  const completedTopics = topics.filter(
    topic => (progress.topics[topic.id]?.completedLessons || 0) >= topic.lessons
  )

  const completionPercent = Math.round(
    (pathProgress.completedTopics / aiBasicsPath.topicIds.length) * 100
  )

  return (
    <div className="section-stack">
 <PageHero
  eyebrow="My Learning"
  title="Track your progress and keep moving"
  description="See your active path, continue where you left off, and stay motivated with visible progress across your mini-classes."
  meta={[
    `${startedTopics.length} topics started`,
    `${completedTopics.length} topics completed`,
    `${progress.streak.current || 0} day streak`,
  ]}
>
  <Button to="/path/ai-basics">Resume AI Basics Path</Button>
  <Button to="/browse" variant="secondary">
    Browse topics
  </Button>
</PageHero>

      <section className="app-grid two">
        <Card as="article" className="ui-card">
          <h2>{aiBasicsPath.title}</h2>
          <p className="muted">{aiBasicsPath.description}</p>
          <p className="muted">
            Progress: {pathProgress.completedTopics} of {aiBasicsPath.topicIds.length} topics complete
          </p>
          <div className="ui-progress" style={{ margin: '12px 0 14px' }}>
            <div className="ui-progress-fill" style={{ width: `${completionPercent}%` }}></div>
          </div>
          <Link to="/path/ai-basics" className="card-link">
            Resume path
          </Link>
        </Card>

        <Card as="article" className="ui-card">
          <h2>Your stats</h2>
          <p className="muted">Topics started: {startedTopics.length}</p>
          <p className="muted">Topics completed: {completedTopics.length}</p>
          <p className="muted">Current streak: {progress.streak.current || 0} days</p>
        </Card>
      </section>

      <section className="section-stack">
        <h2>Continue learning</h2>
        {startedTopics.length === 0 ? (
          <div className="ui-card">
            <p className="muted">You have not started any topics yet.</p>
          </div>
        ) : (
          <div className="app-grid two">
            {startedTopics.map(topic => {
              const completedLessons = progress.topics[topic.id]?.completedLessons || 0
              const status =
                completedLessons >= topic.lessons ? 'Completed' : 'In progress'

              return (
                <Card as="article" key={topic.id} className="ui-card">
                  <span className="ui-badge">{status}</span>
                  <h3>{topic.title}</h3>
                  <p className="muted">{topic.summary}</p>
                  <div className="card-meta">
                    <span>{topic.level}</span>
                    <span>{topic.lessons} lessons</span>
                    <span>{topic.minutes} mins</span>
                  </div>
                  <Link to={`/topic/${topic.id}`} className="card-link">
                    {status === 'Completed' ? 'Review topic' : 'Resume topic'}
                  </Link>
                </Card>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}

export default DashboardPage