/*
Only worked while we had lodash installed.

then in node cli we type: node index.js
*/
var lodash = require('lodash');

var output = lodash.without([1, 2, 3], 1);
console.log(output);