function solution_p(nums) {
	const count = (prev, curr) => {
		return {
			...prev,
			[curr]: 1 + (prev[curr] || 0),
		};
	};

	let ponketmon = nums.reduce(count);
	let monsterVariety = Object.keys(ponketmon).length;
	return monsterVariety <= nums.length / 2 ? monsterVariety : nums.length / 2;
}
function solution(nums) {
	let set = new Set(nums);
	return set.size <= nums.length / 2 ? set.size : nums.length / 2;
}
test("test1", () => {
	expect(solution(a.q)).toBe(a.a);
});
test("test2", () => {
	expect(solution(b.q)).toBe(b.a);
});
test("test3", () => {
	expect(solution(c.q)).toBe(c.a);
});

let a = { q: [3, 1, 2, 3], a: 2 };
let b = { q: [3, 3, 3, 2, 2, 4], a: 3 };
let c = { q: [3, 3, 3, 2, 2, 2], a: 2 };
