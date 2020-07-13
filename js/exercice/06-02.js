import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

const def = { 
    cours : "06 - Conditions",
    excercice : "02 - Age",
    intitule : `<p>Ecrivez un programme qui demande l’année de naissance à l’utilisateur.</p>`
        + `<p>En réponse votre programme doit afficher l’âge de l’utilisateur et indiquer si l’utilisateur est majeur ou mineur.</p>`
}


const data_send = {
    annees : {
        id : "annees",
        name : "Année de naissance",
        pattern: "entier"
    }
}

vs.form_start(def)

vs.add({
    selecteur : "#formulaire",
    text : vs.form_name (data_send.annees)
})

vs.form_end()

document.getElementById('valid_form').addEventListener("click", function() {
    let resultat

    if (verif_form.no_error()) {
        let majeur
        const ladate = new Date()
        let nombres =  this.parentNode.querySelector("#" + data_send.annees.id).value
        let age = ladate.getFullYear() - nombres

        majeur = age >= 18 ? "majeur": "mineur"
    
        resultat = "<p>Tu as "+ (age) +" ans, donc tu est "+ majeur + "</p>"


        if (age < 0){
            resultat += "Tu viens du futur ?"
        } else if  (age == 0){
            resultat += "Tes nées aujourd'hui !"
        } else if (age <= 3) {
            resultat += "Tes pas un peu jeune pour regarder des sites ?"
        } else if (age >= ladate.getFullYear()) {
            resultat += "Ta connu J.C. !"
        } else if (age >= 200) {
            resultat += "Tu peu encore lire !"
        }
    } else {
        resultat = "<p>Remplissez correctement le champ</p>"
    }

    vs.modal_result(resultat)

}, false)