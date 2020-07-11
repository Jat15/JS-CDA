import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "07 - Boucles",
    excercice : "03 - Somme des entiers inférieurs à N",
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
        var R = 0;

        /*
        var erreur = false;
        var nombres = /^[1-9]+[0-9]{0,}$/;
        do {
            message = "Un nombre entier positif:";
            if (erreur)
                message += "\nE N T I E R  P O S I T I F !!!!!";
            N = window.prompt(message);
            erreur = !nombres.test(N);
        } while (erreur)
        */

        const N = parseInt(this.parentNode.querySelector("#" + data_send.nombre.id).value);

        for(let i = (N-1); i > 0; i--) {
            R = i + R;
        }
        
        let message = "<p>La somme des inférieur de " + N + " est de " + R + "</p>"

        vs.modal_result(this, message)

    }, false);
}