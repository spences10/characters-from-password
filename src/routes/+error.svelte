<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status}</title>
</svelte:head>

<article class="prose">
	<h1>{page.status}</h1>
	{#if page.status === 404}
		<p>There's nothing at <code>{page.url.pathname}</code>.</p>
	{:else}
		<p>{page.error?.message}</p>
	{/if}
	<p>Head back to the <a href="/">character picker</a>.</p>
</article>
