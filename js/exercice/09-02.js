import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

const def = { 
    cours : "09 - Tableaux",
    excercice : "02",
    intitule : `<p>Créer le programme qui fournira un menu permettant d'obtenir les fonctionnalités suivantes à partir d'un tableau à une dimension:</p>`
        + `<ul>`
            + `<li>Affichage du contenu de tous les postes du tableau</li>`
            + `<li>Affichage du contenu d'un poste dont l'index est saisi au clavier</li>`
            + `<li>Affichage du maximum et de la moyenne des postes du tableau</li>`
        + `</ul>`
        + `<p>Ce programme sera structuré de la manière suivante :</p>`
        + `<ul>`
            + `<li>une fonction GetIntegerpour lire un entier au clavier,</li>`
            + `<li>une fonctionInitTabpour créer et initialiser l'instance de tableau: le nombre de postes souhaité sera entré au clavier</li>`
            + `<li>une fonctionSaisieTabpour permettre la saisie des différents postes du tableau</li>`
            + `<li>une fonction AfficheTabpour afficher tous les postes du tableau,</li>`
            + `<li>une fonctionRechercheTabpour afficher le contenu d'un poste de tableau dont le rang est saisi au clavier</li>`
            + `<li>une fonction InfoTab qui afficherale maximum et la moyenne des postes.</li>`
        + `</ul>`
        +`<p>Les fonctions seront appelées successivement.</p>`
}

const data_send = {
    create_table: {
        id: "create_table",
        taille: {
            id: "taille",
            name: "Taille du tableau",
            pattern: "entier_sup"
        },
        procedural: {
            id: "test_",
            name: "Champ ",
            pattern: "entier"
        },
        bouton_valid:{
            id: "create_table_valid",
            name: "Valider"
        }
    },
    menu: {
        id: "page_menu",
        bouton0 :{
            id: "menu_table_values",
            name: "Affichage les valeurs de la table"
        },
        bouton1 :{
            id: "menu_table_value",
            name: "Afficher le contenu d'une case"
        },
        bouton2 :{
            id: "menu_table_max_moy",
            name: "Afficher le maximum et la moyenne"
        },
        back_create_table:{
            id: "back_create_table",
            name: "Crée un nouveaux tableau"
        }
    },
    index: {
        id: "page_index",
        var0: {
            id: "index",
            name: "Index",
            pattern: "entier_zero_sup"
        },
        bouton_valid:{
            id: "index_valid",
            name: "Valider"
        },
        back_menu:{
            id: "index_menu",
            name: "Menu"
        }
    }
}

let main_table = []

vs.add ({
    selecteur : "#vs-contenue",
    text : `<div>`
            + `<h1>` + def.cours + `</h1>`
            + `<h2>` + def.excercice + `</h2>`
            + def.intitule
        + `</div>`
})

//Création de la table InitTab()

vs.add({
    selecteur: "#vs-contenue",
    text:`<form id="` + data_send.create_table.id + `"><form>`
})
vs.add({
    selecteur: "#" + data_send.create_table.id,
    text: vs.form_name(data_send.create_table.taille)
})
vs.add({
    selecteur: "#" + data_send.create_table.id,
    text:`<div id="champ_optionelle"><div>`
})
vs.add({
    selecteur: "#" + data_send.create_table.id,
    text: vs.form_button(data_send.create_table.bouton_valid)
})

//Menu

vs.add({
    selecteur: "#vs-contenue",
    text:`<div id="` + data_send.menu.id + `"><div>`
})
vs.add({
    selecteur: "#" + data_send.menu.id,
    text: vs.form_button(data_send.menu.back_create_table)
})
vs.add({
    selecteur: "#" + data_send.menu.id,
    text: vs.form_button(data_send.menu.bouton0)
})
vs.add({
    selecteur: "#" + data_send.menu.id,
    text: vs.form_button(data_send.menu.bouton1)
})
vs.add({
    selecteur: "#" + data_send.menu.id,
    text: vs.form_button(data_send.menu.bouton2)
})

