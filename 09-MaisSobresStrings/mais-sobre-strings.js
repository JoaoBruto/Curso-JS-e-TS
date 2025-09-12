// Strings são indexadas
//               01234567
let umastring = "um texto";

console.log(umastring.indexOf('texto')); // Achar index de determinado texto
console.log(umastring.lastIndexOf('texto', 3)) // Achar index de trás pra frente

console.log(umastring.match(/[a-z]/g)); //Conta as letras minusculas
console.log(umastring.search(/[x]/g)) // Mostra o index do x

console.log(umastring.replace('um', 'outro'));

console.log(umastring.length); // Contar quantos caracteres tem