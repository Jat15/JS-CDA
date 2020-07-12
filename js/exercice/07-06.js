import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "07 - Boucles",
    excercice : "06 - Mini et maxi",
    intitule : `<p>Modifiez le programme de la moyenne pour afficher le minimum et le maximum</p>`
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
            let min;
            let max;

            liste_nombre.forEach(
                function(N) {
                    if (isNaN(min) && isNaN(max)) {
                        min = N;
                        max = N;
                    } else if (N != 0) {
                        if (N < min)
                            min = N;
                        else if (N > max)
                            max = N;
                    }
                }
            )

            let message = "<p>Mini : " + min + "</p><p>Max : " + max + "</p>";
            vs.modal_result(message)

            liste_nombre = [];
        }
    }, false);
}