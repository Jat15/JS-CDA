import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "07 - Boucles",
    excercice : "02 - Entiers inférieurs à N",
    intitule : `<p>Ecrivez un programme qui affiche les nombres inférieurs à N.</p>`
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
        let nombre = parseInt(this.parentNode.querySelector("#" + data_send.nombre.id).value);
        let resultat = "";

        for (let i = nombre; i>0; i--) {   
            if (nombre!=i)        
                resultat += "<p>" + i + "</p>";
            else
                resultat += "<p> Les inférieur a " + nombre + " sont: </p>";
        }

        vs.modal_result(this, resultat)
            

    }, false);
}