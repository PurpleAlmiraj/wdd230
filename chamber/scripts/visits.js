document.addEventListener("DOMContentLoaded", function() {
    const visits = document.querySelector(".numvisits");
    const message = document.querySelector(".message");

    let numVisits = Number(localStorage.getItem("visits-ls"));
    let lastVisitDate = localStorage.getItem("last-visit-date");
    let today = new Date();
    let daysSinceLastVisit;

    if (isNaN(numVisits)) {
        numVisits = 0;
    }

    if (!lastVisitDate) {
        // First visit
        message.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate days since last visit
        lastVisitDate = new Date(lastVisitDate);
        daysSinceLastVisit = Math.floor((today - lastVisitDate) / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit === 0) {
            message.textContent = "Back so soon! Awesome!";
        } else {
            message.textContent = "You last visited " + daysSinceLastVisit + " days ago.";
        }
    }

    visits.textContent = numVisits;

    numVisits++;

    localStorage.setItem("visits-ls", numVisits);
    localStorage.setItem("last-visit-date", today);
});
