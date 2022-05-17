// Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

function soma(a,b) {
    let reserva = a+b;
    return reserva;
}

function subtracao(a,b) {
    let reserva = a-b;
    return reserva;
}

function multiplicacao(a,b) {
    let reserva = a*b;
    return reserva;
}
function divisao(a,b) {
    let reserva = a/b;
    return reserva;
}
function modulo(a,b) {
    let reserva = a%b;
    return reserva;
}

function maior (a,b) {
    if (a>b) {
        return a;
    } else {
        return b;
    }
}

function maiorTres (a,b,c) {
    let reserva;
    if (a>b) {
        reserva = a
        if (reserva > c) {
            return reserva;
        }
    } else if (b>c) {
        return b;
    } else {
        return c;
    }

}