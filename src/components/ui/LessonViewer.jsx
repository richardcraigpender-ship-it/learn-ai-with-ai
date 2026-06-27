import React, { useEffect, useMemo, useState } from "react";
import { lessons } from "../../data/lessons";
import { useProgress } from "../../context/ProgressContext";
import "./LessonViewer.css";

const LessonViewer = ({ topicId }) => {
  const topicEntry = lessons.find((entry) => entry.topicId === topicId);
  const topicLessons = topicEntry?.lessons || [];

  const { markLessonDone, isLessonDone, getTopicProgress } = useProgress();

  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!topicLessons.length) {
      setCurrentLessonIndex(0);
      setQuizAnswers({});
      setShowResult(false);
      return;
    }

    const firstIncompleteIndex = topicLessons.findIndex(
      (lesson) => !isLessonDone(topicId, lesson.id)
    );

    setCurrentLessonIndex(
      firstIncompleteIndex === -1
        ? topicLessons.length - 1
        : firstIncompleteIndex
    );
    setQuizAnswers({});
    setShowResult(false);
  }, [topicId, topicLessons, isLessonDone]);

  useEffect(() => {
    setShowResult(false);
  }, [currentLessonIndex]);

  const currentLesson = topicLessons[currentLessonIndex];

  const completedCount = useMemo(
    () =>
      topicLessons.filter((lesson) => isLessonDone(topicId, lesson.id)).length,
    [topicId, topicLessons, isLessonDone]
  );

  const topicProgress = getTopicProgress(topicId) || {};
  const totalXp = topicProgress.totalXp || 0;

  const progressPercent = topicLessons.length
    ? Math.round((completedCount / topicLessons.length) * 100)
    : 0;

  if (!topicLessons.length) {
    return (
      <div className="lesson-viewer">
        <div className="lesson-viewer__empty">
          No lessons found for this topic.
        </div>
      </div>
    );
  }

  if (!currentLesson) return null;

  const isFirstLesson = currentLessonIndex === 0;
  const isLastLesson = currentLessonIndex === topicLessons.length - 1;
  const isExercise =
    currentLesson.type === "exercise" || currentLesson.type === "quiz";
  const isCompleted = isLessonDone(topicId, currentLesson.id);

  const selectedAnswer = quizAnswers[currentLesson.id];
  const hasAnswered = selectedAnswer !== undefined;
  const isCorrectAnswer = selectedAnswer === currentLesson.answer;

  const handleOptionSelect = (index) => {
    if (isCompleted) return;

    setQuizAnswers((prev) => ({
      ...prev,
      [currentLesson.id]: index,
    }));

    setShowResult(true);
  };

  const handleMarkComplete = () => {
    if (!currentLesson || isCompleted) return;

    if (isExercise && !isCorrectAnswer) {
      setShowResult(true);
      return;
    }

    markLessonDone(topicId, currentLesson.id, currentLesson.xp || 0);
    setShowResult(true);
  };

  const goToPrevious = () => {
    if (isFirstLesson) return;
    setCurrentLessonIndex((i) => i - 1);
  };

  const goToNext = () => {
    if (isLastLesson) return;
    setCurrentLessonIndex((i) => i + 1);
  };

  return (
    <div className="lesson-viewer">
      <div className="lesson-viewer__header">
        <div className="lesson-viewer__header-left">
          <p className="lesson-viewer__label">
            Lesson {currentLessonIndex + 1} of {topicLessons.length}
          </p>
          <h2 className="lesson-viewer__title">{currentLesson.title}</h2>
        </div>

        <div className="lesson-viewer__xp">XP: {totalXp}</div>

        <div className="lesson-viewer__progress-wrap">
          <div className="lesson-viewer__progress-track">
            <div
              className="lesson-viewer__progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="lesson-viewer__progress-text">
            {completedCount}/{topicLessons.length} lessons complete ({progressPercent}
            %)
          </span>
        </div>
      </div>

      <div className="lesson-viewer__body">
        {currentLesson.type === "content" && (
          <div>
            <p>{currentLesson.content}</p>

            {currentLesson.keyTakeaways?.length > 0 && (
              <ul>
                {currentLesson.keyTakeaways.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {isExercise && (
          <div>
            <p>{currentLesson.question}</p>

            <div className="lesson-viewer__options">
              {currentLesson.options?.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = showResult && index === currentLesson.answer;
                const isWrong =
                  showResult &&
                  isSelected &&
                  selectedAnswer !== currentLesson.answer;

                const optionClass = [
                  "lesson-viewer__option",
                  isSelected ? "is-selected" : "",
                  isCorrect ? "is-correct" : "",
                  isWrong ? "is-wrong" : "",
                  isCompleted ? "is-completed" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button
                    key={index}
                    type="button"
                    className={optionClass}
                    onClick={() => handleOptionSelect(index)}
                    disabled={isCompleted}
                  >
                    <span className="lesson-viewer__option-text">{option}</span>
                    {isCorrect && (
                      <span className="lesson-viewer__option-badge">
                        Correct
                      </span>
                    )}
                    {isWrong && (
                      <span className="lesson-viewer__option-badge">
                        Try again
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {showResult && hasAnswered && (
              <p
                className={
                  isCorrectAnswer
                    ? "lesson-viewer__feedback lesson-viewer__feedback--correct"
                    : "lesson-viewer__feedback lesson-viewer__feedback--wrong"
                }
              >
                {isCorrectAnswer
                  ? "Correct — you can now mark this lesson complete."
                  : "Not quite — try again."}
              </p>
            )}

            {currentLesson.explanation &&
              showResult &&
              hasAnswered &&
              isCorrectAnswer && (
                <p className="lesson-viewer__explanation">
                  {currentLesson.explanation}
                </p>
              )}
          </div>
        )}
      </div>

      <div className="lesson-viewer__footer">
        <button type="button" disabled={isFirstLesson} onClick={goToPrevious}>
          Previous
        </button>

        <button
          type="button"
          disabled={isCompleted || (isExercise && !isCorrectAnswer)}
          onClick={handleMarkComplete}
        >
          {isCompleted ? "Completed" : "Mark complete"}
        </button>

        <button type="button" disabled={isLastLesson} onClick={goToNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LessonViewer;