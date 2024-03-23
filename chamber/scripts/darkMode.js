const body = document.querySelector('body');
const darkmodebutton = document.querySelector('#dark');
let isDarkMode = false;

darkmodebutton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    body.classList.toggle('darkness', isDarkMode);
    darkmodebutton.classList.toggle('darkness', isDarkMode);
    
    // Toggle the class for the forecast items
    const forecastItems = document.querySelectorAll('.forecast-item');
    forecastItems.forEach(item => {
        item.classList.toggle('darkness', isDarkMode);
    });
});

// Add this line to apply the initial dark mode state on page load if needed
body.classList.toggle('darkness', isDarkMode);
