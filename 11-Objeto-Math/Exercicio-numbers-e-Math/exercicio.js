// Inputar o número
let num1 = parseFloat(prompt("Digite um número: "));



// Usando propriedades do Math

// Raiz quadrada
const raiz_quadrada = num1 ** 0.5; // Raiz quadrada usando propriedade.
const raiz_quadrada_resultado = alert(`A raiz quadrada de ${num1} é ${raiz_quadrada}`)

// Saber se é inteiro
const inteiro = Number.isInteger(num1); // Verifica se o número é inteiro.
const inteiro_resultado = alert(`O número ${num1} é inteiro? ${inteiro}`);

// Saber se é NaN
const nan = Number.isNaN(num1); // Verifica se o número é NaN.
const nan_resultado = alert(`O número ${num1} é NaN? ${nan}`);

// Arredondar para baixo e cima
const arrendondar_baixo = Math.floor(num1); // Arredonda para baixo.
const arrendondar_baixo_resultado = alert(`O número ${num1} arredondado para baixo é ${arrendondar_baixo}`);

const arrendondar_cima = Math.ceil(num1); // Arredonda para cima.
const arrendondar_cima_resultado = alert(`O número ${num1} arredondado para cima é ${arrendondar_cima}`);


// Arrendondar duas casas decimais
const arredondar_casasdecimais = num1.toFixed(2); // Arredonda para duas casas decimais.    
const arredondar_casasdecimais_resultado = alert(`O arredondamento de ${num1} para duas casas é ${arredondar_casasdecimais}`)

