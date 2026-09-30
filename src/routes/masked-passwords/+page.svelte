<script lang="ts">
	import { description, site_name, website as url } from '#lib';
	import { Separator } from '#lib/components/ui/separator/index.js';
	import { Head } from 'svead';

	let { data } = $props();
	const Copy = $derived(data.Copy);
</script>

<Head
	seo_config={{
		title: `Masked Passwords · ${site_name}`,
		description,
		url,
		site_name,
		open_graph_image: '/favicon.png',
	}}
/>

<div class="mb-20">
	<Copy />
</div>

<Separator class="my-8" />
