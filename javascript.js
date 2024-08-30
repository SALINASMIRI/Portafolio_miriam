window.addEventListener('scroll', function() {
    const images = document.querySelectorAll('.iconos img');
    const windowHeight = window.innerHeight;
    
    images.forEach(img => {
        const imgPosition = img.getBoundingClientRect().top;

        if (imgPosition < windowHeight - 100) { // Ajusta el umbral según sea necesario
            img.classList.add('scroll-in');
        }
    });
});