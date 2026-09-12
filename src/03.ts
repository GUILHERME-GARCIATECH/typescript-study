// Exemplo de compilação de código TypeScript para JavaScript (transpilação)
class Aluno{
    nome: string;
    idade: number;
    curso: string;
    constructor(nome: string, idade: number, curso: string) {
        this.nome = nome;
        this.idade = idade;
        this.curso= curso;
    }
}

let aluno = new Aluno("João", 20, "Engenharia");
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);
