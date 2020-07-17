//Menu, function création page, function vérification des formulaire
import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

//Variable pour la création de la page
const def = { 
    cours : "07 - Boucles",
    excercice : "09 - Calcul du nombre de jeunes, de moyens et de vieux",
    intitule : `<p>Il s’agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge stric-tement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).</p>`
        + `<ul>`
        + `<li>Le programme doit demander les âges successifs.</li>`
        + `<li>Le comptage est arrêté dès la saisie d’un centenaire. Le centenaire est compté.</li>`
        + `<li>Donnez le programme Javascript correspondant qui affiche les résultats.</li>`
        + `</ul>`
}
const data_send = {
    nombre: {
        id: "nombre",
        name: "Nombre",
        pattern: "entier_sup"
    }
}

//Variable pour l'action
let liste_age = []

//Création de la page
vs.form_start(def)
vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.nombre)
})
vs.form_end()

//Action
document.getElementById('valid_form').addEventListener("click", function () {
    let message

    if (verif_form.no_error()) {
        let N = parseInt(this.parentNode.querySelector("#" + data_send.nombre.id).value);
        
        liste_age.push(N)
        
        if ( N >= 100) {
            let moin_vingt = 0;
            let entre_vingt_quarante = 0;
            let plus_quarante = 0;
            
            liste_age.forEach(
                function(age) {
                    N =  parseInt(age);
                    if (age < 20)
                        moin_vingt++;
                    else if (age >= 20 && age <= 40)
                        entre_vingt_quarante++;
                    else
                        plus_quarante++;
                }
            )

            message= "<p>Moin de 20 ans : " + moin_vingt + "</p><p>Entre 20 et 40 ans : " + entre_vingt_quarante + "</p><p>Plus de 40 ans : " + plus_quarante + "</p>"
            
            liste_age = [];  
        }
        this.parentNode.reset();
    } else {
        message = "<p>Remplissez correctement le champ</p>"
    }

    if (message)
        vs.modal_result(message)

}, false);