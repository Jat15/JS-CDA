/*
Si il y a quelque chose dans la variable container on déduit que ces radio ou checkbox
Si il y a les donnée dans la table et que l'id existe
	Si on a un Nom propre on le format
	Si on cache ou affiche les erreurs et le retour
*/

export let error_array = {}

const regex = {
    entier: /^[1-9][0-9]*$/,
    decimal_2: /^(([1-9]{1,}[0-9]*)|([0-9]+\.([1-9][0-9]?|[0-9]?[1-9])))$/,
    nom_propre: /^[A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1}[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]{0,}([- ']{1}[A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1}[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]{0,}){0,}$/
}

function affichage(name) {
    const element = document.querySelector("#"+name)
    const regex_index= element.getAttribute("data-vs-form-pattern")
    let value = element.value
    
    
       if (regex_index === "nom_propre") {
            let separateur = /^[\s,',-]$/
            let premier_lettre = true
            let assemblage = ""
            for (let i = 0; i < value.length; i++){
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

            if (value != assemblage) {
                element.value = assemblage
                value = assemblage
            }
        }

        if(regex[regex_index].test(value)) {
            element.parentNode.classList.remove("is-invalid")
            error_array[name] = true
        } else {
            element.parentNode.classList.add("is-invalid")
            error_array[name] = false
        }
}

//Quand un champs est modifier 
//change

//document.querySelectorAll("input, textarea, select").forEach(input => input.addEventListener("keyup", 
function verif(id) {
    affichage(id)
}

export function create_event(id){
    document.getElementById(id).addEventListener("keyup", function() {verif(id)})
    error_array[id] = false
}

export function no_error(){
    let no_error = true;
    Object.values(error_array).forEach(function(input) {
        no_error = input && no_error
    })

    if (no_error) {
        Object.keys(error_array).forEach(function(cle) {
            error_array[cle] = false
        })
    }
    return no_error
}
/*
//a l'envoie du formulaire
document.querySelector("form").addEventListener("submit", function (){
    let erreur = false
    for (let name in table_regex) {
        erreur = affichage(name) || erreur
    }
    return !erreur
})



//Si reset

//.addEventListener('reset')
$(":reset").click(function (){
    $("form").trigger("reset")
    for (let name in table_regex) {
        erreur = affichage(name)
    }
})
*/