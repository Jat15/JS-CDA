//Menu, function création page, function vérification des formulaire
import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

//Variable pour la création de la page
const def = { 
    cours : "08 - Fonctions",
    excercice : "02 - Table de multiplication",
    intitule : `<p>Ecrivez une fonction qui affiche une table de multiplication.</p>`
        + `<p>Votre fonction doit prendre un paramètre qui permet d’indiquer quelle table afficher.</p>`
        + `<p>Par exemple TableMultiplication(7)doit afficher:</p>`
        + `<ul>`
            + `<li>1 x 7 = 7</li>`
            + `<li>2 x 7 = 14</li>`
            + `<li>3 x7 = 21</li>`
            + `<li>...</li>`
        + `</ul>`
}
const data_send = {
    nombre: {
        id: "nombre",
        name: "Nombre",
        pattern: "entier"
    }
}

//Création de la page
vs.form_start(def)
vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.nombre)
})
vs.form_end()

//Action
document.getElementById('valid_form').addEventListener("click", function () {
    function multiplication(multiple) {
        let phrase = "";  
        for (let i = 1; i <= 10; i++) {   
            phrase = "<p>" + phrase + i + " x " + multiple + " = " + (i * multiple) + "</p>";
        }
        return phrase;
    }
    let message = "";

    if (verif_form.no_error()) {
        let N = parseInt(this.parentNode.querySelector("#" + data_send.nombre.id).value);
        message = multiplication(N);
    } else {
        message = "<p>Remplissez correctement le champ</p>"
    }

    vs.modal_result(message)

}, false);