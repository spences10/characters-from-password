<script>
	import About from '$copy/about.md'
	import GetFunPassword from '$lib/components/get-fun-password.svelte'
	import { description, siteName, website as url } from '$lib/info'
	import { Head } from 'svead'
</script>

<Head
	title={`About · ${siteName}`}
	{description}
	image={'/favicon.png'}
	{url}
/>

<div class="all-prose mb-20">
	<About />
</div>

<div class="divider" />

<GetFunPassword />

<div class="divider" />
