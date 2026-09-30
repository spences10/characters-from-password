<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as DropdownMenu from '#lib/components/ui/dropdown-menu/index.js';
	import Menu from '@lucide/svelte/icons/menu';
	import ModeToggle from './mode-toggle.svelte';

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Masked Passwords', href: '/masked-passwords' },
		{ name: 'How Does It Work?', href: '/how-does-it-work' },
	];
</script>

<nav
	class="mb-16 flex items-center justify-between border-b bg-background px-4 py-2"
>
	<ul class="hidden gap-1 md:flex">
		{#each links as { href, name } (href)}
			<li>
				<Button
					{href}
					variant={page.url.pathname === href ? 'secondary' : 'ghost'}
					size="sm"
					aria-current={page.url.pathname === href
						? 'page'
						: undefined}
				>
					{name}
				</Button>
			</li>
		{/each}
	</ul>
	<div class="md:hidden">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="ghost" size="icon">
						<Menu />
						<span class="sr-only">Open menu</span>
					</Button>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="start">
				{#each links as { href, name } (href)}
					<DropdownMenu.Item>
						{#snippet child({ props })}
							<a {href} {...props}>{name}</a>
						{/snippet}
					</DropdownMenu.Item>
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
	<ModeToggle />
</nav>
