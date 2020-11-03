/* Crear una funció que accepti un string i retornada aquest string revertit. 
* Nota: Usar funció fletxa (arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()
* NOTE: [...]= A spread operator changes string into an array of characters. 
* NOTE: .join('') method changes an array of characters into a string
*/

let name = "Diana";

let reverseString = (string) => {
   
    let arrayString = [...string]; 
    let stringReversed = arrayString.reverse();
  
    return stringReversed.join(''); 
}

console.log(reverseString(name)); //anaiD