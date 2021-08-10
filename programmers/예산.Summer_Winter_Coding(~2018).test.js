function solution(d, budget) {
	d.sort();
	while (true) {
		if (d.length === 0) break;
		if (d.reduce((a, b) => a + b) <= budget) break;
		d.pop();
	}
	return d.length;
}

it("test1", function () {
	expect(solution([1, 3, 2, 5, 4], 9)).toBe(3);
});

it("test1", function () {
	expect(solution([2, 2, 3, 3], 10)).toBe(4);
});
