import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

const def = { 
    cours : "08 - Fonctions",
    excercice : "04 - Menu",
    intitule : `<p>Vous exécuterez, par les 3 premières options, les exercices déjà réalisés, appelés sous forme de fonction.</p>`
        + `<p>L’option 4 est une généralisation de la recherche du nombre de voyelles dans un mot: elle permet de rechercher la présence de n’importe quel caractère dans une chaîne.</p>`
        + `<p>La recherche de voyelles dans une chaîne constitue une surcharge de cette fonction, dans la mesure où les caractères à rechercher seront fournis sous forme de chaîne.</p>`
}

const data_send = {
    multiple: {
        id: "multiple",
        name: "Multiples",
        page: {
            id: "page_multiple",
            x: {
                id: "x",
                name: "X",
                pattern: "entier"
            },
            y: {
                id: "y",
                name: "Y",
                pattern: "entier"
            },
            button: {
                id: "multiple_valid",
                name: "Valider",
            }
        }
    },
    somme: {
        id: "somme",
        name: "Somme et moyenne",
        page: {
            id: "page_somme",
            button: {
                id: "somme_valid",
                name: "Valider",
            },
            nombre: {
                id: "nombre",
                name: "Nombre",
                pattern: "entier"
            }
        }
    },
    voyelle: {
        id: "voyelle",
        name: "Nombre de voyelles",
        page: {
            id: "page_voyelle",
            button: {
                id: "voyelle_valid",
                name: "Valider",
            },
            var0: {
                id: "phrase_voyelle",
                name: "Phrase",
                pattern: "phrase"
            }
        }
    },
    caractere: {
        id: "caractere",
        name: "Nombre de caractere",
        page: {
            id: "page_caractere",
            button: {
                id: "caractere_valid",
                name: "Valider",
            },
            var0: {
                id: "phrase_caractere",
                name: "Phrase",
                pattern: "phrase"
            },
            var1: {
                id: "lettre_caractere",
                name: "lettres",
                pattern: "lettres"
            }
        }
    },
    menu:{
        id:"valid_menu",
        name:"Menu"
    }

}

let liste_nombre = []

// création des variables
let fragment = document.createDocumentFragment()
let el

//Header
el = document.createElement("div")
el.id = "vs_header_content"
fragment.appendChild(el)

el = document.createElement("h1")
el.textContent = def.cours
fragment.querySelector("div").appendChild(el)

el = document.createElement("h2")
el.textContent = def.excercice
fragment.querySelector("div").appendChild(el)

vs.add({
    selecteur: "#vs-contenue",
    text: fragment
})

vs.add({
    selecteur: "#vs_header_content",
    text: def.intitule
})

fragment = document.createDocumentFragment()

el = vs.form_button(data_send.menu)
fragment.appendChild(el)

// Div Menu
el = document.createElement("div")
el.id = "page_menu"
el.className = "mdl-grid"
fragment.appendChild(el)


el = vs.form_button(data_send.multiple)
el.querySelector("button").className =  el.querySelector("button").className + " mdl-cell mdl-cell--12-col"
fragment.querySelector("#page_menu").appendChild(el)


el = vs.form_button(data_send.somme)
el.querySelector("button").className =  el.querySelector("button").className + " mdl-cell mdl-cell--12-col"
fragment.querySelector("#page_menu").appendChild(el)


el = vs.form_button(data_send.voyelle)
el.querySelector("button").className =  el.querySelector("button").className + " mdl-cell mdl-cell--12-col"
fragment.querySelector("#page_menu").appendChild(el)

el = vs.form_button(data_send.caractere)
el.querySelector("button").className =  el.querySelector("button").className + " mdl-cell mdl-cell--12-col"
fragment.querySelector("#page_menu").appendChild(el)


//Div multiple

el = document.createElement("form")
el.id = data_send.multiple.page.id
fragment.appendChild(el)

el = vs.form_name(data_send.multiple.page.x)
fragment.querySelector("#" + data_send.multiple.page.id).appendChild(el)

el = vs.form_name(data_send.multiple.page.y)
fragment.querySelector("#" + data_send.multiple.page.id).appendChild(el)

el = vs.form_button(data_send.multiple.page.button)
fragment.querySelector("#" + data_send.multiple.page.id).appendChild(el)


//Div somme


el = document.createElement("form")
el.id = data_send.somme.page.id
fragment.appendChild(el)

el = vs.form_name(data_send.somme.page.nombre)
fragment.querySelector("#" + data_send.somme.page.id).appendChild(el)

el = vs.form_button(data_send.somme.page.button)
fragment.querySelector("#" + data_send.somme.page.id).appendChild(el)


//Div voyelle


el = document.createElement("form")
el.id = data_send.voyelle.page.id
fragment.appendChild(el)

el = vs.form_name(data_send.voyelle.page.var0)
fragment.querySelector("#" + data_send.voyelle.page.id).appendChild(el)

el = vs.form_button(data_send.voyelle.page.button)
fragment.querySelector("#" + data_send.voyelle.page.id).appendChild(el)

//Div caractère



el = document.createElement("form")
el.id = data_send.caractere.page.id
fragment.appendChild(el)

