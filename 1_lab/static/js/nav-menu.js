document.addEventListener('DOMContentLoaded', function () {
    const navigationToggle = document.querySelector('.navigation-toggle');
    const header = document.querySelector('header');

    navigationToggle.addEventListener('click', function () {
        header.classList.toggle('menu-open');
    });
});