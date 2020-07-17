//Menu, function création page, function vérification des formulaire
import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

//Variable pour la création de la page
const def = { 
    cours : "08 - Fonctions",
    excercice : "01",
    intitule : `<p>Créer les 2 fonctions suivantes:</p>`
        + `<ul>`
            + `<li>produit(x, y)qui retourne le produit des 2 variables x, ypassées en paramètre.</li>`
            + `<li>afficheImg(image)qui affiche l’image passée en paramètre.</li>`
        + `</ul>`
}
const data_send = {
    x: {
        id: "x",
        name: "X",
        pattern: "entier"
    },
    y: {
        id: "y",
        name: "Y",
        pattern: "entier"
    },
}

//Création de la page
vs.form_start(def)
vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.x)
})
vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.y)
})
vs.form_end()

//Action
document.getElementById('valid_form').addEventListener("click", function () {
    function produit(x,y) {
        return "<p>Le produit de " + x + " x " + y + " est égale à " +  ( x * y ) + "</p>";
    }
    function afficheImg(image,alt) {
        return `<img src="` + image + `" alt="` + alt + `">`
    }

    let message

    if (verif_form.no_error()) {
        let x = parseInt(this.parentNode.querySelector("#" + data_send.x.id).value);
        let y = parseInt(this.parentNode.querySelector("#" + data_send.y.id).value);

        message = produit(x,y)
        message += afficheImg("./img/papillon.jpg", "Papillon de lumiére")
    } else {
        message = "<p>Remplissez correctement les champs</p>"
    }

    vs.modal_result(message)

}, false);