// SNACKS

$(document).ready(function(){
// JSnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore con handlebars.

const biciclette = [
{
  nome: 'Pinarello',
  peso: 10
},

{
  nome: 'Bianchi',
  peso: 8
},

{
  nome: 'Scott',
  peso: 11
},

];
// handlebars
// const source = $('#bike-template').html();
// const template = Handlebars.compile(source);


// Comparazione di elementi di un array

// bicicletta di riferimento

// var biciclettaLeggera = biciclette [0];

// // for (var i = 1; i < biciclette.length; i++) {
// //   if(biciclette[i].peso < biciclettaLeggera.peso ){
// //     biciclettaLeggera = biciclette[i];
// //   }
// }

// console.log(biciclettaLeggera);


// let data = {
//   nome: biciclettaLeggera.nome,
//   peso: biciclettaLeggera.peso
// };
//
// let html = template(data);
// $('.container').append(html);


let biciclettaLeggera = biciclette [0];
let pesoPiuLeggero = biciclette[0].peso;

biciclette.forEach( (element) => {
  if (element.peso < pesoPiuLeggero ) {
    biciclettaLeggera = element;
    pesoLeggero = element.peso;
  }
});
console.log(biciclettaLeggera);


const {nome,peso} = biciclettaLeggera;
$('.container').html(`
  <div>
  <h3>Nome bici leggera: ${nome}</h3>
  <h3>Nome bici leggera: ${peso}</h3>
  </div>
`);


});
