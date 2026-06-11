import { Link } from 'react-router-dom'
import { topics } from '../data/topics'
import { useProgress } from '../context/ProgressContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeader from '../components/ui/SectionHeader'
import './HomePage.css'

function HomePage() {
  const { progress } = useProgress()
  const featuredTopics = topics.slice(0, 6)
  const completedTopics = topics.filter(
    topic => (progress.topics[topic.id]?.completedLessons || 0) >= topic.lessons
  ).length

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Beginner-friendly AI learning</p>
          <h1>Learn AI in small lessons you can actually finish.</h1>
          <p className="hero-text">
            Learn what AI is, how to use it well, and where it can go wrong — through
            short, practical mini-classes designed for real beginners.
          </p>

          <div className="hero-actions">
          <Button to="/browse">Start learning free</Button>
          <Button to="/path/ai-basics" variant="secondary">
            Explore AI Basics Path
          </Button>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <strong>6</strong>
              <span>Starter topics</span>
            </div>
            <div className="stat-card">
              <strong>3</strong>
              <span>Lessons per topic</span>
            </div>
            <div className="stat-card">
              <strong>{completedTopics}</strong>
              <span>Topics completed so far</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="mock-card">
            <p className="mock-label">AI Basics Path</p>
            <h3>Your next step</h3>
            <p>Build practical AI understanding one topic at a time.</p>
            <div className="mock-progress">
              <div className="mock-progress-bar"></div>
            </div>
            <p className="mock-small">
              Progress: {progress.paths['ai-basics']?.completedTopics || 0} of 6 topics complete
            </p>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-item">
          <strong>Short lessons</strong>
          <span>No long overwhelming courses to finish.</span>
        </div>
        <div className="trust-item">
          <strong>Beginner-first</strong>
          <span>Built for people starting from zero.</span>
        </div>
        <div className="trust-item">
          <strong>Practical use</strong>
          <span>Focus on everyday AI understanding and skills.</span>
        </div>
        <div className="trust-item">
          <strong>Clear progress</strong>
          <span>Track what you started and what to do next.</span>
        </div>
      </section>

      <section className="benefits-section">
        <SectionHeader
          eyebrow="Why it works"
          title="A simpler way to start learning AI"
          description="Instead of pushing you into one huge course, the platform helps you start with one small topic, build confidence fast, and keep going without overload."
        />

        <div className="benefits-grid">
          <Card as="article" className="info-card">
            <h3>Learn in small, focused lessons</h3>
            <p>
              Every topic is broken into 3 short lessons so it feels manageable and easy to
              complete even when you are busy.
            </p>
          </Card>

          <Card as="article" className="info-card">
            <h3>Understand AI without jargon overload</h3>
            <p>
              The goal is not to impress you with complexity. The goal is to make the basics
              clear, useful, and practical from day one.
            </p>
          </Card>

          <Card as="article" className="info-card">
            <h3>Build confidence before going deeper</h3>
            <p>
              Start with free fundamentals, then move into deeper beginner topics when you
              are ready for the next step.
            </p>
          </Card>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <p className="eyebrow">Featured mini-classes</p>
          <h2>Choose a topic that fits what you want to learn today</h2>
          <p>
            Browse short beginner-friendly classes and make visible progress in less time
            than a traditional course asks from you.
          </p>
        </div>

        <div className="topics-grid">
          {featuredTopics.map(topic => {
            const completedLessons = progress.topics[topic.id]?.completedLessons || 0
            const status =
              completedLessons >= topic.lessons
                ? 'Completed'
                : completedLessons > 0
                ? 'In progress'
                : 'Not started'

            return (
              <Card as="article" key={topic.id} className="topic-card">
                <div className="topic-top">
                  <span className="topic-price">
                    {topic.price === 0 ? 'Free' : `£${topic.price}`}
                  </span>
                  <span className="topic-status">{status}</span>
                </div>

                <h3>{topic.title}</h3>
                <p>{topic.summary}</p>

                <div className="topic-meta">
                  <span>{topic.level}</span>
                  <span>{topic.lessons} lessons</span>
                  <span>{topic.minutes} mins</span>
                </div>

                <Link to={`/topic/${topic.id}`} className="topic-link">
                  {topic.price === 0 ? 'Start topic' : 'View topic'}
                </Link>
              </Card>
            )
          })}
        </div>

        <div className="section-actions">
          <Link to="/browse" className="btn btn-primary">
            Browse all mini-classes
          </Link>
        </div>
      </section>

      <section className="outcomes-section">
        <div className="section-heading">
          <p className="eyebrow">What you will walk away with</p>
          <h2>Practical confidence, not just AI buzzwords</h2>
        </div>

        <div className="outcomes-grid">
          <Card as="article" className="outcome-card">
            <h3>Know what AI is actually doing</h3>
            <p>
              Understand the basics well enough to stop feeling lost when people talk about
              prompts, models, hallucinations, and automation.
            </p>
          </Card>

          <Card as="article" className="outcome-card">
            <h3>Use AI tools more effectively</h3>
            <p>
              Learn how to ask better questions, improve results, and use AI for everyday
              work without blindly trusting it.
            </p>
          </Card>

          <Card as="article" className="outcome-card">
            <h3>Spot common risks faster</h3>
            <p>
              Build better instincts around safety, privacy, and checking whether AI output
              is actually reliable.
            </p>
          </Card>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Questions a beginner might ask first</h2>
        </div>

        <div className="faq-list">
          <Card as="article" className="faq-card">
            <h3>Do I need technical experience?</h3>
            <p>
              No. The first topics are designed for complete beginners and focus on practical
              understanding before anything advanced.
            </p>
          </Card>

          <Card as="article" className="faq-card">
            <h3>Can I start with free content?</h3>
            <p>
              Yes. The app is designed so you can begin with free fundamentals and decide later
              whether you want to go deeper.
            </p>
          </Card>

          <Card as="article" className="faq-card">
            <h3>How long does each topic take?</h3>
            <p>
              Most topics are designed to take around 20 to 30 minutes in total, broken into
              3 smaller lessons.
            </p>
          </Card>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-card">
          <p className="eyebrow">Start now</p>
          <h2>Take your first small step into AI today</h2>
          <p>
            Start with a free topic, finish one short lesson, and build momentum from there.
          </p>
          <div className="hero-actions">
            <Link to="/browse" className="btn btn-primary">
              Start free
            </Link>
            <Link to="/dashboard" className="btn btn-secondary">
              Open My Learning
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage