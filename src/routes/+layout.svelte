<script lang="ts">
	import { Footer, Nav } from '#lib/components/index.js';
	import {
		PUBLIC_FATHOM_ID,
		PUBLIC_FATHOM_URL,
	} from '$app/env/public';
	import { afterNavigate } from '$app/navigation';
	import * as Fathom from 'fathom-client';
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

<div class="flex min-h-screen flex-col overflow-x-hidden">
	<Nav />
	<main
		class="container mx-auto prose prose-xl max-w-xl grow px-4 ease-in-out"
	>
		{@render children()}
	</main>

	<Footer />
</div>
