const nombre = document.getElementById('nombre'),
    celular = document.getElementById('celular'),
    email = document.getElementById('email'),
    mensaje = document.getElementById('mensaje'),
    formBtn = document.getElementById('formBtn');

const validateEmail = (email) => {
    const validation = /\S+@\S+\.\S+/;
    return validation.test(email)
}

document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'default_service';
    const templateID = 'template_kltflas';

    if (nombre.value, celular.value, email.value, mensaje.value) {

        if (validateEmail(email.value)) {

            formBtn.value = 'Enviando...';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    formBtn.value = 'Enviar';
                    Swal.fire({
                        title: `¡Gracias por comunicarte con nosotros!
                        En los próximos días estarás recibiendo una respuesta.`,
                        confirmButtonColor: 'rgb(83, 61, 24)'
                    })
                }, (err) => {
                    formBtn.value = 'Enviar';
                    Swal.fire(JSON.stringify(err));
                });

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
});