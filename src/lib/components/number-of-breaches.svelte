<script lang="ts">
	import { breaches } from '../../stores/hibp-store';

	const formatted_number = (breaches: string | number | bigint) => {
		const number = new Intl.NumberFormat();
		return number.format(Number(breaches));
	};
</script>

<section
	class="not-prose stat mb-20 place-content-center place-items-center"
>
	<h2 class="stat-title text-3xl font-bold">
		This password appears in
	</h2>
	<p class="stat-value text-4xl text-error">
		{formatted_number($breaches)}
	</p>
	<p class="stat-desc text-2xl">breaches</p>
</section>
