let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('Resolved.');
});

console.log('Hi!');

// thenable对象指的是具有then方法的对象
// Promise.resolve方法会将这个对象转为Promise对象，然后就立即执行thenable对象的then方法。
let thenable = {
  then(resolve, reject) {
    resolve(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(value=>console.log(value));

// 如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise对象，状态为Resolved。
var p = Promise.resolve('Hello');

p.then(function (s){
  console.log(s)
});

console.log('Hi!');