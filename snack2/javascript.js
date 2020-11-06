//
// JSnack 2
// Partendo da un array di nomi (scelti da voi) creiamo un nuovo array con solo i valori che hanno la posizione compresa tra i due numeri scelti dall'Utente...
//

// $(document).ready(function(){
//
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
//
// var tot = myArray.length - 1;
// var min = parseInt(prompt('Indici di inizio, tra 0 e ' + tot) );
// var max = parseInt(prompt('Indici di fine(superiore a indice inizio), tra 0 e ' + tot ) );
//
// var newArray = [];
// for (var i = 0; i < myArray.length; i++) {
//   if (min <= i && max >= i) {
//     newArray.push(myArray[i]);
//   }
// }
//
// console.log('Originale',myArray);
// console.log('Indici', min, max);
// console.log('Nuovo', newArray);
// });

const nomi = [ 'pietro', 'luca', 'vittorio', 'lucia', 'francesco'];

let totale = nomi.length - 1;
let min = parseInt(prompt('Indici di inizio, tra 0 a 4') );
let max = parseInt(prompt('Indici di inizio, tra 0 a 4') );
let nuovaLista =[];

// nomi.forEach( (element, index) => {
//   if(min <= index && max >= index ){
//     nuovaLista.push(element);
//     }
// })

nuovaLista = nomi.filter((element,index)) => {

 return min <= index && max >= index;

}


console.log(nuovaLista);
