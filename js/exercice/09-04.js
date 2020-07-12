import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "09 - Tableaux",
    excercice : "04",
    intitule : `<p>Ecrire le programme qui réalise le tri à bulles.</p>`
}

export function vue() {
    const data_send = {
        tableau: {
            id: "tableau",
            name: "Tableau",
            erreur: "Nom pas bon !"
        }
    }

    vs.form_start(def)

    vs.add(
        {
            selecteur: "#formulaire",
            text: "<p>Séparé les nombres par des espaces</p>"
        }
    )

    vs.add(
        {
            selecteur: "#formulaire",
            text: vs.form_name(data_send.tableau)
        }
    )

    vs.form_end()

    document.getElementById('valid_form').addEventListener("click", function () {
        function tri_bulle(array) {
            let j = 1;
            let n = array.length;
    
            while ( j != n) {
                var i = j - 1;
                var tmp = array[j];
                while ( i > -1 && array[i] > tmp) {
                    array [i+1] = array[i];
                    i--;
                }
                array[i+1] = tmp;
                j++;
            }

            return array
        }
        
        let array = this.parentNode.querySelector("#" + data_send.tableau.id).value

        array = array.split(" ")

        for (let i=0; i < array.length; i++){
            array[i] = parseInt(array[i])
        }

        array = tri_bulle(array)

        const message = "<p>" + array + "</p>"
        vs.modal_result(message)
        
    }, false);
}