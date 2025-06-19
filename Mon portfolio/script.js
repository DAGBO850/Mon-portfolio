function lancerformulaire(){
    const form = document.querySelector("form");
    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        let erreur = "";

        if (nom.value.trim() === "") {
            erreur += "Veuillez entrer votre nom.\n";
        }

        if (email.value.trim() === "") {
            erreur += "Veuillez entrer votre email.\n";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            erreur += "Veuillez entrer un email valide.\n";
        }

        if (message.value.trim() === "") {
            erreur += "Veuillez entrer un message.\n";
        }

        if (erreur !== "") {
            e.preventDefault(); // Empêche l'envoi du formulaire
            console.log(erreur);
        }
    });
}
