const userInfo = require('./information.js');
console.log(`Hy, my name is ${userInfo.name} and my school ${userInfo.campus}`);

const cowsay = require ("cowsay");
console.log(cowsay.say ( {
    text :`Hy, my name is ${userInfo.name} and my school ${userInfo.campus}`,
    e : "oO",
    T : "U"
}));