<script lang="ts">
	import type { Snippet } from 'svelte';
	import { SvelteMap, SvelteSet } from 'svelte/reactivity';
	import Tumbler from './tumbler.svelte';
	import { get_character_type, join_list, ordinal } from './util';

	interface Props {
		password?: string;
		/** Rendered inside the lock panel, above the tumblers */
		input?: Snippet;
		/** Rendered beside the readout (e.g. the breach plate) */
		aside?: Snippet;
	}

	let { password = '', input, aside }: Props = $props();

	const IDLE_TUMBLERS = 6;

	const selected = new SvelteSet<number>();
	const spins = new SvelteMap<number, number>();

	// Code points, so an emoji is one position like a bank would count it
	const chars = $derived(Array.from(password));
	const picked = $derived(
		[...selected]
			.filter((i) => i < chars.length)
			.sort((a, b) => a - b),
	);
	const positions = $derived(
		chars.length > 0
			? chars
			: Array.from({ length: IDLE_TUMBLERS }, () => null),
	);

	function toggle(index: number) {
		if (selected.has(index)) selected.delete(index);
		else selected.add(index);
		spins.set(index, (spins.get(index) ?? 0) + 1);
	}

	function clear() {
		for (const index of picked)
			spins.set(index, (spins.get(index) ?? 0) + 1);
		selected.clear();
	}

	function describe(char: string) {
		if (char === ' ') return 'space';
		return get_character_type(char) || 'other character';
	}
</script>

