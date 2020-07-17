//Menu, function création page, function vérification des formulaire
import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

//Variable pour la création de la page
const def = {
    cours : "07 - Boucles",
    excercice : "03 - Somme des entiers inférieurs à N",
    intitule : `<p>Ecrivez un programme qui affiche la somme des nombres inférieurs à N.</p>`
}
const data_send = {
    nombre: {
        id: "nombre",
        name: "Nombre",
        pattern: "entier_sup"
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
        let R = 0
        const N = parseInt(this.parentNode.querySelector("#" + data_send.nombre.id).value)

        for(let i = (N - 1) ; i > 0 ; i--) {
            R = i + R
        }
        
        message = "<p>La somme des inférieur de " + N + " est de " + R + "</p>"
    } else {
        message = "<p>Remplissez correctement le champ</p>"
    }

    vs.modal_result(message)

}, false)