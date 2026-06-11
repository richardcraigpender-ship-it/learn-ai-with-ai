import Badge from './Badge'
import Card from './Card'

function PageHero({
  eyebrow,
  title,
  description,
  meta = [],
  children,
  className = '',
}) {
  return (
    <Card className={`page-hero ${className}`.trim()}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h1 className="page-hero-title">{title}</h1>
      {description ? <p className="page-hero-description">{description}</p> : null}

      {meta.length > 0 ? (
        <div className="page-hero-meta">
          {meta.map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ) : null}

      {children ? <div className="page-hero-actions">{children}</div> : null}
    </Card>
  )
}

export default PageHero