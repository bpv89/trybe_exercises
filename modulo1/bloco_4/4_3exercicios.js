// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// Copiar
// O fatorial é representado pelo sinal !
// 
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

const { resolveTxt } = require("dns");


let fatorial =10;
let total =1;
for (let i =1; i < 11; i +=1) {
    total = total * i;
    console.log( i+'!' ,total);
}

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let inversa = "";
for (let inv = word.length -1; inv >= 0 ; inv -= 1){
    inversa += word[inv];
}
console.log(inversa);


// 3- Considere o array de strings abaixo:
// Copiar
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let tempMaior ='';
let maior = '';

for (let index = 0; index < array.length -1; index +=1) { 
    if ( array[index].length < array[index +1].length) {
        tempMaior = array[index +1];
    }
    else {
        tempMaior = array[index];
    }
    if (tempMaior.length > maior.length) {
        maior = tempMaior;
    }
}
console.log(maior);

let array2 = ['java', 'javascript', 'python', 'html', 'css'];
let tempMenor ='';
let menor = '';

for (let index = 0; index < array2.length -1; index +=1) { 
    if ( array2[index].length > array2[index +1].length) {
        tempMenor = array2[index +1];
    }
    else {
        tempMenor = array2[index];
    }
    if (menor.length == 0) {
        menor = tempMenor;
    }
    if (tempMenor.length < menor.length) {
        menor = tempMenor;
    }
}
console.log(menor);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let resto = 0;
let primo = 0;

for (let div = 1; div < 50; div +=1){
    for (let contador = 1; contador < 50; contador +=1){
        if ( div < contador) {
            break;
        }
        else if (div % contador == 0){
            resto +=1;            
        }
        if (resto > 2) {
            break;
        }
    }
    if (resto == 2) {
        if (div > primo){
            primo = div;
        }

    }
    resto = 0;  
}
console.log(primo);

// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****

let n =10;
let impressao = '';

for (let coluna = 0; coluna < n; coluna +=1) {
    impressao += '*'
}
for (let linha = 0; linha <n; linha +=1){
    console.log(impressao);
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// Copiar
// n = 5

// *
// **
// ***
// ****
// *****

let trig = 5;
let trigImpresso = "";

for (let linha = 0; linha < trig; linha +=1) {
    trigImpresso += '*'
    console.log(trigImpresso);
    
}

// // 3- Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****
let trigInv = 5;
let trigImpressoInv = "";

for (let linha = 0; linha < trigInv; linha +=1) {
    for (let coluna = 0; coluna < trigInv; coluna += 1){
        if (coluna >= trigInv -1 -linha){
            trigImpressoInv += '*';
        } else {
            trigImpressoInv += ' ';
        }
        }
        console.log(trigImpressoInv);
        trigImpressoInv = '';
    }

// 4- Depois, faça uma pirâmide com n asteriscos de base:
// Copiar
// n = 5

//   *
//  ***
// *****

let piramide = 5;
let piramideImpresso = '';
let linhas = Math.floor(piramide/2) +1;
let inicio, fim;

for (let linha = 1; linha <= linhas;  linha +=1) {
    inicio = -linha +3;
    fim = linha +3;
    for (let coluna = 1; coluna <= piramide; coluna += 1) {
        if ( coluna > inicio && coluna < fim) {
            piramideImpresso += '*';
        } else {
            piramideImpresso += ' ';
        }
    } 
    console.log(piramideImpresso);
    piramideImpresso = '';
}
