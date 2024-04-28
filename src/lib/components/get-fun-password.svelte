<script lang="ts">
	import { get_fun_password } from '$lib/password-gen';

	let fun_password = $state('');
	const handle_password = () => (fun_password = get_fun_password?.());
</script>

<button class="btn btn-primary w-full" onclick={handle_password}>
	Get Fun Password
</button>
<p
	class="mx-1 h-auto py-7 text-center font-mono text-4xl lg:-mx-40 lg:h-20"
>
	{fun_password}
</p>
