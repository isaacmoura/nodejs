const verdadeiro = true;

// "let" tem escopo de bloco {... bloco}


/*let nome = "Isaac"; // criando

if (verdadeiro) {
  let nome = "moura"; // criando
  // console.log(nome);

  if (verdadeiro) {
    let nome = "yasmin"; // redeclarando
    console.log(nome);
  }
}


var nome = "Yasmin";

if (verdadeiro) {
  let nome = "danielly";
  // console.log(nome);

  if (verdadeiro) {
    let nome = "gadelha";
    console.log(nome);
  }
}
*/

var nome = "Isaac";

function falarOi(){
  if (verdadeiro) {
    let nome = "yasmin";
    var sobNome = "gadelha";
  }

  console.log(sobNome);
}
falarOi();