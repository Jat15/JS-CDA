import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "07 - Boucles",
    excercice : "10 - Un nombre est-il premier",
    intitule : `<p>Ecrivez un programme qui affiche la somme des nombres inférieurs à N.</p>`
}

export function vue() {
    const data_send = {
        nombre: {
            id: "nombre",
            name: "Nombre",
            erreur: "Nom pas bon !"
        },
    }

    vs.form_start(def)

    vs.add(
        {
            selecteur: "#formulaire",
            text: vs.form_name(data_send.nombre)
        }
    )

    vs.form_end()

    document.getElementById('valid_form').addEventListener("click", function () {
        const nombre = parseInt(this.parentNode.querySelector("#" + data_send.nombre.id).value)

        let nb = 1
        let message = ""

        do {
            nb++;
        } while (nombre%nb != 0 && nb <= nombre) 

        message = nb >= nombre ? "Nombre premier" : "Ce n'est pas un nombre premier"
        message = "<p>" + message + "</p>"


        vs.modal_result(this, message)

    }, false);
}