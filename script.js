(function(w, d) {

    'use strict';

    var themeToggle = d.querySelector('header > .theme-toggle');

    function handleThemeToggle() {
        d.body.classList.toggle('theme--dark');
    };

    themeToggle.addEventListener('click', handleThemeToggle);
    themeToggle.addEventListener('keydown', function(e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault();
            handleThemeToggle();
        };
    });


})(window, document)
