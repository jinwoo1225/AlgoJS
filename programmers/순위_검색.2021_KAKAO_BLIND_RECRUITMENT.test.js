function solution(info, query) {
	const answer = [];

	const users = {};

	const generateCache = (user, score, index) => {
		const key = user.join("");
		if (users[key]) {
			users[key].push(score);
		} else {
			users[key] = [score];
		}

		for (let i = index; i < 4; i++) {
			const temp = user.slice();
			temp[i] = "-";
			generateCache(temp, score, i + 1);
		}
	};

	for (const data of info) {
		const split = data.split(" ");

		generateCache(split.slice(0, split.length - 1), parseInt(split[4]), 0);
	}

	// sort every thing
	Object.keys(users).forEach((key) => users[key].sort((x, y) => x - y));

	for (const q of query) {
		const split = q.split(" ");
		const queryData = [split[0], split[2], split[4], split[6]];
		const score = parseInt(split[7]);

		let key = queryData.join("");

		if (users[key]) {
			let start = 0;
			let end = users[key].length;
			while (start < end) {
				const mid = parseInt((start + end) / 2);
				if (users[key][mid] >= score) {
					end = mid;
				} else {
					start = mid + 1;
				}
			}

			answer.push(users[key].length - start);
		} else {
			answer.push(0);
		}
	}

	return answer;
}

it("t1", function () {
	expect(
		solution(
			[
				"java backend junior pizza 150",
				"python frontend senior chicken 210",
				"python frontend senior chicken 150",
				"cpp backend senior pizza 260",
				"java backend junior chicken 80",
				"python backend senior chicken 50",
			],
			[
				"java and backend and junior and pizza 100",
				"python and frontend and senior and chicken 200",
				"cpp and - and senior and pizza 250",
				"- and backend and senior and - 150",
				"- and - and - and chicken 100",
				"- and - and - and - 150",
			]
		)
	).toStrictEqual([1, 1, 1, 1, 2, 4]);
});
