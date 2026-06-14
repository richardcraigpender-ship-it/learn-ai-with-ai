import './SectionHeader.css'

function SectionHeader({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`section-header ${className}`.trim()}>
      {eyebrow ? <p className="section-header-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-header-title">{title}</h2>
      {description ? <p className="section-header-description">{description}</p> : null}
    </div>
  )
}

export default SectionHeader