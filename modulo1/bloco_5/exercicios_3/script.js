function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// Cria a lista dos dias com as classes
function monthDays() {
  let days = document.getElementById("days");
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let elementDay = document.createElement("li");
    elementDay.className = "day";
    if (dezDaysList[index + 3] % 7 === 0) {
      elementDay.className += " friday";
    }
    if (
      dezDaysList[index] === 24 ||
      dezDaysList[index] === 31 ||
      dezDaysList[index] === 25
    ) {
      elementDay.className += " holiday";
    }
    elementDay.innerText = dezDaysList[index];
    days.appendChild(elementDay);
  }
}
monthDays();

//cria um botão chamado feriado
function feriados(feriados) {
  let button = document.createElement("button");
  let pai = document.querySelector(".buttons-container");
  button.id = "btn-holiday";
  button.innerText = feriados;
  pai.appendChild(button);
}
feriados("Feriados");

// evento no botão feriados

let botao = document.querySelector("#btn-holiday");

botao.addEventListener("click", function () {
  let diasFeriados = document.querySelectorAll(".holiday");
  for (let index = 0; index < diasFeriados.length; index += 1) {
    if (diasFeriados[index].style.backgroundColor == "rgb(238, 238, 238)") {
      diasFeriados[index].style.backgroundColor = "green";
    } else {
      diasFeriados[index].style.backgroundColor = "rgb(238, 238, 238)";
    }
  }
});

//Criar botão de sexta feira
function sextaFeira(sexta) {
  let button = document.createElement("button");
  let pai = document.querySelector(".buttons-container");
  button.id = "btn-friday";
  button.innerText = sexta;
  pai.appendChild(button);
}

sextaFeira('Sexta-feira');

// Modificar a sexta
let botaoSexta = document.querySelector('#btn-friday');
botaoSexta.addEventListener('click', function () {
    let sextou = document.querySelectorAll('.friday');
    for (let i = 0; i < sextou.length; i += 1) {
        if (sextou[i].innerText !== 'SEXTOU') {
            sextou[i].innerText = 'SEXTOU'
        } else {
            sextou[i].innerText = sextou[i].nextElementSibling.innerText -1
        }
    } 
});

let diasDoMes = document.querySelector('#days');

diasDoMes.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
});

diasDoMes.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
});


function addTask (a) {
    let b = document.createElement('span');
    let c = document.querySelector('.my-tasks');
    b.innerText = a;
    c.appendChild(b);
}

function addTaskColor (a) {
    let b = document.createElement('div');
    let c = document.querySelector('.my-tasks');
    b.style.backgroundColor = a;
    b.className = 'task'
    c.appendChild(b);
}

function selectTask () {
    
}

addTask('masfdsafd');
addTaskColor('red');


let selecionarTarefa = document.querySelector('.task');
selecionarTarefa.addEventListener('click', function (event) {
    if (event.target.className === 'task') {
        event.target.className = 'task selected'
    } else {
        event.target.className = 'task'
    }
});

diasDoMes.addEventListener('click', function (event) {
    let a = document.querySelector('.selected')
    if (a === null) {
        return;
    }
    if (event.target.style.color === a.style.backgroundColor) {
        event.target.style.color = 'rgb(119,119,119)';
    } else {
        event.target.style.color = a.style.backgroundColor;
    }
});

// Escreva seu código abaixo.
