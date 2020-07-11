//Création du menu
import {} from '../menu.js'

//importation de fonction
import * as vs from '../vs.js'

//donnée de base de l'excercice
const def = {
    cours: "04 - Afficher du texte",
    excercice: "01",
    intitule: `<ul>`
                + `<li>Créer une page HTML qui demande successivement à l'utilisateur son nom puis son prénom.</li>`
                + `<li>La page demande ensuite à l'utilisateur s'il est un homme ou une femme.</li>`
                + `<li>Enfin, la page affiche les informations sur l'utilisateur.</li>`
            + `</ul>`
}

export function vue() {

    //Variable dédier a la création de la page
    const data_send = {
        nom: {
            id: "nom",
            name: "Nom",
            pattern: "nom_propre",
            erreur: "Les lettre et les espace, ', - sont autorisé."
        },
        prenom: {
            id: "prenom",
            name: "Prénom",
            pattern: "nom_propre",
            erreur: "Les lettre et les espace, ', - sont autorisé."
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

    vs.add(
        {
            selecteur: "#formulaire",
            text: vs.form_name(data_send.nom)
        }
    )

    vs.add(
        {
            selecteur: "#formulaire",
            text: vs.form_name(data_send.prenom)
        }
    )

    vs.add(
        {
            selecteur: "#formulaire",
            text: vs.form_radio(data_send.genre)
        }
    )

    vs.form_end()


    import('../formulaire.js')
      .then(x => x)
    
    //Envoie des donnée si on clique sur le bouton
    document.getElementById('valid_form').addEventListener("click", function () {
        //Récupération des input
        const nom = this.parentNode.querySelector("#" + data_send.nom.id).value
        const prenom = this.parentNode.querySelector("#" + data_send.prenom.id).value
        const genre = this.parentNode.querySelector("input[name=\"" + data_send.genre.name + "\"]:checked").value

        //Création du message
        let message = "<p>Bonjour " + genre + " " + nom + " " + prenom + "</p>"
        alert(form_error_var)
        //envoie du message
        vs.modal_result(this, message)

    }, false);
}