function Card({ children, className = '', as = 'div' }) {
  const Component = as

  return <Component className={`ui-card ${className}`.trim()}>{children}</Component>
}

export default Card