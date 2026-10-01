<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as DropdownMenu from '#lib/components/ui/dropdown-menu/index.js';
	import Menu from '@lucide/svelte/icons/menu';
	import ModeToggle from './mode-toggle.svelte';

	const links = [
		{ name: 'About', href: '/about' },
		{ name: 'Masked passwords', href: '/masked-passwords' },
		{ name: 'How it works', href: '/how-does-it-work' },
	];

	const current = (href: string) => page.url.pathname === href;
</script>

<nav>
	<a
		href="/"
		class="wordmark"
		aria-current={current('/') ? 'page' : undefined}
	>
		<span class="dial" aria-hidden="true"></span>
		<!-- the home page's h1 already shows the name -->
		<span class={{ 'sr-only': current('/') }}
			>Characters from Password</span
		>
	</a>

	<ul class="links">
		{#each links as { href, name } (href)}
			<li>
				<a {href} aria-current={current(href) ? 'page' : undefined}
					>{name}</a
				>
			</li>
		{/each}
	</ul>

	<div class="end">
		<div class="menu">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Button {...props} variant="ghost" size="icon">
							<Menu />
							<span class="sr-only">Open menu</span>
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
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
	</div>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		inline-size: 100%;
		max-inline-size: 68rem;
		margin-inline: auto;
		padding: 1.1rem clamp(1rem, 4vw, 2.5rem);
	}

	.wordmark {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		font-family: var(--font-display);
		font-size: 1.2rem;
		color: var(--ink);
		text-decoration: none;
	}

	/* A tiny safe dial: brass ring with a pointer notch */
	.dial {
		inline-size: 1.35rem;
		block-size: 1.35rem;
		border-radius: 50%;
		background:
			linear-gradient(var(--brass-lo), var(--brass-lo)) 50% 12% / 2px
				32% no-repeat,
			radial-gradient(
				circle,
				var(--enamel-deep) 38%,
				transparent 40%
			),
			conic-gradient(
				from 200deg,
				var(--brass-hi),
				var(--brass),
				var(--brass-lo),
				var(--brass),
				var(--brass-hi)
			);
		transition: rotate 0.9s var(--spring);
	}

	.wordmark:hover .dial {
		rotate: 120deg;
	}

	.links {
		display: none;
		gap: 1.5rem;
		margin: 0 0 0 auto;
		padding: 0;
		list-style: none;
	}

	.links a {
		color: var(--ink-soft);
		text-decoration: none;
		text-underline-offset: 6px;
	}

	.links a:hover {
		color: var(--ink);
	}

	.links a[aria-current='page'] {
		color: var(--ink);
		text-decoration: underline;
		text-decoration-color: var(--brass);
		text-decoration-thickness: 2px;
	}

	.end {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		margin-inline-start: auto;
	}

	@media (width >= 48rem) {
		.links {
			display: flex;
		}
		.end {
			margin-inline-start: 0;
		}
		.menu {
			display: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.dial {
			transition: none;
		}
	}
</style>
