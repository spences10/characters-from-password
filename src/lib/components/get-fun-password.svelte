<script lang="ts">
	import { get_fun_password } from '#lib/password-gen.js';
	import Tumbler from './tumbler.svelte';

	let fun_password = $state('');
	let spins = $state(0);
	let copied = $state(false);

	const words = $derived(fun_password ? fun_password.split(' ') : []);

	function generate() {
		fun_password = get_fun_password();
		spins += 1;
		copied = false;
	}

	async function copy() {
		await navigator.clipboard.writeText(fun_password);
		copied = true;
	}
</script>

<section class="generator">
	<h2>Need a better one?</h2>
	<p>
		Four random words are easier to remember than a jumble of symbols,
		and harder to guess.
	</p>

	<div class="actions">
		<button type="button" class="primary" onclick={generate}>
			{fun_password ? 'Spin again' : 'Get Fun Password'}
		</button>
		{#if fun_password}
			<button type="button" class="secondary" onclick={copy}>
				{copied ? 'Copied' : 'Copy'}
			</button>
		{/if}
	</div>

	{#if fun_password}
		<p class="sr-only" aria-live="polite">{fun_password}</p>
		<div class="words" aria-hidden="true">
			{#each words as word, w (`${spins}-${w}`)}
				<span class="word">
					{#each Array.from(word) as char, c (c)}
						<Tumbler glyph={char} position={w * 31 + c} {spins} />
					{/each}
				</span>
			{/each}
		</div>
	{/if}
</section>

<style>
	.generator {
		max-inline-size: 62ch;
		margin-block-start: clamp(3rem, 8vw, 5rem);
		padding-block-start: 2.5rem;
		border-block-start: 1px solid var(--border);
	}

	h2 {
		margin: 0;
		font-size: clamp(1.8rem, 4vw, 2.5rem);
	}

	p {
		margin: 0.75rem 0 0;
		color: var(--ink-soft);
	}

	.actions {
		display: flex;
		gap: 0.75rem;
		margin-block-start: 1.5rem;
	}

	button {
		padding: 0.7rem 1.3rem;
		border-radius: 0.5rem;
		font: inherit;
		font-weight: 600;
		cursor: pointer;
		transition: transform 0.2s var(--ease-out-expo);
	}

	button:active {
		transform: translateY(1px);
	}

	.primary {
		border: 0;
		background: linear-gradient(
			to bottom,
			var(--brass-hi),
			var(--brass) 55%,
			var(--brass-lo)
		);
		color: #241a07;
		box-shadow:
			inset 0 1px 0 color-mix(in oklab, white 40%, transparent),
			0 6px 16px -8px
				color-mix(in oklab, var(--brass-lo) 80%, transparent);
	}

	.secondary {
		border: 1px solid var(--border);
		background: transparent;
		color: var(--ink);
	}

	.words {
		--tumbler-face-h: 2.3rem;
		--tumbler-w: 1.85rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem 1.4rem;
		margin-block-start: 1.75rem;
	}

	.word {
		display: flex;
		gap: 0.25rem;
	}
</style>
