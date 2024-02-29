document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            // Mostrar el mensaje de respuesta debajo del formulario
            document.getElementById('form-messages').innerHTML = data;
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
});
