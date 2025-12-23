const escolher_numero = parseFloat(prompt("Digite o número que deseja converter para binário:"));
const Numero_escolhido = document.getElementById("numero_escolhido")
Numero_escolhido.innerHTML = escolher_numero;

let numero_binario = escolher_numero.toString(2);
const Resultado = document.getElementById("numero_binario")
Resultado.innerHTML = numero_binario;

if (isNaN(escolher_numero)) {
    alert("Por favor, insira um número.");
    Numero_escolhido.innerHTML = "Não é um número válido";
    Resultado.innerHTML = "Não é um número válido";
}
