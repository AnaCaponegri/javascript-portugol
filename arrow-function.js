/*
funcao en Portugol

funcao real calculadoraMedia(real n1, real n2, real n3)
    real media
    media = (n1 + n2 + n3) / 3
    retorne media
fimfuncao
*/

function soma(n1, n2) {
    return (n1 + n2);
    }
    
    function subtracao(n1, n2) {
    return (n1 - n2);
    }
    
    function multiplicacao(n1, n2) {
    return (n1 * n2);
    }
    
    function divisao(n1, n2) {
    return (n1 / n2);
    }
    
    let resultado = soma(7, 8);


    //Arrow Function

    const somaArrow = (a, b) => a + b;
    console.log(soma(3, 4)); //7

    const subtracaoArrow = (a, b) => a - b;
    console.log(subtracao(10, 5)); //5  

    const multiplicacaoArrow = (a, b) => a * b;
    console.log(multiplicacao(4, 5)); //20      

    const divisaoArrow = (a, b) => a / b;
    console.log(divisao(20, 4)); //5

    function e_par(numero) {
        return numero % 2 === 0;
    }
    
    console.log(e_par(5)); //false
    console.log(e_par(6)); //true