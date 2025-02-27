<script lang="ts">
	import { ThemeSelect } from './';

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Masked Passwords', href: '/masked-passwords' },
		{ name: 'How Does It Work?', href: '/how-does-it-work' },
	];
</script>

<nav
	class="navbar bg-neutral text-neutral-content mb-16 justify-between shadow-lg"
>
	<ul class="hidden md:flex md:flex-row">
		{#each links as { href, name }}
			<a {href} class="btn btn-ghost btn-sm rounded-btn">{name}</a>
		{/each}
	</ul>
	<div class="md:hidden">
		<ul class="menu menu-horizontal px-1">
			<li>
				<details>
					<summary>Links</summary>
					<ul class="menu bg-base-100 rounded-box z-10 p-2">
						{#each links as { href, name }}
							<li>
								<a {href} class="">
									{name}
								</a>
							</li>
						{/each}
					</ul>
				</details>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<ThemeSelect />
	</div>
</nav>
