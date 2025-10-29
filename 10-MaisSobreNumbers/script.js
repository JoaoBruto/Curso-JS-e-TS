let num1 = 0.7; // Number
let num2 = 0.1; // Number

console.log(num1.toString() + num2); // Ele só se torna uma string nessa linha, o valor original de num1 continua sendo number
console.log(typeof num1); // number

// Transformar em binário
console.log(num1.toString(2));

//Arrendondar casas decimais

let valor_pi = 3.14159265359;
console.log(valor_pi.toFixed(2)); // 3.14

console.log(Number.isInteger(num1)); // Descobrir se é um número inteiro (vai retornar true ou false)

// Fazer o arredondamento correto com números decimais
num1 += num2; // num1 = num1 + num2 
num1 += num2; // num1 = num1 + num2 
// Resultado esperado: 2.0
// Resultado real: 1.9999999999999998

num1 = parseFloat(num1.toFixed(2)); // Agora sim, o valor de num1 é 2.0
// No parsefloat, podia ser usado o Number() também
console.log(num1); // 2.0
