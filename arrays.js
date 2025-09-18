// Arrays

/* 
Inteiro numeros[5] = {10, 20, 30, 40, 50};
Inteiro i;
Para (i = 0; i < 5; i++) {
    Escreva(numeros[i]);
}
*/

let numeros = [10, 20, 30, 40, 50];

let nome = "Ana";

console.log(nome.lenght);

console.log(numeros.length);

for (let i = 0; i < numeros.length; i++) {
    console.log("Posição " + ": " + numeros[i]);
}





{
    let frutas = ["Banana", "Maçã", "Laranja"];

    for (let fruta of frutas) {
        //console.log(fruta);
    }

    frutas.forEach(fruta => console.log("Fruta: ", fruta));
}

{
let nomes = ["Ana", "Bruna", "Carla"];

nomes.unshift();
console.log(nomes) // Adiciona no início
}

{
let carros = ["Ford", "Mercedes", "Honda"];
carros.shift(); // Remove do início
console.log(carros);

console.log(carros.indexOf("Mercedes"));
}

{
let cores = ["Azul", "Verde", "Amarelo"];
console.log(cores.includes("Verde")); // true
console.log(cores.includes("Roxo")); // false
}

{
    let frutas = ["Banana", "Maçã", "Laranja"];
    console.log(frutas.slice(0, 2)); // ["Banana", "Maçã"]
}

{
    let palavra = "Javascript";
    console.log(palavra.slice(0, 4));

}

{
    let nome = "Ana Luisa";
    console.log(nome.toLocaleLowerCase());
    console.log(nome.toLocaleUpperCase());
}