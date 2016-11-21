var co = require('co');

function f(...a) {
    return function (callback) {
        callback(null, a);
        console.log('this is callback, data=', a);
    }
}


function amin(amins = [1, 2]) {
    return co(function* () {
        for (let i of amins) {
            yield f(i);
        }
    });
}

amin();

