<script lang="ts">
	import { Bluesky, GitHub, YouTube } from '#lib/icons/index.js';

	const socials = [
		{
			label: 'Bluesky',
			href: 'https://bsky.app/profile/scottspence.dev',
			icon: Bluesky,
		},
		{
			label: 'GitHub',
			href: 'https://github.com/spences10',
			icon: GitHub,
		},
		{ label: 'YouTube', href: 'https://ss10/yt', icon: YouTube },
	];
</script>

<footer>
	<p>
		Made by <a
			href="https://scottspence.com"
			target="_blank"
			rel="noopener noreferrer">Scott Spence</a
		>. © {new Date().getFullYear()}
	</p>
	<ul>
		{#each socials as { label, href, icon: Icon } (href)}
			<li>
				<a
					aria-label={label}
					{href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon height={20} width={20} />
				</a>
			</li>
		{/each}
	</ul>
</footer>

<style>
	footer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		inline-size: 100%;
		max-inline-size: 68rem;
		margin-inline: auto;
		padding: 2rem clamp(1rem, 4vw, 2.5rem) 2.5rem;
		border-block-start: 1px solid var(--border);
		color: var(--ink-soft);
		font-size: 0.95rem;
	}

	p {
		margin: 0;
	}

	a {
		color: inherit;
	}

	p a {
		text-decoration-color: var(--brass);
		text-underline-offset: 4px;
	}

	ul {
		display: flex;
		gap: 1.1rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	ul a {
		display: grid;
		color: var(--ink-soft);
	}

	ul a:hover {
		color: var(--brass);
	}
</style>
