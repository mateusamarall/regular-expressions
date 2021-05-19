const {lookahead} = require('./base');

// console.log(lookahead);

// console.log(lookahead.match(/.+[^in]active$/gim));

//POSITIVE LOOKAHEAD (FRASES QUE TEM ACTIVE)
// console.log(lookahead.match(/.+(?=[^in]active)/gim));

//POSITIVE LOOKAHEAD (FRASES QUE TEM INACTIVE)
//  console.log(lookahead.match(/.+(?=\s+inactive)/gim));

//NEGATIVE LOOKAHEAD (frases que nao tem active)
//  console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));


//NEGATIVE LOOKAHEAD (frases que nao tem active)
//  console.log(lookahead.match(/^(?!.+inactive).+$/gim));


//POSITIVE LOOKBEHIND (frases que começam com online)
//  console.log(lookahead.match(/(?<=ONLINE\s+)\S.*/gim));

//NEGATIVE LOOKBEHIND (frases que NÃO começam com ONLINE)
// console.log(lookahead.match(/^.+(?<!^ONLINE.+)$/gim));