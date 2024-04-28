<script lang="ts">
	import { get_character_type } from './util';

	let { char = '' } = $props();

	let character_type = $derived(char ? get_character_type(char) : '');
</script>

<div class="text-center">
	<span class="text-4xl">"{char}"</span>
	<p>
		{character_type
			? `This is a ${character_type}`
			: `Nothing entered`}
	</p>
</div>
