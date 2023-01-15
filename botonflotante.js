// Obtener el botón flotante
const floatingBtn = document.querySelector('.floating-btn');

// Obtener la posición del footer
const footer = document.querySelector('#footer');
const footerPosition = footer.offsetTop;

// Agregar un evento scroll al documento
document.addEventListener('scroll', () => {
    // Obtener la posición actual del scroll
    const currentPosition = window.scrollY;

    // Comprobar si el usuario se encuentra en la parte inferior de la página
    if (currentPosition >= footerPosition) {
        // Mostrar el botón flotante
        floatingBtn.style.display = 'block';
    } else {
        // Ocultar el botón flotante
        floatingBtn.style.display = 'none';
    }
});
