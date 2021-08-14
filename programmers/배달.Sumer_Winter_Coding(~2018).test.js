const dijkstra = (graph, start) => {
	const distances = {};

	for (const graphKey in graph) {
		distances[graphKey] = 987654321;
	}

	distances[start] = 0;

	const queue = [];
	queue.push([distances[start], start]);

	while (queue.length > 0) {
		const node = queue.pop();
		const current_distance = node[0];
		const current_destination = node[1];

		if (distances[current_destination] < current_distance) {
			continue;
		}

		Object.entries(graph[current_destination]).forEach(
			([new_destination, new_distance]) => {
				let distance = current_distance + new_distance;
				if (distance < distances[new_destination]) {
					distances[new_destination] = distance;
					queue.push([distance, new_destination]);
					queue.sort((a, b) => a[0] - b[0]);
				}
			}
		);
	}

	return distances;
};

function solution(N, road, K) {
	// 1번 마을에서 K시간 아래로 배달이 가능한 마을의 개수를 리턴

	const graph = {};

	for (let i = 0; i < N; i++) {
		graph[i + 1] = {};
	}

	road.forEach((edge) => {
		let from = edge[0];
		let to = edge[1];
		let cost = edge[2];

		graph[from][to] = Math.min(cost, graph[from][to] || 987654321);
		graph[to][from] = Math.min(cost, graph[from][to] || 987654321);
	});
	const result = dijkstra(graph, 1);

	return Object.values(result).filter((value) => value <= K).length;
}

it("t1", function () {
	expect(
		solution(
			5,
			[
				[1, 2, 1],
				[2, 3, 3],
				[5, 2, 2],
				[1, 4, 2],
				[5, 3, 1],
				[5, 4, 2],
			],
			3
		)
	).toBe(4);
});

it("t2", function () {
	expect(
		solution(
			6,
			[
				[1, 2, 1],
				[1, 3, 2],
				[2, 3, 2],
				[3, 4, 3],
				[3, 5, 2],
				[3, 5, 3],
				[5, 6, 1],
			],
			4
		)
	).toBe(4);
});
