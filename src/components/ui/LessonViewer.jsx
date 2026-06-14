import React, { useState, useEffect } from "react";
import { lessons } from "../../data/lessons";

const LessonViewer = ({ topicId }) => {
  const topicLessons = lessons.filter((lesson) => lesson.topicId === topicId)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [completedLessons, setCompletedLessons] = useState([])
  const [quizAnswers, setQuizAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [totalXp, setTotalXp] = useState(0)

  const currentLesson = topicLessons[currentLessonIndex]
  const isLastLesson = currentLessonIndex === topicLessons.length - 1
  const isFirstLesson = currentLessonIndex === 0

  useEffect(() => {
    setCurrentLessonIndex(0)
    setCompletedLessons([])
    setQuizAnswers({})
    setShowResult(false)
    setTotalXp(0)
  }, [topicId])

  if (!topicLessons.length) {
    return <div className="lesson-viewer__empty">No lessons found for this topic.</div>
  }

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
        {currentLesson.type === "content" && <p>{currentLesson.content}</p>}

        {currentLesson.type === "exercise" && (
          <div>
            <p>{currentLesson.instruction}</p>
            {currentLesson.exampleAnswer && (
              <div className="lesson-viewer__example">
                <strong>Example answer:</strong>
                <p>{currentLesson.exampleAnswer}</p>
              </div>
            )}
          </div>
        )}

        {currentLesson.type === "quiz" && (
          <div>
            <p>{currentLesson.question}</p>
            <div className="lesson-viewer__options">
              {currentLesson.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setQuizAnswers({ ...quizAnswers, [currentLesson.id]: index })}
                >
                  {option}
                </button>
              ))}
            </div>
            {showResult && (
              <p>
                {quizAnswers[currentLesson.id] === currentLesson.answer ? "Correct" : "Try again"}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="lesson-viewer__footer">
        <button disabled={isFirstLesson} onClick={() => setCurrentLessonIndex((i) => i - 1)}>
          Previous
        </button>
        <button
          onClick={() => {
            setCompletedLessons((prev) =>
              prev.includes(currentLesson.id) ? prev : [...prev, currentLesson.id]
            )
            setTotalXp((xp) => xp + (currentLesson.xp || 0))
            setShowResult(true)
          }}
        >
          Mark complete
        </button>
        <button
          disabled={isLastLesson}
          onClick={() => {
            setCurrentLessonIndex((i) => i + 1)
            setShowResult(false)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default LessonViewer