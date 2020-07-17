//Menu, function création page, function vérification des formulaire
import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

// variable pour la création de la page
const def = { 
    cours : "06 - Conditions",
    excercice : "01 - Parité",
    intitule : `<p>Ecrivez un programme qui demande un nombre à l’utilisateur puis qui teste si ce nombre est pair.</p>`
        +`<p>Le programme  doit  afficher  le  résultat  «nombre  pair»  ou  «nombre  impair».</p>`
        +`<p>Vous  devez  utiliser l’opérateur modulo «%» qui donne le reste d’une division. a%2 donne le reste de la division de apar 2, si ce reste est égale à zéro, aest divisible par 2.</p>`
}
const data_send = {
    nombre : {
        id : "nombre",
        name : "Nombre",
        pattern: "entier"
    }
}

//Création de la page
vs.form_start(def)
vs.add({
    selecteur : "#formulaire",
    text : vs.form_name (data_send.nombre)
})
vs.form_end()

//Action
document.getElementById('valid_form').addEventListener("click", function() {
    let resultat

    if ( verif_form.no_error() ) {
        const nombre = this.parentNode.querySelector("#" + data_send.nombre.id).value

        resultat = nombre%2 == 0 ? "Nombre pair" : "Nombre impair"
    } else {
        resultat = "Remplissez correctement le champ"
    }
    resultat = "<p>" + resultat + "</p>"
    
    vs.modal_result(resultat)
}, false)