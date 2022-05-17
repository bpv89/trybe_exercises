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
    let maiorNumero =0, indice, tempMaiorNumero, tempIndice;
    for (let index =0; index < a.length -1; index +=1) {
        if (a[index] > a[index+1]) {
            tempMaiorNumero = a[index];
            tempIndice = index;
        } else {
            tempMaiorNumero = a[index+1]
            tempIndice = index +1
        }
        if (tempMaiorNumero > maiorNumero) {
            maiorNumero = tempMaiorNumero
            indice = tempIndice
        }
    }
    return indice;
}

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function indiceDoMenor(a) {
    let menorNumero = Number.MAX_SAFE_INTEGER, indice, tempMenorNumero, tempIndice;
    for (let index =0; index < a.length -1; index +=1) {
        if (a[index] < a[index+1]) {
            tempMenorNumero = a[index];
            tempIndice = index;
        } else {
            tempMenorNumero = a[index+1]
            tempIndice = index +1
        }
        if (tempMenorNumero < menorNumero) {
            menorNumero = tempMenorNumero
            indice = tempIndice
        }
    }
    return indice;
}

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function maiorNome(a) {
    let tempNome, maiorNome = '';
     for (let index = 0; index < b.length -1; index +=1) {
         if (a[index].length > a[index+1].length) {
             tempNome = a[index];
         } else {
             tempNome = a[index+1];
         }
         if ( tempNome.length > maiorNome.length) {
            maiorNome = tempNome
         }
         
        }
        return maiorNome;
}

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.


function moda (a) {
    let contagem = [], tempRepeticao, repetidos =0, tempIndice, indice;
    a.forEach((x) => {
        contagem[x] = (contagem[x] || 0) +1;
        
    });
    for (let index = 0; index <contagem.length -1; index +=1) { 
        if ( contagem[index] > contagem[index+1]){
            tempRepeticao = contagem[index];
            tempIndice = index;
        } else {
            tempRepeticao = contagem[index +1];
            tempIndice = index +1;
        }
        if (tempRepeticao > repetidos) {
            repetidos = tempRepeticao;
            indice = tempIndice
        }
    }
    return indice;
}

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function somanaturais(a) {
    let resultadoString = '';
    let resultado = 0;
    for (let index = 1; index <= a; index +=1) {
        resultadoString += index;
        resultado += index;
        if (index == a) {
            resultadoString += '='
        } else{
            resultadoString += '+'
        }
    }
    return console.log(resultadoString + resultado );
}

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function acharString(word, ending) {
    let resultado = false;
    let palavra = word.split('').reverse();
    let final = ending.split('').reverse();
    for (let index =0; index < final.length; index +=1) {
        if ( palavra[index] == final[index]) {
            resultado = true;
        } else {
            resultado = false;
            break;
        }
    }
return resultado
}


