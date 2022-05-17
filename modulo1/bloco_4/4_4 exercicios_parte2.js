// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

function verificaPalindrome(a) {
    let palindrome = false;
    let verificador = a.split('');
    let inversa = verificador.reverse();
    verificador = a.split('');
    for (let index =0; index < verificador.length ; index +=1) {
        if (verificador[index] == inversa[index]) {
            palindrome = true;
        } else {
            palindrome = false;
            break;
        }

    }
    console.log(palindrome);
    return palindrome;
}

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function indiceDoMaior(a) {
    let maiorNumero, indice;
    for (let index =0; index < a.length -2; index +=1) {
        if (a[index] > a[index+1]) {
            maiorNumero = a[index];
            indice = index;
        } else {
            maiorNumero = a[index+1]
            indice = index +1
        }
    }
    return indice;
}
