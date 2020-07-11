import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "06 - Conditions",
    excercice : "03 - Calculette",
    intitule : `<p>Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur '+', '-', '*' ou '/'.</p>`
        + `<p>Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.</p>`
        + `<p>Dans  le  cas  contraire,  le  programme  effectuera  l'opération  demandée  (en  prévoyant  le  cas  d'erreur "division par 0"), puis affichera le résultat.</p>`
}

export function vue() {
    const data_send = {
        nombre1 : {
            id : "nombre1",
            name : "Nombre",
            erreur : "Ceci n'est pas le bon nombre!"
        },
        operateur : {
            id : "operateur",
            name : "Operateur",
            erreur : "Ceci n'est pas le bon nombre!"
        },
        nombre2 : {
            id : "nombre2",
            name : "Nombre",
            erreur : "Ceci n'est pas le bon nombre!"
        }
    }

    vs.form_start(def)

    vs.add(
        {
            selecteur : "#formulaire",
            text : vs.form_name (data_send.nombre1)
        }
    )
    vs.add(
        {
            selecteur : "#formulaire",
            text : vs.form_name (data_send.operateur)
        }
    )
    vs.add(
        {
            selecteur : "#formulaire",
            text : vs.form_name (data_send.nombre2)
        }
    )

    vs.form_end()

    document.getElementById('valid_form').addEventListener("click", function () {
        let retour;
        let resultat;
        const nombres1 = parseInt(this.parentNode.querySelector("#" + data_send.nombre1.id).value);
        const operateur = this.parentNode.querySelector("#" + data_send.operateur.id).value;
        const nombres2 = parseInt(this.parentNode.querySelector("#" + data_send.nombre2.id).value);

        if (operateur != "+" && operateur != "*" && operateur != "/" && operateur != "-") {
            retour = "Erreur d'opérateur";
        }
        else if (operateur == "/" && nombres2 == 0)
        {
            retour = "Impossible de diviser par 0";
        }
        else
        {
            switch (operateur)
            {   
                case "+" :
                    resultat = nombres1 + nombres2;
                    break; 
                case "-" :
                    resultat = nombres1 - nombres2;
                    break;
                case "/" :
                    resultat = nombres1 / nombres2;
                    break;
                case "*" :
                    resultat = nombres1 * nombres2;
                    break;
            } 
            retour = "Le résultat est : "+ resultat;
        }

        retour = "<p>" + retour + "</p>"

        vs.modal_result(this, retour)

    }, false);

}
