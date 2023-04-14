
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

let dias = document.getElementById('days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let dia = decemberDaysList[index];

    let calend = document.createElement('li');
    calend.innerText = dia;
    calend.classList.add('day');

    if (dia === 24 || dia === 25 || dia === 31) {
      calend.classList.add('holiday');
    } if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
      calend.classList.add('friday');
    }

    dias.appendChild(calend);

  }

  function mudaCor () {
  let corHoliday = document.getElementsByClassName('day holiday');
  for (let index = 0; index < corHoliday.length; index += 1) 
  if (corHoliday[index].style.backgroundColor === 'rgb(255, 0, 0)') {
  corHoliday[index].style.backgroundColor = 'rgb(238, 238, 238)';
  } else {
    corHoliday[index].style.backgroundColor = 'rgb(255, 0, 0)';
  }
  }


  let feriado = document.querySelector('#btn-holiday');
feriado.addEventListener('click', mudaCor);



function mudaTexto () {
  let textoFriday = document.getElementsByClassName('day friday');
  let sext = [4, 11, 18,25];
  for (let index = 0; index < textoFriday.length; index += 1) 
  if (textoFriday[index].innerText === 'sextou') {
    textoFriday[index].innerText = sext[index];
  } else {
    textoFriday[index].innerText = 'sextou';
  }
  }

  let sextou = document.querySelector('#btn-friday');
sextou.addEventListener('click', mudaTexto);