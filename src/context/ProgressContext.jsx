import { createContext, useContext, useEffect, useState } from 'react'
import { paths } from '../data/paths'
import { topics } from '../data/topics'

const ProgressContext = createContext(null)

const STORAGE_KEY = 'learn-ai-with-ai-progress-v1'

const defaultProgress = {
  topics: {},
  paths: {},
  streak: { current: 0, lastActiveDate: null }
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(defaultProgress)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setProgress(JSON.parse(stored))
      }
    } catch {
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
    }
  }, [progress])

  const markLessonComplete = (topicId, lessonIndex, totalLessons = 3) => {
    setProgress(prev => {
      const prevTopic = prev.topics[topicId] || { completedLessons: 0 }
      const completedLessons = Math.max(prevTopic.completedLessons, lessonIndex + 1)

      const updatedTopics = {
        ...prev.topics,
        [topicId]: { completedLessons }
      }

      const updatedPaths = { ...prev.paths }

      paths.forEach(path => {
        const completedTopicCount = path.topicIds.filter(id => {
          const saved = updatedTopics[id]
          const topicMeta = topics.find(topic => topic.id === id)
          if (!topicMeta) return false
          return saved && saved.completedLessons >= topicMeta.lessons
        }).length

        updatedPaths[path.id] = {
          completedTopics: completedTopicCount
        }
      })

      const today = new Date().toISOString().slice(0, 10)
      let current = prev.streak.current || 0

      if (prev.streak.lastActiveDate === today) {
      } else {
        current = prev.streak.lastActiveDate ? current + 1 : 1
      }

      return {
        topics: updatedTopics,
        paths: updatedPaths,
        streak: { current, lastActiveDate: today }
      }
    })
  }

  return (
    <ProgressContext.Provider value={{ progress, markLessonComplete }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  return useContext(ProgressContext)
}