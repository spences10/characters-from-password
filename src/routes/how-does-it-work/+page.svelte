<script lang="ts">
	import { description, siteName, website as url } from '$lib/info'
	import { Head } from 'svead'

	export let data
	let { Copy } = data
</script>

<Head
	title={`How Doe It Work? · ${siteName}`}
	{description}
	image={'/favicon.png'}
	{url}
/>

<div class="mb-20">
	<svelte:component this={Copy} />
</div>

<div class="divider" />
