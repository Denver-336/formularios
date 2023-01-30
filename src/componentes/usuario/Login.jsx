import axios from 'axios'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Login () {
  // PAGINA DE LOGIN QUE REALIZA UN PETICION A UNA API DE PRUEBA Y DEVUELVE UN TOKEN DE AUTENTIFICACIO
  // EL TOKEN ES ALMACENADO EN EL LOCALHOST PARA VALIDAR NUESTROS DATOS AUTOMATICAMENTE UNA VEZ LOGUEADOS

  // variable de entrono para la api de login
  const LOGIN = import.meta.env.VITE_API_LOGIN

  // llamanos al hook navigate, este hook nos permite redireccionar la pagina a donde queramos
  const navigate = useNavigate()

  // estado para guardar el valor de cargando...
  const [cargando, setCargando] = useState(false)

  // creamos un estado para guardar los cambios de las inputs
  const [usuario, setUsuario] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  })

  // estado para almacenar el error
  const [error, setError] = useState()

  /*
  valores validos para la api de prueba:
  {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }
*/

  // funciones para capturar cambios y guardarlos en usuarios
  const capturarNombre = (e) => {
    setUsuario({
      ...usuario,
      email: e.target.value
    })
  }
  const capturarPassword = (e) => {
    setUsuario({
      ...usuario,
      password: e.target.value
    })
  }

  // funcion para enviar formulario a la api de prueba
  const enviarFormulario = (e) => {
    // aqui reiniciamos el mensaje de error
    setError(null)
    setCargando(true)
    e.preventDefault()
    axios.post(`${LOGIN}`, usuario)
      .then(data => {
        // esta api me devuelve un token y lo almaceno en el localStorage
        // eslint-disable-next-line no-undef
        localStorage.setItem('tokenPrueba', data.data.token)
        setCargando(false)
        // aqui le decimos al hook navigate que nos lleve al inicio
        navigate('/')
      })
      .catch((e) => {
        setCargando(false)
        setError(e.response.data.error)
      })
  }

  // aqui usaremos el componente navigate que viene incluido en react, este hook nos permite especificar una ruta a la cual nos va a llevar cuando sea llamado
  // eslint-disable-next-line no-undef
  if (localStorage.getItem('tokenPrueba')) return <Navigate to='/' />

  return (
    <div>

      {/* <form className='container-fluid w-50' onSubmit={enviarFormulario}>
        <h1>Login</h1>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>Email</label>
          <div className='col-sm-10'>
            <input type='email' className='form-control' id='inputEmail3' onChange={capturarNombre} name='u' />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>Password</label>
          <div className='col-sm-10'>
            <input type='password' className='form-control' id='inputPassword3' onChange={capturarPassword} name='p' />
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>{cargando ? 'Loading...' : 'Let me in'}</button>
        <div className='error'><span>{error}</span></div>
      </form> */}

      <section className='vh-100 gradient-custom'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5 d-flex justify-content-center align-items-center'>
              <div className='card bg-dark text-white'>
                <div className='card-body p-5 text-center'>

                  <form className='mt-md-4' onSubmit={enviarFormulario}>

                    <h2 className='fw-bold mb-2 text-uppercase'>Login</h2>
                    <p className='text-white-50 mb-5'>Please enter your login and password!</p>

                    <div className='form-outline form-white mb-4'>
                      <label className='form-label' htmlFor='typeEmailX'>Email</label>
                      <input type='email' id='typeEmailX' className='form-control form-control-lg' onChange={capturarNombre} name='u' />
                    </div>

                    <div className='form-outline form-white mb-4'>
                      <label className='form-label' htmlFor='typePasswordX'>Password</label>
                      <input type='password' id='typePasswordX' className='form-control form-control-lg' onChange={capturarPassword} name='p' />
                    </div>

                    <button className='btn btn-outline-light btn-lg px-5' type='submit'>{cargando ? 'Loading...' : 'Login'}</button>

                    <div className='error'><span>{error}</span></div>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Login
