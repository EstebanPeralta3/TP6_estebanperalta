// Inicializar EmailJS
emailjs.init("BEaU1boUFZANUY4wV");

// Obtener elementos del formulario
const form = document.getElementById("messageForm");
const messageElement = document.getElementById("message");

// Manejar el evento de envío del formulario
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los datos del formulario
    const formData = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        celular: document.getElementById("celular").value,
        email: document.getElementById("email").value,
        mensaje: document.getElementById("mensaje").value,
    };

    // Enviar datos a través de EmailJS
    emailjs.send("service_v9cybbi", "template_ausae98", formData)
        .then(() => {
            // Mostrar mensaje de éxito
            messageElement.textContent = `Mensaje enviado correctamente. Gracias, ${formData.nombre}!`;
            messageElement.style.color = "green";
            messageElement.style.display = "block";

            // Limpiar formulario
            form.reset();
        })
        .catch((error) => {
            // Mostrar mensaje de error
            console.error("Error al enviar el formulario:", error);
            messageElement.textContent = "Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.";
            messageElement.style.color = "red";
            messageElement.style.display = "block";
        });
});

// Manejar el botón de limpieza
document.getElementById("resetButton").addEventListener("click", () => {
    messageElement.style.display = "none"; // Ocultar mensaje si existe
});
