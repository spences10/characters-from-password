<script lang="ts">
	import SelectedCharacter from './selected-character.svelte'

	export let password: string = ''
	let selected_character: number = 0
	$: items = [...password]
	$: char = password.charAt(selected_character - 1)
	$: disabled = items.length ? false : true

	const handle_change = (e: Event) => {
		const target = e.target as HTMLSelectElement
		selected_character = parseInt(target.value)
		char = password.charAt(selected_character - 1)
	}
</script>

<div class="all-prose text-center">
	<span class="pr-2">Pick Character:</span>

	<select
		class="select select-bordered select-primary shadow-lg"
		{disabled}
		on:change={handle_change}
	>
		{#each items as item, index}
			<option value={index}>
				{index + 1}
			</option>
		{/each}
	</select>
</div>

<SelectedCharacter {char} />
