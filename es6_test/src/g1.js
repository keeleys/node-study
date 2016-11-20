// Generator 
module.exports = {
	*gen() {
		yield 1;
		yield 2;
		yield* [3,4];
	},
	done() {
		console.log(...this.gen());
	}
}