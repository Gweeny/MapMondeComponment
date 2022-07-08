const countries = document.querySelectorAll('a');
// console.log(countries);
const map = document.querySelector('#map');
const ids = Array.from(countries).map(country => country.id);
console.log(ids);
ids.toString();
console.log(ids.toString().length);


const countriesJson = fetch('Liste.json')
.then(response => response.json())
.then(data => {
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].CODEIATA);

//Correspondance code IATA
    if (ids.includes(data[i].CODEIATA)) {
      console.log(data[i].CODEIATA + " " + "est un pays");
      const country = document.querySelector(`#${data[i].CODEIATA}`);
      country.setAttribute('data-continent', data[i].Continents);
      country.setAttribute('data-aeroport', data[i].Aeroports);
      country.setAttribute('data-pays', data[i].Pays);
    } else {
      console.log(data[i].CODEIATA + " " + "n'est pas un pays");
    }

}
}
);

//Alert : 

for (let i = 0; i < countries.length; i++) {
    if (countries[i].id.length >= 3 ) {
      countries[i].classList.add('country');
      countries[i].addEventListener('click', function() {
          alert(countries[i].getAttribute('title') + ' ' + countries[i].getAttribute('id') + ' ' + countries[i].getAttribute('data-continent') + ' ' + countries[i].getAttribute('data-aeroport') + ' ' + countries[i].getAttribute('data-pays'));
      });
    } else {
      countries[i].style.cursor = 'default';
      countries[i].onclick = function(e) {
        e.preventDefault();
        return false;
      }
      
  }
}


// for (let i = 0; i < countries.length; i++) {
//     countries[i].getAttribute('xlink:title');
//     console.log(countries[i].getAttribute('xlink:title'));
// }




//Reprise à Cambodge