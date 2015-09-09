function spaceInvaders(canvasId) {

	var canvas
	if (canvasId) canvas = document.querySelector('#'+canvasId)
	else canvas = document.querySelector('canvas')
	if (canvas.length) canvas = canvas[0]

	var gameProps = {
		size: {
			x: canvas.width,
			y: canvas.height
		},
		screen: canvas.getContext('2d')
	}

	var types = {
		invader: 'invader',
		player: 'player',
		bullet: 'bullet'
	}

	var defaultSize = {
		x: 15,
		y: 15
	}

	var patrol = {
		speed: .3,
		position: gameProps.size.x / 2,
		initial: gameProps.size.x / 2,
		variation: gameProps.size.x / 9 - defaultSize.x
	}

	var moveRight = false
	var moveLeft = false
	var makeBullet = false
	var bulletTimer = 0
	var playerAlive = true

	var initialBodies = createInvaders().concat(createPlayer())

	draw(initialBodies, gameProps)
	requestAnimationFrame(tick.bind(null, initialBodies))

	return {
		leftDown: function() {
			if (playerAlive) moveLeft = true
		},
		leftUp: function() {
			if (playerAlive) moveLeft = false
		},
		rightDown: function() {
			if (playerAlive) moveRight = true
		},
		rightUp: function() {
			if (playerAlive) moveRight = false
		},
		shoot: function() {
			if (playerAlive) makeBullet = true
		},
		stopShoot: function() {
			if (playerAlive) makeBullet = false
		}
	}

	function tick(bodies) {
		var newBodies = updateGame(bodies)
		draw(newBodies, gameProps)
		requestAnimationFrame(tick.bind(null, newBodies))
	}

	function draw(bodies) {
		gameProps.screen.clearRect(0, 0, gameProps.size.x, gameProps.size.y)
		bodies.forEach(function(body) {
			gameProps.screen.fillRect(body.center.x - body.size.x / 2, body.center.y - body.size.y / 2, body.size.x, body.size.y)
		})
	}

	function updateGame(bodies) {
		var invaders = bodies.filter(function(body) {
			return body.type === types.invader
		})
		if (patrol.position < patrol.initial - patrol.variation || patrol.position > patrol.initial + patrol.variation) {
			patrol.speed = -patrol.speed
			invaders.forEach(function(body) {
				body.center.y += 5
				if (Math.random() > .992 && !invaderBelow(body, invaders)) bodies.push(createBullet(body))
			})
		} else {
			invaders.forEach(function(body) {
				if (Math.random() > .992 && !invaderBelow(body, invaders)) bodies.push(createBullet(body))
			})
		}
		patrol.position += patrol.speed

		bulletTimer += 20
		if (makeBullet && !moveLeft && !moveRight && bulletTimer > 500) {
			bulletTimer = 0
			bodies.push(createBullet(bodies.filter(function(body) {
				return body.type === types.player
			})[0]))
		}

		return bodies.filter(function(b1) {
			return bodies.filter(function(b2) {
				var collision = colliding(b1, b2)
				if (collision && (b1.type === types.player || b2.type === types.player)) playerAlive = false
				return collision
			}).length === 0
		}).filter(function(body) {
			return !(body.type === types.bullet && isOffscreen(body))
		}).map(updateBody)
	}

	function invaderBelow(invader, invaders) {
		return invaders.filter(function(val) {
			return invader !== val && invader.center.x === val.center.x && invader.center.y < val.center.y
		}).length
	}

	function isOffscreen(body) {
		if (body.center.x > gameProps.size.x || body.center.x < 0 || body.center.y > gameProps.size.y) return true
		return false
	}

	function updateBody(body) {
		if (body.type === types.invader) return updateInvader(body)
		if (body.type === types.player) return updatePlayer(body)
		if (body.type === types.bullet) return updateBullet(body)
		return body
	}

	function updateInvader(invader) {
		invader.center.x += patrol.speed
		return invader
	}

	function updatePlayer(player) {
		if (moveLeft && player.center.x - player.size.x / 2 > 2) player.center.x -= 2
		if (moveRight && player.center.y - player.size.y / 2 < gameProps.size.x - 2) player.center.x += 2
		return player
	}

	function updateBullet(bullet) {
		bullet.center.x += bullet.velocity.x
		bullet.center.y += bullet.velocity.y
		return bullet
	}

	function createInvaders() {
		var invaders = []

		for (var i = 0; i < 27; i++) {
			invaders.push({
				type: types.invader,
				center: {
					x: gameProps.size.x / 9 + (i % 8) * gameProps.size.x / 9,
					y: gameProps.size.y / 9 + (i % 3) * gameProps.size.y / 9
				},
				size: defaultSize
			})
		}

		console.log(invaders)

		return invaders
	}

	function createPlayer() {
		return {
			type: types.player,
			size: defaultSize,
			center: {
				x: gameProps.size.x / 2 - 15,
				y: gameProps.size.y - 15
			}
		}
	}

	function createBullet(owner) {
		var velocity
		if (owner && owner.type === types.invader) {
			velocity = {
				x: Math.random() - .5,
				y: 2
			}
		} else {
			velocity = {
				x: 0,
				y: -6
			}
		}

		return {
			type: types.bullet,
			size: {
				x: 3,
				y: 3
			},
			center: {
				x: owner.center.x,
				y: owner.center.y + owner.size.y / 2
			},
			velocity: velocity,
			owner: owner.type
		}
	}

	function colliding(b1, b2) {
		return !(b1 === b2 ||
			b1.center.x + b1.size.x / 2 < b2.center.x - b2.size.x / 2 ||
			b1.center.x - b1.size.x / 2 > b2.center.x + b2.size.x / 2 ||
			b1.center.y + b1.size.y / 2 < b2.center.y - b2.size.y / 2 ||
			b1.center.y - b1.size.y / 2 > b2.center.y + b2.size.y / 2 ||
			b1.type === b2.type ||
			(b1.owner && b1.owner === b2.type) ||
			(b2.owner && b2.owner === b1.type))
	}
}