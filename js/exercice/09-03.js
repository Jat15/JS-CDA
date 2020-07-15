import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

const def = { 
    cours : "09 - Tableaux",
    excercice : "03",
    intitule : `<p>On recherche dans un tableau contenant 20 prénoms, un prénom saisi au clavier.</p>`
    + `<p>Lorsque cet élément est trouvé, on l’élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case.</p>`
}

const data_send = {
    prenom: {
        id: "prenom",
        name: "Prenom",
        pattern: "nom_propre"
    },
    tab: [   
        "Audrey",
        "Aurélien",
        "Flavien",
        "Jérémy",
        "Laurent",
        "Melik",
        "Nouara",
        "Salem",
        "Samuel",
        "Stéphane",
        "Henry",
        "Jean",
        "Luc",
        "Thierry",
        "Anastasia",
        "Sonny",
        "Florian",
        "Julien",
        "Dan",
        "Tony"
    ]
}

vs.form_start(def)

vs.add({
    selecteur: "#formulaire",
    text: "<p>" + data_send.tab.join(', ') + "</p>"
})

vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.prenom)
})

vs.form_end()

document.getElementById('valid_form').addEventListener("click", function () {
    let message = ""

    if (verif_form.no_error()) {
        let prenom = this.parentNode.querySelector("#" + data_send.prenom.id).value
        let tab = data_send.tab;

            let index_array = tab.indexOf(prenom)     
            if (index_array < 0) {
                message = "Le prénom: " + prenom + " n'est pas dans la liste\n"
            } else {
                for(let i = index_array; i < tab.length; i++) {
                    tab[i] = i == tab.length ? "" : tab[i+1]
                }
                message = "Le prénom: " + prenom + " a était trouvé"
            }

        message = "<p>" + message + "</p>"

        for (let i in tab){
            message = message + "<p>Valeur ["+ i +"] : "+ tab[i] + "</p>"
        }
    } else {
        message = "<p>Remplissez correctement le champ</p>"
    }

    vs.modal_result(message)
}, false);