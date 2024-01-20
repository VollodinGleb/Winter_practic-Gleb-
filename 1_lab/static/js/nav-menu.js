document.addEventListener('DOMContentLoaded', function () {
    const ToggleButton = document.querySelector('.navigation-toggle');
    const ResponsiveMenu = document.querySelector('.responsive-menu');
    const MainNavMenu = document.querySelector('#main-nav-menu');
    const NavContainer = document.querySelector('.nav-container');
    var prevScrollpos = window.scrollY;

    ToggleButton.addEventListener('click', function () {
        ResponsiveMenu.classList.toggle('active');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > parseInt(getComputedStyle(document.documentElement).getPropertyValue('--max-width-for-toggle'))) {
            ResponsiveMenu.classList.remove('active');
            NavContainer.style.display = '';
        }
    });
    
    window.addEventListener('scroll', function(){
        var currentScrollPos = this.window.scrollY;

        MainNavMenu.classList.toggle('scrolled', window.scrollY > 600);

        if (prevScrollpos > currentScrollPos) {
            MainNavMenu.style.top = "0";
        }else {
            MainNavMenu.style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    })
});
