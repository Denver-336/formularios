import { Navigate, Outlet } from 'react-router-dom'
import Menu from './Menu'

function Nav () {
  // AQUI ASIGNAMOS EL FORMATO DE COMO SE EJECUTARA EL MENU Y USAMOS EL HOOK OUTLET

  // esta validacion permite corroborar si el usuario esta loguedo puede haceder a las paginas sino lo lleva al login
  // eslint-disable-next-line no-undef
  if (!localStorage.getItem('tokenPrueba')) return <Navigate to='/login' />

  return (
    <>
      <Menu />
      {/** este elemento "Oulet" se refiere a todo el contenido des las paginas luego del menu. */}
      <Outlet />
    </>
  )
}

export default Nav
