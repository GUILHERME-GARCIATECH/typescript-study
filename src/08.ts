// Tipo OBJECT em typescript

// O tipo object representa um valor que não é um tipo primitivo (string, number, boolean, symbol, null ou undefined).
// Ele é usado para representar qualquer valor que seja um objeto.

let dados = { // Também posse ser declarado dessa forma -> let dados: object = {} 
             // Não é recomendado, porque o TypeScript deixa de conhecer a estrutura do objeto (atributos e métodos) e não consegue fazer validações de tipos corretamente.
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    saudacao: () => console.log("Olá, meu nome é " + dados.nome),
    info: () => console.log(`Nome: ${dados.nome}, Idade: ${dados.idade}, Cidade: ${dados.cidade}`)
}
dados.saudacao();
dados.info();
console.log(typeof dados);
