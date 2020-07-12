import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "08 - Fonctions",
    excercice : "04 - Menu",
    intitule : `<p>Vous exécuterez, par les 3 premières options, les exercices déjà réalisés, appelés sous forme de fonction.</p>`
        + `<p>L’option 4 est une généralisation de la recherche du nombre de voyelles dans un mot: elle permet de rechercher la présence de n’importe quel caractère dans une chaîne.</p>`
        + `<p>La recherche de voyelles dans une chaîne constitue une surcharge de cette fonction, dans la mesure où les caractères à rechercher seront fournis sous forme de chaîne.</p>`
}

export function vue() {  
    const data_send = {
        multiple: {
            id: "multiple",
            name: "Multiples",
            page: {
                id: "page_multiple",
                x: {
                    id: "x",
                    name: "X",
                    erreur: "Nom pas bon !"
                },
                y: {
                    id: "y",
                    name: "Y",
                    erreur: "Nom pas bon !"
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
                    erreur: "Nom pas bon !"
                }
            }
        },
        voyelle: {
            id: "voyelle",
            name: "Recherche du nombre de voyelles",
            page: {
                id: "page_voyelle",
                button: {
                    id: "voyelle_valid",
                    name: "Valider",
                },
                var0: {
                    id: "phrase_voyelle",
                    name: "Phrase",
                    erreur: "Nom pas bon !"
                }
            }
        },
        caractere: {
            id: "caractere",
            name: "Recherche du nombre des caracteres choisi",
            page: {
                id: "page_caractere",
                button: {
                    id: "caractere_valid",
                    name: "Valider",
                },
                var0: {
                    id: "phrase_caractere",
                    name: "Phrase",
                    erreur: "Nom pas bon !"
                },
                var1: {
                    id: "lettre_caractere",
                    name: "lettres",
                    erreur: "Nom pas bon !"
                }
            }
        },
        menu:{
            id:"valid_menu",
            name:"Menu"
        }

    }

    let liste_nombre = []

    vs.form_start(def)

    //Div header
    vs.add(
        {
            selecteur: "#formulaire",
            text: vs.form_button(data_send.menu)
        }
    )

    // Div Menu

    vs.add(
        {
            selecteur: "#formulaire",
            text: `<div id="page_menu"></div>`
        }
    )

    vs.add(
        {
            selecteur: "#page_menu",
            text: vs.form_button(data_send.multiple)
        }
    )
    vs.add(
        {
            selecteur: "#page_menu",
            text: vs.form_button(data_send.somme)
        }
    )
    vs.add(
        {
            selecteur: "#page_menu",
            text: vs.form_button(data_send.voyelle)
        }
    )
    vs.add(
        {
            selecteur: "#page_menu",
            text: vs.form_button(data_send.caractere)
        }
    )


    //Div multiple

    vs.add(
        {
            selecteur: "#formulaire",
            text: `<div id="` + data_send.multiple.page.id + `"></div>`
        }
    )


    vs.add(
        {
            selecteur: "#" + data_send.multiple.page.id,
            text: vs.form_name(data_send.multiple.page.x)
        }
    )

    vs.add(
        {
            selecteur: "#" + data_send.multiple.page.id,
            text: vs.form_name(data_send.multiple.page.y)
        }
    )

    vs.add(
        {
            selecteur: "#" + data_send.multiple.page.id,
            text: vs.form_button(data_send.multiple.page.button)
        }
    )
    
    //Div somme

    vs.add(
        {
            selecteur: "#formulaire",
            text: `<div id="` + data_send.somme.page.id + `"></div>`
        }
    )

    vs.add(
        {
            selecteur: "#" + data_send.somme.page.id,
            text: vs.form_name(data_send.somme.page.nombre)
        }
    )

    vs.add(
        {
            selecteur: "#" + data_send.somme.page.id,
            text: vs.form_button(data_send.somme.page.button)
        }
    )

    //Div voyelle

    vs.add(
        {
            selecteur: "#formulaire",
            text: `<div id="` + data_send.voyelle.page.id + `"></div>`
        }
    )

    vs.add(
        {
            selecteur: "#" + data_send.voyelle.page.id,
            text: vs.form_name(data_send.voyelle.page.var0)
        }
    )

    vs.add(
        {
            selecteur: "#" + data_send.voyelle.page.id,
            text: vs.form_button(data_send.voyelle.page.button)
        }
    ) 


    //Div caractère

    vs.add(
        {
            selecteur: "#formulaire",
            text: `<div id="` + data_send.caractere.page.id + `"></div>`
        }
    )

    vs.add(
        {
            selecteur: "#" + data_send.caractere.page.id,
            text: vs.form_name(data_send.caractere.page.var0)
        }
    )

    vs.add(
        {
            selecteur: "#" + data_send.caractere.page.id,
            text: vs.form_name(data_send.caractere.page.var1)
        }
    )

    vs.add(
        {
            selecteur: "#" + data_send.caractere.page.id,
            text: vs.form_button(data_send.caractere.page.button)
        }
    ) 

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

            let x = parseInt(this.parentNode.querySelector("#" + data_send.multiple.page.x.id).value)
            let y = parseInt(this.parentNode.querySelector("#" + data_send.multiple.page.y.id).value)

            const message = produit(x,y)

            vs.modal_result(message)          
        }
    )

    //somme
    document.getElementById(data_send.somme.page.button.id).addEventListener("click", function () {
        function somme_moyenne() {

        }

        let nombre = parseInt(this.parentNode.querySelector("#" + data_send.somme.page.nombre.id).value);

            
        if (nombre != 0 ) {
            liste_nombre.push(nombre)
            document.querySelector("form").reset()
        } else {
            let resultat = 0

            liste_nombre.forEach(
                function(n) {
                    resultat = resultat + n
                }
            )

            const message = "<p>La somme est : "+resultat+". La moyenne est " + (resultat/liste_nombre.length) + "</p>"
            vs.modal_result(message)

            liste_nombre = []
        }

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
            let p = this.parentNode.querySelector("#" + data_send.voyelle.page.var0.id).value
            let voyelle = "aeiouy"

            let resultat = 0

            for (var i in voyelle) {
                resultat = resultat + nombre_lettre(p,voyelle[i])
            }

            resultat = "<p>" + resultat + "</p>"

            vs.modal_result(resultat)          
        }
    )

    //caractere
    document.getElementById(data_send.caractere.page.button.id).addEventListener("click", function () {
            let p = this.parentNode.querySelector("#" + data_send.caractere.page.var0.id).value
            let l = this.parentNode.querySelector("#" + data_send.caractere.page.var1.id).value

            let resultat = 0

            for (var i in l) {
                resultat = resultat + nombre_lettre(p,l[i])
            }

            resultat = "<p>" + resultat + "</p>"


            vs.modal_result(resultat)          
        }
    )
}