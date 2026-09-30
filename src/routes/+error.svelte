<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status}</title>
</svelte:head>

<main class="h-[73vh]">
	<h1>{page.status}</h1>
	<p>{page.error?.message}</p>
	<p>It looks like <code>{page.url.pathname}</code> doesn't exist</p>
	<p>
		Maybe check out the <a href="/">homepage</a>?
	</p>
</main>
