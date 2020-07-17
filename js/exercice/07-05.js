//Menu, function création page, function vérification des formulaire
import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

//Variable pour la création de la page
const def = { 
    cours : "07 - Boucles",
    excercice : "05 - Moyenne",
    intitule : `<p>Ecrire un programme qui saisit des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0).</p> `
}
const data_send = {
    nombre: {
        id: "nombre",
        name: "Nombre",
        pattern: "entier_zero_sup"
    }
}
let liste_nombre = []

//Création de la page
vs.form_start(def)
vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.nombre)
})
vs.form_end()

//Action
document.getElementById('valid_form').addEventListener("click", function () {
    let message
    
    if (verif_form.no_error()) {
        let nombre = parseInt(this.parentNode.querySelector("#" + data_send.nombre.id).value)

        if (nombre != 0 ) {
            liste_nombre.push(nombre)
            this.parentNode.reset()
        } else {
            let resultat = 0

            liste_nombre.forEach(
                function(n) {
                    resultat = resultat + n
                }
            )

            message = "<p>La somme est : "+resultat+". La moyenne est " + (resultat/liste_nombre.length) + "</p>"
            liste_nombre = []
        }
    } else {
        message = "<p>Remplissez correctement les champs</p>"
    }

    if (message)
        vs.modal_result(message)

}, false)