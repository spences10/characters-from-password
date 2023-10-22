<script lang="ts">
	import { get_character_type } from './util'

	export let char = ''

	$: character_type = char ? get_character_type(char) : ''
</script>

<div class="text-center">
	<span class="text-4xl">"{char}"</span>
	<p>This is {character_type ? character_type : `empty`}</p>
</div>
