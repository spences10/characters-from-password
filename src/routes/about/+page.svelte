<script lang="ts">
	import { description, site_name, website as url } from '#lib';
	import { GetFunPassword } from '#lib/components/index.js';
	import { Head } from 'svead';

	let { data } = $props();
	const Copy = $derived(data.Copy);
</script>

<Head
	seo_config={{
		title: `About · ${site_name}`,
		description,
		url,
		site_name,
		open_graph_image: `${url}/og-image.png`,
	}}
/>

<article class="prose">
	<Copy />
</article>

<GetFunPassword />
