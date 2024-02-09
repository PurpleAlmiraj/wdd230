const body = document.querySelector('body');
const darkmodebutton = document.querySelector('#dark');
let isDarkMode = false;

darkmodebutton.addEventListener('click', () => {

    isDarkMode = !isDarkMode;
    

    body.classList.toggle('darkness', isDarkMode);
    darkmodebutton.classList.toggle('darkness', isDarkMode);
});

