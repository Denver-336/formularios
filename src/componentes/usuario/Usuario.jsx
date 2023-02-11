import { useContext } from 'react'
import { ContextoUsuario } from '../../contexto/ContextoUsuario'
import { Link, useNavigate } from 'react-router-dom'

function Usuario () {
  const nav = useNavigate()
  const usuario = useContext(ContextoUsuario)

  if (!usuario) { return <div className='cargando'><h1>Cargando...</h1></div> }

  // creo funcion para cerrar sesion
  const cerrarSesion = () => {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('tokenPrueba')
    nav('/login')
  }

  return (
    <div className='contact-area'>
      <div className='contact'>
        <main>
          {
        usuario && (
          <section>
            <div className='content'>
              <img src={usuario.avatar} alt='img' />

              <aside>
                <h1>{usuario.first_name} {usuario.last_name}</h1>
                <p>Email: {usuario.email}</p>
              </aside>

              <button>
                <span><Link id='enlase' onClick={cerrarSesion}>Cerrar sesión</Link></span>
              </button>
            </div>
          </section>
        )
      }
        </main>
      </div>
    </div>
  )
}

export default Usuario
