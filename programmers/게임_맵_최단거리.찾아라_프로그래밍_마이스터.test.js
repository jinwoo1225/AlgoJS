function solution(maps) {
	const DY = [0, 0, 1, -1];
	const DX = [1, -1, 0, 0];

	const n = maps.length;
	const m = maps[0].length;

	const visited = Array.from(Array(n), () => new Array(m), false);

	const queue = [
		{
			move: 1,
			coordinate: { y: 0, x: 0 },
		},
	];

	let next_y;
	let next_x;
	while (queue.length) {
		const node = queue.shift();

		if (node.coordinate.y === n - 1 && node.coordinate.x === m - 1) {
			return node.move;
		}

		if (!visited[node.coordinate.y][node.coordinate.x]) {
			visited[node.coordinate.y][node.coordinate.x] = true;

			for (let t = 0; t < 4; t++) {
				let next_node = {
					move: node.move + 1,
					coordinate: {},
				};
				next_y = DY[t] + node.coordinate.y;
				next_x = DX[t] + node.coordinate.x;

				if (
					next_y >= 0 &&
					next_y < n &&
					next_x >= 0 &&
					next_x < m &&
					maps[next_y][next_x] === 1 &&
					!visited[next_y][next_x]
				) {
					next_node.coordinate.y = next_y;
					next_node.coordinate.x = next_x;
					queue.push(next_node);
				}
			}
		}
	}

	return -1;
}

it("t1", function () {
	expect(
		solution([
			[1, 0, 1, 1, 1],
			[1, 0, 1, 0, 1],
			[1, 0, 1, 1, 1],
			[1, 1, 1, 0, 1],
			[0, 0, 0, 0, 1],
		])
	).toBe(11);
});
it("t1", function () {
	expect(
		solution([
			[1, 0, 1, 1, 1],
			[1, 0, 1, 0, 1],
			[1, 0, 1, 1, 1],
			[1, 1, 1, 0, 0],
			[0, 0, 0, 0, 1],
		])
	).toBe(-1);
});
