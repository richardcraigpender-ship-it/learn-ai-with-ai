import Badge from './Badge'
import Card from './Card'
import './PageHero.css'

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
      {eyebrow ? <p className="page-hero-eyebrow">{eyebrow}</p> : null}

      {title ? <h1 className="page-hero-title">{title}</h1> : null}

      {description ? (
        <p className="page-hero-description">{description}</p>
      ) : null}

      {meta.length > 0 ? (
        <div className="page-hero-meta">
          {meta.map((item, index) => (
            <Badge key={index} tone="neutral">
              {item}
            </Badge>
          ))}
        </div>
      ) : null}

      {children ? <div className="page-hero__actions">{children}</div> : null}
    </Card>
  )
}

export default PageHero