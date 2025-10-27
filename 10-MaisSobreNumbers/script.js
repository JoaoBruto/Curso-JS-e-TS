let num1 = 1010; // Number
let num2 = 2; // Number

console.log(num1.toString() + num2); // Ele só se torna uma string nessa linha, o valor original de num1 continua sendo number
console.log(typeof num1); // number

// Transformar em binário
console.log(num1.toString(2));

//Arrendondar casas decimais

let valor_pi = 3.14159265359;
console.log(valor_pi.toFixed(2)); // 3.14

console.log(Number.isInteger(num1)); // Descobrir se é um número inteiro (vai retornar true ou false)