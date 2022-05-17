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


// BÔNUS 


// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function romanos(a){
    let valor = [];
    let somatório =0;
    let romanos = {
        I: 1,
        V: 5,
        X: 9,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,    
    }
    let numero = a.split('');
    for ( let index = 0; index < numero.length; index += 1) {
        valor[index] = romanos[numero[index]];
    }
    for (let index = 0; index < numero.length; index +=1) {
        if (valor[index] < valor[index +1]) {
            somatório -= valor[index];
        } else {
            somatório += valor[index];
        }

    }
return somatório;
}


// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

function arrayOfNumbers(vector) {
    let resultado = [];
    for (let run of vector){        
        for (let numeros of run){
            if (numeros % 2 == 0){
                resultado.push(numeros);
            }
        }

    }
return resultado
}

// 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

function contadorDeFrutas(a) {
    let basket = {};
    a.forEach((x) => {
        basket[x] = (basket[x] || 0) +1;
        
    })
    console.log('Sua cesta possui ' + basket.Melancia + ' Melancias, ' + basket.Abacate + ' Abacates, ' + basket.Uva + ' Uvas, ' + basket.Laranja + ' Laranjas, ' + basket.Jaca + ' Jacas, ' + basket.Pera + ' Peras e ' + basket.Banana + ' Bananas.' );
    return basket;
}

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];


  let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  function acharMorador( morador, bloco, posicao) {
      console.log('O morador do bloco 2 de nome ' + morador[bloco][posicao].nome + ' ' + morador[bloco][posicao].sobrenome + ' mora no ' + morador[bloco][posicao].andar +'º andar, apartamento ' + morador[bloco][posicao].apartamento + '.');
  }

//   5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome, depois faça o mesmo para os moradores do bloco 2.

function nomesDosMoradores (moradores) {
    for (let index in moradores) {  
            console.log(index);          
            for ( let indice = 0; indice < Object.keys(moradores).length; indice += 1) {
            console.log(moradores[index][indice].nome + ' ' + moradores[index][indice].sobrenome);
            }
        }
    }


nomesDosMoradores(moradores);