let f = require('./f.js');
// console.log('半徑5的圓面積：'+ f.circleArea(5));
// console.log('8的三次方: ' + f.cube(8));
// console.log('name的值:: ' + f.name);


let obj = new f("apple");
console.log(obj.circleArea(5));

console.log(obj.cube(8));

console.log(obj.name);