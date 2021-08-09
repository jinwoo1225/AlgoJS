const log = console.log;

function check(score) {
	let N = Number(score);
	if (N >= 90) {
		return "A";
	} else if (N >= 80) {
		return "B";
	} else if (N >= 70) {
		return "C";
	} else if (N >= 50) {
		return "D";
	} else {
		return "F";
	}
}

function solution(scores) {
	// 유일한 최고점인가 or 유일한 최저점인가?
	var answer = "";

	function sum(a, b) {
		return a + b;
	}

	for (let j = 0; j < scores.length; j++) {
		let my_scores = [];
		for (let i = 0; i < scores.length; i++) {
			my_scores.push(scores[i][j]);
		}
		let _max = Math.max(...my_scores);
		let _min = Math.min(...my_scores);

		let me = scores[j][j];

		if (_max > me && me > _min) {
			// 중간에 끼였을때
			answer += check(my_scores.reduce(sum) / my_scores.length);
		} else {
			my_scores.splice(j, 1);
			let temp_max = Math.max(...my_scores);
			let temp_min = Math.min(...my_scores);
			if (temp_max === me || temp_min === me) {
				my_scores.push(me);
				answer += check(my_scores.reduce(sum) / my_scores.length);
			} else {
				answer += check(my_scores.reduce(sum) / my_scores.length);
			}
		}
	}

	return answer;
}

test("test1", function () {
	expect(
		solution([
			[100, 90, 98, 88, 65],
			[50, 45, 99, 85, 77],
			[47, 88, 95, 80, 67],
			[61, 57, 100, 80, 65],
			[24, 90, 94, 75, 65],
		])
	).toBe("FBABD");
});

test("test2", function () {
	expect(
		solution([
			[50, 90],
			[50, 87],
		])
	).toBe("DA");
});

test("test3", function () {
	expect(
		solution([
			[70, 49, 90],
			[68, 50, 38],
			[73, 31, 100],
		])
	).toBe("CFD");
});
