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
	class="navbar mb-16 justify-between bg-neutral text-neutral-content shadow-lg"
>
	<ul class="hidden md:flex md:flex-row">
		{#each links as { href, name }}
			<a {href} class="btn btn-ghost btn-sm rounded-btn">{name}</a>
		{/each}
	</ul>
	<div class="md:hidden md:flex-none md:bg-red-500">
		<ul class="menu menu-horizontal px-1">
			<li>
				<details>
					<summary>Links</summary>
					<ul class="flex flex-col bg-base-100 p-2">
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
