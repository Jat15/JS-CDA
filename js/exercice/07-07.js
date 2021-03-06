//Menu, function création page, function vérification des formulaire
import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

//Variable pour la création de la page
const def = { 
    cours : "07 - Boucles",
    excercice : "07 - Multiples",
    intitule : `<p>Ecrire un programme qui calcule les N premiers multiples d'un nombre entier X, N et X étant entrés au clavier.</p>`
    + `<p>Exemple pour N=5 et X=7:</p>`
    + `<ul>` 
        + `<li>1 x 7 = 7</li>`
        + `<li>2 x 7 = 14</li>`
        + `<li>3 x 7 = 21</li>`
        + `<li>4 x 7 = 28</li>`
        + `<li>5 x 7 = 35</li>`
    + `</ul>`
    + `<p>Il est demandé de choisir la structure répétitive (for, while, do...while) la mieux appropriée au problème.</p>`
    + `<p>On ne demande pas pour le moment de gérer les débordements (overflows) dus à des demandes de calcul dépassant la capacité de la machine.</p>`
}
const data_send = {
    nombre1: {
        id: "nombre1",
        name: "Table de 1 a",
        pattern: "entier"
    },
    nombre2: {
        id: "nombre2",
        name: "Multiple",
        pattern: "entier"
    }
}

//Création de la page
vs.form_start(def)
vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.nombre1)
})
vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.nombre2)
})
vs.form_end()

//Action
document.getElementById('valid_form').addEventListener("click", function () {
    let resultat = ""
    
    if (verif_form.no_error()) {
        const repetition = parseInt(this.parentNode.querySelector("#" + data_send.nombre1.id).value)
        const multiple = parseInt(this.parentNode.querySelector("#" + data_send.nombre2.id).value)

        for (let i = 1; i <= repetition; i++) {   
            resultat +="<p>" + i + " x " + multiple + " = " + (i*multiple) + "</p>"
        }
    } else {
        resultat = "<p>Remplissez correctement les champs</p>"
    }

    vs.modal_result(resultat)
   
}, false)