// ENUM

// Enum é um tipo de dado que permite definir um conjunto de valores nomeados, que podem ser usados para representar estados, categorias ou opções.
// Ele é útil para melhorar a legibilidade do código e evitar o uso de valores mágicos (números ou strings) diretamente no código.

enum dias {
    DOMINGO = 0,
    SEGUNDA = 1,
    TERCA = 2,
    QUARTA = 3,
    QUINTA = 4,
    SEXTA = 5,
    SABADO = 6
}

console.log(dias.DOMINGO); // Saída: 0
console.log(dias.SEGUNDA); // Saída: 1
console.log(dias.TERCA);   // Saída: 2
console.log(dias.QUARTA);  // Saída: 3
console.log(dias.QUINTA);  // Saída: 4
console.log(dias.SEXTA);   // Saída: 5
console.log(dias.SABADO);  // Saída: 6  

// dias.DOMINGO = 10; // Erro: Não é possível atribuir um novo valor a uma constante de enumeração.

console.log(dias[0]); // Saída: DOMINGO
console.log(dias[1]); // Saída: SEGUNDA 
console.log(dias[2]); // Saída: TERCA
console.log(dias[3]); // Saída: QUARTA
console.log(dias[4]); // Saída: QUINTA
console.log(dias[5]); // Saída: SEXTA
console.log(dias[6]); // Saída: SABADO

console.log(typeof dias); // Saída: object

console.log(dias); // Saída: { '0': 'DOMINGO', '1': 'SEGUNDA', '2': 'TERCA', '3': 'QUARTA', '4': 'QUINTA', '5': 'SEXTA', '6': 'SABADO', DOMINGO: 0, SEGUNDA: 1, TERCA: 2, QUARTA: 3, QUINTA: 4, SEXTA: 5, SABADO: 6 }

console.log(dias.DOMINGO === 0); // Saída: true

const diaAtual: dias = dias.QUARTA;
console.log(diaAtual); // Saída: 3

const d = new Date();
console.log(dias[d.getDay()]); // Saída: Dia da semana atual (ex: DOMINGO, SEGUNDA, etc.) dependendo do dia em que o código for executado.

enum cores {
    PRETO = "Preto",
    BRANCO = "Branco",
    VERMELHO = "Vermelho",
    VERDE = "Verde",
    AZUL = "Azul"
}

console.log(cores.PRETO); // Saída: Preto
console.log(cores["BRANCO"]); // Saída: Branco 

// console.log(cores["Preto"]); // Erro: undefined (não é possível acessar o valor do enum usando o valor da string)