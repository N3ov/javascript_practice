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
    this.circleArea = function (r) {
        return Pi * (r ** 2)
    }
    this.cube = function (n) {
        return n ** 3
    }

}