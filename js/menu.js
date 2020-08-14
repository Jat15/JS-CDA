export const menu = {
    4: {
        cours: "04 - Afficher du texte",
        excercice: [
            "01"
        ]
    },
    6: {
        cours: "06 - Conditions",
        excercice: [
            "01 - Parité", 
            "02 - Age", 
            "03 - Calculette",
            "04 - Remise",
            "05 - Participation"
        ]
    },
    7: {
        cours: "07 - Boucles",
        excercice: [
            "01 - Saisie", 
            "02 - Entiers inférieurs à N", 
            "03 - Somme des entiers inférieurs à N",
            "04 - Somme d'un intervalle",
            "05 - Moyenne",
            "06 - Mini et maxi",
            "07 - Multiples",
            "08 - Nombre de voyelles",
            "09 - Calcul du nombre de jeunes, de moyens et de vieux",
            "10 - Un nombre est-il premier",
            "11 - Nombre magique"
        ]
    },
    8: {
        cours: "08 - Fonctions",
        excercice: [
            "01",
            "02 - Table de multiplication",
            "03 - Compter le nombre de lettres",
            "04 - Menu",
            "05 - String Token"
        ]
    },
    9: {
        cours: "09 - Tableaux",
        excercice: [
            "01",
            "02",
            "03",
            "04"
        ]
    },
    20: {
        cours: "? - Formulaire",
        excercice: [
            "01"
        ]
    }
}

/*
    Création du menu et implèmentation
*/
function create_menu() {

    let text ="<ul class=\"mdl-navigation\">"
  
    Object.entries(menu).forEach(([cle, valeur]) => {
      text +=`<li>`
            + `<span class="mdl-layout-title">` + menu[cle].cours + `</span>`
        + `<ul>`
      Object.entries(valeur.excercice).forEach(([key, value]) => {
         let ex = parseInt(key)+1
        ex = ex<10 ? "0"+ex : ex
        let c= parseInt(cle)
        c = c<10 ? "0" + c : c
          text +=`<li>`
                +`<a class="mdl-navigation__link" href="index.html?c=` + c + `&e=` + ex + `">`+ value + `</a>`
            +`</li>`
      });
      text +=`</ul>`
        +`</li>`
    });
  
    text += "</ul>"

    document.querySelector('.mdl-layout__drawer').insertAdjacentHTML('beforeend', text)
}

create_menu()
