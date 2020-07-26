const table_regex = {
    sujet : {
        regexp : /^.+$/,
        message : "Sélectionner quelque chose !",
    },
    question : {
        regexp : /^.+$/,
        message : "Il faut écrire quelque chose !",
    },
    nom : {
        regexp : /^[A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1}[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]{0,}([- ']{1}[A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1}[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]{0,}){0,}$/,
        message : "Désolé votre nom n'est pas valide, veuillez en changé!",
        maj : true
    },
    prenom : {
        regexp : /^[A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1}[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]{0,}([- ']{1}[A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1}[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]{0,}){0,}$/,
        message : "Désolé votre prénom n'est pas valide, veuillez en changé!",
        maj: true
    },
    email : {
        regexp : /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message : "Veuillez choisir un courielle valide"
    },
    code_postal : {
        regexp : /^$|^[0-9]{5}$/,
        message : "Veuillez choisir un code postal valide"
    },
    date_naissance : {
        regexp : /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
        message : "Veuillez choisir une date valide"
    },
    sexe : {
        regexp : /^(F|M)$/,
        message : "Veuillez choisir votre sexe",
        container : "#divsexe"
    },
    information : {
        regexp : /^accepter$/,
        message : "Veuillez accepter qu'on vende vos données personelles",
        container : "#divinformation"
    },
    ville : {
        regexp: /^([A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1}[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]{0,}([- ']{1}[A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1}[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]{0,}){0,}|)$/,
        message : "Tu sais même pas ou t'habite",
        maj : true
    }
};


/*
Si il y a quelque chose dans container on déduit que ces radio ou checkbox
Si il y a les donnée dans la table et que l'id existe
	Si on a un Nom propre on le format
	Si on cache ou affiche les erreurs et le retour
*/
function affichage(name) {
    let name_value = "[name="+name+"]"

	if (table_regex[name]["container"] != undefined ) {
		name_value += ":checked" 
    }
	
	let value = $(name_value).val()

    if (undefined != table_regex[name]  && $("#error_"+name).length) {
        if (table_regex[name]["maj"] != undefined) {
            let separateur = /^[\s,',-]$/
            let premier_lettre = true
            let assemblage = ""
            for (let i = 0; i < value.length; i++) {
                if (separateur.test(value[i])) {
                    assemblage += value[i]
                    premier_lettre = true
                } else if (premier_lettre) {
                    assemblage += value[i].toUpperCase()
                    premier_lettre = false
                } else {
                    assemblage += value[i].toLowerCase()
                }
            }
            value = assemblage
            $(name_value).val(value)     
        }

        if(table_regex[name]["regexp"].test(value)) {
            $("#error_"+name).hide()
            return false
        } else {
            $("#error_"+name).show()
            return true
        }
    }
}

//Quand un champs est modifier 
$( "input, textarea, select" ).bind("keyup change", function () {
    let name = $(this).attr("name")
    affichage(name) 
})

//a l'envoie du formulaire
$("form").submit(function () {
    let erreur = false
    for (let name in table_regex) {
        erreur = affichage(name) || erreur
    }
    return !erreur
})

//Si reset
$(":reset").click(function () {
    $("form").trigger("reset")
})