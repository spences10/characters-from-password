<script>
	import CharacterPicker from '$lib/components/character-picker.svelte'
	import NumberOfBreaches from '$lib/components/number-of-breaches.svelte'
	import { description, siteName, website as url } from '$lib/info'
	import { Head } from 'svead'
	import hash from 'sha1'
	import { cubicOut } from 'svelte/easing'
	import { tweened } from 'svelte/motion'
	import { fetchHIBPHashes } from '../stores/hibp-store'

	let password = ''

	/**
	 * @param {{ target: { value: any; }; }} event
	 */
	function passwordChange(event) {
		let typed = event.target.value
		// @ts-ignore
		let sha1 = hash(typed).toUpperCase()
		fetchHIBPHashes(sha1)
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

<div class="all-prose">
	<h1>Password Character Picker</h1>
</div>

<div class="mb-20 all-prose">
	<p>Enter a password to pick specific characters from it.</p>
</div>

<div class="mb-20 form-control">
	<input
		class="mx-1 lg:-mx-40 text-center text-4xl input input-primary input-bordered input-lg shadow-lg"
		type="password"
		placeholder="Enter a password here"
		on:input={passwordChange}
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
