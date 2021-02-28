// let texto =  'Se um estado faz e outro não, 123 ÇÇÇÇÇ estamos enxugando gelo diz governador do Piauí';
// texto = texto.toLowerCase();
// texto =  texto.replace(/\s/g,"_");


//   texto = texto.replace(/(á|à|ã|â|ä)|(Á|À|Ã|Â|Ä)/g,"a");
//   texto = texto.replace(/(é|è|ê|ë)|(É|È|Ê|Ë)/g,"e");
//   texto = texto.replace(/(í|ì|î|ï)|(Í|Ì|Î|Ï)/g,"i");
//   texto = texto.replace(/(ó|ò|õ|ô|ö)|(Ó|Ò|Õ|Ô|Ö)/g,"o");
//   texto = texto.replace(/(ú|ù|û|ü)|(Ú|Ù|Û|Ü)/g,"u");
//   texto = texto.replace(/(ñ|Ñ)/g,"n");
//   texto = texto.replace(/(ç|Ç)/g,"c");

// console.log(texto);


const {alfabeto} = require('./base');


//[abc] ->conjunto
//[^] -> negação
 
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-z]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g));//NEGAÇÃO
console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W+/g));
console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D/g));

console.log(alfabeto.match(/\s/g));
console.log(alfabeto.match(/\S/g));










