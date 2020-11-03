/* Converteix a funcions fletxa:

/* 1- Multiply() function
*  function multiply(num1, num2) {
*     return num1 * num2;
*  }
*/

//ANWSERS: 1-Multiply() function
let multiply = (num1,num2) => {
    return num1 * num2;
}

console.log(multiply(2, 6));
//12

/* 2- toCelsius() function
* function toCelsius(fahrenheit) {
*    return (5/9) * (fahrenheit-32);
*  }
*/

//ANSWER: 2-toCelsius() function
let toCelsius = (fahrenheit) => {
    return (5/9) * (fahrenheit - 32);
}

console.log(toCelsius(40));
//4.444444444444445 Celcius

/* 3 - padZeros() function
* This function returns a string padded with leading zeros
* function padZeros(num, totalLen) {
*     var numStr = num.toString();
*     var numZeros = totalLen - numStr.length;
*     for (var i = 1; i <= numZeros; i++) {
*        numStr="0" + numStr; 
*        } 
*     return numStr;
*   } 
*/

//ANSWER: 3- padZeros() function
//This function returns a string padded with leading zeros
let padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;

    for (let i= 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}

console.log(padZeros(5, 10));
//0000000005

/* 4-power() function
*  function power(base, exponent) { 
*     var result=1; 
*     for (var i=0; i < exponent; i++) { 
*           result *=base; 
*     } 
*     return result;
*  } 
*/

//ANSWER: 4-power() function
let power = (base, exponent) => {
    let result = 1;
    for (let i= 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(4, 10));
//1048576

/*
* 5-greet() function
*  function greet(who) {
*      console.log("Hello " + who);
*  }
*/

//ANSWER: 5-greet() function
let greet = (who) => {
    console.log(`Hello ${who}`);
}

greet("Diana");
//Hello Diana 