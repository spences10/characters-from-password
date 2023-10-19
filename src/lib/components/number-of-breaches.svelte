<script lang="ts">
	import { breaches } from '../../stores/hibp-store'

	const formatted_number = (breaches: string | number | bigint) => {
		const number = new Intl.NumberFormat()
		return number.format(Number(breaches))
	}
</script>

{#if Number($breaches) > 0}
	<div class="stat place-items-center place-content-center">
		<div class="stat-title text-2xl">This password appears in</div>
		<div class="text-error stat-value text-4xl">
			{formatted_number($breaches)}
		</div>
		<div class="stat-desc text-2xl">breaches</div>
	</div>
{:else}
	<div class="stat place-items-center place-content-center">
		<div class="stat-title">
			This password doesn't appear in any breaches.
		</div>
	</div>
{/if}
