const nomes = ['Ana', 'Beatriz', 'Carlos', 'Sara']
console.log(nomes[3]) // Sara (Pega o elemento na posição 3 do array)
console.log(nomes) // Imprime o array completo

nomes[2] = "João" // Altera o elemento na posição 3 do array
console.log(nomes) // Imprime o array completo com a alteração

nomes.push("Marcelo") // Adiciona um novo elemento no final do array (forma recomendada)
console.log(nomes) // Imprime o array completo com o novo elemento

nomes.unshift("Juliana") // Adiciona um novo elemento no início do array (Basicamente ele move todos os elementos uma posição para a direita. Indice 0 vai para 1, indice 1 vai para 2, e assim por diante)
console.log(nomes) // Imprime o array completo com o novo elemento no início

nomes.pop() // Remove o último elemento do array (pop significa "estourar" em inglês)
console.log(nomes) // Imprime o array completo sem o último elemento

nomes.shift() // Remove o primeiro elemento do array (shift significa "deslocar" em inglês)
console.log(nomes) // Imprime o array completo sem o primeiro elemento

console.log(nomes.slice(1, 4)) // Pega uma fatia do array, do índice 1 ao índice 3 (o índice 4 não é incluído)


    