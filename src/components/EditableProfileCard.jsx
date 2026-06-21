import { useState } from "react"
import { useUser } from "../context/UserContext"
import Card from "../components/ui/Card"
import Button from "../components/ui/Button"
import "./EditableProfileCard.css"

const EditableProfileCard = () => {
  const { user, updateProfile, updatePreferences } = useUser()

  const [form, setForm] = useState({
    name: user?.name || "Learner",
    avatar: user?.avatar || "",
    goal: user?.goal || "Learn AI step by step",
    theme: user?.preferences?.theme || "system",
  })

  const [saved, setSaved] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setSaved(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    updateProfile({
      name: form.name,
      avatar: form.avatar,
      goal: form.goal,
    })

    updatePreferences({
      theme: form.theme,
    })

    setSaved(true)
  }

  const initials = (form.name || "Learner")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <Card className="profile-card">
      <div className="profile-card__header">
        <div className="profile-card__avatar-wrap">
          {form.avatar ? (
            <img src={form.avatar} alt={form.name} className="profile-card__avatar" />
          ) : (
            <div className="profile-card__avatar profile-card__avatar--fallback" aria-hidden="true">
              {initials}
            </div>
          )}
        </div>

        <div className="profile-card__intro">
          <p className="profile-card__eyebrow">Learner profile</p>
          <h3>{form.name || "Learner"}</h3>
          <p className="profile-card__goal-preview">{form.goal || "Set your learning goal."}</p>
        </div>
      </div>

      <form className="profile-card__form" onSubmit={handleSubmit}>
        <div className="profile-card__grid">
          <label className="profile-card__field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your display name"
            />
          </label>

          <label className="profile-card__field">
            <span>Avatar URL</span>
            <input
              type="url"
              name="avatar"
              value={form.avatar}
              onChange={handleChange}
              placeholder="https://..."
            />
          </label>

          <label className="profile-card__field profile-card__field--wide">
            <span>Learning goal</span>
            <textarea
              name="goal"
              rows="3"
              value={form.goal}
              onChange={handleChange}
              placeholder="What do you want to achieve with LEARN AI with AI?"
            />
          </label>

          <label className="profile-card__field">
            <span>Theme preference</span>
            <select name="theme" value={form.theme} onChange={handleChange}>
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </div>

        <div className="profile-card__actions">
          <Button type="submit">Save profile</Button>
          {saved && <p className="profile-card__saved">Profile saved.</p>}
        </div>
      </form>
    </Card>
  )
}

export default EditableProfileCard
