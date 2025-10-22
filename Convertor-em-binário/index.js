const boas_vindas = alert("Seja bem-vindo(a) ao meu site!");
console.log(boas_vindas);

let numero_inteiro = parseInt(prompt("Digite o número que deseja converter para binário:"));

let numero_binario = numero_inteiro.toString(2);
const resultado = alert(`O número ${numero_inteiro} em binário é: ${numero_binario}`)

console.log(numero_binario);