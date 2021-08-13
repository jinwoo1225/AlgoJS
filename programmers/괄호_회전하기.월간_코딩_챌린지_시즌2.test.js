const rotate = (str) => {
	return str.slice(1, str.length) + str.charAt();
};

const peek = (stack) => {
	return stack[stack.length - 1];
};

const check = (str) => {
	const stack = [str.charAt()];
	for (let index = 1; index < str.length; index++) {
		if (
			stack.length === 0 ||
			peek(stack) === ")" ||
			peek(stack) === "}" ||
			peek(stack) === "]" ||
			(peek(stack) === "(" && str.charAt(index) !== ")") ||
			(peek(stack) === "{" && str.charAt(index) !== "}") ||
			(peek(stack) === "[" && str.charAt(index) !== "]")
		) {
			stack.push(str.charAt(index));
		} else {
			stack.pop();
		}
	}

	return stack.length === 0 ? 1 : 0;
};

function solution(s) {
	let answer = 0;
	const N = s.length;

	for (let index = 0; index < N; index++) {
		answer += check(s);
		s = rotate(s);
	}

	return answer;
}

it("t1", () => {
	expect(solution("[](){}")).toBe(3);
});

it("t2", () => {
	expect(solution("}]()[{")).toBe(2);
});

it("t3", () => {
	expect(solution("[)(]")).toBe(0);
});
