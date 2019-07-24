// const PI = Math.PI;
// exports.name = 'lucky';
// exports.circleArea = function (r) {
//   return PI * r * r;   // 傳回圓面積
// };
// exports.cube = function(n) {
//   return n * n * n;
// };



module.exports = function (name=null) {

    const Pi = Math.PI;

    this.name = name;

    this.circleArea = (r) => Pi * r ** 2
    this.cube = (n) => n ** 3

}