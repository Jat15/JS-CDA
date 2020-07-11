import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "07 - Boucles",
    excercice : "04 - Somme d'un intervalle",
    intitule : `<p>Ecrivez un programme qui saisit deux nombres n1 et n2 et qui calcul ensuite la somme des entiers de n1 à n2.</p>`
}

export function vue() {
    const data_send = {
        nombre1: {
            id: "nombre1",
            name: "Nombre",
            erreur: "Nom pas bon !"
        },
        nombre2: {
            id: "nombre2",
            name: "Nombre",
            erreur: "Nom pas bon !"
        }
    }

    vs.form_start(def)

    vs.add(
        {
            selecteur: "#formulaire",
            text: vs.form_name(data_send.nombre1)
        }
    )

    vs.add(
        {
            selecteur: "#formulaire",
            text: vs.form_name(data_send.nombre2)
        }
    )

    vs.form_end()

    document.getElementById('valid_form').addEventListener("click", function () {
        let resultat = 0;
        const nombre1 = parseInt(this.parentNode.querySelector("#" + data_send.nombre1.id).value);
        const nombre2 = parseInt(this.parentNode.querySelector("#" + data_send.nombre2.id).value);


        for (let i = 0; i < (nombre2 - nombre1)+1; i++)
        {   
            resultat = resultat + (nombre1+i);
        }

        resultat = "<p>" + resultat + "</p>"
        vs.modal_result(this, resultat)

    }, false);
}