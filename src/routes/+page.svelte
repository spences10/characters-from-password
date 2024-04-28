<script lang="ts">
	import {
		CharacterPicker,
		Hero,
		NumberOfBreaches,
	} from '$lib/components';
	import { description, siteName, website as url } from '$lib/info';
	import hash from 'sha1';
	import { Head } from 'svead';
	import { fetch_hibp_hashes } from '../stores/hibp-store';

	let password = $state('');

	const password_change = (event: Event): void => {
		const typed = (event.target as HTMLInputElement).value;
		const sha1 = hash(typed).toUpperCase();
		fetch_hibp_hashes(sha1);
	};
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
		class="input input-lg input-bordered input-primary mx-1 text-center text-4xl shadow-lg lg:-mx-40"
		type="password"
		placeholder="Enter a password here"
		oninput={password_change}
		bind:value={password}
	/>
</div>

<p class="mb-10 text-2xl tracking-wide">
	If this password is in a publicly known breach it'll show up below.
</p>

<CharacterPicker {password} />

<NumberOfBreaches />

<div class="divider"></div>
