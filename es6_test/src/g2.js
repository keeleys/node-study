module.exports = {
    // 普通写法
    g1: function* () {
        yield 'done';
    },
    // 简写
    * g2() {
        yield 'before';
        yield* this.g1();
        yield 'after';
    },
    done() {
        console.log(...this.g2());
    }
}
