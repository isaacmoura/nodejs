function zero (num){
  return num >= 10 ? num : `0${num}`;
}

function formData(data) {
  const dia = zero(data.getData());
  const mes = zero(data.getMonth());
  const ano = zero(data.getFullYear());
  const hor = zero(data.getHours());
  const min = zero(data.getMinutes());
  const seg = zero(data.getSeconds());

return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);