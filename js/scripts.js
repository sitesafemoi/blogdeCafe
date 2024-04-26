// *Validacion del formulario* 

const LabelNombre = document.querySelector(`#name`)
const LabelEmail = document.querySelector(`#email`)
const LabelMensaje = document.querySelector(`#mensaje`)
const formulario = document.querySelector(`#cont-form`)

formulario.addEventListener(`submit`, (e) => {
    e.preventDefault();
    formularioEnviado();
})

async function formularioEnviado(){
    await Swal.fire(
        'Gracias!',
        'Formulario enviado correctamente',
        'success'
        )
    window.location.href = `index.html`
}

// *Ejercicio de enviar los datos a un objeto*

// const datos = {
//     name: ``,
//     email: ``,
//     mensaje: ``
// }

// LabelNombre.addEventListener(`input`, enviarTexto)
// LabelEmail.addEventListener(`input`, enviarTexto)
// LabelMensaje.addEventListener(`input`, enviarTexto)



// function enviarTexto(e){
//     datos[e.target.id] = e.target.value
//      console.log(datos)
// }

