const visits = document.querySelector(".numvisits")

let numVisits = Number(localStorage.getItem("visits-ls"));


visits.textContent = numVisits;




numVisits++;

localStorage.setitem("visits-ls, numVisits");