//Demande de l'index

vs.add({
    selecteur: "#vs-contenue",
    text:`<form id="` + data_send.index.id + `"><form>`
})
vs.add({
    selecteur: "#" + data_send.index.id,
    text: vs.form_button(data_send.index.back_menu)
})

vs.add({
    selecteur: "#" + data_send.index.id,
    text: vs.form_name(data_send.index.var0)
})

vs.add({
    selecteur: "#" + data_send.index.id,
    text: vs.form_button(data_send.index.bouton_valid)
})

vs.add({
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
});

const menu_nav = [
    [
        data_send.menu.back_create_table.id,
        data_send.index.back_menu.id,
        data_send.menu.bouton1.id
    ],
    [
        data_send.create_table.id,
        data_send.menu.id,
        data_send.index.id
    ]
]

for (let i=0; i < menu_nav[0].length; i++) {
    document.getElementById(menu_nav[0][i]).addEventListener("click", function () {toggle_page(menu_nav[1][i])})
}

function toggle_page(lapage) {
    const event = new Event('change')

    if (lapage === menu_nav[1][0])
        document.getElementById(data_send.create_table.taille.id).dispatchEvent(event);

    menu_nav[1].forEach(
        function (lespage){
            document.getElementById(lespage).style.display = (lapage != lespage) ? "none" : "block"
        }
    )
}

toggle_page(menu_nav[1][0])


//InitTab()
document.getElementById(data_send.create_table.taille.id).addEventListener("change", function () {
    let fragment_optional = document.createDocumentFragment();
    vs.kill_child(document.querySelector("#champ_optionelle"))
    let nombre = parseInt(this.parentNode.querySelector("#" +data_send.create_table.taille.id).value)
    if (nombre) {
        for (let i = 0; i < nombre; i++) {
            const el = vs.form_name({
                id: data_send.create_table.procedural.id + i,
                name: data_send.create_table.procedural.name + i,
                pattern: data_send.create_table.procedural.pattern
            })
            
            fragment_optional.appendChild(el) 
        }
    }
    vs.add({
        selecteur: "#champ_optionelle",
        text: fragment_optional,
    })
}, false)

//SaisieTab()
document.getElementById(data_send.create_table.bouton_valid.id).addEventListener("click", function () {
    const nombre = parseInt(this.parentNode.querySelector("#" + data_send.create_table.taille.id).value)
    main_table = []

    for (let i = 0; i < nombre; i++) {
        const champ =  parseInt(this.parentNode.querySelector("#" +data_send.create_table.procedural.id + i).value)
        main_table.push(champ)
    }

    toggle_page(data_send.menu.id)

}, false)


//AfficheTab()
document.getElementById(data_send.menu.bouton0.id).addEventListener("click", function () {
    let resultat = "";
    for (let i in main_table)
        resultat += "<p>Valeur ["+ i +"] : "+ main_table[i] + "</p>";

    vs.modal_result(resultat)
}, false)

//InfoTab()
document.getElementById(data_send.menu.bouton2.id).addEventListener("click", function () {
    let resultat
    
    let moyenne = 0;
    for(let i in main_table)
        moyenne += main_table[i]
    moyenne /= main_table.length
    resultat = "<p>Le maximum est " + Math.max(...main_table) + " et la moyenne est " + moyenne

    vs.modal_result(resultat)

}, false)


//RechercheTab()

document.getElementById(data_send.index.bouton_valid.id).addEventListener("click", function () {
    let resultat

    if (verif_form.no_error(data_send.index.bouton_valid.id)) {
        let n = parseInt(this.parentNode.querySelector("#" + data_send.index.var0.id).value)
        resultat = (n >= 0 && n < main_table.length) ? main_table[n] : "Poste invalide, le nombre doit êtres compris entre 0 et " + (parseInt(main_table.length) - 1)
        resultat = "<p>" + resultat + "</p>"
    } else {
        resultat = "<p>Remplissez correctement le champ</p>"
    }

    vs.modal_result(resultat)
}, false)