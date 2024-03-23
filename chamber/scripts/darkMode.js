const body = document.querySelector('body');
const darkmodebutton = document.querySelector('#dark');

// Check if dark mode is enabled in local storage
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply initial dark mode state on page load
toggleDarkMode(isDarkMode);

darkmodebutton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    toggleDarkMode(isDarkMode);

    // Save dark mode state to local storage
    localStorage.setItem('darkMode', isDarkMode);
});

function toggleDarkMode(isDarkMode) {
    body.classList.toggle('darkness', isDarkMode);
    darkmodebutton.classList.toggle('darkness', isDarkMode);
    toggleForecastItems(isDarkMode);
}

function toggleForecastItems(isDarkMode) {
    const forecastItems = document.querySelectorAll('.forecast-item');
    forecastItems.forEach(item => {
        item.classList.toggle('darkness', isDarkMode);
    });
}
