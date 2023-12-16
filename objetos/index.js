/* function criaPessoa(nome, sobrenome, idade) {
  return {nome, sobrenome, idade,};
 }

 const pes = criaPessoa.pes.get('Isaac', 'Moura', 18);
 const amor = criaPessoa.pes.get('Yasmin', 'Danielly', 19);

 console.log(pes.nome, amor.nome);*/

const pes = {
  nome: 'Yasmin',
  sobrenome: 'Danielly',
  idade: '19',

  fala(){
    console.log(`A minha idade é: ${this.idade}`);
  },
  incremntaIdade(){
    this.idade++;
  }
};

pes.fala();
pes.incremntaIdade();