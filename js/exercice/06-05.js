//Menu, function création page, function vérification des formulaire
import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

//Variable pour la création de la page
const def = { 
    cours : "06 - Conditions",
    excercice : "05 - Participation",
    intitule : `<p>Un patron décide de  calculer le montant de  sa participation au prix du repas de  ses  employés  de  la façon suivante :</p>`
        + `<ul>`
            + `<li>si il est célibataire: participation de 20%</li>`
            + `<li>si il est marié: participation de 25%</li>`
            + `<li>si il a des enfants: participation de 10% supplémentaires par enfant</li>`
        + `</ul>`
        + `<p>La participation est plafonnée à 50%.</p>`
        + `<p>Si le salaire mensuel est inférieur à 1200 €  la participation est majorée de 10%.</p>`
        +`<p>Ecrire le programme qui lit les informations au clavier et affiche pour chaque salarié, la participation à laquelle il a droit.</p>`
}
const data_send = {
    salaire: {
        id: "salaire",
        name: "Salaire mensuel",
        pattern: "decimal_2"
    },
    enfant: {
        id: "enfant",
        name: "Nombre d'enfants",
        pattern: "entier_zero_sup"
    },
    marie: {
        box_name: "En couple",
        name: "marie",
        value: [25, 20],
        label: ["Oui", "Non"],
    }
}

//Création de la page
vs.form_start(def)
vs.add({
    selecteur: "#formulaire",
    text: vs.form_radio(data_send.marie)
})
vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.enfant)
})
vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.salaire)
})
vs.form_end()

//Action
document.getElementById('valid_form').addEventListener("click", function() {
    let message
    
    if (verif_form.no_error()) {
        let pourcentage
        const marie =  parseInt(this.parentNode.querySelector("input[name=\"" + data_send.marie.name + "\"]:checked").value)
        const enfant = parseInt(this.parentNode.querySelector("#"+data_send.enfant.id).value)
        const salaire = parseFloat(this.parentNode.querySelector("#"+data_send.salaire.id).value)

        pourcentage = marie

        if (salaire < 1200)
            pourcentage = pourcentage + 10

        pourcentage = pourcentage + (enfant * 10)

        if (pourcentage > 50)
            pourcentage = 50
            
        message = "<p>Vous avez le droit a: " + pourcentage + "%</p>"
    } else {
        message = "<p>Remplissez correctement les champs</p>"
    }

    vs.modal_result(message)
}, false)