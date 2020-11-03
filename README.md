# ES6-ex
Javascript, ES6 exercises


## Exercici repàs ES6 (React M6)
Aquest exercici és molt senzill: es plantegen petits fragments de codi JavaScript ES5, els quals s'han de reescriure per a utilitzar la nomenclatura d'ES6 i resoldre petits reptes mitjançant ES6.
L'objectiu és repassar els coneixements adquirits d'ES6

### Exercici 1
Mostra els literals en format ES6
``
var li =
 '<li>' +
'<div class="row">' +
'<div class="col-md-4">' +
'<img src="' + moviePoster + '" height="250" alt="" />' +
'</div>' +
'<div class="col-md-8">' +
'<h2>' + movieTitle + '</h2>' +
'</div>' +
'</div>' +
'</li>';
````

### Exercici 2
Converteix a funcions fletxa:

```
function multiply(num1, num2) {
   return num1 * num2;
}

function toCelsius(fahrenheit) {
   return (5/9) * (fahrenheit-32);
}

// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
   var numStr = num.toString();
   var numZeros = totalLen - numStr.length;
   for (var i = 1; i <= numZeros; i++) {
      numStr="0" + numStr; 
      } 
   return numStr;
 } 

function power(base, exponent) { 
   var result=1; 
   for (var i=0; i < exponent; i++) { 
         result *=base; 
   } 
   return result;
} 

function greet(who) {
    console.log("Hello " + who);
}
``` 

### Exercici 3
Arregla l'error del següent bloc de codi:

```
users.map(function (user) {
   user.firstName;
});

var users = 
[{ firstName: 'Homer', lastName: 'Simpson' },
{ firstName: 'Marge', lastName: 'Simpson' },
{ firstName: 'Bart', lastName: 'Simpson' },
{ firstName: 'Lisa', lastName: 'Simpson' },
{ firstName: 'Maggie', lastName: 'Simpson' }];
```

### Exercici 4
Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()

```
var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

Resultat per consola: 'a long time ago in a galaxy far far away'
Nota: no fa falta fer un "join".
```

### Exercici 5
Crear una funció que accepti un string i retornada aquest string revertit.
Nota: Usar funció fletxa (arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()


### Exercici 6
Reemplaça en el següent bloc de codi la promesa per aync/await:

```
function b() {
   // ...
}
funtion a() {
   b().then() = > {
   doMoreWork();
   }
}
```

### Exercici 7
Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 
- Usar .forEach() per obtenir aquest array.
- Usar .map() per obtenir aquest array.

```
var tasks = [
{
   'name' : 'Start React web',
   'duration' : 120
},
{
   'name' : 'Work out',
   'duration' : 60
},
{
   'name' : 'Procrastinate on facebook',
   'duration' : 240
}
];
```

Respostas en el código.

