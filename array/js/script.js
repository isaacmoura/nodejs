function escopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
 
  const pessoas = [];

  /*form.onsubmit = function(evento) {
    evento.preventDefault();
    alert(1);
    console.log('foi enviado');
 };*/

  /*let contador = 1;
  function rEF (evento) {
    evento.preventDefault();
    console.log(`Form não foi enviado ${contador}`);
    contador++;
  }*/

  function rEF (evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

  pessoas.push({
    nome: nome.nodeValue,
    sobrenome: sobrenome.nodeValue,
    peso: peso.value,
    altura: altura.Value
  });

  console.log(pessoas);

  resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`; 
}
 

form.addEventListener('submit', rEF);
}
escopo();

