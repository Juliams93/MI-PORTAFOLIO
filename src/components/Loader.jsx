import './Loader.css'

export default function Loader() {
  return (
    <div className="loader-bg">
      <div className="loader-spinner">
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
      </div>
      <span className="loader-text">Cargando...</span>
    </div>
  )
}
