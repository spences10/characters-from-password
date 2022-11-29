<script>
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import Footer from '$lib/components/footer.svelte'
	import Nav from '$lib/components/nav.svelte'
	import * as Fathom from 'fathom-client'
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'
	import '../app.css'

	import {
		PUBLIC_FATHOM_ID,
		PUBLIC_FATHOM_URL,
	} from '$env/static/public'

	onMount(() => {
		themeChange(false)
		Fathom.load(PUBLIC_FATHOM_ID, {
			url: PUBLIC_FATHOM_URL,
			excludedDomains: ['localhost'],
		})
	})

	$: $page.url.pathname, browser && Fathom.trackPageview()
</script>

<Nav />
<main
	class="container max-w-xl mx-auto px-4 transition-all duration-[2000] ease-in-out"
>
	<slot />
</main>
<Footer />
