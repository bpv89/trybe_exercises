let meusNumeros = [10, 12, 25, 35, 42, 60];
let numerosSorteados = [];
let acertos =0;
//cria numeros aleatorios

for (let index =0; index <6; index +=1) {
    numerosSorteados[index] = Math.floor(Math.random() *60) +1;
}

// Verifica por repetições

for(index =0; index < numerosSorteados.length; index +=1){
    for( let segundoindex = 0; segundoindex< numerosSorteados.length; segundoindex +=1){
        if(segundoindex !=index) {
            if (numerosSorteados[index] == numerosSorteados[segundoindex]) {
                numerosSorteados[index] = Math.floor(Math.random() *60) +1;
                segundoindex =6;
                index = -1; 
            }
        }
    }
}

//Compara com os numeros escolhidos

for (index =0; index < meusNumeros.length; index +=1) {
    for (let indexSorteado = 0; indexSorteado< numerosSorteados.length; indexSorteado +=1) {
        if (meusNumeros[index] == numerosSorteados[indexSorteado]){
            acertos += 1;
            indexSorteado = numerosSorteados.length;
        }
    }
}
console.log(meusNumeros);
console.log(numerosSorteados);
console.log(acertos);



