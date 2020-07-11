import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "07 - Boucles",
    excercice : "11 - Nombre magique",
    intitule : `<p>Ecrire un programme qui met en œuvre le jeu du nombre magique:</p>`
    + `<p>L’ordinateur choisit un nombre aléatoire et l’utilisateur doit trouver ce nombre. A chaque fois que l’utilisateur saisit une valeur, il reçoit une indication lui indiquant «plus petit» ou «plus grand».</p>`
    + `<p>Vous aurez besoin de générer un nombre aléatoire avec la fonction randomde l’objet Math: </p>`
    + `<quote>var magic =parseInt(Math.random()*100);</quote>`
    + `<p>Utilisez alert pour afficher les messages «Trop grand» ou «Trop petit», promptpour demander une valeur à l’utilisateur et confirmpour lui demander de rejouer.</p>`
}

export function vue() {
    const data_send = {
        nombre: {
            id: "nombre",
            name: "Nombre",
            erreur: "Nom pas bon !"
        },
    }
    let nombre_magic = parseInt(Math.random()*100);

    vs.form_start(def)

    vs.add(
        {
            selecteur: "#formulaire",
            text: vs.form_name(data_send.nombre)
        }
    )

    vs.form_end()

    document.getElementById('valid_form').addEventListener("click", function () {
        const nombre_utilisateur = parseInt(this.parentNode.querySelector("#" + data_send.nombre.id).value)
        let message = ""

        if (nombre_magic > nombre_utilisateur)
            message = "Le nombre magique est plus grand"
        else if (nombre_magic < nombre_utilisateur)
            message = "Le nombre magique est petit"
        else
        {
            message = "Bravo !!!!"
            nombre_magic = parseInt(Math.random()*100)
        }
       
        message = "<p>" + message + "</p>"
        vs.modal_result(this, message)
    }, false);
}