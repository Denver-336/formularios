import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextoUsuario } from '../../contexto/ContextoUsuario'

function Menu () {
  // USAMOS LOS HOOKS DE REACT ROUTERS DOM PARA GENERAR MENU DE NAVEGACION FLOTANMMTE

  // aqui llamo al componente de contexto y le paso como valor el contexto creado en el mismo contexto
  const usuario = useContext(ContextoUsuario)

  return (
    usuario && (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark' data-bs-theme='dark'>
          <div className='container-fluid'>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon' />
            </button>
          </div>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav pe-2 align-items-center justify-content-center text-nowrap'>
              <li className='nav-item'><NavLink className='nav-link' to='/'>Inicio</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link' to='/formularios-registro'>Formularios Registro</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link' to='/formularios-login'>Formularios Login</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link' to='/usuario'>Perfil de {usuario.first_name}</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  )
}

export default Menu
