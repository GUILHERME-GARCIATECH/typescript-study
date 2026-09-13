// Null (nulo) - Undefined (indefinido) - Unknown (desconhecido)
let nulo: null = null;
let indefinido: undefined = undefined;

let vnome:string|null;
// console.log(vnome); // Erro: A variável 'vnome' foi declarada, mas não foi inicializada. Portanto, ela não pode ser usada antes de receber um valor.

vnome = "João";
console.log(vnome); // Saída: João

let vnome2;
console.log(vnome2); // Saída: undefined (a variável não foi inicializada)

// O tipo unknown é um tipo de dado que representa um valor desconhecido. Ele é útil quando você não sabe o tipo exato de um valor, mas ainda quer garantir a segurança do tipo em tempo de compilação.
// O unknown é mais seguro do que o any, pois você precisa fazer uma verificação de tipo antes de usá-lo, enquanto o any permite que você use o valor sem restrições.
// O unknown "persiste" mesmo que voce atribua outro tipo de valor a ele, ou seja, ele não se transforma em outro tipo de dado.
let desconhecido: unknown = 10;
desconhecido = "Olá";
desconhecido = true;

// Para usar o valor de uma variável do tipo unknown, você precisa fazer uma verificação de tipo antes de usá-la. Isso garante que você está lidando com o tipo correto e evita erros em tempo de execução.

if (typeof desconhecido === "string") {
    console.log(desconhecido.toUpperCase()); // Saída: OLÁ
} else if (typeof desconhecido === "number") {
    console.log(desconhecido.toFixed(2)); // Saída: 10.00
} else {
    console.log("Tipo desconhecido");
}

// O any desativa as checagens de tipo do TypeScript, permitindo que você atribua qualquer valor a uma variável e use-o sem restrições.