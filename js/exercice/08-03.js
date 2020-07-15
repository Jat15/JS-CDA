import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

const def = { 
    cours : "08 - Fonctions",
    excercice : "03 - Compter le nombre de lettres",
    intitule : `<p>Ecrivez une fonction qui prend deux paramètres:</p>`
        + `<ul>`
            + `<li>phrase de type string</li>`
            + `<li>lettre de type string</li>`
        + `</ul>`
        + `<p>La fonction compte le nombre de fois ou lettre apparaît dans phrase.</p>`
}

const data_send = {
    phrase: {
        id: "phrase",
        name: "Phrase",
        pattern: "phrase"
    },
    lettre: {
        id: "lettre",
        name: "Lettre",
        pattern: "lettre"
    }
}

vs.form_start(def)

vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.phrase)
})

vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.lettre)
})

vs.form_end()

document.getElementById('valid_form').addEventListener("click", function () {
    let message
    
    if (verif_form.no_error()) {
        function nombre_lettre(phrase, lettre) {
            let nombre = 0;
            let trouver = 10;

            while (trouver > -1) {
                trouver = phrase.indexOf(lettre);
                if (trouver > -1) {
                    nombre++;
                    phrase = phrase.substr(trouver + 1);
                }
            }
            return nombre;
        }

        let p = this.parentNode.querySelector("#" + data_send.phrase.id).value;
        let l = this.parentNode.querySelector("#" + data_send.lettre.id).value;

        message = "<p>La lettre " + l +  " est : " + nombre_lettre(p,l) + " fois</p><p>Dans la phrase : " + p + "</p>";
    } else {
        message = "<p>Remplissez correctement le champ</p>"
    }

    vs.modal_result(message)
}, false);