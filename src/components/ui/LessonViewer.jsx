import React, { useState, useEffect } from "react"
import { lessons } from "../../data/lessons"
import { useProgress } from "../../context/ProgressContext"

const LessonViewer = ({ topicId }) => {
  const topicEntry = lessons.find((entry) => entry.topicId === topicId)
  const topicLessons = topicEntry?.lessons || []
  const { markLessonDone, isLessonDone, getTopicProgress } = useProgress()
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const currentLesson = topicLessons[currentLessonIndex]
  const isLastLesson = currentLessonIndex === topicLessons.length - 1
  const isFirstLesson = currentLessonIndex === 0
  const isCompleted = currentLesson ? isLessonDone(topicId, currentLesson.id) : false
  const topicProgress = getTopicProgress(topicId)
  const totalXp = topicProgress.totalXp

  useEffect(() => {
    setCurrentLessonIndex(0)
    setQuizAnswers({})
    setShowResult(false)
  }, [topicId])

  if (!topicLessons.length) return <div className="lesson-viewer__empty">No lessons found for this topic.</div>
  if (!currentLesson) return null

  const handleMarkComplete = () => {
    if (!currentLesson || isCompleted) {
      setShowResult(true)
      return
    }

    if (currentLesson.type === "exercise" || currentLesson.type === "quiz") {
      const selectedAnswer = quizAnswers[currentLesson.id]
      if (selectedAnswer === undefined) return
    }

    markLessonDone(topicId, currentLesson.id, currentLesson.xp || 0)
    setShowResult(true)
  }

  const isExercise = currentLesson.type === "exercise" || currentLesson.type === "quiz"

  return (
    <div className="lesson-viewer">
      <div className="lesson-viewer__header">
        <div>
          <h2>{currentLesson.title}</h2>
          <p>{currentLessonIndex + 1} / {topicLessons.length}</p>
        </div>
        <div className="lesson-viewer__xp">XP: {totalXp}</div>
      </div>

      <div className="lesson-viewer__body">
        {currentLesson.type === "content" && (
          <div>
            <p>{currentLesson.content}</p>
            {currentLesson.keyTakeaways?.length > 0 && (
              <ul>
                {currentLesson.keyTakeaways.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            )}
          </div>
        )}

        {isExercise && (
          <div>
            <p>{currentLesson.question}</p>
            <div className="lesson-viewer__options">
              {currentLesson.options?.map((option, index) => {
                const selectedAnswer = quizAnswers[currentLesson.id]
                const isSelected = selectedAnswer === index
                const hasAnswered = selectedAnswer !== undefined
                return (
                  <button
                    key={index}
                    type="button"
                    className={isSelected ? "is-selected" : ""}
                    disabled={hasAnswered}
                    onClick={() => setQuizAnswers((prev) => ({ ...prev, [currentLesson.id]: index }))}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
            {showResult && quizAnswers[currentLesson.id] !== undefined && (
              <p>
                {quizAnswers[currentLesson.id] === currentLesson.answer ? "Correct" : "Try again"}
              </p>
            )}
            {currentLesson.explanation && showResult && quizAnswers[currentLesson.id] !== undefined && (
              <p>{currentLesson.explanation}</p>
            )}
          </div>
        )}
      </div>

      <div className="lesson-viewer__footer">
        <button type="button" disabled={isFirstLesson} onClick={() => { setCurrentLessonIndex((i) => i - 1); setShowResult(false) }}>
          Previous
        </button>

        <button
          type="button"
          disabled={isCompleted || (isExercise && quizAnswers[currentLesson.id] === undefined)}
          onClick={handleMarkComplete}
        >
          {isCompleted ? "Completed" : "Mark complete"}
        </button>

        <button type="button" disabled={isLastLesson} onClick={() => { setCurrentLessonIndex((i) => i + 1); setShowResult(false) }}>
          Next
        </button>
      </div>
    </div>
  )
}

export default LessonViewer
