
function FormLogin () {
  const submit = () => {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }

  return (
    <div className='fondo container d-flex justify-content-center align-items-center'>
      <form className='col-sm-6 col-lg-8 needs-validation w-50 m-5 text-light' noValidate>
        <div className='mb-3'>
          <label htmlFor='validationCustomUsername' className='form-label'>Correo</label>
          <div className='input-group has-validation'>
            <input type='email' className='form-control' id='validationCustomUsername' aria-describedby='inputGroupPrepend' required />
            <div className='valid-feedback'>
              Correo correcto.
            </div>
            <div className='invalid-feedback'>
              Por favor, elija un nombre de usuario.
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='validationCustom05' className='form-label'>Contraseña</label>
          <input type='password' className='form-control' id='alidationCustom05' required />
          <div className='valid-feedback'>
            Contraseña correcta.
          </div>
          <div className='invalid-feedback'>
            Por favor, ingrese una contraseña válida.
          </div>
        </div>
        <div className='mb-3 form-check'>
          <input type='checkbox' className='form-check-input' id='exampleCheck1' />
          <label className='form-check-label' htmlFor='exampleCheck1'>Recuérdame</label>
        </div>
        <div className='d-grid'>
          <button type='submit' onClick={submit} className='btn btn-primary'>Entar</button>
        </div>
      </form>
    </div>
  )
}

export default FormLogin
