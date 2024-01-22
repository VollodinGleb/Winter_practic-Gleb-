document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navigation-toggle');
    const responsiveMenu = document.querySelector('.responsive-menu');
    const crossButton = document.querySelector('.cross-click');
    const mainNavMenu = document.querySelector('#main-nav-menu');
    const navContainer = document.querySelector('.nav-container');
    
    let prevScrollPos = window.scrollY;

    toggleButton.addEventListener('click', function () {
        responsiveMenu.classList.toggle('active');
        mainNavMenu.style.display = "none";

    });

    crossButton.addEventListener('click', function() {
        responsiveMenu.classList.remove('active');
        mainNavMenu.style.display = "inline";
    })

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1100) {
            responsiveMenu.classList.remove('active');
            navContainer.style.display = 'inline';
            mainNavMenu.style.display = "inline";
        } else {
            navContainer.style.display = 'none';
        }
    });

    window.addEventListener('scroll', function () {
        const currentScrollPos = window.scrollY;

        mainNavMenu.classList.toggle('scrolled', window.scrollY > 700);

        if (prevScrollPos > currentScrollPos) {
            mainNavMenu.style.top = "0";
        } else {
            mainNavMenu.style.top = "-100px";
        }

        prevScrollPos = currentScrollPos;
    });
});
