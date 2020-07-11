import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "06 - Conditions",
    excercice : "02 - Age",
    intitule : `<p>Ecrivez un programme qui demande l’année de naissance à l’utilisateur.</p>`
        + `<p>En réponse votre programme doit afficher l’âge de l’utilisateur et indiquer si l’utilisateur est majeur ou mineur.</p>`
}

export function vue() {
    const data_send = {
        annees : {
            id : "annees",
            name : "Année de naissance",
            erreur : "Ceci n'est pas une année!"
        }
    }

    vs.form_start(def)

    vs.add(
        {
            selecteur : "#formulaire",
            text : vs.form_name (data_send.annees)
        }
    )

    vs.form_end()


    document.getElementById('valid_form').addEventListener("click", function() {

        let majeur
        const ladate = new Date()
        let nombres =  this.parentNode.querySelector("#" + data_send.annees.id).value
        let age = ladate.getFullYear() - nombres

        majeur = age >= 18 ? "majeur": "mineur"
    
       const resultat = "<p>Tu as "+ (age) +" ans, donc tu est "+ majeur + "</p>"


       vs.modal_result(this, resultat)

    }, false);

}