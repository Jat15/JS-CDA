import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "08 - Fonctions",
    excercice : "02 - Table de multiplication",
    intitule : `<p>Ecrivez une fonction qui affiche une table de multiplication.</p>`
        + `<p>Votre fonction doit prendre un paramètre qui permet d’indiquer quelle table afficher.</p>`
        + `<p>Par exemple TableMultiplication(7)doit afficher:</p>`
        + `<ul>`
            + `<li>1 x 7 = 7</li>`
            + `<li>2 x 7 = 14</li>`
            + `<li>3 x7 = 21</li>`
            + `<li>...</li>`
        + `</ul>`
}

export function vue() {
    const data_send = {
        nombre: {
            id: "nombre",
            name: "Nombre",
            erreur: "Nom pas bon !"
        }
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
        let N = parseInt(this.parentNode.querySelector("#" + data_send.nombre.id).value);
        let message = "";

        function multiplication(multiple)
        {
            let phrase = "";  
            for (let i = 1; i <= 10; i++)
            {   
                phrase = "<p>" + phrase + i + " x " + multiple + " = " + (i * multiple) + "</p>";
            }
            return phrase;
        }
    
        let nombres = new RegExp("^-?[0-9]{1,}$");
    
        if ( nombres.test(N) ) {
            N = parseInt(N);
            message = multiplication(N);
        } else {
            message = "<p>Nombre entier positif ou négatif</p>";
        }

        vs.modal_result(message)

    }, false);
}