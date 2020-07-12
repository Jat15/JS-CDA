import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

const def = { 
    cours : "07 - Boucles",
    excercice : "04 - Somme d'un intervalle",
    intitule : `<p>Ecrivez un programme qui saisit deux nombres n1 et n2 et qui calcul ensuite la somme des entiers de n1 à n2.</p>`
}

export function vue() {
    const data_send = {
        nombre1: {
            id: "nombre1",
            name: "Nombre",
            pattern : "entier"
        },
        nombre2: {
            id: "nombre2",
            name: "Nombre",
            pattern: "entier"
        }
    }

    vs.form_start(def)

    vs.add({
        selecteur: "#formulaire",
        text: vs.form_name(data_send.nombre1)
    })

    vs.add({
        selecteur: "#formulaire",
        text: vs.form_name(data_send.nombre2)
    })

    vs.form_end()

    document.getElementById('valid_form').addEventListener("click", function () {
        let message = ""

        if (verif_form.no_error()) {
            let resultat = 0
            let nombre1 = parseInt(this.parentNode.querySelector("#"+data_send.nombre1.id).value)
            let nombre2 = parseInt(this.parentNode.querySelector("#"+data_send.nombre2.id).value)

            if (nombre1 > nombre2) {
                const mem = nombre1
                nombre1 = nombre2
                nombre2 = mem
            } else if (nombre1 === nombre2){
               message = "Pas vraiment utile..." 
            }

            for (let i = 0 ; i < (nombre2 - nombre1) + 1 ; i++) {   
                resultat = resultat + (nombre1+i)
            }

            message += "<p>" + resultat + "</p>"
        } else {
            message = "<p>Remplissez correctement les champs</p>"
        }

        vs.modal_result(message)

    }, false)
}