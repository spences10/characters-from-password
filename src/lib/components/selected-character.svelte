<script lang="ts">
	export let char = ''

	$: asciiNumber = char.charCodeAt(0)
</script>

<div class="all-prose h-36 text-center">
	{#if char}
		<span class="text-4xl">"{char}"</span>
	{/if}
	{#if asciiNumber > 47 && asciiNumber < 58}
		<p>This is a number</p>
	{/if}
	{#if (asciiNumber > 57 && asciiNumber < 65) || (asciiNumber > 31 && asciiNumber < 47) || (asciiNumber > 90 && asciiNumber < 97)}
		<p>This is a special character</p>
	{/if}
	{#if asciiNumber > 64 && asciiNumber < 91}
		<p>This is uppercase</p>
	{/if}
	{#if asciiNumber > 96 && asciiNumber < 123}
		<p>This is lowercase</p>
	{/if}
</div>
