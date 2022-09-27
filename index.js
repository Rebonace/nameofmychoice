const info = require('./information.js');
console.log(info);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `${info.name}, ${info.campus}`,
    e : "oO",
    T : "U "
}));