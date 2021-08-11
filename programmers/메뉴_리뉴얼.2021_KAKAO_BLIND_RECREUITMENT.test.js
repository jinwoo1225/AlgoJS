const getCombination = (n, r) => {
	// returns combination array of nCr
	// n : array of anything
	// r : r

	const result = [];

	if (r === 1) return n.map((node) => [node]);
	n.forEach((v, idx, arr) => {
		const fixed = v;
		const restArr = arr.slice(idx + 1);
		const combinationArr = getCombination(restArr, r - 1);
		const combineFix = combinationArr.map((v) => [fixed, ...v]);
		result.push(...combineFix);
	});

	return result;
};

function solution(orders, course) {
	const answer = [];
	const sorted_orders = [];

	for (const order of orders) {
		sorted_orders.push(order.split("").sort());
	}

	let mapOfMine = {};

	sorted_orders.forEach((v, idx, arr) => {
		for (let i = 2; i <= v.length; i++) {
			getCombination(v, i).forEach((v, i, a) => {
				mapOfMine[v.join("")] = (mapOfMine[v.join("")] || 0) + 1;
			});
		}
	});

	course.forEach((c, i, a) => {
		let m = Object.entries(mapOfMine)
			.filter(([key, value]) => {
				return key.length === c && value > 1;
			})
			.sort(([a_k, a_v], [b_k, b_v]) => b_v - a_v);

		m.filter(([key, value]) => value === m[0][1]).map(([key, value]) => {
			answer.push(key);
		});
	});
	return answer.sort();
}

test("t1", function () {
	expect(
		solution(["BCFGA", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
	).toStrictEqual(["AC", "ACDE", "BCFG", "CDE"]);
});
