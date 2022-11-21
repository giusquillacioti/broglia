const name = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const message = document.getElementById('message')
const formBtn = document.getElementById('formBtn')

const validateEmail = (email) => {
    const validation = /\S+@\S+\.\S+/;
    return validation.test(email)
}

formBtn.addEventListener('click', () => {
    if (name.value, phone.value, email.value, message.value) {
        if (validateEmail(email.value)) {
            console.log(`${name.value}, ${phone.value}, ${email.value}, ${message.value}`)
        } else {
            Swal.fire({
                title: `La dirección de correo electrónico no es válida.`,
                confirmButtonColor: 'rgb(83, 61, 24)'
            })
        } 
    } else {
        Swal.fire({
            title: `Todos los campos deben ser completados para enviar el formulario.`,
            confirmButtonColor: 'rgb(83, 61, 24)'
        })
    }
})