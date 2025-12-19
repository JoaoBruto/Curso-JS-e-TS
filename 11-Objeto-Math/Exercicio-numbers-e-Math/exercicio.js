// Inputar o número
let num1 = parseFloat(prompt("Digite um número: "));
const numeroSelecionado = document.getElementById('numero-selecionado')
const texto = document.getElementById('texto')

numeroSelecionado.innerHTML = num1; // Modificando o body do HTML pelo JS (arquivo separado)

// Usando propriedades do Math

// Raiz quadrada
const raiz_quadrada = num1 ** 0.5; // Raiz quadrada usando propriedade.
const Raiz_quadrada = document.getElementById('raiz-quadrada');
Raiz_quadrada.innerHTML = raiz_quadrada;

// Saber se é inteiro
const inteiro = Number.isInteger(num1); // Verifica se o número é inteiro.
const Numero_selecionado_pelo_usuário = document.getElementById("numero-selecionado-para-saber-se-é-inteiro"); // Pega o número inserido pelo usuário
const Resultado_inteiro = document.getElementById("resultado-int"); // Pega do HTML o id para modificar
Numero_selecionado_pelo_usuário.innerHTML = num1; // Muda o número no HTML, pelo número selecionado pelo usuário
Resultado_inteiro.innerHTML = inteiro; // Imprime o resultado

// Saber se é NaN
const nan = Number.isNaN(num1); // Verifica se o número é NaN.
const Resultado_NaN = document.getElementById("resultado-NaN");
Resultado_NaN.innerHTML = nan;

// Arredondar para baixo e cima
const arrendondar_baixo = Math.floor(num1); // Arredonda para baixo.
const Resultado_Arredondamento = document.getElementById("Resultado-arredondamento-baixo");
Resultado_Arredondamento.innerHTML = arrendondar_baixo;

const arrendondar_cima = Math.ceil(num1); // Arredonda para cima.
const Resultado_Arredondamento_cima = document.getElementById("Resultado-arredondamento-alto");
Resultado_Arredondamento_cima.innerHTML = arrendondar_cima


// Arrendondar duas casas decimais
const arredondar_casasdecimais = num1.toFixed(2); // Arredonda para duas casas decimais.    
const Resultado_casasdecimais = document.getElementById("Resultado-duas-casas-decimais")
Resultado_casasdecimais.innerHTML = arredondar_casasdecimais

