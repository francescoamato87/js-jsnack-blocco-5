// JSnack 3
// Creiamo un array di oggetti (scelti da voi)
// Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
// Non dobbiamo modificare l'array iniziale.

$(document).ready(function(){

var arrayObj = [
{name:'Poppy', type: 'tshirt', color:'red'},
{name:'Jumping', type: 'okkiali', color:'blue'},
{name:'CrissCross', type: 'scarpe', color:'black'},
{name:'Jenny', type: 'borsa', color:'pink'},
];

var newArrayObj = [];
// .slice() .concat() non clona Array con oggetti dentro che rimangono come referenze

// var newArrayObj = arrayObj.slice();

// newArrayObj[0].position = 'a';
for (var i = 0; i < arrayObj.length; i++) {
  var copyObj = {
    name:arrayObj[i].name,
    type:arrayObj[i].type,
    color:arrayObj[i].color,
    position: generatePosition()
  }

newArrayObj.push(copyObj);


}

console.table(arrayObj);
console.table(newArrayObj);


// Genera random position
function generatePosition(){
  var letters = 'abcdefghilmnopqrstuvwxyz' ;

  var letter = letters[randomNumber(0, letters.length - 1)];

  return letter;
}

// Genera numeri random
function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

});
