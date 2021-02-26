
const { texto, arquivos } = require('./base');
//quantificadores


// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ caractere de escape
// {n,m} minimo  maximo 
// {,10} de 0 a 10
// {10,} no minimo 10
// {5,10} de 5 a 10
// {10} especifico




// const regExp1 = /Jo+ão+/gi;


// console.log(texto.match(regExp1));

const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g;

for (const arquivo of arquivos) {
  const validate = arquivo.match(regExp2);

  // if(!validate){
  //   continue;
  // }
 console.log(validate);
  
}
