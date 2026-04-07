import type { Particle, PlayerState } from './types';

export function createParticle(
	x: number,
	y: number,
	color: string,
	opts?: Partial<Pick<Particle, 'vx' | 'vy' | 'life' | 'size'>>,
): Particle {
	return {
		x,
		y,
		vx: opts?.vx ?? (Math.random() - 0.5) * 100,
		vy: opts?.vy ?? (Math.random() - 0.5) * 100,
		life: opts?.life ?? 0.5,
		maxLife: opts?.life ?? 0.5,
		color,
		size: opts?.size ?? 3,
	};
}

/** Emit a burst of particles */
export function emitBurst(
	particles: Particle[],
	x: number,
	y: number,
	count: number,
	color: string,
	spread: number = 150,
): void {
	for (let i = 0; i < count; i++) {
		particles.push(createParticle(x, y, color, {
			vx: (Math.random() - 0.5) * spread,
			vy: (Math.random() - 0.5) * spread,
			life: 0.3 + Math.random() * 0.4,
			size: 2 + Math.random() * 3,
		}));
	}
}

/** Create running trail particles */
export function emitRunTrail(particles: Particle[], player: PlayerState): void {
	if (!player.grounded || Math.abs(player.vel.x) < 50) return;

	particles.push(createParticle(
		player.pos.x + player.width / 2 + (Math.random() - 0.5) * 6,
		player.pos.y + player.height,
		'var(--color-selection)',
		{
			vx: -player.vel.x * 0.1 + (Math.random() - 0.5) * 20,
			vy: -Math.random() * 30,
			life: 0.2 + Math.random() * 0.15,
			size: 2 + Math.random() * 2,
		},
	));
}

/** Create jump particles */
export function emitJumpBurst(particles: Particle[], player: PlayerState): void {
	emitBurst(
		particles,
		player.pos.x + player.width / 2,
		player.pos.y + player.height,
		6,
		'var(--color-caret)',
		100,
	);
}

/** Create wall slide particles */
export function emitWallSlideTrail(particles: Particle[], player: PlayerState): void {
	const wallX = player.wallDir === 1
		? player.pos.x + player.width
		: player.pos.x;

	particles.push(createParticle(
		wallX,
		player.pos.y + Math.random() * player.height,
		'var(--color-syntax-tag)',
		{
			vx: player.wallDir * -20,
			vy: -Math.random() * 20,
			life: 0.15 + Math.random() * 0.1,
			size: 1.5 + Math.random() * 1.5,
		},
	));
}

/** Create death particles */
export function emitDeathBurst(particles: Particle[], player: PlayerState): void {
	emitBurst(
		particles,
		player.pos.x + player.width / 2,
		player.pos.y + player.height / 2,
		20,
		'var(--color-syntax-error)',
		250,
	);
}

/** Update all particles, removing dead ones */
export function updateParticles(particles: Particle[], dt: number): void {
	for (let i = particles.length - 1; i >= 0; i--) {
		const p = particles[i];
		p.x += p.vx * dt;
		p.y += p.vy * dt;
		p.vy += 200 * dt; // Particle gravity
		p.life -= dt;

		if (p.life <= 0) {
			particles.splice(i, 1);
		}
	}
}
