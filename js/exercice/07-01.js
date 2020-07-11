import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "07 - Boucles",
    excercice : "01 - Saisie",
    intitule : `
    <p>Créer une page HTMLqui demande à l’utilisateur un prénom.</p>`
    +`<p>La page doit continuer à demander des prénoms à l’utilisateur jusqu’à ce qu’il laisse le champ vide.</p>`
}

export function vue() {
    const data_send = {
        prenom: {
            id: "prenom",
            name: "Choissisez un prénom",
            erreur: "Nom pas bon !"
        },
    }
        
    let liste_prenom = [];

    vs.form_start(def)

    vs.add(
        {
            selecteur: "#formulaire",
            text: vs.form_name(data_send.prenom)
        }
    )

    vs.form_end()

    document.getElementById('valid_form').addEventListener("click", function () {
        let prenom = this.parentNode.querySelector("#" + data_send.prenom.id).value;

        if (prenom) {
            liste_prenom.push(prenom)
            this.parentNode.reset();
        } else {

            let message = "<p>Il y a " + liste_prenom.length + " prénoms:</p>";

            liste_prenom.forEach(
                function(prenom) {
                    message += "<p>" + prenom + "</p>"
                }
            )
                


            vs.modal_result(this, message)
            
            liste_prenom = [];

        }

    }, false);
}