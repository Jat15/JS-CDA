import {} from '../menu.js'
import * as vs from '../vs.js'

const def = { 
    cours : "08 - Fonctions",
    excercice : "01",
    intitule : `<p>Créer les 2 fonctions suivantes:</p>`
        + `<ul>`
            + `<li>produit(x, y)qui retourne le produit des 2 variables x, ypassées en paramètre.</li>`
            + `<li>afficheImg(image)qui affiche l’image passée en paramètre.</li>`
        + `</ul>`
}

const data_send = {
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
}

vs.form_start(def)

vs.add(
    {
        selecteur: "#formulaire",
        text: vs.form_name(data_send.x)
    }
)

vs.add(
    {
        selecteur: "#formulaire",
        text: vs.form_name(data_send.y)
    }
)

vs.form_end()

document.getElementById('valid_form').addEventListener("click", function () {
    function produit(x,y) {
        return "<p>Le produit de " + x + " x " + y + " est égale à " +  ( x * y ) + "</p>";
    }
    function afficheImg(image) {
        return "<img src=" + image + " >"
    }

    let x = parseInt(this.parentNode.querySelector("#" + data_send.x.id).value);
    let y = parseInt(this.parentNode.querySelector("#" + data_send.y.id).value);

    let message

    message = produit(x,y)
    message += afficheImg("./img/papillon.jpg")
    
    vs.modal_result(message)
}, false);