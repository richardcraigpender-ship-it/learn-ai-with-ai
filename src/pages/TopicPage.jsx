import { Link, useParams } from 'react-router-dom'
import { topics } from '../data/topics'
import { useProgress } from '../context/ProgressContext'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import PageHero from '../components/ui/PageHero'
import './TopicPage.css'

const lessonDescriptions = {
  'what-is-ai': [
    'Learn what AI means in simple language and how it differs from normal software.',
    'See everyday examples of AI in search, recommendations, chatbots, and image tools.',
    'Understand the difference between what AI can do well and where it still fails.'
  ],
  'prompting-basics': [
    'Learn why vague prompts create vague answers and how to ask more clearly.',
    'Use structure, context, and examples to get stronger answers from AI tools.',
    'Practice improving weak prompts into useful prompts you can reuse.'
  ],
  'ai-safety-basics': [
    'Learn why AI can hallucinate and why confident answers are not always correct.',
    'Understand privacy risks and what information you should never paste into AI tools.',
    'Build simple habits for checking outputs before you trust or share them.'
  ],
  'how-ai-is-made': [
    'Understand the basic role of data, training, and models in modern AI systems.',
    'Learn how AI models spot patterns by training on large examples.',
    'See why better data and clearer evaluation often matter as much as bigger models.'
  ],
  'how-ai-thinks': [
    'Learn how token prediction works and why AI generates one piece at a time.',
    'Understand why AI can sound fluent without truly reasoning like a person.',
    'See how confidence, probability, and missing context affect the final answer.'
  ],
  'ai-for-everyday-tasks': [
    'Use AI for writing, planning, brainstorming, and summarising common tasks.',
    'Learn where AI speeds you up and where your own judgment still matters most.',
    'Create a simple workflow for using AI without becoming over-reliant on it.'
  ]
}

function TopicPage() {
  const { id } = useParams()
  const { progress, markLessonComplete } = useProgress()

  const topic = topics.find(topic => topic.id === id)

  if (!topic) {
    return (
      <div className="topic-page">
        <div className="next-step-card ui-card">
          <h1 className="topic-title">Topic not found</h1>
          <p className="topic-section-copy">
            The topic you tried to open does not exist in the current course list.
          </p>
          <div className="topic-links">
            <Link to="/browse" className="topic-inline-link">
              Go back to Browse
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const completedLessons = progress.topics[topic.id]?.completedLessons || 0
  const progressPercent = Math.round((completedLessons / topic.lessons) * 100)
  const lessonList =
    lessonDescriptions[topic.id] ||
    Array.from({ length: topic.lessons }, (_, index) => `Lesson ${index + 1} content.`)

  const nextLessonNumber =
    completedLessons < topic.lessons ? completedLessons + 1 : topic.lessons

  return (
    <div className="topic-page">
      <section className="topic-hero">
        <PageHero
          className="topic-hero-main"
          eyebrow={topic.price === 0 ? 'Free topic' : `£${topic.price}`}
          title={topic.title}
          description={topic.summary}
          meta={[topic.level, `${topic.lessons} lessons`, `${topic.minutes} mins`, `${progressPercent}% complete`]}
        />

        <aside className="topic-hero-side ui-card">
          <p className="topic-side-kicker">Next action</p>
          <h2 className="topic-side-title">
            {completedLessons >= topic.lessons
              ? 'You finished this topic'
              : `Continue with lesson ${nextLessonNumber}`}
          </h2>
          <p className="topic-side-text">
            {completedLessons >= topic.lessons
              ? 'Great work. You can review the lessons below or continue your path with another topic.'
              : 'Move forward one short lesson at a time and keep building confidence without overload.'}
          </p>

          <div className="topic-side-actions">
            {completedLessons < topic.lessons ? (
          <Button onClick={() => markLessonComplete(topic.id, completedLessons)}>
          Mark next lesson complete
        </Button>
            ) : (
            <Button to="/path/ai-basics">
              Go to AI Basics Path
            </Button>
            )}

            <Button to="/browse" variant="secondary">
              Back to Browse
            </Button>
          </div>
        </aside>
      </section>

      <section>
        <h2 className="topic-section-title">Lesson breakdown</h2>
        <p className="topic-section-copy">
          Each topic is split into small lessons so you can make progress quickly and come back
          without losing your place.
        </p>
      </section>

      <section className="lessons-list">
        {lessonList.map((lessonText, index) => {
          const lessonNumber = index + 1
          const isDone = completedLessons >= lessonNumber

          return (
            <Card as="article" key={index} className="lesson-card ui-card">
              <div className={isDone ? 'lesson-number complete' : 'lesson-number'}>
                {lessonNumber}
              </div>

              <div>
                <h3 className="lesson-title">Lesson {lessonNumber}</h3>
                <p className="lesson-copy">{lessonText}</p>
                <span className={isDone ? 'lesson-status done' : 'lesson-status'}>
                  {isDone ? 'Completed' : 'Not completed'}
                </span>
              </div>

              <div className="lesson-action">
                {!isDone ? (
              <Button
                variant="secondary"
                onClick={() => markLessonComplete(topic.id, index)}
              >
                Mark complete
              </Button>
                ) : null}
              </div>
            </Card>
          )
        })}
      </section>

      <section className="next- ui-card">
        <h3>What to do after this</h3>
        <p>
          When you finish this topic, continue through the AI Basics path or open another
          mini-class that matches what you want to learn next.
        </p>
        <div className="topic-links">
          <Button to="/path/ai-basics">View AI Basics Path</Button>
          <Button to="/dashboard" variant="secondary">Open My Learning</Button>
        </div>
      </section>
    </div>
  )
}

export default TopicPage