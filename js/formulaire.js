export let error_array = {}

/*
Les regex + message d'erreurs par défaut
*/
export const regex = {
    entier: {
        pattern: /^-?[0-9]+$/,
        message: "Entier positif et négatif"
    },
    entier_zero_sup: {
        pattern: /^[0-9]+$/,
        message: "Entier positif"
    },
    entier_sup: {
        pattern: /^[1-9][0-9]*$/,
        message: "Entier supérieurs à 0."
    },
    decimal_2: {
        pattern: /^(([1-9]{1,}[0-9]*)|([0-9]+\.([1-9][0-9]?|[0-9]?[1-9])))$/,
        message: "Minimum est 0.01 et deux décimal maximum."
    },
    operateur: {
        pattern: /^(\+|\-|\/|\*)$/,
        message: "L'opérateur ne peut être que : + - / *"
    },
    nom_propre: {
        pattern: /^[A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1}[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]{0,}([- ']{1}[A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1}[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]{0,}){0,}$/,
        message: "Les lettre et les espace, ', - sont autorisé."
    },
    nom_propre_rien: {
        pattern: /^([A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1}[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]{0,}([- ']{1}[A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1}[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]{0,}){0,})$|^$/,
        message: "Les lettre et les espace, ', - sont autorisé. Ou rien pour valider."
    }
}

/*
il chercher le nom du pattern dans les attribut
Si ces un nom propre on lui mes une majuscule aprés chaque séparation
Il affiche ou supprime le message d'erreur et le sauvegarde dans la variable gloabal
*/
function affichage(id) {
    const element = document.getElementById(id)
    const regex_index= element.getAttribute("data-vs-form-pattern")
    let value = element.value
    
    
       if (regex_index === "nom_propre" || regex_index === "nom_propre_rien") {
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

        if(regex[regex_index].pattern.test(value)) {
            element.parentNode.classList.remove("is-invalid")
            error_array[id] = true
        } else {
            element.parentNode.classList.add("is-invalid")
            error_array[id] = false
        }
}

/*
    Création de l'event et de sa valeur dans le tableau
*/
export function create_event(id){
    document.getElementById(id).addEventListener("keyup", function() {affichage(id)})
    error_array[id] = false
}

/*
    Met a jour le tableau des erreurs
    Calcule tout les boolean du tableau
    Si ces vraie tout les valeur sont remis sur "faux"
    Renvoie la boolean 
*/
export function no_error(){
   
    document.querySelectorAll("input[data-vs-form-pattern]").forEach( input => affichage(input.id))
    let no_error = true

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