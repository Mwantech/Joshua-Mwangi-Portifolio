document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.hire-me-section');
    const button = document.querySelector('.hire-me-button');

    // Fade in animation
    setTimeout(() => {
        section.classList.add('visible');
    }, 100);
});