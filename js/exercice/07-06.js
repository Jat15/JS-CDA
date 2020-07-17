//Menu, function création page, function vérification des formulaire
import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

//Variable pour la création de la page
const def = { 
    cours : "07 - Boucles",
    excercice : "06 - Mini et maxi",
    intitule : `<p>Modifiez le programme de la moyenne pour afficher le minimum et le maximum</p>`
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
document.getElementById('valid_form').addEventListener("click", function (e) {
    let message = ""

    if (verif_form.no_error()) {
        let nombre = parseInt(this.parentNode.querySelector("#" + data_send.nombre.id).value)

        if (nombre != 0 ) {
            liste_nombre.push(nombre)
            this.parentNode.reset()
        } else {
            let min
            let max

            liste_nombre.forEach(
                function(N) {
                    if (isNaN(min) && isNaN(max)) {
                        min = N
                        max = N
                    } else if (N != 0) {
                        if (N < min)
                            min = N
                        else if (N > max)
                            max = N
                    }
                }
            )

            message = "<p>Mini : " + min + "</p><p>Max : " + max + "</p>"
            liste_nombre = []
        }
    } else {
        message = "<p>Remplissez correctement les champs</p>"
    }

    if (message)
        vs.modal_result(message)

}, false)