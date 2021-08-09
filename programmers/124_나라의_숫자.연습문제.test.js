function solution(n) {
	let answer = "";

	while (n > 0) {
		let remainder = n % 3;
		n = parseInt(String(n / 3));

		if (remainder === 0) {
			n -= 1;
			remainder = 4;
		}
		answer = remainder + answer;
	}

	return answer;
}

it("test1", function () {
	expect(solution(1)).toBe("1");
});

it("test2", function () {
	expect(solution(2)).toBe("2");
});

it("test3", function () {
	expect(solution(3)).toBe("4");
});

it("test4", function () {
	expect(solution(4)).toBe("11");
});

// 1	1
// 2	2
// 3	4
// 4	11
