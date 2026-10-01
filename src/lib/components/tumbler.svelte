<script lang="ts">
	/**
	 * One combination-lock drum. Ten faces around a cylinder: face 0 is
	 * blank, face 5 holds the revealed glyph, the rest are decoys.
	 * `spins` only ever increases, so the drum always rolls forward.
	 */
	interface Props {
		glyph?: string | null;
		position?: number;
		spins?: number;
		settle_delay?: number;
	}

	let {
		glyph = null,
		position = 0,
		spins = 0,
		settle_delay = 0,
	}: Props = $props();

	const FACES = 10;
	const TARGET = 5;
	const DECOYS =
		'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789#$%&@?!*+=';

	const faces = $derived(
		Array.from({ length: FACES }, (_, face) => {
			if (face === 0) return '';
			if (face === TARGET) return glyph ?? decoy(face);
			return decoy(face);
		}),
	);

	const angle = $derived(
		spins * 360 + (glyph === null ? 0 : TARGET * (360 / FACES)),
	);

	function decoy(face: number) {
		return DECOYS[(position * 7919 + face * 104729) % DECOYS.length];
	}
</script>

<span
	class="tumbler"
	aria-hidden="true"
	style:--settle-delay="{settle_delay}ms"
>
	<span class="drum" style:--angle="{angle}deg">
		{#each faces as face, i (i)}
			<span
				class="face"
				class:blank={i === 0}
				class:target={i === TARGET && glyph !== null}
				style:--i={i}>{face === ' ' ? '␣' : face}</span
			>
		{/each}
	</span>
</span>

<style>
	.tumbler {
		--face-h: var(--tumbler-face-h, 3rem);
		--radius: calc(var(--face-h) * 1.5388);
		position: relative;
		display: block;
		inline-size: var(--tumbler-w, 2.6rem);
		block-size: calc(var(--face-h) * 1.5);
		overflow: hidden;
		border-radius: 0.3rem;
		perspective: 32rem;
		background: var(--steel-lo);
		box-shadow:
			inset 0 0 0 1px
				color-mix(in oklab, var(--steel-ink) 35%, transparent),
			0 1px 0 color-mix(in oklab, var(--brass-hi) 40%, transparent);
	}

	/* Curvature: darken the top and bottom of the window, keep a lit band */
	.tumbler::after {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: linear-gradient(
			to bottom,
			color-mix(
					in oklab,
					var(--steel-ink) var(--drum-shade),
					transparent
				)
				0%,
			transparent 30%,
			color-mix(in oklab, white 14%, transparent) 48%,
			transparent 56%,
			transparent 70%,
			color-mix(
					in oklab,
					var(--steel-ink) var(--drum-shade),
					transparent
				)
				100%
		);
	}

	.drum {
		position: absolute;
		inset: 0;
		transform-style: preserve-3d;
		transform: translateZ(calc(var(--radius) * -1))
			rotateX(calc(var(--angle) * -1));
		transition: transform 1.1s var(--spring);
		/* backwards, not both: a held fill would block the transition */
		animation: settle 1.4s var(--spring) var(--settle-delay) backwards;
	}

	.face {
		position: absolute;
		inset-inline: 0;
		inset-block-start: calc(50% - var(--face-h) / 2);
		block-size: var(--face-h);
		display: grid;
		place-items: center;
		backface-visibility: hidden;
		transform: rotateX(calc(var(--i) * 36deg))
			translateZ(var(--radius));
		background: linear-gradient(
			to bottom,
			var(--steel-lo),
			var(--steel) 22%,
			var(--steel-hi) 50%,
			var(--steel) 78%,
			var(--steel-lo)
		);
		border-block: 1px solid
			color-mix(in oklab, var(--steel-ink) 18%, transparent);
		font-family: var(--font-mono);
		font-size: calc(var(--face-h) * 0.56);
		font-weight: 500;
		color: color-mix(in oklab, var(--steel-ink) 38%, var(--steel));
		font-variant-numeric: slashed-zero;
	}

	.face.target {
		color: var(--steel-ink);
		font-weight: 650;
	}

	/* The blank face carries a small machined notch instead of a glyph */
	.face.blank::before {
		content: '';
		inline-size: 0.9em;
		block-size: 2px;
		border-radius: 1px;
		background: color-mix(
			in oklab,
			var(--steel-ink) 30%,
			transparent
		);
	}

	@keyframes settle {
		from {
			transform: translateZ(calc(var(--radius) * -1)) rotateX(-720deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.drum {
			transition: none;
			animation: none;
		}
		.face {
			transition: color 0.2s ease-out;
		}
	}
</style>
