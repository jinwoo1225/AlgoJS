const checkBal = (str) => {
	// check balance of str
	let check = 0;

	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === "(") {
			check += 1;
		} else {
			check -= 1;
		}
	}
	return check === 0;
};
const checkCorrect = (str) => {
	// check correctness of str
	const stack = [];

	stack.push(str.charAt(0));

	for (let i = 1; i < str.length; i++) {
		if (
			stack.length === 0 ||
			stack[stack.length - 1] === ")" ||
			(stack[stack.length - 1] === "(" && str.charAt(i) === "(")
		) {
			stack.push(str.charAt(i));
		} else {
			stack.pop();
		}
	}
	return stack.length === 0;
};

function solution(p) {
	var answer = "";
	// 1. 입력이 빈 문자열인 경우, 빈문자열을 반환합니다.
	if (p === "") {
		return p;
	}

	// 2. 이미 올바른 괄호 문자열이면?
	if (checkCorrect(p)) {
		return p;
	}

	let u = "";
	let v = "";

	for (let i = 2; i < p.length + 1; i += 2) {
		if (checkBal(p.slice(0, i))) {
			u = p.slice(0, i);
			v = p.slice(i, p.length);
			break;
		}
	}

	if (checkCorrect(u)) {
		answer += u + solution(v);
	} else {
		answer += "(" + solution(v) + ")";
		for (let i = 1; i < u.length - 1; i++) {
			if (u.charAt(i) === "(") {
				answer += ")";
			} else {
				answer += "(";
			}
		}
	}

	return answer;
}

it("t1", function () {
	expect(solution("(()())()")).toBe("(()())()");
});

it("t2", function () {
	expect(solution("(()())()")).toBe("(()())()");
});

it("t3", function () {
	expect(solution(")(")).toBe("()");
});
