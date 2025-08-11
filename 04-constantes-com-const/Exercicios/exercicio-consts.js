/* Luiz Otávio Miranda tem 30 anos, pesa 84kg, tem 1.80 de altura e seu imc é de 25.92 */
const nome = 'João Rodrigo';
const sobremome = 'Ferreira Freire';
const peso = 80;
const altura = 1.82;
const idade = 16;
let imc = peso / altura ** 2;
let anoNascimento = 2025 - idade
console.log(nome, sobremome ,"tem", idade ,"anos,", "pesa", peso, 'kg, tem', altura, "de altura", 'e seu imc é de', imc);

console.log(`${nome} ${sobremome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu imc é de ${imc}`)