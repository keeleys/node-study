let sum = function(a, b) {
    return b? a +b : b => a+b;
}
console.log(sum(1)(2));
console.log(sum(1,2));