function solution(n, a, b) {
	let left = Math.min(a, b);
	let right = Math.max(a, b);
	let round = 1;

	while (true) {
		if (left % 2 === 1 && right - left === 1) {
			return round;
		}
		left = Math.ceil(left / 2);
		right = Math.ceil(right / 2);
		round++;
	}
}

test("t1", () => {
	expect(solution(8, 4, 7)).toBe(3);
});

test("t1", () => {
	expect(solution(8, 4, 6)).toBe(3);
});
