import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

const def = { 
    cours : "07 - Boucles",
    excercice : "01 - Saisie",
    intitule : `
    <p>Créer une page HTMLqui demande à l’utilisateur un prénom.</p>`
    +`<p>La page doit continuer à demander des prénoms à l’utilisateur jusqu’à ce qu’il laisse le champ vide.</p>`
}

const data_send = {
    prenom: {
        id: "prenom",
        name: "Choissisez un prénom",
        pattern: "nom_propre_rien"
    },
}
    
let liste_prenom = []

vs.form_start(def)

vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.prenom)
})

vs.form_end()

document.getElementById('valid_form').addEventListener("click", function () {        
    let message

    if (verif_form.no_error()) {     
        let prenom = this.parentNode.getElementById(data_send.prenom.id).value
        
        if (prenom) {
            liste_prenom.push(prenom)
            this.parentNode.reset()
        } else {
            message = "<p>Il y a " + liste_prenom.length + " prénoms:</p>"

            liste_prenom.forEach(
                function(prenom) {
                    message += "<p>" + prenom + "</p>"
                }
            )

            liste_prenom = []
        }
    } else {
        message = "<p>Remplissez correctement le champ</p>"
    }

    if (message)
        vs.modal_result(message)

}, false)