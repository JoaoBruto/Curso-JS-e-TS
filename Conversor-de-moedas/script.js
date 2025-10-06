// Boas-vindas ao usuário
alert("Seja bem-vindo(a) ao Conversor de moedas")

// Captura a opção de conversão escolhida pelo usuário
const opcao = Number(prompt("Escolha a moeda que deseja converter: \n1 - Real para Dólar \n2 - Real para Euro \n3- Dólar para Real \n4- Euro para Real"))
// Captura o valor a ser convertido
const valor = Number(prompt("Digite o valor que deseja converter: "))

// Taxas de câmbio atuais
const taxaDolar = 5.34 // 1 dólar = 5.34 reais
const taxaEuro = 6.26   // 1 euro = 6.26 reais

// Realiza a conversão baseada na opção escolhida
if (opcao == 1) {
    // Real para Dólar: divide pela taxa
    alert(`O valor convertido é de: ${(valor / taxaDolar).toFixed(2)} dólares`)
}

else if (opcao == 2) {
    // Real para Euro: divide pela taxa
    alert(`O valor convertido é de: ${(valor / taxaEuro).toFixed(2)} euros`)
}

else if (opcao == 3) {
    // Dólar para Real: multiplica pela taxa
    alert(`O valor convertido é de: ${(valor * taxaDolar).toFixed(2)} reais`)
}

else if (opcao == 4) {
    // Euro para Real: multiplica pela taxa
    alert(`O valor convertido é de: ${(valor * taxaEuro).toFixed(2)} reais`)
}

else {
    // Trata opções inválidas
    alert("Opção inválida")
}