
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

const data = new Date('2023-12-05 00:00:00');
const diaSemana = data.getDay();
const diaSemanatxt = getDiaSemanaTxt(diaSemana)

console.log(diaSemana, diaSemanatxt);

/*
switch (diaSemana) {
  case 0:
    diaSemanatxt = 'Domingo';
    break;

case 1:
  diaSemanatxt = 'Segunda';
  break;
case 2:
    diaSemanatxt = 'Terça';
    break;
case 3:
diaSemanatxt = 'Quarta';
  break;
case 4:
diaSemanatxt = 'Quinta';
  break;
case 5:
diaSemanatxt = 'Sexta';
  break;
case 6:
diaSemanatxt = 'Sabado';
break;
default:
  diaSemanatxt = '';
  break;
}
________________________________________________________________
if (diaSemana === 0) {
  diaSemanatxt = "Domingo";
}else if (diaSemana === 1) {
  diaSemanatxt = "Segunda";
}else if (diaSemana === 2) {
  diaSemanatxt = "Terça";
}else if (diaSemana === 3) {
  diaSemanatxt = "Quarta";
}else if (diaSemana === 4) {
  diaSemanatxt = "Quinta";
}else if (diaSemana === 5) {
  diaSemanatxt = "Sexta";
}else if (diaSemana === 6) {
  diaSemanatxt = "Sabado";
}else {
  diaSemanatxt = "";
}
*/
