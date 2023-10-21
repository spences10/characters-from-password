<script lang="ts">
	import { ThemeSelect } from './index'

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Masked Passwords', href: '/masked-passwords' },
		{ name: 'How Does It Work?', href: '/how-does-it-work' },
	]
</script>

<nav class="navbar shadow-lg bg-neutral text-neutral-content mb-16">
	<ul
		class=""
	>
		{#each links as { href, name }}
			<a {href} class="btn btn-ghost btn-sm rounded-btn">{name}</a>
		{/each}
	</ul>
	<div class="navbar-end"><ThemeSelect /></div>
</nav>
