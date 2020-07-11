import {} from '../menu.js'
import * as vs from '../vs.js'

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

    const data_send = {
        ouai: {
            id: "ouai",
            name: "Un truc a écrire",
            erreur: "Nom pas bon !"
        },
    }

    vs.form_start(def)

    vs.add(
        {
            selecteur: "#formulaire",
            text: vs.form_name(data_send.ouai)
        }
    )

    vs.form_end()

    document.getElementById('valid_form').addEventListener("click", function () {

        const ouai = this.parentNode.querySelector("#" + data_send.ouai.id).value

        let message = "<p>" + ouai + "</p>"

        vs.modal_result(this, message)

    }, false);
}