import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

// creo un contexto
const ContextoUsuario = createContext()

// creo un componente para proveer la informacion del contexto(todos los componentes de contexto tienen por defecto la propiedad children)
function ProveedorContextoUsuario ({ children }) {
  // variable de entrono para la api de login
  const LOGIN = import.meta.env.VITE_API_USER

  // creo un estado para cargar datos de ususario
  const [usuario, setUsuario] = useState()

  // hago una peticion a el usuario cuando carga la pagina la primera vez
  useEffect(() => {
    axios.get(`${LOGIN}`)
      .then(data => {
        setUsuario(data.data.data)
      })
      .catch((e) => { <h1>{e}</h1> })
  }, [])

  /** cuando creamos un contexto automaticamoente se nos crea el componente Provaider */
  return (
    <ContextoUsuario.Provider value={usuario}>
      {// la propiedad children especifica que vamos a haceder a todos los hijos del componente
        children
      }
    </ContextoUsuario.Provider>
  )
}

// aqui importamos la contante y la funcion
export { ContextoUsuario, ProveedorContextoUsuario }
