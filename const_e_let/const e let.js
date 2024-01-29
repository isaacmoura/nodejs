const nome = 'isaac';
const sobrenome = 'moura';
const idade = 18;
const peso = 80;
const altura = 1.76;
let imc; // PESO / (AUTURA * AUTURA)
let ano_de_Nascimento; 

imc = peso / (altura * altura);
ano_de_Nascimento = 2023 - idade;
 
console.log(`meu é ${nome} de ${sobrenome}, minha idade é ${idade}, tenho ${altura}`);
console.log(`meu imc é  ${imc}, nasci no ano de ${ano_de_Nascimento}`);
console.log(`${nome} nasceu em ${ano_de_Nascimento}.`); 