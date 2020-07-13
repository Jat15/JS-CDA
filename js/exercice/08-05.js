import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "08 - Fonctions",
    excercice : "05 - String Token",
    intitule : `<p>Concevez  la  fonction strtokqui  prend  3  paramètres str1, str2, n en  entrée  et  renvoie  une chaîne de caractères: str1 est composée d’une liste de mots séparés par le caractère str2.</p>`+
    + `<p>strtok sert à extraire le nième mot de str1.</p>`
    + `<p>Exemple:Pour str1 = «robert ;dupont ;amiens ;80000 », strtok (str1, « ; », 3) doit retourner« amiens »</p>`
}

const data_send = {
    str1: {
        id: "str1",
        name: "Phrase a décomposé:",
        erreur: "Nom pas bon !"
    },
    str2: {
        id: "str2",
        name: "Lettre de séparation:",
        erreur: "Nom pas bon !"
    },
    n: {
        id: "n",
        name: "La position du mot?",
        erreur: "Nom pas bon !"
    }
}

vs.form_start(def)

vs.add(
    {
        selecteur: "#formulaire",
        text: vs.form_name(data_send.str1)
    }
)

vs.add(
    {
        selecteur: "#formulaire",
        text: vs.form_name(data_send.str2)
    }
)

vs.add(
    {
        selecteur: "#formulaire",
        text: vs.form_name(data_send.n)
    }
)

vs.form_end()

document.getElementById('valid_form').addEventListener("click", function () {
    let phrase1 = this.parentNode.querySelector("#" + data_send.str1.id).value;
    let phrase2 = this.parentNode.querySelector("#" + data_send.str2.id).value;
    let nombre = this.parentNode.querySelector("#" + data_send.n.id).value;

    function strtok(str1, str2, n)
    {
        let trouver = 0;
        let run = true;
        let message = "";

        if (n<1)
            run = false;
        
        for (let i = 1 ; i<n && run ; i++)
        {
            trouver = str1.indexOf(str2);

            if (trouver == -1)            
                run = false;
            else
                str1 = str1.substr(trouver + 1);
        }

        if (run)
            message = str1.substr(0,trouver);
        else
            message = "Ta fait une erreur";

        return message
    }

    const message = strtok(phrase1, phrase2, nombre);

    vs.modal_result(message)
}, false);