import CalculadoraVisitor from "../grammar/CalculadoraVisitor.js";
import CalculadoraLexer from "../grammar/CalculadoraLexer.js";

export default class CustomVisitor extends CalculadoraVisitor {
  results = [];
  numbers = [];

  visitFile(ctx) {
    this.visitChildren(ctx);

	// // Vanilla no
    // console.log("Resultado de las o la operacion: ", this.results[this.results.length-1]);
	// alert("Resultado de las o la operacion: " + this.results[this.results.length-1]);

	// // Alternativamente podria usarse este tambien para solo devolver el ultimo valor de results
	// return this.results[this.results.length-1]
	return this.results
  }

  visitTimesDiv(ctx) {
	let result

	if (ctx.operation.type === CalculadoraLexer.TIMES) {
		// izquierda por derecha
		// console.log('Esto fue una multiplicacion')
		result = this.visit(ctx.expr(0)) * this.visit(ctx.expr(1));
		// console.log(String(this.visitNumber(ctx.expr(0))) +' * '+ String(this.visitNumber(ctx.expr(1))) +' = '+ result);

	} else {
		// izquierda entre derecha
		// console.log('Esto fue una division')
		result = this.visit(ctx.expr(0)) / this.visit(ctx.expr(1))
		// console.log(String(this.visitNumber(ctx.expr(0))) +' / '+ String(this.visitNumber(ctx.expr(1))) +' = '+ result);

	}
    this.results.push(result);
    return result;
  }

  visitPlusSubtraction(ctx) {
    let result

	if (ctx.operation.type === CalculadoraLexer.PLUS) {
		// izquierda mas derecha
		// console.log('Esto fue una suma')
		result = this.visit(ctx.expr(0)) + this.visit(ctx.expr(1));
		// console.log(String(this.visitNumber(ctx.expr(0))) +' + '+ String(this.visitNumber(ctx.expr(1))) +' = '+ result);

	} else {
		// izquierda menos derecha
		// console.log('Esto fue una resta')
		result = this.visit(ctx.expr(0)) - this.visit(ctx.expr(1))
		// console.log(String(this.visitNumber(ctx.expr(0))) +' - '+ String(this.visitNumber(ctx.expr(1))) +' = '+ result);

	}
    this.results.push(result);
    return result;
  }

  visitNumber(ctx) {
    const number = Number(ctx.getText());
    // this.results.push(number);
    this.numbers.push(number);
    return number;
  }
}