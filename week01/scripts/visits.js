const visits = document.querySelector(".numvisits");


let numVisits = Number(localStorage.getItem("visits-ls"));


if (isNaN(numVisits)) {
    numVisits = 0;
}


visits.textContent = numVisits;


numVisits++;


localStorage.setItem("visits-ls", numVisits);
