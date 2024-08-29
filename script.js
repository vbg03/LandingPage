document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-link');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const closeButtons = document.querySelectorAll('.close-button');
    const backToLoginFromRegister = document.getElementById('back-to-login-from-register');
    const backToLoginFromForgot = document.getElementById('back-to-login-from-forgot');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const closeMenuButton = document.createElement('div');
    closeMenuButton.className = 'close-menu';
    closeMenuButton.innerHTML = '&times;';
    mobileNav.appendChild(closeMenuButton);

    // Funcionalidad del menú hamburguesa
    hamburgerMenu.addEventListener('click', function (event) {
        event.preventDefault();
        mobileNav.classList.add('open');
        document.body.classList.add('mobile-nav-open');
    });

    // Funcionalidad para cerrar el menú
    closeMenuButton.addEventListener('click', function (event) {
        event.preventDefault();
        mobileNav.classList.remove('open');
        document.body.classList.remove('mobile-nav-open');
    });

    // Cerrar el menú si se hace clic fuera del menú
    window.addEventListener('click', function (event) {
        if (!mobileNav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            mobileNav.classList.remove('open');
            document.body.classList.remove('mobile-nav-open');
        }
    });

    // Cerrar el menú cuando se hace clic en un enlace del menú
    const menuLinks = mobileNav.querySelectorAll('ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileNav.classList.remove('open');
            document.body.classList.remove('mobile-nav-open');
        });
    });

    // Crear el botón de cerrar dentro del menú móvil
    closeMenuButton.className = 'close-menu';
    closeMenuButton.innerHTML = '&times;';
    mobileNav.appendChild(closeMenuButton);

    // Funcionalidad del menú hamburguesa
    hamburgerMenu.addEventListener('click', function () {
        mobileNav.classList.add('open'); // Despliega el menú
    });

    // Funcionalidad para cerrar el menú
    closeMenuButton.addEventListener('click', function () {
        mobileNav.classList.remove('open'); // Oculta el menú
    });

    // Cerrar el menú si se hace clic fuera del menú
    window.addEventListener('click', function (event) {
        if (!mobileNav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            mobileNav.classList.remove('open');
        }
    });

    // Abrir el modal de Iniciar Sesión
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();
        loginModal.style.display = 'block';
    });

    // Abrir el modal de Registro desde el de Iniciar Sesión
    registerButton.addEventListener('click', function (event) {
        event.preventDefault();
        closeModal(loginModal);
        openModal(registerModal);
    });

    // Abrir el modal de Recuperación de Contraseña desde el de Iniciar Sesión
    forgotPasswordLink.addEventListener('click', function (event) {
        event.preventDefault();
        closeModal(loginModal);
        openModal(forgotPasswordModal);
    });

    // Cerrar los modales
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            closeModal(loginModal);
            closeModal(registerModal);
            closeModal(forgotPasswordModal);
        });
    });

    // Volver al modal de Iniciar Sesión desde Registro o Recuperación
    backToLoginFromRegister.addEventListener('click', function (event) {
        event.preventDefault();
        closeModal(registerModal);
        openModal(loginModal);
    });

    backToLoginFromForgot.addEventListener('click', function (event) {
        event.preventDefault();
        closeModal(forgotPasswordModal);
        openModal(loginModal);
    });

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', function (event) {
        if (event.target === loginModal || event.target === registerModal || event.target === forgotPasswordModal) {
            closeModal(event.target);
        }
    });

    // Smooth scrolling para los enlaces de navegación
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hacer que al hacer clic en CinemaNow te regrese al inicio
    const logoLink = document.getElementById('cinemanow-link');
    logoLink.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#inicio').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Función para abrir modales
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // Función para cerrar modales
    function closeModal(modal) {
        modal.style.display = 'none';
    }
});
