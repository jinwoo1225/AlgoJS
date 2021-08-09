function solution(s) {
	// 스택으로 풀자
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		if (stack[stack.length - 1] === s[i]) {
			stack.pop();
		} else {
			stack.push(s[i]);
		}
	}
	return stack.length > 0 ? 0 : 1;
}

it("t1", function () {
	expect(solution(t1.a)).toBe(t1.b);
});
it("t2", function () {
	expect(solution(t2.a)).toBe(t2.b);
});

t1 = { a: "baabaa", b: 1 };
t2 = { a: "cdcd", b: 0 };
