<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import {
		PUBLIC_FATHOM_ID,
		PUBLIC_FATHOM_URL,
	} from '$env/static/public'
	import { Footer, Nav } from '$lib/components'
	import * as Fathom from 'fathom-client'
	import { onMount } from 'svelte'
	import '../app.postcss'

	onMount(() => {
		Fathom.load(PUBLIC_FATHOM_ID, {
			url: PUBLIC_FATHOM_URL,
			excludedDomains: ['localhost'],
		})
	})

	$: $page.url.pathname, browser && Fathom.trackPageview()
</script>

<div class="flex flex-col min-h-screen overflow-x-hidden">
	<Nav />
	<main
		class="container max-w-xl mx-auto px-4 ease-in-out flex-grow prose prose-xl"
	>
		<slot />
	</main>

	<Footer />
</div>
