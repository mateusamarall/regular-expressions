const { html } = require('./base');


console.log(html.match(/<.+>.+<\/.+>/g)); //geedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); //no geedy
