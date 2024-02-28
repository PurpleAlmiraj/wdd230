document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById("passwordConfirm").value;
    var passwordMatchError = document.getElementById("passwordMatchError");

    if (password !== passwordConfirm) {
        passwordMatchError.style.display = "block";
        document.getElementById("password").value = "";
        document.getElementById("passwordConfirm").value = "";
        document.getElementById("password").focus();
        event.preventDefault(); 
    } else {
        passwordMatchError.style.display = "none";
    }
});

const ratingInput = document.getElementById('rating');
const ratingValueDisplay = document.getElementById('ratingValue');

ratingInput.addEventListener('input', function() {

    ratingValueDisplay.textContent = ratingInput.value;
});