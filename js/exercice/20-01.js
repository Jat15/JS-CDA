//Menu, function création page, function vérification des formulaire
import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

//Variable pour la création de la page
const def = {
    cours: "? - Formulaire",
    excercice: "01",
    intitule: `Formulaire !!!!`
}
const data_send = {
    formulaire:{
        nom: {
            input_type: "text",
            id: "nom",
            name: "Nom",
            pattern: "nom_propre"
        },
        prenom: {
            input_type: "text",
            id: "prenom",
            name: "Prénom",
            pattern: "nom_propre"
        },        
        dn: {
            input_type: "date",
            id: "dn",
            name: "Date de naissance",
            pattern: "date"
        },
        genre: {
            input_type: "radio",
            box_name: "Genre",
            name: "sexe",
            value: ["monsieur", "madame"],
            label: ["Homme", "Femme"],
        },
        ville: {
            input_type: "text",
            id: "ville",
            name: "Ville",
            pattern: "nom_propre"
        },
        code_postal: {
            input_type: "text",
            id: "cp",
            name: "Code postal",
            pattern: "code_postal"
        },
        email: {
            input_type: "text",
            id: "email",
            name: "Email",
            pattern: "email"
        },
    }  
}

//select
//textarea
let fragment = document.createDocumentFragment()

let el = document.createElement("div")
fragment.appendChild(el)

el = document.createElement("h1")
el.textContent = def.cours
fragment.querySelector("div").appendChild(el)

el = document.createElement("h2")
el.textContent = def.excercice
fragment.querySelector("div").appendChild(el)

el = document.createElement("p")
el.textContent = def.intitule
fragment.querySelector("div").appendChild(el)

Object.entries(data_send).forEach(([selecteur, groupe]) => {
    el = document.createElement("form")
    el.id = selecteur
    fragment.appendChild(el)
    Object.entries(groupe).forEach(([input, valeur]) => {
        if (groupe[input].input_type === "text")
            fragment.querySelector("#" + selecteur).appendChild(vs.form_name(groupe[input]))
        else if (groupe[input].input_type === "radio")
            fragment.querySelector("#" + selecteur).appendChild(vs.form_radio(groupe[input]))
        else if (groupe[input].input_type === "date") {
            el = vs.form_name(groupe[input])
            el.querySelector("input").type = "date"
            el.querySelector("div").className = el.querySelector("div").className  + " has-placeholder"
            console.log(el.querySelector("div").classList)
            fragment.querySelector("#" + selecteur).appendChild(el)
        }
    })
})
vs.add({
    selecteur: "#vs-contenue",
    text: fragment
})
vs.add({
    selecteur: "#formulaire",
    text: `<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
    <textarea class="mdl-textfield__input" type="text" rows= "3" id="schools"></textarea>
    <label class="mdl-textfield__label" for="schools">Schools attended</label>
  </div>`
})
vs.add({
    selecteur: "#formulaire",
    text: `<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-cell--12-col" for="checkbox-1">
    <input type="checkbox" id="checkbox-1" class="mdl-checkbox__input" checked>
    <span class="mdl-checkbox__label">J'accepte le traitement informatique de ce formulaire.</span>
  </label>`
})


vs.form_end()

//Envoie des donnée si on clique sur le bouton
document.getElementById('valid_form').addEventListener("click", function () {
    let message

    if ( verif_form.no_error() ) {
        //Récupération des input
        const nom = this.parentNode.querySelector("#" + data_send.nom.id).value
        const prenom = this.parentNode.querySelector("#" + data_send.prenom.id).value
        const genre = this.parentNode.querySelector("input[name=\"" + data_send.genre.name + "\"]:checked").value

        //Création du message
        message = "<p>Bonjour " + genre + " " + nom + " " + prenom + "</p>"
    } else {
        message = "<p>Remplissez correctement vos champs</p>"
    }

    //envoie du message
    vs.modal_result(message)
}, false)