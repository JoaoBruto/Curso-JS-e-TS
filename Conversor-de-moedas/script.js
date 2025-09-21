const sejabemvindo = alert("Seja bem vindo(a) ao Conversor de moedas")

const escolher_moeda = prompt("Escolha a moeda que deseja converter: \n1 - Dólar \n2 - Euro ")
const valor = prompt("Digite o valor que deseja converter: ")
const moeda = Number(escolher_moeda)

const dolar = 5.33
const euro = 6.25

const conta_dolar = alert(`O valor em dolar é ${valor * dolar}`)
const conta_euro = alert(`O valor em euro é ${valor * euro}`)
