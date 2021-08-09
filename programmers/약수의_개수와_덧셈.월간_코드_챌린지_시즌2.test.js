function getDivisor(number) {
	// returns Divisor arrays length
	let count = 0;

	for (let i = 1; i < number + 1; i++) {
		if (number % i === 0) {
			count++;
		}
	}
	return count;
}

function solution(left, right) {
	let answer = 0;

	for (let i = left; i < right + 1; i++) {
		const result = getDivisor(i);
		answer += result % 2 ? -i : +i;
	}

	return answer;
}

it("test1", function () {
	l = 13;
	r = 17;
	expect(solution(l, r)).toBe(43);
});
