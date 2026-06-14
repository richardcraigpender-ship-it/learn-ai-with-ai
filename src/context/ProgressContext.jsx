import { createContext, useContext, useEffect, useMemo, useState } from "react"

const ProgressContext = createContext(null)
const STORAGE_KEY = "learn-ai-with-ai-progress-v2"

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : { lessons: {}, topics: {} }
    } catch {
      return { lessons: {}, topics: {} }
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const markLessonDone = (topicId, lessonId, xp = 10) => {
    setProgress((prev) => ({
      ...prev,
      lessons: {
        ...prev.lessons,
        [topicId]: {
          ...(prev.lessons[topicId] || {}),
          [lessonId]: true,
        },
      },
      topics: {
        ...prev.topics,
        [topicId]: {
          ...(prev.topics[topicId] || { completedLessons: 0, totalXp: 0 }),
          totalXp: (prev.topics[topicId]?.totalXp || 0) + xp,
        },
      },
    }))
  }

  const unmarkLessonDone = (topicId, lessonId, xp = 10) => {
    setProgress((prev) => {
      const topicLessons = { ...(prev.lessons[topicId] || {}) }
      delete topicLessons[lessonId]
      return {
        ...prev,
        lessons: {
          ...prev.lessons,
          [topicId]: topicLessons,
        },
        topics: {
          ...prev.topics,
          [topicId]: {
            ...(prev.topics[topicId] || { completedLessons: 0, totalXp: 0 }),
            totalXp: Math.max(0, (prev.topics[topicId]?.totalXp || 0) - xp),
          },
        },
      }
    })
  }

  const isLessonDone = (topicId, lessonId) => !!progress.lessons?.[topicId]?.[lessonId]

  const getTopicProgress = (topicId) => {
    const topicLessons = progress.lessons?.[topicId] || {}
    const completedLessons = Object.keys(topicLessons).length
    return {
      completedLessons,
      totalLessons: 0,
      totalXp: progress.topics?.[topicId]?.totalXp || 0,
    }
  }

  const value = useMemo(() => ({
    progress,
    markLessonDone,
    unmarkLessonDone,
    isLessonDone,
    getTopicProgress,
    totalXp: Object.values(progress.topics || {}).reduce((sum, t) => sum + (t.totalXp || 0), 0),
  }), [progress])

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  return useContext(ProgressContext)
}