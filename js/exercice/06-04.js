import {} from '../menu.js'
import * as vs from '../vs.js'
import * as verif_form from '../formulaire.js'

const def = { 
    cours : "06 - Conditions",
    excercice : "04 - Remise",
    intitule : `<p>A partir de la saisie du prix unitaire PU d’un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant le port PORT et la remise REM, sachant que :</p>`
        + `<ul>`
            + `<li>le port est gratuit si le prix des produits TOT est supérieur à 500 €. Dans le cas contraire, le port est de 2% de TOT</li>`
            + `<li>la valeur minimale du port à payer est de 6 €</li>`
            + `<li>la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà</li>`
        + `</ul>`
}


const data_send = {
    pu : {
        id : "pu",
        name : "Prix Unitaire",
        pattern : "decimal_2"
    },
    qte : {
        id : "qte",
        name : "Quantité",
        pattern : "entier_sup"
    },
}

vs.form_start(def)

vs.add(
    {
        selecteur : "#formulaire",
        text : vs.form_name (data_send.pu)
    }
)
vs.add(
    {
        selecteur : "#formulaire",
        text : vs.form_name (data_send.qte)
    }
)

vs.form_end()

document.getElementById('valid_form').addEventListener("click", function () {

    //Prix a payer , port , remise, tot= prix total
    let message = ""

    if (verif_form.no_error()) {
        let PAP = 0
        let PORT = 0
        let REM = 0

        const PU = parseFloat(this.parentNode.querySelector("#" + data_send.pu.id).value)
        const QTECOM = parseInt(this.parentNode.querySelector("#" + data_send.qte.id).value)
        const TOT = QTECOM * PU

        if (TOT >= 100 && TOT <= 200)
            REM = TOT * (5 / 100)
        else if (TOT > 200)
            REM = TOT * (10 / 100)
        
        PAP = TOT - REM
        
        if (PAP > 500)
            PORT = 0
        else
        {
            PORT = PAP * (2 / 100)
            if (PORT < 6)
                PORT = 6 
        }
        
        PAP = PAP + PORT

        message = "<p>Prix HT : " + TOT.toFixed(2) + "€</p><p>Frais de port : " + PORT.toFixed(2) + "€</p><p>Remise : " + REM.toFixed(2) + "€</p><p>Prix TTC : " + PAP.toFixed(2) + "€</p>"
    } else {
        message = "<p>Remplissez correctement les champs</p>"
    }

    vs.modal_result(message)

}, false)