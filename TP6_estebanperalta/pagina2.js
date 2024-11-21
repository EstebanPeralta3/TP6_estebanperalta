// Seleccionar elementos
const nameInput = document.getElementById("user-name");
const submitNameButton = document.getElementById("submit-name");
const greetingMessage = document.getElementById("greeting");
const askNameSection = document.getElementById("name-section");
const welcomeMessage = document.getElementById("welcome-message");

// Manejar el evento de clic en el botón "Enviar"
submitNameButton.addEventListener("click", () => {
    const userName = nameInput.value.trim();

    if (userName) {
        // Mostrar un mensaje de saludo personalizado
        greetingMessage.textContent = `¡Hola, ${userName}! Bienvenido a la página principal.`;
        greetingMessage.style.display = "block"; // Hacer visible el mensaje de saludo

        // Ocultar la sección de entrada del nombre
        askNameSection.style.display = "none";

        // Mostrar un mensaje de bienvenida al usuario
        welcomeMessage.textContent = `Bienvenido, ${userName}, a la Página Principal.`;
        welcomeMessage.style.display = "block"; // Hacer visible el mensaje de bienvenida

        // Agregar un retraso antes de mostrar los botones de navegación
        setTimeout(() => {
            // Mostrar los botones de navegación
            const buttonContainer = document.querySelector(".button-container");
            buttonContainer.style.display = "block"; // Mostrar los botones
        }, 1500); // 1.5 segundos de retraso
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
});
