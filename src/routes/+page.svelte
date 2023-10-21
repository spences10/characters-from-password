<script lang="ts">
	import { CharacterPicker, NumberOfBreaches } from '$lib/components'
	import { description, siteName, website as url } from '$lib/info'
	import hash from 'sha1'
	import { Head } from 'svead'
	import { cubicOut } from 'svelte/easing'
	import { tweened } from 'svelte/motion'
	import { fetch_hibp_hashes } from '../stores/hibp-store'

	let password = ''

	const password_change = (event: Event): void => {
		const typed = (event.target as HTMLInputElement).value
		const sha1 = hash(typed).toUpperCase()
		fetch_hibp_hashes(sha1)
	}

	const height = tweened(0, {
		duration: 300,
		easing: cubicOut,
	})
	$: {
		if (password.length > 0) {
			height.set(1)
		} else {
			height.set(0)
		}
	}
</script>

<Head
	title={`Welcome! · ${siteName}`}
	{description}
	image={'/favicon.png'}
	{url}
/>

<h1>Character Picker: Making Password Characters Easy-Peasy!</h1>

<p>Paste your password and pick the characters you need, no fuss!</p>

<div class="mb-20 form-control">
	<input
		class="mx-1 lg:-mx-40 text-center text-4xl input input-primary input-bordered input-lg shadow-lg"
		type="password"
		placeholder="Enter a password here"
		on:input={password_change}
		bind:value={password}
	/>
</div>

<CharacterPicker {password} />

<div
	class="h-36"
	style="transform: scaleY({$height}); transform-origin: 10% 10%;"
>
	{#if password.length > 0}
		<NumberOfBreaches />
	{/if}
</div>

<div class="divider" />
