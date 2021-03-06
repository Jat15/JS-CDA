//Création du menu
//importation de fonction
import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

//donnée de base de l'excercice
const def = {
    cours: "Titre du cours",
    excercice: "Titre de l'excercice",
    intitule: `Intitulé de l'excercice`
}

//Variable dédier a la création de la page
const data_send = {
    nom: {
        id: "nom",
        name: "Nom",
        erreur: "Nom pas bon !"
    },
    prenom: {
        id: "prenom",
        name: "Prénom",
        erreur: "Nom pas bon !"
    },
    genre: {
        box_name: "Genre",
        name: "sexe",
        value: ["monsieurs", "madame"],
        label: ["Homme", "Femme"],
    }
}


//Création du contenue de la page
vs.form_start(def)

vs.add({
        selecteur: "#formulaire",
        text: vs.form_name(data_send.nom)
})
vs.add({
        selecteur: "#formulaire",
        text: vs.form_name(data_send.prenom)
})

vs.add({
        selecteur: "#formulaire",
        text: vs.form_radio(data_send.genre)
})

vs.form_end()

//Envoie des donnée si on clique sur le bouton
document.getElementById('valid_form').addEventListener("click", function () {
    //Récupération des input
    const nom = this.parentNode.querySelector("#" + data_send.nom.id).value
    const prenom = this.parentNode.querySelector("#" + data_send.prenom.id).value
    const genre = this.parentNode.querySelector("input[name=\"" + data_send.genre.name + "\"]:checked").value

    if (verif_form.no_error(data_send.index.bouton_valid.id)) {
        resultat = "<p>Valide</p>"
    } else {
        resultat = "<p>Remplissez correctement le champ</p>"
    }

    vs.modal_result(resultat)

}, false);