// TUPLAS em TypeScript
// Uma tupla é um tipo de dado que permite armazenar uma coleção de elementos de diferentes tipos em uma única variável. 
// Diferente dos arrays, que são homogêneos (todos os elementos do mesmo tipo), as tuplas podem conter elementos de tipos variados e têm um tamanho fixo.

// Exemplo de declaração de uma tupla
let pessoa: [string, number, boolean];

// Atribuindo valores à tupla
pessoa = ["João", 30, true];

// Acessando elementos da tupla
console.log(pessoa[0]); // Saída: João
console.log(pessoa[1]); // Saída: 30
console.log(pessoa[2]); // Saída: true

// Tuplas com tipos opcionais e valores padrão
let endereco: [string, string?, string?] = ["Rua A", "123"];
console.log(endereco); // Saída: ["Rua A", "123"]

// As Tuplas são tratadas como arrays, então você pode usar métodos de array, como push e pop, 
// mas é importante lembrar que o tipo e a ordem dos elementos devem ser respeitados.
