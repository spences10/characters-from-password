<script lang="ts">
	import {
		create_breaches,
		description,
		site_name,
		website as url,
	} from '#lib';
	import {
		CharacterPicker,
		Hero,
		NumberOfBreaches,
	} from '#lib/components/index.js';
	import hash from 'sha1';
	import { Input } from '#lib/components/ui/input/index.js';
	import { Separator } from '#lib/components/ui/separator/index.js';
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
	seo_config={{
		title: `Welcome! · ${site_name}`,
		description,
		url,
		site_name,
		open_graph_image: '/favicon.png',
	}}
/>

<Hero />

<label class="not-prose block">
	<span class="sr-only">Enter a password here</span>
	<Input
		class="h-14 text-center text-2xl shadow-lg md:text-2xl"
		type="password"
		placeholder="Enter a password here"
		oninput={password_change}
		bind:value={password}
	/>
</label>

<p class="mb-10 text-2xl tracking-wide">
	If this password is in a publicly known breach it'll show up below.
</p>

<CharacterPicker {password} />

<NumberOfBreaches breaches_count={breaches.breaches} />

<Separator class="my-8" />
