<script lang="ts">
	import { themes } from '$lib/themes'
	import { onMount } from 'svelte'

	let current_theme = ''

	onMount(() => {
		if (typeof window !== 'undefined') {
			const theme = window.localStorage.getItem('theme')
			if (theme && themes.includes(theme)) {
				document.documentElement.setAttribute('data-theme', theme)
				current_theme = theme
			}
		}
	})

	const set_theme = (event: Event) => {
		const select = event.target as HTMLSelectElement
		const theme = select.value
		if (themes.includes(theme)) {
			const one_year = 60 * 60 * 24 * 365
			window.localStorage.setItem('theme', theme)
			document.cookie = `theme=${theme}; max-age=${one_year}; path=/; SameSite=Lax`
			document.documentElement.setAttribute('data-theme', theme)
			current_theme = theme
		}
	}
</script>

<select
	bind:value={current_theme}
	data-choose-theme
	class="select select-bordered select-primary bg-neutral select-sm capitalize"
	on:change={set_theme}
>
	<option value="" disabled={current_theme !== ''}>
		Choose a theme
	</option>
	{#each themes as theme}
		<option value={theme} class="capitalize text-neutral-content">{theme}</option>
	{/each}
</select>
