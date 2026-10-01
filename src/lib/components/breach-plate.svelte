<script lang="ts">
	import type { BreachStatus } from '#lib/hibp.svelte.js';

	interface Props {
		status: BreachStatus;
		count?: number;
	}

	let { status, count = 0 }: Props = $props();

	const formatted = $derived(
		new Intl.NumberFormat('en-GB').format(count),
	);
</script>

<section
	class="plate"
	data-status={status}
	aria-live="polite"
	aria-busy={status === 'checking'}
>
	{#if status === 'idle'}
		<h2>Breach check</h2>
		<p>Waiting for a password.</p>
	{:else if status === 'checking'}
		<h2>Checking breach records…</h2>
		<p>Only the first five characters of its SHA-1 hash are sent.</p>
	{:else if status === 'found'}
		<p class="count">{formatted}</p>
		<h2>{count === 1 ? 'time' : 'times'} in known data breaches</h2>
		<p>
			Attackers try this password first. Change it anywhere you use
			it.
		</p>
	{:else if status === 'clear'}
		<h2>Not found in known breaches</h2>
		<p>
			That's a good sign, not a guarantee. Keep it unique to one site.
		</p>
	{:else}
		<h2>Couldn't reach the breach database</h2>
		<p>Check your connection, then edit the password to try again.</p>
	{/if}
</section>

<style>
	.plate {
		--plate: var(--enamel-raised);
		--plate-ink: var(--ink);
		--plate-soft: var(--ink-soft);
		position: relative;
		padding: 1.5rem 1.75rem 1.6rem;
		border-radius: 0.6rem;
		background: var(--plate);
		color: var(--plate-ink);
		box-shadow:
			inset 0 0 0 1px
				color-mix(in oklab, var(--plate-ink) 14%, transparent),
			inset 0 0 0 5px var(--plate),
			inset 0 0 0 6px
				color-mix(in oklab, var(--plate-ink) 22%, transparent);
		transition:
			background-color 0.5s var(--ease-out-expo),
			color 0.5s var(--ease-out-expo);
	}

	.plate[data-status='found'] {
		--plate: var(--alarm);
		--plate-ink: var(--alarm-ink);
		--plate-soft: color-mix(
			in oklab,
			var(--alarm-ink) 82%,
			var(--alarm)
		);
		animation: stamp 0.5s var(--ease-out-expo);
	}

	.plate[data-status='clear'] {
		--plate: color-mix(
			in oklab,
			var(--brass) 22%,
			var(--enamel-raised)
		);
	}

	.plate[data-status='idle'] {
		--plate: transparent;
		box-shadow: inset 0 0 0 1px var(--border);
	}

	.plate[data-status='checking'] h2 {
		color: var(--plate-soft);
	}

	h2 {
		margin: 0;
		font-size: 1.4rem;
	}

	p {
		margin: 0.5rem 0 0;
		color: var(--plate-soft);
	}

	.count {
		margin: 0 0 0.15rem;
		font-family: var(--font-display);
		font-size: clamp(2.6rem, 6vw, 3.6rem);
		line-height: 1;
		color: var(--plate-ink);
		font-variant-numeric: lining-nums tabular-nums;
	}

	@keyframes stamp {
		from {
			transform: scale(1.04) rotate(-0.6deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.plate[data-status='found'] {
			animation: none;
		}
	}
</style>
