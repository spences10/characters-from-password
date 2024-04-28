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

<NumberOfBreaches breaches_count={breaches.breaches} />

<div class="divider"></div>
