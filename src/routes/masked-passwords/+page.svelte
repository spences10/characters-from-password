<script>
	import MaskedPasswords from '$copy/masked-passwords.md'
	import { description, siteName, website as url } from '$lib/info'
	import { Head } from 'svead'
</script>

<Head
	title={`Masked Passwords · ${siteName}`}
	{description}
	image={'/favicon.png'}
	{url}
/>

<div class="all-prose">
	<MaskedPasswords />
</div>

<div class="divider" />
