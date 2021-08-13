"use strict";
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

function solution(relation) {
	const rel_col = relation[0].length;
	const rel_row = relation.length;

	const columnCombination = [];

	for (let i = 0; i < rel_col; i++) {
		columnCombination.push(
			...getCombination([...Array(rel_col).keys()], i + 1)
		);
	}

	// 유일성
	const uniques = [];
	for (const columnCombinationElement of columnCombination) {
		const set = {};
		for (let i = 0; i < rel_row; i++) {
			let result = columnCombinationElement.map(
				(col) => relation[i][col]
			);
			set[result] = set[result] || 0;
		}
		if (Object.keys(set).length === rel_row)
			uniques.push(columnCombinationElement);
	}

	// 최소성
	const answers = [];
	for (const unique of uniques) {
		if (
			answers.every(
				(answer) => !answer.every((value) => unique.indexOf(value) >= 0)
			)
		) {
			answers.push(unique);
		}
	}
	return answers.length;
}

it("t1", function () {
	expect(
		solution([
			["100", "ryan", "music", "2"],
			["200", "apeach", "math", "2"],
			["300", "tube", "computer", "3"],
			["400", "con", "computer", "4"],
			["500", "muzi", "music", "3"],
			["600", "apeach", "music", "2"],
		])
	).toBe(2);
});

it("t2", function () {
	expect(
		solution([
			["a", 1, "aaa", "c", "ng"],
			["b", 1, "bbb", "c", "g"],
			["c", 1, "aaa", "d", "ng"],
			["d", 2, "bbb", "d", "ng"],
		])
	).toBe(3);
});
it("t3", function () {
	expect(
		solution([
			["100", "100", "ryan", "music", "2"],
			["200", "200", "apeach", "math", "2"],
			["300", "300", "tube", "computer", "3"],
			["400", "400", "con", "computer", "4"],
			["500", "500", "muzi", "music", "3"],
			["600", "600", "apeach", "music", "2"],
		])
	).toBe(3);
});
