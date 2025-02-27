<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import {
		PUBLIC_FATHOM_ID,
		PUBLIC_FATHOM_URL,
	} from '$env/static/public';
	import { Footer, Nav } from '$lib/components';
	import * as Fathom from 'fathom-client';
	import '../app.css';

	let { children } = $props();

	$effect(() => {
		Fathom.load(PUBLIC_FATHOM_ID, {
			url: PUBLIC_FATHOM_URL,
		});
	});

	$effect(() => {
		$page.url.pathname, browser && Fathom.trackPageview();
	});
</script>

<div class="flex min-h-screen flex-col overflow-x-hidden">
	<Nav />
	<main
		class="container prose prose-xl mx-auto max-w-xl flex-grow px-4 ease-in-out"
	>
		{@render children()}
	</main>

	<Footer />
</div>
