<script>
	import ThemeSwitch from './theme-switch.svelte'
</script>

<div class="navbar shadow-lg bg-neutral text-neutral-content mb-16">
	<div class="px-2 mx-2 navbar-start" />
	<div class="dropdown dropdown-right lg:hidden">
		<div class="m-1 btn">Links</div>
		<ul
			class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content "
		>
			<a href="/" class="btn btn-ghost btn-sm rounded-btn">Home</a>
			<a href="/about" class="btn btn-ghost btn-sm rounded-btn">
				About
			</a>
			<a
				href="/masked-passwords"
				class="btn btn-ghost btn-sm rounded-btn"
			>
				Masked Passwords
			</a>
		</ul>
	</div>
	<div class="hidden px-2 mx-2 navbar-center lg:flex">
		<div class="flex items-stretch">
			<a href="/" class="btn btn-ghost btn-sm rounded-btn">Home</a>
			<a href="/about" class="btn btn-ghost btn-sm rounded-btn">
				About
			</a>
			<a
				href="/masked-passwords"
				class="btn btn-ghost btn-sm rounded-btn"
			>
				Masked Passwords
			</a>
		</div>
	</div>
	<div class="navbar-end"><ThemeSwitch /></div>
</div>
