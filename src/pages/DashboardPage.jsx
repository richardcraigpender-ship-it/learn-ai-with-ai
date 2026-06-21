import { Link } from "react-router-dom"
import { topics } from "../data/topics"
import { paths } from "../data/paths"
import { useProgress } from "../context/ProgressContext"
import { useUser } from "../context/UserContext"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import SectionHeader from "../components/ui/SectionHeader"
import PageHero from "../components/ui/PageHero"
import EditableProfileCard from "../components/EditableProfileCard"
import "./DashboardPage.css"

function DashboardPage() {
  const { user } = useUser()
  const { totalXp, getTopicProgress } = useProgress()

  const activePath = paths.find((path) => path.id === "ai-basics") || paths[0]
  const pathTopicIds = activePath?.topics || []

  const startedTopics = topics.filter((topic) => {
    const progress = getTopicProgress(topic.id)
    return progress.completedLessons > 0
  })

  const totalCompletedLessons = pathTopicIds.reduce((sum, topicId) => {
    return sum + getTopicProgress(topicId).completedLessons
  }, 0)

  const totalLessonsInPath = pathTopicIds.reduce((sum, topicId) => {
    return sum + getTopicProgress(topicId).totalLessons
  }, 0)

  const progressPercent = totalLessonsInPath
    ? Math.round((totalCompletedLessons / totalLessonsInPath) * 100)
    : 0

  return (
    <div className="dashboard-page">
      <PageHero eyebrow="Learner dashboard"
        title={`Welcome back, ${user?.name || "Learner"}`}
        description="Track your progress, jump back into your lessons, and keep building your AI skills one topic at a time."
        actions={
          <div className="dashboard-actions">
            <Button to="/browse">Browse topics</Button>
            <Button to="/path/ai-basics" variant="secondary">
              View path
            </Button>
          </div>
        }
      />

      <section className="dashboard-section">
        <SectionHeader
          eyebrow="Profile"
          title="Your learner card"
          description="Edit your display details and set your current learning focus."
        />
        <EditableProfileCard />
      </section>

      <section className="dashboard-section">
        <SectionHeader
          eyebrow="Overview"
          title="Your learning progress"
          description="A quick view of your current path, lesson completion, and total XP."
        />

        <div className="dashboard-grid">
          <Card className="dashboard-card">
            <p className="dashboard-label">Current path</p>
            <h2>{activePath?.title || "AI Basics"}</h2>
            <p>{activePath?.description || "Build confidence with core AI concepts and practical prompting."}</p>
          </Card>

          <Card className="dashboard-card">
            <p className="dashboard-label">Progress</p>
            <h2>{progressPercent}%</h2>
            <p>
              {totalCompletedLessons} of {totalLessonsInPath || 0} lessons completed
            </p>
          </Card>

          <Card className="dashboard-card">
            <p className="dashboard-label">Total XP</p>
            <h2>{totalXp}</h2>
            <p>Keep completing lessons to grow your score.</p>
          </Card>

          <Card className="dashboard-card">
            <p className="dashboard-label">Plan</p>
            <h2>{user?.plan || "free"}</h2>
            <p>Your current learner plan and access level.</p>
          </Card>
        </div>
      </section>

      <section className="dashboard-section">
        <SectionHeader
          eyebrow="Continue"
          title="Started topics"
          description="Pick up where you left off in the topics you have already started."
        />

        {startedTopics.length === 0 ? (
          <Card className="dashboard-card">
            <h3>No started topics yet</h3>
            <p>Start your first lesson to see it appear here.</p>
            <Button to="/browse">Explore topics</Button>
          </Card>
        ) : (
          <div className="dashboard-grid">
            {startedTopics.map((topic) => {
              const progress = getTopicProgress(topic.id)
              const isDone = progress.totalLessons > 0 && progress.completedLessons === progress.totalLessons
              const status = isDone ? "Completed" : "In progress"

              return (
                <Card key={topic.id} className="dashboard-topic-card">
                  <p className="dashboard-topic-status">{status}</p>
                  <h3>{topic.title}</h3>
                  <p className="dashboard-topic-meta">
                    {progress.completedLessons} / {progress.totalLessons} lessons complete
                  </p>
                  <p>{topic.summary || topic.notes || "Continue learning with this topic."}</p>
                  <Link className="dashboard-topic-link" to={`/topic/${topic.id}`}>
                    {status === "Completed" ? "Review topic" : "Resume topic"}
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