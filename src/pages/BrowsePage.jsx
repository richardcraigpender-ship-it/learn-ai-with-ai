import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { topics } from '../data/topics'
import { useProgress } from '../context/ProgressContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeader from '../components/ui/SectionHeader'
import PageHero from '../components/ui/PageHero'


function BrowsePage() {
  const { progress } = useProgress()
  const [search, setSearch] = useState('')
  const [levelFilter, setLevelFilter] = useState('All')
  const [priceFilter, setPriceFilter] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  const completedCount = topics.filter(
    topic => (progress.topics[topic.id]?.completedLessons || 0) >= topic.lessons
  ).length

  const startedTopics = topics.filter(
    topic => (progress.topics[topic.id]?.completedLessons || 0) > 0
  )

  const filteredTopics = useMemo(() => {
    let result = [...topics]

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        topic =>
          topic.title.toLowerCase().includes(q) ||
          topic.summary.toLowerCase().includes(q)
      )
    }

    if (levelFilter !== 'All') {
      result = result.filter(topic => topic.level === levelFilter)
    }

    if (priceFilter === 'Free') {
      result = result.filter(topic => topic.price === 0)
    }

    if (priceFilter === 'Paid') {
      result = result.filter(topic => topic.price > 0)
    }

    if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    }

    if (sortBy === 'shortest') {
      result.sort((a, b) => a.minutes - b.minutes)
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    }

    return result
  }, [search, levelFilter, priceFilter, sortBy])

  return (
    <div className="section-stack">
      <PageHero
  eyebrow="Browse mini-classes"
  title="Find the right AI topic for where you are now"
  description="Search, filter, and compare short beginner-friendly topics so you can start with something useful today instead of getting stuck deciding."
  meta={[`${topics.length} total topics`, `${startedTopics.length} started`, `${completedCount} completed`]}
>
  <Button to="/dashboard" variant="secondary">
    Go to My Learning
  </Button>
</PageHero>

      <section className="app-grid two">
        <Card as="article" className="ui-card">
          <h2>Your progress</h2>
          <p className="muted">
            Topics started: {startedTopics.length} · Topics completed: {completedCount}
          </p>
          <div className="ui-progress" style={{ marginTop: '12px', maxWidth: '420px' }}>
            <div
              className="ui-progress-fill"
              style={{ width: `${(completedCount / topics.length) * 100}%` }}
            ></div>
          </div>
          <div style={{ marginTop: '14px' }}>
            <Link to="/dashboard" className="card-link">
              Go to My Learning
            </Link>
          </div>
        </Card>

        <Card as="article" className="ui-card">
          <h2>Filters</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginTop: '10px'
            }}
          >
            <input
              type="text"
              placeholder="Search topics"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                gridColumn: '1 / -1',
                padding: '12px',
                borderRadius: '14px',
                border: '1px solid #d7d0c4',
                fontSize: '0.95rem'
              }}
            />

            <select
              value={levelFilter}
              onChange={e => setLevelFilter(e.target.value)}
              style={{
                padding: '12px',
                borderRadius: '14px',
                border: '1px solid #d7d0c4',
                fontSize: '0.95rem'
              }}
            >
              <option value="All">All levels</option>
              <option value="Beginner">Beginner</option>
            </select>

            <select
              value={priceFilter}
              onChange={e => setPriceFilter(e.target.value)}
              style={{
                padding: '12px',
                borderRadius: '14px',
                border: '1px solid #d7d0c4',
                fontSize: '0.95rem'
              }}
            >
              <option value="All">All prices</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>

            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              style={{
                gridColumn: '1 / -1',
                padding: '12px',
                borderRadius: '14px',
                border: '1px solid #d7d0c4',
                fontSize: '0.95rem'
              }}
            >
              <option value="default">Sort: Recommended</option>
              <option value="title">Sort: Title A-Z</option>
              <option value="shortest">Sort: Shortest first</option>
              <option value="price-low">Sort: Lowest price</option>
            </select>
          </div>
        </Card>
      </section>

      <section className="section-stack">
        <h2>Results</h2>
        <p className="muted">{filteredTopics.length} topic(s) found</p>

        {filteredTopics.length === 0 ? (
          <div className="ui-card">
            <h3>No matching topics</h3>
            <p className="muted">
              Try a different search term or clear one of the filters.
            </p>
          </div>
        ) : (
          <div className="app-grid three">
            {filteredTopics.map(topic => {
              const completedLessons = progress.topics[topic.id]?.completedLessons || 0
              const isCompleted = completedLessons >= topic.lessons
              const isStarted = completedLessons > 0

              let status = 'Not started'
              if (isCompleted) status = 'Completed'
              else if (isStarted) status = 'In progress'

              return (
                <Card as="article" key={topic.id} className="ui-card">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '10px',
                      alignItems: 'center',
                      marginBottom: '12px',
                      flexWrap: 'wrap'
                    }}
                  >
                    <span className="ui-badge">{topic.price === 0 ? 'Free' : `£${topic.price}`}</span>
                    <span className="ui-badge">{status}</span>
                  </div>

                  <h3>{topic.title}</h3>
                  <p className="muted">{topic.summary}</p>

                  <div className="card-meta" style={{ margin: '12px 0 14px' }}>
                    <span>{topic.level}</span>
                    <span>{topic.lessons} lessons</span>
                    <span>{topic.minutes} mins</span>
                  </div>

                  {isStarted && (
                    <>
                      <p className="muted" style={{ marginBottom: '8px' }}>
                        Progress: {completedLessons} of {topic.lessons} lessons complete
                      </p>
                      <div className="ui-progress" style={{ marginBottom: '14px' }}>
                        <div
                          className="ui-progress-fill"
                          style={{ width: `${(completedLessons / topic.lessons) * 100}%` }}
                        ></div>
                      </div>
                    </>
                  )}

                  <Button to={`/topic/${topic.id}`} className="card-link">
                    {isCompleted
                      ? 'Review topic'
                      : isStarted
                      ? 'Resume topic'
                      : topic.price === 0
                      ? 'Start topic'
                      : 'View topic'}
                  </Button>
                </Card>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}

export default BrowsePage