import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProveedorContextoUsuario } from './contexto/ContextoUsuario'
import Inicio from './componentes/Inicio/Inicio'
import Pagina404 from './componentes/Inicio/Pagina404'
import Login from './componentes/usuario/Login'
import Nav from './componentes/menu/Nav'
import FormRegistro from './componentes/formularios/FormRegistro'
import FormLogin from './componentes/formularios/FormLogin'
import Usuario from './componentes/usuario/Usuario'
import './style/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProveedorContextoUsuario>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Inicio />} />
          <Route path='/formularios-registro' element={<FormRegistro />} />
          <Route path='/formularios-login' element={<FormLogin />} />
          <Route path='/usuario' element={<Usuario />} />
        </Route>

        <Route path='/usuarios' element={<Nav />}>
          <Route index element={<Usuario />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  </ProveedorContextoUsuario>
)
