document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("feedback-form").addEventListener("submit", function(event) {
        let valid = true;
        let errors = [];

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const rating = parseInt(document.getElementById("rating").value.trim());
        const message = document.getElementById("message").value.trim();
        const favrecipe = document.getElementById("favrecipe").value.trim();

        // Név ellenőrzés
        if (name.length < 10) {
            valid = false;
            errors.push("A név legalább 10 karakter legyen.");
        }

        // Email ellenőrzés
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            valid = false;
            errors.push("Érvénytelen email cím.");
        }

        // Értékelés ellenőrzés
        if (isNaN(rating) || rating < 1 || rating > 5) {
            valid = false;
            errors.push("Az értékelés 1 és 5 közötti szám legyen.");
        }

        // Visszajelzés szöveg ellenőrzés
        if (message.length < 10) {
            valid = false;
            errors.push("A visszajelzés szövege legalább 10 karakter legyen.");
        }

        // Kedvenc recept ellenőrzés
        if (favrecipe.length < 10) {
            valid = false;
            errors.push("A kedvenc recept neve legalább 10 karakter legyen.");
        }

        // Hibakezelés
        if (!valid) {
            event.preventDefault();
            alert("Hibák az űrlapon:\n\n" + errors.join("\n"));
        }
    });
});