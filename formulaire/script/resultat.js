const params = new URLSearchParams(window.location.search);

const variable = ["nom","prenom","sexe","date_naissance","code_postal","ville","email","sujet","question","information"]

for ( let i = 0; i < variable.length; i++ ) {
    const valeur = params.get(variable[i]);
    $( "tbody" ).append( `<tr>
    <th scope="row">` + variable[i] + `</th>
    <td>` + valeur + `</td>
  </tr>`);
}
