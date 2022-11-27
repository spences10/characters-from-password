<script>
	import { getFunPassword } from '$lib/password-gen'

	$: funPassword = ''
	const handlePassword = () => (funPassword = getFunPassword())
</script>

<button class="btn w-full" on:click={handlePassword}
	>Get Fun Password</button
>
<p
	class="text-4xl font-mono mx-1 lg:-mx-40 text-center h-auto lg:h-20 py-7"
>
	{funPassword}
</p>
