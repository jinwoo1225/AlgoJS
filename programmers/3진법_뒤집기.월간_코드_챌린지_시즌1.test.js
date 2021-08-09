function solution(n) {
	let digitOf3 = "";
	let answer = 0;
	while (n > 0) {
		let remainder = n % 3;
		n = parseInt(String(n / 3));

		digitOf3 = remainder + digitOf3;
	}
	for (let i = 0; i < digitOf3.length; i++) {
		answer += digitOf3[i] * 3 ** i;
	}
	return answer;
}

test("test", () => {
	expect(solution(125)).toBe(229);
});
