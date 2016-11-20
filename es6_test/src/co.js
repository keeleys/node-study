function f(...a) {
    return function (callback) {
        console.log('你好 我是回调, data=', a);
        callback(null, a);
    }
}

let run = function (fn) {
    var gen = fn();
    function next(err, data) {
        var result = gen.next();
        if (result.done) return;
        result.value(next);
    }
    next();
}

function amin(amins = [1, 2]) {
    return run(function* () {
        for (let i of amins) {
            yield f(i);
        }
    });
}

amin();

