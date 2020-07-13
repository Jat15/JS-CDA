//Prend url du navigateur
let params = new URLSearchParams(window.location.search);

//Prend les valeur assigner a c et e
let c = params.get("c");
let e = params.get("e");

//Si ces valeur sont null on les change
if (!(c && e)) {
  c = "04";
  e = "01";
}

//On charge la vue ou on met un message d'erreur
import('./exercice/'+ c + '-' + e + '.js')
      .then(x => x)
     /* .catch(err => {
        alert("Erreur")
      })*/