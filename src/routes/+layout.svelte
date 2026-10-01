<script lang="ts">
	import { Footer, Nav } from '#lib/components/index.js';
	import {
		PUBLIC_FATHOM_ID,
		PUBLIC_FATHOM_URL,
	} from '$app/env/public';
	import { afterNavigate } from '$app/navigation';
	import * as Fathom from 'fathom-client';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		if (!PUBLIC_FATHOM_ID) return;
		Fathom.load(PUBLIC_FATHOM_ID, {
			url: PUBLIC_FATHOM_URL,
		});
	});

	afterNavigate(() => {
		if (PUBLIC_FATHOM_ID) Fathom.trackPageview();
	});
</script>

<ModeWatcher defaultMode="dark" />

<a class="skip" href="#content">Skip to content</a>

<div class="shell">
	<Nav />
	<main id="content">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.shell {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-block-size: 100dvh;
		overflow-x: clip;
	}

	main {
		inline-size: 100%;
		max-inline-size: 68rem;
		margin-inline: auto;
		padding: clamp(1.25rem, 4vw, 3rem) clamp(1rem, 4vw, 2.5rem)
			clamp(4rem, 10vw, 7rem);
	}

	.skip {
		position: absolute;
		inset-inline-start: 1rem;
		inset-block-start: -4rem;
		z-index: 10;
		padding: 0.6rem 1rem;
		border-radius: 0.4rem;
		background: var(--brass);
		color: var(--primary-foreground);
	}

	.skip:focus {
		inset-block-start: 1rem;
	}
</style>
