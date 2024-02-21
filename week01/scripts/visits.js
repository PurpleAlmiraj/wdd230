const visits = document.querySelector(".numvisits");

// Retrieve the number of visits from localStorage
let numVisits = Number(localStorage.getItem("visits-ls"));

// If numVisits is null or undefined, set it to 0
if (isNaN(numVisits)) {
    numVisits = 0;
}

// Update the text content of the visits element
visits.textContent = numVisits;

// Increment numVisits
numVisits++;

// Store the updated numVisits back into localStorage
localStorage.setItem("visits-ls", numVisits);
