<script lang="ts">
	import { description, site_name, website as url } from '$lib';
	import { Head } from 'svead';

	let { data } = $props();
	let { Copy } = data;
</script>

<Head
	title={`Masked Passwords · ${site_name}`}
	{description}
	image={'/favicon.png'}
	{url}
/>

<div class="mb-20">
	<svelte:component this={Copy} />
</div>

<div class="divider"></div>
