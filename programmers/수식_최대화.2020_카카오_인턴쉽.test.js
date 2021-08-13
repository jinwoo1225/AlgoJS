const calculate = (expression, operatorsPriority) => {
	for (const operatorsPriorityElement of operatorsPriority) {
		let stack = [expression.shift()];
		while (expression.length > 0) {
			let node = expression.shift();
			if (node === operatorsPriorityElement) {
				// 일치하나요?
				stack.push(eval(stack.pop() + node + expression.shift()));
			} else {
				stack.push(node);
			}
		}
		expression = stack;
	}
	return Math.abs(parseInt(expression[0]));
};

function solution(expression) {
	// returns maximum absoulte value of expression
	let operatorsPriority = [
		["*", "-", "+"],
		["*", "+", "-"],
		["+", "-", "*"],
		["+", "*", "-"],
		["-", "*", "+"],
		["-", "+", "*"],
	];
	let operands = expression.split(/[^\d]/).map((x) => parseInt(x));
	let operators = expression.split(/[0-9]+/).filter((x) => x !== "");
	let new_expression = [operands[0]];
	for (let i = 0; i < operators.length; i++) {
		new_expression.push(operators[i]);
		new_expression.push(operands[1 + i]);
	}

	return Math.max(
		...operatorsPriority.map((x) => {
			return calculate(new_expression.slice(), x);
		})
	);
}

it("t1", function () {
	expect(solution("100-200*300-500+20")).toBe(60420);
});

it("t2", function () {
	expect(solution("50*6-3*2")).toBe(300);
});
it("t3", function () {
	expect(solution("2*2*2*2*2-2*2*2")).toBe(24);
});
it("t4", function () {
	expect(solution("200-300-500-600*40+500+500")).toBe(1248000);
});
it("t5", function () {
	expect(solution("2-990-5+2")).toBe(995);
});
