// Obtener elementos
const downloadLink = document.getElementById('download-link'); // Cambiado a 'download-link'
const loginButton = document.getElementById('login-button');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const forgotPasswordModal = document.getElementById('forgot-password-modal');
const downloadModal = document.getElementById('download-modal');
const closeButtons = document.querySelectorAll('.close-button');
const registerLink = document.getElementById('register-link');
const forgotPasswordLink = document.getElementById('forgot-password-link');
const backToLoginFromRegister = document.getElementById('back-to-login-from-register');
const backToLoginFromForgot = document.getElementById('back-to-login-from-forgot');

// Función para abrir el modal de inicio de sesión y cerrar el actual
function backToLogin(currentModal) {
    currentModal.style.display = 'none';
    loginModal.style.display = 'block';
}

// Añadir eventos a los botones de volver
backToLoginFromRegister.addEventListener('click', function() {
    backToLogin(registerModal);
});

backToLoginFromForgot.addEventListener('click', function() {
    backToLogin(forgotPasswordModal);
});

document.getElementById('lifecraft-link').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    document.querySelector('#inicio').scrollIntoView({ 
        behavior: 'smooth' // Desplazamiento suave
    });
});

// Mostrar el modal de inicio de sesión cuando se hace clic en "Comienza ahora"
loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    loginModal.style.display = 'block';
});

// Mostrar el modal de registro desde el inicio de sesión
registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
});

// Mostrar el modal de recuperación de contraseña desde el inicio de sesión
forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginModal.style.display = 'none';
    forgotPasswordModal.style.display = 'block';
});

// Mostrar el modal de descarga cuando se hace clic en "Descargar"
downloadLink.addEventListener('click', function(event) { // Cambiado a 'downloadLink'
    event.preventDefault();
    downloadModal.style.display = 'block';
});

// Cerrar modales
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
        forgotPasswordModal.style.display = 'none';
        downloadModal.style.display = 'none';
    });
});

// Cerrar modal si se hace clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target === loginModal || event.target === registerModal || event.target === forgotPasswordModal || event.target === downloadModal) {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
        forgotPasswordModal.style.display = 'none';
        downloadModal.style.display = 'none';
    }
});
