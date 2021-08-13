function solution(numbers) {
	let set = new Set();

	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < numbers.length; j++) {
			if (i === j) continue;
			set.add(numbers[i] + numbers[j]);
		}
	}

	return Array.from(set)
		.map((x) => parseInt(x))
		.sort((a, b) => a - b);
}

it("should ", function () {});
