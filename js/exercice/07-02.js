import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

const def = { 
    cours : "07 - Boucles",
    excercice : "02 - Entiers inférieurs à N",
    intitule : `<p>Ecrivez un programme qui affiche les nombres inférieurs à N.</p>`
}

const data_send = {
    nombre: {
        id: "nombre",
        name: "Nombre",
        pattern: "entier_sup"
    },
}

vs.form_start(def)

vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.nombre)
})

vs.form_end()

document.getElementById('valid_form').addEventListener("click", function () {
    let resultat = ""

    if (verif_form.no_error()) {   
        const nombre = parseInt(this.parentNode.getElementById(data_send.nombre.id).value)
    
        for (let i = nombre ; i>0 ; i--) {   
            resultat += (nombre != i) ? "<p>" + i + "</p>" : "<p> Les inférieur a " + nombre + " sont: </p>"
        }
    } else {
        message = "<p>Remplissez correctement le champ</p>"
    }

    vs.modal_result(resultat)
}, false)