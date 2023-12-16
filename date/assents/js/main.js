// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTxt(diaSemana){
//   let diaSemanatxt;
  
//   switch (diaSemana) {
//     case 0:
//       diaSemanatxt = 'Domingo';
//       return diaSemanatxt;
//     case 1:
//       diaSemanatxt = 'Segunda-feira';
//       return diaSemanatxt;
//     case 2:
//       diaSemanatxt = 'Terça-feira';
//       return diaSemanatxt;
//     case 3:
//       diaSemanatxt = 'Quarta-feira';
//       return diaSemanatxt;
//     case 4:
//       diaSemanatxt = 'Quinta-feira';
//       return diaSemanatxt;
//     case 5:
//       diaSemanatxt = 'Sexta-feira';
//       return diaSemanatxt;
//     case 6:
//       diaSemanatxt = 'Sabado';
//       return diaSemanatxt;
//     default:
//       diaSemanatxt = '';
//       return diaSemanatxt;
//   }
// }
// function getMes(numMes){
//   let Mes;
  
//   switch (Mes) {
//     case 0:
//       Mes = 'janeiro';
//       return Mes;
//     case 1:
//       Mes = 'fevereiro';
//       return Mes;
//     case 2:
//       Mes = 'março';
//       return Mes;
//     case 3:
//       Mes = 'abril';
//       return Mes;
//     case 4:
//       Mes = 'maio';
//       return Mes;
//     case 5:
//       Mes = 'junho';
//       return Mes;
//     case 6:
//       Mes = 'julho';
//       return Mes;
//     case 7:
//       Mes = 'agosto';
//       return Mes;
//     case 8:
//       Mes = 'setembro';
//       return Mes;
//     case 9:
//       Mes = 'outubro';
//       return Mes;
//     case 10:
//       Mes = 'novembro';
//       return Mes;
//     case 11:
//       Mes = 'dezenbro';
//       return Mes;
//   }
// }

// function criaData(data){
//   const diaSemana = data.getDay();
//   const numMes = data.getMonth();

//   const numeDia = getDiaSemanaTxt(diaSemana);
//   const Mes = getNomeMes(numMes);

//   return (
//     `${numeDia}, ${data.getDate()} de ${Mes}` +
//     `de ${data.getFullYear()} ${data.getHours()} ${data.getMinutes()}`
//   );
// }
// h1.innerHTML = criaData(data);

const h1 = document.querySelector('.container-h1');
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });