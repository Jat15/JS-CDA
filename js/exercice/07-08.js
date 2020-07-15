import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

const def = { 
    cours : "07 - Boucles",
    excercice : "08 - Nombre de voyelles",
    intitule : `<p>Ecrire le programme qui compte le nombre de voyelles d’un mot saisi au clavier, en utilisant :</p>`
        + `<ul>`
            + `<li>myVar.length: retourne le nombre de lettres de la chaîne myVar.</li>`
            + `<li>myVar.substr(p,n):extrait d’une chaîne donnée une sous-chaîne de ncaractères à partir de la position p(attention, en Javascript, le 1er caractère se trouve à la position 0)</li>`
            + `<li>myVar.indexOf(chaine): retournele rang de la première occurrence de chainedans la variable myVardonnée (si non trouvé : -1).</li>`
        + `</ul>`
}

const data_send = {
    phrase: {
        id: "phrase",
        name: "Phrase",
        pattern: "phrase"
    },
}

vs.form_start(def)

vs.add({
    selecteur: "#formulaire",
    text: vs.form_name(data_send.phrase)
})

vs.form_end()

document.getElementById('valid_form').addEventListener("click", function () {
    let message

    if (verif_form.no_error()) {
        let phrase = this.parentNode.querySelector("#" + data_send.phrase.id).value;
        
        let nombre = 0;
        let tentative_echoue = 0;
        let decaler = 0;
        
        var voyelle = ["a","e","i","o","u","y"];
        while (tentative_echoue < voyelle.length && phrase.length > 0)
        {
            if (decaler>0) 
                phrase = phrase.substr(decaler);
            
            tentative_echoue = 0;
            decaler = 0;
            
            for (var index_voyelle in voyelle) 
            {
                var trouver = phrase.indexOf(voyelle[index_voyelle]);
                if ( trouver > -1)
                {
                    nombre++;
                    if (trouver+1 > decaler)
                        decaler = trouver+1;
                }
                else
                    tentative_echoue++;
            }
        }

        message = "Vous avez " + nombre + " voyelle";
    } else {
        message = "<p>Remplissez correctement le champ</p>"
    }

        

    vs.modal_result(message)
}, false);