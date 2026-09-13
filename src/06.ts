// Array e ReadonlyArray
// Array é um tipo de dado que representa uma coleção de elementos do mesmo tipo. 
// Ele é mutável, ou seja, você pode adicionar, remover ou modificar elementos após a criação do array.

let numeros: number[] = [1, 2, 3, 4, 5];
numeros.push(6); // Adiciona o número 6 ao final do array
console.log(numeros); // Saída: [1, 2, 3, 4, 5, 6]

// ReadonlyArray é um tipo de dado que representa uma coleção de elementos do mesmo tipo,
// mas é imutável. Isso significa que você não pode adicionar, remover ou modificar elementos após a criação do array.

let nomes: ReadonlyArray<string> = ['Alice', 'Bob', 'Charlie'];
// nomes.push('David'); // Erro: Property 'push' does not exist on type 'readonly string[]'.
console.log(nomes); // Saída: ['Alice', 'Bob', 'Charlie']   