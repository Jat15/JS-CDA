import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "07 - Boucles",
    excercice : "05 - Moyenne",
    intitule : `<p>Ecrire un programme qui saisit des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0).</p> `
}

export function vue() {
    const data_send = {
        nombre: {
            id: "nombre",
            name: "Nombre",
            erreur: "Nom pas bon !"
        }
    }

    let liste_nombre = [];

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

        if (nombre != 0 ) {
            liste_nombre.push(nombre)
            this.parentNode.reset();
        } else {
            let resultat = 0;

            liste_nombre.forEach(
                function(n) {
                    resultat = resultat + n;
                }
            )

            const message = "<p>La somme est : "+resultat+". La moyenne est " + (resultat/liste_nombre.length) + "</p>";
            vs.modal_result(this, message)

            liste_nombre = [];
        }


    }, false);
}