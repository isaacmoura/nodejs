const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTxt(diaSemana){
  const diasSemana = ['domingo', 'segundo', 'terça', 'quart', 'quinta',
   'sexta', 'sabado'];
   return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril','maio', 'junho',
   'julho', 'agosto', 'setembro', 'outubro','novembro', 'dezembro'];
   return meses[numeroMes];
}

function zeroEs(num){
  return num >= 10 ? num : `0${num}`;
} 

function criaData(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getDiaSemanaTxt(diaSemana);	
  const nomeMes = getNomeMes(numeroMes); 
  
  return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    `de ${data.getFullYear()}` +
    ` ${zeroEs(data.getHours())}:${zeroEs(data.getMinutes())}`
  )
}

h1.innerHTML = criaData(data)

/*
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTxt(diaSemana){
  let diaSemanatxt;
  
  switch (diaSemana) {
    case 0:
      diaSemanatxt = 'Domingo';
      return diaSemanatxt;
    case 1:
      diaSemanatxt = 'Segunda';
      return diaSemanatxt;
    case 2:
      diaSemanatxt = 'Terça';
      return diaSemanatxt;
    case 3:
      diaSemanatxt = 'Quarta';
      return diaSemanatxt;
    case 4:
      diaSemanatxt = 'Quinta';
      return diaSemanatxt;
    case 5:
      diaSemanatxt = 'Sexta';
      return diaSemanatxt;
    case 6:
      diaSemanatxt = 'Sabado';
      return diaSemanatxt;
    default:
      diaSemanatxt = '';
      return diaSemanatxt;
  }
}

function getNomeMes(nomeMes){
  let nomeMes;
  switch (nomeMes) {
    case 0:
      nomeMes = 'Janeiro';
      return nomeMes;
    case 1:
      nomeMes = 'Fevereiro';
      return nomeMes;
    case 2:
      nomeMes = 'Março';
      return nomeMes;
    case 3:
      nomeMes = 'Abril';
      return nomeMes;
    case 4:
      nomeMes = 'Maio';
      return nomeMes;
    case 5:
      nomeMes = 'Junho';
      return nomeMes;
    case 6:
      nomeMes = 'Julho';
      return nomeMes;
    case 7:
      nomeMes = 'Agosto';
      return nomeMes;
    case 8:
      nomeMes = 'Setembro';
      return nomeMes;
    case 9:
      nomeMes = 'Outubro';
      return nomeMes;
    case 10:
      nomeMes = 'Novembro';
      return nomeMes;
    case 11:
      nomeMes = 'Dezembro';
      return nomeMes;
    default:
      nomeMes = '';
      return nomeMes;
    }
}

function zeroEs(num){
  return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
  const diaSemana = data.getDay();
  const numeMes = data.getMonth();

  const nomeDia = getDiaSemanaTxt(diaSemana);	
  const nomeMes = getNomeMes(nomeMes); 

  return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}` +
    ` ${data.getMonth()} ${zeroEs(data.getHours())}:${zeroEs(data.getMinutes())}`
  );
}
h1.innerHTML = getData(data);
*/


//h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });