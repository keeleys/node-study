function Point(x, y) {
    this.x = x;
    this.y = y;
    this.toString = function () {
        return '(' + this.x + ', ' + this.y + ')';
    };
}

console.log(new Point(1, 2).toString());


//定义类
class Point1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
console.log(new Point1(1, 2).toString());