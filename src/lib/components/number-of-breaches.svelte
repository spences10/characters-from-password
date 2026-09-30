<script lang="ts">
	import * as Card from '#lib/components/ui/card/index.js';

	let {
		breaches_count,
	}: { breaches_count: string | number | bigint } = $props();

	const formatted = $derived(
		new Intl.NumberFormat().format(Number(breaches_count)),
	);
</script>

<Card.Root class="not-prose mx-auto mb-20 max-w-sm text-center">
	<Card.Header>
		<Card.Title class="text-2xl">This password appears in</Card.Title>
	</Card.Header>
	<Card.Content>
		<p class="text-4xl font-bold text-destructive">{formatted}</p>
		<p class="text-2xl text-muted-foreground">breaches</p>
	</Card.Content>
</Card.Root>
