"use strict";
class Aluno {
    nome;
    idade;
    curso;
    constructor(nome, idade, curso) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }
}
let aluno = new Aluno("João", 20, "Engenharia");
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);
