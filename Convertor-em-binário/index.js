const escolher_numero = parseFloat(prompt("Digite o número que deseja converter para binário:")); // solicita ao usuário que insira um número   
const Numero_escolhido = document.getElementById("numero_escolhido") // seleciona o elemento HTML para exibir o número escolhido
Numero_escolhido.innerHTML = escolher_numero; // exibe o número escolhido na página

let numero_binario = escolher_numero.toString(2);
const Resultado = document.getElementById("numero_binario")
Resultado.innerHTML = numero_binario;

if (isNaN(escolher_numero)) { // verifica se o valor inserido não é um número
    alert("Por favor, insira um número."); // alerta o usuário para inserir um número válido
    Numero_escolhido.innerHTML = "Não é um número válido"; // exibe mensagem de erro no elemento HTML
    Resultado.innerHTML = "Não é um número válido";
}
