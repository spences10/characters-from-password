<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';
	import { get_fun_password } from '#lib/password-gen.js';

	let fun_password = $state('');
</script>

<Button
	class="w-full"
	size="lg"
	onclick={() => (fun_password = get_fun_password())}
>
	Get Fun Password
</Button>
<p
	class="mx-1 h-auto py-7 text-center font-mono text-4xl lg:-mx-40 lg:h-20"
>
	{fun_password}
</p>
