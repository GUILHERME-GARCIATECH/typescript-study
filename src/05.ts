// Atribuição de tipos em variáveis explicita
let vNumero: number; 
vNumero = 10;
// vNumero = "10"; --- Não posso fazer isso, pois a variável vNumero é do tipo number.

let vTexto: string;
vTexto = "Hola Mundo";
// vTexto = 100; --- Não posso fazer isso, pois a variável vTexto é do tipo string.

let vValores: number|string;
vValores = 123;
vValores = "Hola Mundo";
// Receber um valor diferente de number ou string, como por exemplo um boolean, resultará em erro.

let vAny: any;
vAny = 123;
vAny = "Hola Mundo";
vAny = true; // Aceita qualquer tipo de valor, pois a variável vAny é do tipo any.

let vArray: number[] = [1, 2, 3, 4, 5]; // Declarando um array de números
let vArray2: string[] = ["Hola", "Mundo"]; // Declarando um array de strings
let vArray3: (number|string|boolean)[] = [1, "Hola", true]; // Declarando um array de varios tipos (number, string e boolean)

console.log(vNumero);
console.log(vTexto);
console.log(vValores);
console.log(vAny);
console.log(vArray);
console.log(vArray2);
console.log(vArray3);
