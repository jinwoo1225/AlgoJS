function solution(N, stages) {
	let fail = 0;
	let failure_rate = [];

	for (let i = 1; i < N + 1; i++) {
		const current_failure = stages.filter((number) => {
			return number === i;
		}).length;

		failure_rate.push({
			payload: current_failure / (stages.length - fail),
			index: i,
		});

		fail += current_failure;
	}

	failure_rate = failure_rate.sort((a, b) => b.payload - a.payload);

	return failure_rate.map(({ index }) => index);
}

it("test1", function () {
	expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5]);
});
