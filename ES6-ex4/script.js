/* Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()
* var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
* Resultat per consola: 'a long time ago in a galaxy far far away'
* Nota: no fa falta fer un "join".
*/ 

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let epicPhrase = epic.reduce((sum, currentValue) => {
    return `${sum} ${currentValue}`
})
console.log(epicPhrase); 
//'a long time ago in a galaxy far far away'