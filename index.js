/*
Only worked while we had lodash installed.
then in node cli we type: node index.js
*/
/*
var lodash = require('lodash');

var output = lodash.without([1, 2, 3], 1);
console.log(output);
*/
const tester = require('./test.js');
tester.goget('3 hundred');

module.exports = {
    muller: function(w, h) {
        return w * h;
    },
    divver: function(w, h) {
        return w / h;
    }
}