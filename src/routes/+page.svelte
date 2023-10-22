<script lang="ts">
	import {
		CharacterPicker,
		Hero,
		NumberOfBreaches,
	} from '$lib/components'
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

<Hero />

<div class="form-control">
	<input
		class="mx-1 lg:-mx-40 text-center text-4xl input input-primary input-bordered input-lg shadow-lg"
		type="password"
		placeholder="Enter a password here"
		on:input={password_change}
		bind:value={password}
	/>
</div>

<p class="text-2xl tracking-wide mb-10">
	If this password is in a publicly known breach it'll show up below.
</p>

<CharacterPicker {password} />

<NumberOfBreaches />

<div class="divider" />
