<script lang="ts">
	import { description, site_name, website as url } from '$lib';
	import { Head } from 'svead';

	let { data } = $props();
	let { Copy } = data;
</script>

<Head
	title={`How Doe It Work? · ${site_name}`}
	{description}
	image={'/favicon.png'}
	{url}
/>

<div class="mb-20">
	<Copy />
</div>

<div class="divider"></div>
