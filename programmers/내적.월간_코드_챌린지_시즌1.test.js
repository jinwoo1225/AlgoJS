function solution(a, b) {
	let answer = 0;
	for (let i = 0; i < a.length; i++) {
		answer += a[i] * b[i];
	}
	return answer;
}

it("test1	", function () {
	expect(solution(a.a, a.b)).toBe(a.answer);
});
it("test1	", function () {
	expect(solution(b.a, b.b)).toBe(b.answer);
});

a = { a: [1, 2, 3, 4], b: [-3, -1, 0, 2], answer: 3 };
b = { a: [-1, 0, 1], b: [1, 0, -1], answer: -2 };
