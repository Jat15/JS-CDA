import * as verif_form from './formulaire.js'

let id_list = []

//export la function de création de input (fragment)
export function form_name(data) {

    let fragment = document.createDocumentFragment();   
    let el = document.createElement("div");

    el.className = "mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label";
    fragment.appendChild(el);

    el = document.createElement("input");
    el.className =  "mdl-textfield__input";
    if (data.pattern) {
        let att = document.createAttribute("data-vs-form-pattern")
        att.value = data.pattern;
        el.setAttributeNode(att);
        id_list.push(data.id);
    }
    el.id = data.id;
    el.type = "text";
    fragment.querySelector('div').appendChild(el);

    el = document.createElement("label");
    el.className =  "mdl-textfield__label";
    el.for = data.id;
    el.textContent = data.name;
    fragment.querySelector('div').appendChild(el);

    el = document.createElement("span");
    el.className = "mdl-textfield__error";
    el.textContent = data.erreur ? data.erreur : verif_form.regex[data.pattern].message; 
    fragment.querySelector('div').appendChild(el);

    return fragment;
}


//export la function de création de bouton radio (insertadjacentHTML)
export function form_radio(data) {
    let create= "<fieldset class=\"mdl-cell mdl-cell--12-col\" ><legend>" + data.box_name+ "</legend>"
    let id
    let n = 0

    data.value.forEach(function(value){
       id = data.name + "_" + n;
       create += `<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="` + id + `">`
                    + `<input type="radio" id="` + id + `" class="mdl-radio__button" name="` + data.name + `" value="` + value + `" ` + ( n == 0 ? "checked" : "") +`>`
                    + `<span class="mdl-radio__label">` + data.label[n] + `</span>`
                + `</label>`

        n++
    })

    create += "</fieldset>"

    return create;
}

//Création du bouton
export function form_button(data) {
    let fragment = document.createDocumentFragment()
    let el = document.createElement("button")
    el.className =  "mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
    el.type = "button"
    el.id = data.id
    el.textContent = data.name
    fragment.appendChild(el)

    return fragment
}

/*
    export la function pour ajouter du code html grâce a un selecteur
    Création de l'event pour le input
*/
export function add(data) {
    if (typeof data.text === 'string')
        document.querySelector(data.selecteur).insertAdjacentHTML('beforeend', data.text);
    else 
        document.querySelector(data.selecteur).appendChild(data.text);

    componentHandler.upgradeDom()

    let new_table_id = []
    id_list.forEach (
        function(id) {
            document.getElementById(id) ? verif_form.create_event(id) : new_table_id.push(id)
        }
    )
    id_list = new_table_id
}

/*
    Supprime tout les enfant d'un parent du Dom
*/
export function kill_child(selecteur) {
    let child = selecteur.childNodes;
    for (let i=child.length-1; i >= 0; i--) {
        selecteur.childNodes[i].remove()
    }
}

/*
    Ajout d'un bouton
    De la div pour la modale
*/
export function form_end() {
    add(
        {
            selecteur: "#formulaire",
            text:form_button({
                name: "Submit",
                id: "valid_form"
            })
        }
    )

    add(
        {
            selecteur: "#vs-contenue",
            text: `<div id="dialog" class="mdl-dialog">`
                    + `<div class="vs-test-dialog">`
                        + `<h3 class="mdl-dialog__title">Resultat</h3>`
                            + `<div class="mdl-dialog__content">`
                                + `<div id="resultat">`
                                + `</div>`
                            + `</div>`
                        + `<div class="mdl-dialog__actions">`
                            + `<a type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" href="#">Close</a>`
                        + `</div>`
                    + `</div>`
                + `</div>`
        }
    )
}


/*
    Création de l'en-tête du contenue
    Et de form
*/
export function form_start(data){
    add (
        {
            selecteur : "#vs-contenue",
            text : `<div>`
                    + `<h1>` + data.cours + `</h1>`
                    + `<h2>` + data.excercice + `</h2>`
                    +`` + data.intitule + ``
                + `</div>`
                + `<form id="formulaire">`
                + `</form>`
        }
    )

}




/*
    Retire les anciens resultat de la modal (killchild)
    Ajout du contenue envoier
    Formulaire reset
    Modification la barre d'adresse

    Actualisation de mdl........
*/
export function modal_result(message) {
    kill_child(document.querySelector("#resultat"))

    document.querySelector("#resultat").insertAdjacentHTML('beforeend', message)
    document.querySelector("form").reset()
    window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#dialog" 

    let element = document.querySelectorAll(".is-dirty")
    if (element)
        element.forEach(champ => champ.classList.remove("is-dirty"))
    
    element = document.querySelectorAll(":checked")
    if (element)
        element.forEach(champ => champ.parentNode.click())
}

