import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "09 - Tableaux",
    excercice : "01",
    intitule : `<p>Ecrivez un programme permettant de créer un tableau, dont la taille est saisie au clavier.</p>`
        + `<p>Ensuite l'utilisateur doit rentrer les différentes valeurs du tableau.</p>`
        + `<p>Puis votre programme doit afficher le contenu du tableau</p>`
}

export function vue() {
    const data_send = {
        taille: {
            id: "taille",
            name: "Taille du tableau",
            erreur: "Nom pas bon !"
        },
        procedural: {
            id: "test_",
            name: "Champ ",
            erreur: "Nom pas bon !"
        }
    }

    vs.form_start(def)

    vs.add(
        {
            selecteur: "#formulaire",
            text: vs.form_name(data_send.taille)
        }
    )

    vs.add(
        {
            selecteur: "#formulaire",
            text:`
                <div id="champ_optionelle"><div>
            `
        }
    )

    vs.form_end()


    document.getElementById(data_send.taille.id).addEventListener("change", function () {
        vs.kill_child(document.querySelector("#champ_optionelle"))
        let nombre = parseInt(this.parentNode.querySelector("#" + data_send.taille.id).value)
        if (nombre) {
            for (let i = 0; i < nombre; i++) {
                vs.add(
                    {
                        selecteur: "#champ_optionelle",
                        text: vs.form_name({
                            id: data_send.procedural.id + i,
                            name: data_send.procedural.name + i,
                            erreur: data_send.procedural.erreur
                        })
                    }
                )
            }
        }

    }, false)
    document.getElementById('valid_form').addEventListener("click", function () {
        let array_length = parseInt(this.parentNode.querySelector("#" + data_send.taille.id).value);      
               
        let resultat = "";
        for (let i = 0; i < array_length; i++) {
            resultat = resultat + "<p>Valeur ["+ i +"] : "+ this.parentNode.querySelector("#" + data_send.procedural.id + i).value + "<p>"
        }

        vs.modal_result(this, resultat)
        
        const event = new Event('change');
        document.getElementById(data_send.taille.id).dispatchEvent(event);       
        
    }, false);
}