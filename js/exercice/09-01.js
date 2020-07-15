import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

const def = { 
    cours : "09 - Tableaux",
    excercice : "01",
    intitule : `<p>Ecrivez un programme permettant de créer un tableau, dont la taille est saisie au clavier.</p>`
        + `<p>Ensuite l'utilisateur doit rentrer les différentes valeurs du tableau.</p>`
        + `<p>Puis votre programme doit afficher le contenu du tableau</p>`
}

const data_send = {
    taille: {
        id: "taille",
        name: "Taille du tableau",
        pattern: "entier_zero_sup"
    },
    procedural: {
        id: "test_",
        name: "Champ ",
        pattern: "entier"
    }
}

vs.form_start(def)

vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.taille)
})

vs.add({
    selecteur: "#formulaire",
    text:`
        <div id="champ_optionelle"><div>
    `
})

vs.form_end()


document.getElementById(data_send.taille.id).addEventListener("change", function () {
    let fragment_optional = document.createDocumentFragment();
    vs.kill_child(document.querySelector("#champ_optionelle"))
    let nombre = parseInt(this.parentNode.querySelector("#" + data_send.taille.id).value)
    if (nombre) {
        for (let i = 0; i < nombre; i++) {
            const el = vs.form_name({
                id: data_send.procedural.id + i,
                name: data_send.procedural.name + i,
                erreur: data_send.procedural.erreur
            })
            
            fragment_optional.appendChild(el) 
        }
    }
    vs.add({
        selecteur: "#champ_optionelle",
        text: fragment_optional,
    })
}, false)

document.getElementById('valid_form').addEventListener("click", function () {
    let message = "";

    if (verif_form.no_error()) {
        let array_length = parseInt(this.parentNode.querySelector("#" + data_send.taille.id).value);      
        for (let i = 0; i < array_length; i++) {
            message = message + "<p>Valeur ["+ i +"] : "+ this.parentNode.querySelector("#" + data_send.procedural.id + i).value + "<p>"
        }
    } else {
        message = "<p>Remplissez correctement les champs</p>"
    }

    vs.modal_result(message)
    
    const event = new Event('change');
    document.getElementById(data_send.taille.id).dispatchEvent(event);       
    
}, false);