const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const switchRef = document.querySelector('.js-switch-input');

switchRef.addEventListener('change', onChangeSwitch);

const currentTheme = localStorage.getItem('Theme');

if (!currentTheme) {
    localStorage.setItem('Theme', Theme.LIGHT);
    document.body.classList.add('light-theme');
}

if (currentTheme && currentTheme === Theme.DARK) {
    document.body.classList.add('dark-theme');
    switchRef.checked = true;
} else {
    document.body.classList.add('light-theme');
    switchRef.checked = false;
}


function onChangeSwitch(event) {

    if (event.target.checked) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('Theme', Theme.DARK);
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        localStorage.setItem('Theme', Theme.LIGHT);
    }
}