<script lang="ts">
	import SelectedCharacter from './selected-character.svelte';

	let { password = '' } = $props();
	let selected_character_index: number = $state(0);
	let char = $derived(password.charAt(selected_character_index));

	const handle_change = (e: Event) => {
		const target = e.target as HTMLSelectElement;
		selected_character_index = parseInt(target.value);
	};
</script>

<div class="text-center">
	<span class="pr-2">Pick Character:</span>

	<select
		class="select select-bordered select-primary shadow-lg"
		disabled={password.length === 0}
		onchange={handle_change}
	>
		{#each [...password] as item, index}
			<option
				value={index}
				selected={index === selected_character_index}
			>
				{index + 1}
			</option>
		{/each}
	</select>
</div>

<SelectedCharacter {char} />
