const SectionTitle = ({ title, children }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {children}
    </div>
    
  )
}

export default SectionTitle;