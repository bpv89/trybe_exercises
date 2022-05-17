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

 verificaPalindrome('arara');
 verificaPalindrome('desenvolvimento')
 
 