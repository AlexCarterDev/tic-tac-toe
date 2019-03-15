export default {
	getGamesList
}

const names = [
	"Mario Speedwagon",
	"Petey Cruiser",
	"Anna Sthesia",
	"Paul Molive",
	"Anna Mull",
	"Gail Forcewind",
	"Paige Turner",
	"Bob Frapples",
	"Walter Melon",
	"Nick R. Bocker",
	"Barb Ackue",
	"Buck Kinnear",
	"Greta Life",
	"Ira Membrit",
	"Shonda Leer",
	"Brock Lee",
	"Maya Didas",
	"Rick O'Shea",
	"Pete Sariya",
	"Monty Carlo",
]

function generateGameList() {
	var obj = {
		status: 'ok',
		code: 0,
		games: []
	};

	for (let i = 0; i < 5; i++) {
		obj.games.push({
			gameTocken: 'token_' + i,
			owner: names[i],
			opponent: '',
			size: 3,
			gameDuration: i*1234,
			gameResult: '',
			state: 'ready'
		})
	}

	for (let i = 5; i < 10; i++) {
		obj.games.push({
			gameTocken: 'token_' + i,
			owner: names[i],
			opponent: names[i + 10],
			size: 3,
			gameDuration: i*1234,
			gameResult: '',
			state: 'playing'
		})
	}

	for (let i = 15; i < 19; i++) {
		obj.games.push({
			gameTocken: 'token_' + i,
			owner: names[i],
			opponent: names[i-10],
			size: 3,
			gameDuration: i*12345,
			gameResult: i%2 ? 'owner' : 'opponent',
			state: 'done'
		})
	}

	obj.games.push({
		gameTocken: 'token_' + 123,
		owner: names[0],
		opponent: names[19],
		size: 3,
		gameDuration: 1234,
		gameResult: 'draw',
		state: 'done'
	})

	return obj
}

function getGamesList(callback, options, err) {
	var response = generateGameList();
	callback(response.games);
}