<div class="lock">
	{@render input?.()}

	<ul class="rail" aria-label="Password positions">
		{#each positions as char, index (char === null ? `idle-${index}` : index)}
			{@const is_selected = char !== null && selected.has(index)}
			<li>
				<button
					type="button"
					class="position"
					aria-pressed={is_selected}
					disabled={char === null}
					aria-label="Position {index + 1}"
					onclick={() => toggle(index)}
				>
					<Tumbler
						glyph={is_selected ? char : null}
						position={index}
						spins={spins.get(index) ?? 0}
						settle_delay={char === null ? 120 + index * 70 : 0}
					/>
					<span class="numeral">{index + 1}</span>
				</button>
			</li>
		{/each}
	</ul>
</div>

<div class="below">
	<section class="readout" aria-live="polite">
		{#if chars.length === 0}
			<p class="prompt">
				Your password loads into the tumblers as you type.
			</p>
		{:else if picked.length === 0}
			<p class="prompt">Tap the positions your bank asks for.</p>
		{:else}
			<div class="readout-head">
				<h2>
					Enter the {join_list(picked.map((i) => ordinal(i + 1)))}
					{picked.length === 1 ? 'character' : 'characters'}
				</h2>
				<button type="button" class="clear" onclick={clear}
					>Clear</button
				>
			</div>
			<dl>
				{#each picked as index (index)}
					<div class="row">
						<dt>{ordinal(index + 1)}</dt>
						<dd class="glyph">
							{chars[index] === ' ' ? '␣' : chars[index]}
						</dd>
						<dd class="kind">{describe(chars[index])}</dd>
					</div>
				{/each}
			</dl>
		{/if}
	</section>

	{@render aside?.()}
</div>

<style>
	.lock {
		--bezel: 4px;
		position: relative;
		display: grid;
		gap: clamp(1.25rem, 3vw, 2rem);
		padding: clamp(1.25rem, 4vw, 2.5rem);
		border: var(--bezel) solid transparent;
		border-radius: 1rem;
		background:
			radial-gradient(
					120% 90% at 50% 0%,
					color-mix(in oklab, var(--enamel-raised) 70%, transparent),
					transparent 60%
				)
				padding-box,
			linear-gradient(var(--enamel-deep), var(--enamel-deep))
				padding-box,
			linear-gradient(
					135deg,
					var(--brass-hi),
					var(--brass) 30%,
					var(--brass-lo) 55%,
					var(--brass) 75%,
					var(--brass-hi)
				)
				border-box;
		box-shadow:
			inset 0 2px 18px color-mix(in oklab, black 45%, transparent),
			0 30px 60px -30px color-mix(in oklab, black 60%, transparent);
	}

	/* Rivets in the four corners of the bezel */
	.lock::before {
		content: '';
		position: absolute;
		inset: 0.6rem;
		pointer-events: none;
		--rivet: radial-gradient(
			circle at 35% 35%,
			var(--brass-hi),
			var(--brass) 45%,
			var(--brass-lo) 70%,
			transparent 72%
		);
		background:
			var(--rivet) top left / 0.7rem 0.7rem no-repeat,
			var(--rivet) top right / 0.7rem 0.7rem no-repeat,
			var(--rivet) bottom left / 0.7rem 0.7rem no-repeat,
			var(--rivet) bottom right / 0.7rem 0.7rem no-repeat;
	}

	.rail {
		--tumbler-face-h: clamp(2.6rem, 4.5vw, 3.4rem);
		--tumbler-w: clamp(2.2rem, 3.8vw, 2.9rem);
		display: flex;
		flex-wrap: wrap;
		gap: clamp(0.35rem, 1vw, 0.6rem);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.position {
		display: grid;
		justify-items: center;
		gap: 0.4rem;
		padding: 0.3rem;
		border: 0;
		border-radius: 0.45rem;
		background: transparent;
		color: inherit;
		cursor: pointer;
		transition: transform 0.25s var(--ease-out-expo);
	}

	.position:disabled {
		cursor: default;
	}

	.position:not(:disabled):hover {
		transform: translateY(-2px);
	}

	.position:not(:disabled):active {
		transform: translateY(1px);
	}

	.numeral {
		min-inline-size: 1.9rem;
		padding: 0.05rem 0.4rem 0;
		border-radius: 0.25rem;
		font-family: var(--font-display);
		font-size: 1.05rem;
		line-height: 1.4;
		font-variant-numeric: lining-nums tabular-nums;
		color: var(--ink-soft);
		transition:
			background-color 0.3s var(--ease-out-expo),
			color 0.3s var(--ease-out-expo);
	}

	.position[aria-pressed='true'] .numeral {
		background: linear-gradient(
			to bottom,
			var(--brass-hi),
			var(--brass) 60%,
			var(--brass-lo)
		);
		color: #241a07;
		box-shadow: 0 1px 0 color-mix(in oklab, white 30%, transparent)
			inset;
	}

	.position:disabled .numeral {
		opacity: 0.45;
	}

	.below {
		display: grid;
		gap: 2rem;
		margin-block-start: clamp(1.75rem, 4vw, 2.75rem);
	}

	@media (width >= 52rem) {
		.below {
			grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
			align-items: start;
		}
	}

	.prompt {
		margin: 0;
		font-size: 1.25rem;
		color: var(--ink-soft);
	}

	.readout-head {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.5rem 1.5rem;
	}

	.readout h2 {
		flex: 1 1 14ch;
		margin: 0;
		font-size: clamp(1.6rem, 3.6vw, 2.25rem);
	}

	.clear {
		padding: 0;
		border: 0;
		background: none;
		color: var(--ink-soft);
		font: inherit;
		text-decoration: underline;
		text-decoration-color: var(--brass);
		text-underline-offset: 4px;
		cursor: pointer;
	}

	.clear:hover {
		color: var(--ink);
	}

	dl {
		display: grid;
		margin: 1.25rem 0 0;
	}

	.row {
		display: grid;
		grid-template-columns: 3.25rem 3.25rem 1fr;
		align-items: center;
		gap: 1rem;
		padding-block: 0.6rem;
		border-block-start: 1px solid var(--border);
		animation: row-in 0.45s var(--ease-out-expo) both;
	}

	.row dt {
		font-family: var(--font-display);
		font-size: 1.35rem;
		color: var(--brass);
	}

	.row dd {
		margin: 0;
	}

	.glyph {
		display: grid;
		place-items: center;
		block-size: 2.6rem;
		border-radius: 0.3rem;
		background: linear-gradient(
			to bottom,
			var(--steel),
			var(--steel-hi) 50%,
			var(--steel)
		);
		color: var(--steel-ink);
		font-family: var(--font-mono);
		font-size: 1.45rem;
		font-weight: 650;
		font-variant-numeric: slashed-zero;
	}

	.kind {
		color: var(--ink-soft);
	}

	@keyframes row-in {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.row {
			animation: none;
		}
		.position {
			transition: none;
		}
	}
</style>
