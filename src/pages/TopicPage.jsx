import { useParams } from "react-router-dom";
import { topics } from "../data/topics";
import { useProgress } from "../context/ProgressContext";
import LessonViewer from "../components/ui/LessonViewer";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import "./TopicPage.css";

export default function TopicPage() {
  const { topicId } = useParams();
  const { getTopicProgress } = useProgress();

  const cleanTopicId = String(topicId || "").trim();

  const topic = topics.find(
    (t) =>
      String(t.slug || "").trim() === cleanTopicId ||
      String(t.id || "").trim() === cleanTopicId
  );

  if (!topic) {
    return (
      <div className="topic-page">
        <section className="topic-page__section topic-page__not-found">
          <Card>
            <h2>Topic not found</h2>
            <p>Could not find topic: {cleanTopicId}</p>
            <Button to="/browse" variant="secondary">
              Go back to browse
            </Button>
          </Card>
        </section>
      </div>
    );
  }

  const progress = getTopicProgress(topic.id);
  const completedLessons = progress?.completedLessons || 0;
  const totalLessons = progress?.totalLessons || 0;
  const percentage =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="topic-page">
      <section className="topic-page__hero">
        <div className="topic-page__hero-content">
          <p className="topic-page__eyebrow">Learning path</p>
          <h1 className="topic-page__title">{topic.title}</h1>

          <div className="topic-page__progress">
            <div className="topic-page__progress-bar">
              <div
                className="topic-page__progress-fill"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="topic-page__progress-text">
              {completedLessons}/{totalLessons} lessons ({percentage}%)
            </span>
          </div>

          <div className="topic-page__meta">
            {topic.difficulty && (
              <span className="topic-page__difficulty">
                Difficulty: {topic.difficulty}
              </span>
            )}

            {topic.estimatedTime && (
              <span className="topic-page__time">
                ~{topic.estimatedTime} minutes
              </span>
            )}

            {topic.isFree ? (
              <span className="topic-page__free">Free</span>
            ) : topic.price ? (
              <span className="topic-page__price">£{topic.price}</span>
            ) : null}
          </div>

          <p className="topic-page__description">
            {topic.description || topic.summary || topic.notes}
          </p>
        </div>
      </section>

      <section className="topic-page__lessons">
        <SectionHeader title="Lessons" />
        <div className="topic-page__lessons-container">
          <LessonViewer topicId={topic.id} />
        </div>
      </section>

      <section className="topic-page__navigation">
        <div className="topic-page__next-steps">
          <p className="topic-page__eyebrow">Next steps</p>
          <h3 className="topic-page__next-title">
            Continue your learning journey
          </h3>
          <p className="topic-page__next-copy">
            Choose where to go next:
          </p>

          <div className="topic-page__nav-buttons">
            <Button to="/path/ai-basics" variant="secondary">
              View AI Basics Path
            </Button>
            <Button to="/dashboard" variant="secondary">
              Open My Learning
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}