el = vs.form_name(data_send.caractere.page.var0)
fragment.querySelector("#" + data_send.caractere.page.id).appendChild(el)

el = vs.form_name(data_send.caractere.page.var1)
fragment.querySelector("#" + data_send.caractere.page.id).appendChild(el)

el = vs.form_button(data_send.caractere.page.button)
fragment.querySelector("#" + data_send.caractere.page.id).appendChild(el)


//Envoie du corp

vs.add({
    selecteur: "#vs-contenue",
    text: fragment
})


vs.add(
    {
        selecteur: "#vs-contenue",
        text: `<div id="dialog" class="mdl-dialog">
            <div class="vs-test-dialog">
            <h3 class="mdl-dialog__title">Resultat</h3>
            <div class="mdl-dialog__content">
                <div id="resultat"></div>
            </div>
            <div class="mdl-dialog__actions">
                <a type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" href="#">Close</a>
            </div>
            </div>
        </div>`
    }
);


const menu_nav = [
    [
        data_send.menu.id,
        data_send.caractere.id,
        data_send.voyelle.id,
        data_send.somme.id,
        data_send.multiple.id
    ],
    [
        "page_menu",
        data_send.caractere.page.id,
        data_send.voyelle.page.id,
        data_send.somme.page.id,
        data_send.multiple.page.id
    ]
]

for (let i=0; i < menu_nav[0].length; i++) {
    document.getElementById(menu_nav[0][i]).addEventListener("click", function () {toggle_page(menu_nav[1][i])})
}

function toggle_page(lapage) {
    liste_nombre = []
    menu_nav[1].forEach(
        function (lespage){
            document.getElementById(lespage).style.display = (lapage != lespage) ? "none" : "block"
        }
    )
}

toggle_page("page_menu")
    

//multiple
document.getElementById(data_send.multiple.page.button.id).addEventListener("click", function () {
        function produit(x,y) {
            return "<p>Le produit de " + x + " x " + y + " est égale à "+  ( x * y ) + "</p>"
        }
        let message
        if (verif_form.no_error(data_send.multiple.page.id)) { 
            const x = parseInt(this.parentNode.querySelector("#" + data_send.multiple.page.x.id).value)
            const y = parseInt(this.parentNode.querySelector("#" + data_send.multiple.page.y.id).value)

            message = produit(x,y)
        } else {
            message = "<p>Remplissez correctement le champ</p>"
        }

        vs.modal_result(message)          
    }
)

//somme
document.getElementById(data_send.somme.page.button.id).addEventListener("click", function () {
    function somme_moyenne() {
        let resultat = 0

        liste_nombre.forEach(
            function(n) {
                resultat = resultat + n
            }
        )
        message = "<p>La somme est : " + resultat + ". La moyenne est " + (resultat/liste_nombre.length) + "</p>"
        liste_nombre = []
        return message
    }
    let message

    if (verif_form.no_error(data_send.somme.page.id)) {    
        let nombre = parseInt(this.parentNode.querySelector("#" + data_send.somme.page.nombre.id).value);
        if (nombre != 0 ) {
            liste_nombre.push(nombre)
            document.querySelector("#" + data_send.somme.page.id).reset()
        } else {
           message = somme_moyenne()
        }
    } else {
        message = "<p>Remplissez correctement le champ</p>"
    }
    
    if (message)
        vs.modal_result(message)

    }
)

//function pour voyelle et caractere
function nombre_lettre(phrase, lettre) {
    let nombre = 0
    let tentative_echoue = 0

    while (tentative_echoue < 1 && phrase.length > 0) {
        tentative_echoue = 0
        var trouver = phrase.indexOf(lettre)

        if (trouver > -1) {
            nombre++
            phrase = phrase.substr(trouver + 1)
        } else {
            tentative_echoue++
        }
    }
    return nombre
}

//voyelle
document.getElementById(data_send.voyelle.page.button.id).addEventListener("click", function () {
        let resultat = 0

        if (verif_form.no_error(data_send.voyelle.page.id)) {
            let p = this.parentNode.querySelector("#" + data_send.voyelle.page.var0.id).value
            let voyelle = "aeiouy"
            for (var i in voyelle) {
                resultat = resultat + nombre_lettre(p,voyelle[i])
            }
            resultat = "<p>" + resultat + "</p>"
        } else {
            message = "<p>Remplissez correctement le champ</p>"
        }    

        vs.modal_result(resultat)          
    }
)

//caractere
document.getElementById(data_send.caractere.page.button.id).addEventListener("click", function () {
        let resultat = 0

        if (verif_form.no_error(data_send.caractere.page.id)) {
            let p = this.parentNode.querySelector("#" + data_send.caractere.page.var0.id).value
            let l = this.parentNode.querySelector("#" + data_send.caractere.page.var1.id).value
            for (var i in l) {
                resultat = resultat + nombre_lettre(p,l[i])
            }
            resultat = "<p>" + resultat + "</p>"
        } else {
            message = "<p>Remplissez correctement les champs</p>"
        } 

        vs.modal_result(resultat)          
    }
)