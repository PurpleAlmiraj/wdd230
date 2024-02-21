let currentYear = new Date().getFullYear();

document.getElementById('currentYear').textContent = currentYear;

let oLastModif = new Date(document.lastModified);

let formattedDate = oLastModif.toLocaleString('en-US');

document.getElementById('lastModified').textContent = formattedDate;
