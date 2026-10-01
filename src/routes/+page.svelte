<script lang="ts">
	import {
		create_breaches,
		description,
		site_name,
		website as url,
	} from '#lib';
	import {
		BreachPlate,
		CharacterPicker,
	} from '#lib/components/index.js';
	import Eye from '@lucide/svelte/icons/eye';
	import EyeOff from '@lucide/svelte/icons/eye-off';
	import hash from 'sha1';
	import { onMount } from 'svelte';
	import { Head } from 'svead';

	let password = $state('');
	let visible = $state(false);
	const breaches = create_breaches();

	function check(value: string) {
		if (value === '') breaches.reset();
		else breaches.check(hash(value).toUpperCase());
	}

	// Covers anything typed or autofilled before hydration
	onMount(() => check(password));
</script>

<Head
	seo_config={{
		title: `${site_name}: pick the characters your bank asks for`,
		description,
		url,
		site_name,
		open_graph_image: `${url}/og-image.png`,
	}}
/>

<header class="intro">
	<h1>{site_name}</h1>
	<p>
		Bank asking for the 2nd, 5th and 8th characters? Type your
		password once and tap the positions.
	</p>
</header>

<CharacterPicker {password}>
	{#snippet input()}
		<div class="slot">
			<label for="password" class="sr-only">Password</label>
			<input
				id="password"
				type={visible ? 'text' : 'password'}
				placeholder="Enter a password here"
				autocomplete="off"
				autocapitalize="off"
				spellcheck="false"
				bind:value={password}
				oninput={() => check(password)}
			/>
			<button
				type="button"
				class="reveal"
				aria-pressed={visible}
				onclick={() => (visible = !visible)}
			>
				{#if visible}<EyeOff aria-hidden="true" />{:else}<Eye
						aria-hidden="true"
					/>{/if}
				<span class="sr-only">Show password</span>
			</button>
		</div>
	{/snippet}
	{#snippet aside()}
		<BreachPlate status={breaches.status} count={breaches.count} />
	{/snippet}
</CharacterPicker>

<p class="privacy">
	Your password stays in your browser. Only the first five characters
	of its SHA-1 hash go to
	<a href="https://haveibeenpwned.com/Passwords">Have I Been Pwned</a>
	for the breach check. <a href="/how-does-it-work">How it works</a>
</p>

<style>
	.intro {
		margin-block-end: clamp(1.25rem, 3vw, 2rem);
	}

	h1 {
		margin: 0;
		font-size: clamp(2.1rem, 5vw, 3.4rem);
		letter-spacing: -0.015em;
	}

	.intro p {
		max-inline-size: 40rem;
		margin: 0.6rem 0 0;
		font-size: clamp(1.05rem, 2vw, 1.2rem);
		color: var(--ink-soft);
	}

	.privacy {
		max-inline-size: 40rem;
		margin: clamp(2rem, 5vw, 3rem) 0 0;
		font-size: 0.95rem;
		color: var(--ink-soft);
	}

	.privacy a {
		color: var(--ink);
		text-decoration-color: var(--brass);
		text-decoration-thickness: 2px;
		text-underline-offset: 4px;
	}

	.slot {
		display: flex;
		align-items: center;
		border-radius: 0.6rem;
		background: var(--slot);
		box-shadow:
			inset 0 3px 10px color-mix(in oklab, black 55%, transparent),
			0 1px 0 color-mix(in oklab, var(--brass-hi) 25%, transparent);
	}

	.slot:focus-within {
		outline: 2px solid var(--brass);
		outline-offset: 3px;
	}

	input {
		flex: 1;
		min-inline-size: 0;
		padding: 1rem 1.25rem;
		border: 0;
		background: transparent;
		color: #f3eedd;
		font-family: var(--font-mono);
		font-size: clamp(1.15rem, 2.5vw, 1.4rem);
		letter-spacing: 0.08em;
		outline: none;
	}

	input::placeholder {
		color: color-mix(in oklab, #f3eedd 45%, transparent);
		font-family: var(--font-sans);
		letter-spacing: 0;
	}

	.reveal {
		display: grid;
		place-items: center;
		inline-size: 3.25rem;
		align-self: stretch;
		border: 0;
		border-inline-start: 1px solid
			color-mix(in oklab, var(--brass) 25%, transparent);
		background: none;
		color: color-mix(in oklab, #f3eedd 70%, transparent);
		cursor: pointer;
	}

	.reveal:hover,
	.reveal[aria-pressed='true'] {
		color: var(--brass-hi);
	}
</style>
