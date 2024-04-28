<script lang="ts">
	import { GetFunPassword } from '$lib/components';
	import { description, siteName, website as url } from '$lib/info';
	import { Head } from 'svead';

	let { data } = $props();
	let { Copy } = data;
</script>

<Head
	title={`About · ${siteName}`}
	{description}
	image={'/favicon.png'}
	{url}
/>

<div class="mb-20">
	<svelte:component this={Copy} />
</div>

<div class="divider"></div>

<GetFunPassword />

<div class="divider"></div>
