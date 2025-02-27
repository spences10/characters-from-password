<script lang="ts">
	import {
		create_breaches,
		description,
		site_name,
		website as url,
	} from '$lib';
	import {
		CharacterPicker,
		Hero,
		NumberOfBreaches,
	} from '$lib/components';
	import hash from 'sha1';
	import { Head } from 'svead';

	let password = $state('');
	const breaches = create_breaches();

	const password_change = (event: Event): void => {
		const typed = (event.target as HTMLInputElement).value;
		const sha1 = hash(typed).toUpperCase();
		breaches.fetch_hibp_hashes(sha1);
	};
</script>

<Head
	title={`Welcome! · ${site_name}`}
	{description}
	image={'/favicon.png'}
	{url}
/>

<Hero />

<fieldset class="fieldset">
	<legend class="fieldset-legend sr-only">
		Enter a password here
	</legend>
	<input
		class="input input-xl input-primary rounded-box mx-1 w-auto text-center shadow-lg lg:-mx-40"
		type="password"
		placeholder="Enter a password here"
		oninput={password_change}
		bind:value={password}
	/>
	<p class="fieldset-label sr-only">Paste in a password here</p>
</fieldset>

<p class="mb-10 text-2xl tracking-wide">
	If this password is in a publicly known breach it'll show up below.
</p>

<CharacterPicker {password} />

<NumberOfBreaches breaches_count={breaches.breaches} />

<div class="divider"></div>
