import { useRef } from 'react'
import { useForm } from 'react-hook-form'

function FormRegistro () {
  // REALIZO UN FORMULARIO DE REGISTRO Y LO ENVIO A UN BASE DE DATOS

  const { register, watch } = useForm()

  const form = useRef()

  const submit = (e) => {
    e.preventDefault()

    let data = {
      nombre: form.current.nombre.value,
      correo: form.current.correo.value,
      edad: form.current.edad.value,
      promedio: form.current.promedio.value,
      descripcion: form.current.descripcion.value,
      pais: form.current.pais.value
    }

    if (form.current.inscripto.checked) { data = { ...data, inscripto: 'si' } } else { data = { inscripto: 'no' } }

    console.log(data)
  }

  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <form name='inscripcion' onSubmit={submit} ref={form} className='w-50 m-5 text-light'>

        <div className='mb-3'>
          <label className='form-label'>Nombre</label>
          <input type='text' name='nombre' defaultValue='' className='form-control' />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Correo</label>
          <input type='email' name='correo' defaultValue='' className='form-control' />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Edad</label>
          <input type='number' name='edad' defaultValue='' className='form-control' />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Promedio</label>
          <p>Su promedio es: {watch('promedio')}</p>
          <input
            type='range' name='promedio' min={1} max={10} defaultValue={7} {...register('promedio')}
            className='form-range'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Descripcion</label>
          <textarea name='descripcion' id='descripcion' cols='30' rows='10' className='form-control' />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Pais</label>
          <select name='pais' id='pais' className='form-select'>
            <option value=''>-Seleccionar-</option>
            <option value='Peru'>Perú</option>
            <option value='Bolivia'>Bolivia</option>
            <option value='Colombia'>Colombia</option>
          </select>
        </div>

        <div className='mb-3 form-check'>
          <label className='form-check-label'>Inscripto</label>
          <input type='checkbox' name='inscripto' defaultChecked className='form-check-input' />
        </div>

        <div className='d-grid'>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default FormRegistro
