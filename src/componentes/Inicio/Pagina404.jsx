import { Link } from 'react-router-dom'

function Pagina404 () {
  return (
    <div className='incio'>
      <h1>Pagina no encontrada...</h1>
      {/** este componente se usa para navegar entre rutas es el equivalente a un ancla pero en react router dom. */}
      <Link to='/'>Volver al inicio</Link>
    </div>
  )
}
export default Pagina404
