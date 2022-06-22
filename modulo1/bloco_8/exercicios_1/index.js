
// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), 
      id2: callback('Luiza Drumond'), 
      id3: callback('Carla Paiva'), 
    }
    return employees;
  };

  const newEmployer = (fullName) =>{
    const email = fullName.toLowerCase().split(' ').join('_');
    return {fullName, email: `${email}@trybe.com`};
} 
    

  console.log(newEmployees(newEmployer));

//   2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

  const check = (myNumber, number) => myNumber === number;
  const randomNumber = (myNumber, callback) => {
    const number = Math.floor((Math.random() *5) +1);
    return callback(myNumber, number) ? 'Parabéns' : 'Tente Novamente';
  };
  console.log(randomNumber(2,check));

//   3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (right, current) => {
    if (current === 'N.A'){
        return 0
    }
    if (current === right) {
        return 1;
    }
    return -0.5;
    };

const conter = (right, student, func) => {
    let cont = 0;
    for (let i =0; i < right.length; i +=1) {
        const funcReturn = func(right[i], student[i]);
        cont += funcReturn;
    }
    return `Total de ${cont} pontos.`
};

console.log(conter(RIGHT_ANSWERS, STUDENT_ANSWERS, checker));

