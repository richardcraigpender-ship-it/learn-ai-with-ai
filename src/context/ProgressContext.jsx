import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { lessons } from "../data/lessons"

const ProgressContext = createContext(null)
const STORAGE_KEY = "learn-ai-with-ai-progress-v2"

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    try {
      if (typeof window === "undefined") return { lessons: {}, topics: {} }
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : { lessons: {}, topics: {} }
    } catch {
      return { lessons: {}, topics: {} }
    }
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    }
  }, [progress])

  const markLessonDone = (topicId, lessonId, xp = 10) => {
    setProgress((prev) => {
      const alreadyDone = !!prev.lessons?.[topicId]?.[lessonId]
      if (alreadyDone) return prev

      return {
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
            ...(prev.topics[topicId] || { totalXp: 0 }),
            totalXp: (prev.topics[topicId]?.totalXp || 0) + xp,
          },
        },
      }
    })
  }

  const unmarkLessonDone = (topicId, lessonId, xp = 10) => {
    setProgress((prev) => {
      const topicLessons = { ...(prev.lessons[topicId] || {}) }
      const wasDone = !!topicLessons[lessonId]

      if (!wasDone) return prev

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
            ...(prev.topics[topicId] || { totalXp: 0 }),
            totalXp: Math.max(0, (prev.topics[topicId]?.totalXp || 0) - xp),
          },
        },
      }
    })
  }

  const isLessonDone = (topicId, lessonId) => !!progress.lessons?.[topicId]?.[lessonId]

  const getTopicProgress = (topicId) => {
    const completedMap = progress.lessons?.[topicId] || {}
    const completedLessons = Object.keys(completedMap).length
    const topicEntry = lessons.find((entry) => entry.topicId === topicId)
    const totalLessons = topicEntry?.lessons?.length || 0

    return {
      completedLessons,
      totalLessons,
      totalXp: progress.topics?.[topicId]?.totalXp || 0,
    }
  }

  const value = useMemo(
    () => ({
      progress,
      markLessonDone,
      unmarkLessonDone,
      isLessonDone,
      getTopicProgress,
      totalXp: Object.values(progress.topics || {}).reduce(
        (sum, topic) => sum + (topic.totalXp || 0),
        0
      ),
    }),
    [progress]
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  return useContext(ProgressContext)
}