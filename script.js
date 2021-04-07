(function(w, d) {

    'use strict';

    /* Utilities */

    var saveLocal = function(key, value) {
        if (w.localStorage) {
            w.localStorage.setItem(key, JSON.stringify(value));
        };
    };

    var loadLocal = function(key) {
        if (w.localStorage && w.localStorage.getItem(key)) {
            return JSON.parse(w.localStorage.getItem(key));
        };
    };

    var saveSetting = function(key, value) {
        settingsObject[key] = value;
        saveLocal('Settings', settingsObject);
    };

    var loadSetting = function(key) {
        return loadLocal("Settings")[key];
    };

    /* Elements */

    var themeToggle = d.querySelector('header .theme-toggle');

    /* Constants */

    var darkThemeClass = 'theme--dark';
    var settingsObject = { theme: null };

    /* Handlers */

    function handleThemeToggle(e) {

        e.preventDefault();
        const checkbox = themeToggle.firstElementChild;
        checkbox.checked = checkbox.checked === true ? false : true;

        d.body.classList.toggle(darkThemeClass);
        var activeTheme = d.body.classList.contains(darkThemeClass) ? "dark" : "light";
        saveSetting('theme', activeTheme);
    };

    /* Listeners */

    themeToggle.addEventListener('click', handleThemeToggle);
    themeToggle.addEventListener('keydown', function(e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
            handleThemeToggle(e);
        };
    });

    /* Initializers */

    // if dark theme currently set, use dark
    if (loadSetting('theme') && loadSetting('theme') === "dark") {
        d.body.classList.add(darkThemeClass);
    };

})(window, document)
