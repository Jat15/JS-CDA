//Menu, function création page, function vérification des formulaire
import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

//Variable pour la création de la page
const def = { 
    cours : "07 - Boucles",
    excercice : "10 - Un nombre est-il premier",
    intitule : `<p>Ecrivez un programme qui affiche la somme des nombres inférieurs à N.</p>`
}
const data_send = {
    nombre: {
        id: "nombre",
        name: "Nombre",
        pattern: "entier"
    },
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
    let message = ""

    if (verif_form.no_error()) {
        const nombre = parseInt(this.parentNode.querySelector("#" + data_send.nombre.id).value)

        let nb = 1

        do {
            nb++;
        } while (nombre%nb != 0 && nb <= nombre) 

        message = nb >= nombre ? "Nombre premier" : "Ce n'est pas un nombre premier"
        message = "<p>" + message + "</p>"
    } else {
        message = "<p>Remplissez correctement le champ</p>"
    }

    vs.modal_result(message)

}, false);