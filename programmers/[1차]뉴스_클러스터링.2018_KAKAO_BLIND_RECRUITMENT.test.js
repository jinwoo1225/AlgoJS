const validator = (str) => {
	return str.match(/[a-z][a-z]/);
};

const generateMultiSet = (str) => {
	let set = {};
	str = str.toLowerCase();
	for (let i = 0; i < str.length - 1; i++) {
		const test_str = str.slice(i, i + 2);
		if (validator(test_str)) {
			set[test_str] = (set[test_str] || 0) + 1;
		}
	}

	return set;
};

const sum = (a, b) => a + b;

function solution(str1, str2) {
	const set1 = generateMultiSet(str1);
	const set2 = generateMultiSet(str2);

	if (Object.keys(set1).length === 0 && Object.keys(set2).length === 0) {
		return 65536;
	}

	const set2Keys = new Set([...Object.keys(set2)]);

	let union = {};
	let intersection = {};

	new Set([...Object.keys(set1), ...Object.keys(set2)]).forEach((key) => {
		union[key] = Math.max(set1[key] || 0, set2[key] || 0);
	});

	new Set([...Object.keys(set1)].filter((x) => set2Keys.has(x))).forEach(
		(key) => {
			intersection[key] = Math.min(set1[key] || 0, set2[key] || 0);
		}
	);
	return Math.floor(
		(Object.values(intersection).reduce(sum, 0) /
			Object.values(union).reduce(sum, 0)) *
			65536
	);
}

test("t1", () => {
	expect(solution("FRANCE", "FRENCH")).toBe(16384);
});
test("t2", () => {
	expect(solution("E=M*C^2", "e=m*c^2")).toBe(65536);
});
test("t3", () => {
	expect(solution("aa1+aa2", "AAAA12")).toBe(43690);
});
test("t3", () => {
	expect(solution("abc", "cde")).toBe(0);
});
