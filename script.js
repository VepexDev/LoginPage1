
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const confirmation = document.getElementById("confirmation");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPass = document.getElementById("confirm-password").value;

        
        if (!isValidEmail(email)) {
            alert("Veuillez entrer une adresse e-mail valide.");
            return;
        }

        
        if (password !== confirmPass) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        
        loginForm.style.display = "none";

        
        confirmation.style.display = "block";
    });

    function isValidEmail(email) {

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
});