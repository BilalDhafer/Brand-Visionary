export default function Modal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <h2>{project.name}</h2>
        <p>{project.desc}</p>

        <div className="modal-gallery">
          {project.images.map((src, i) => (
            <img key={i} src={src} alt={`${project.name} ${i + 1}`} className="modal-img" />
          ))}
        </div>
      </div>
    </div>
  )
}