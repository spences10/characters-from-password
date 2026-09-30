<script lang="ts">
	import * as Select from '#lib/components/ui/select/index.js';
	import SelectedCharacter from './selected-character.svelte';

	let { password = '' } = $props();
	let selected = $state('0');
	const char = $derived(password.charAt(Number(selected)));
	const positions = $derived(
		Array.from({ length: password.length }, (_, i) => String(i)),
	);
</script>

<div class="flex items-center justify-center gap-2">
	<span id="pick-character-label">Pick Character:</span>

	<Select.Root
		type="single"
		bind:value={selected}
		disabled={password.length === 0}
	>
		<Select.Trigger
			aria-labelledby="pick-character-label"
			class="w-20"
		>
			{Number(selected) + 1}
		</Select.Trigger>
		<Select.Content>
			{#each positions as position (position)}
				<Select.Item value={position}>
					{Number(position) + 1}
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>

<SelectedCharacter {char} />
