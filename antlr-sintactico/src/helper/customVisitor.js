import CalculadoraVisitor from "../grammar/CalculadoraVisitor.js";
import CalculadoraLexer from "../grammar/CalculadoraLexer.js";

export default class CustomVisitor extends CalculadoraVisitor {
  results = [];
  numbers = [];

  visitFile(ctx) {
    this.visitChildren(ctx);

	// // Alternativamente podria usarse este tambien para solo devolver el ultimo valor de results
	// return this.results[this.results.length-1]
	return this.results
  }

  visitParentesis(ctx) {
	return this.visit(ctx.expr());
  }

  visitTimesDiv(ctx) {
	let result

	if (ctx.operation.type === CalculadoraLexer.TIMES) {
		// izquierda por derecha
		result = this.visit(ctx.expr(0)) * this.visit(ctx.expr(1));

	} else {
		// izquierda entre derecha
		result = this.visit(ctx.expr(0)) / this.visit(ctx.expr(1))

	}
    this.results.push(result);
    return result;
  }

  visitPlusSubtraction(ctx) {
    let result

	if (ctx.operation.type === CalculadoraLexer.PLUS) {
		// izquierda mas derecha
		result = this.visit(ctx.expr(0)) + this.visit(ctx.expr(1));

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
    this.numbers.push(number);
    return number;
  }
}