<script lang="ts">
	import { Bluesky, GitHub, YouTube } from '$lib/icons';
</script>

<footer
	class="footer footer-center bg-primary text-primary-content md:footer-horizontal p-10"
>
	<div>
		<img
			src="https://res.cloudinary.com/defkmsrpw/image/upload/q_auto,f_auto/v1622648685/ezgif.com-gif-maker.gif"
			alt="Scott avatar"
			class="h-20 rounded-full"
		/>
		<p class="font-bold">
			Made with <span role="img" aria-label="red heart">❤️</span> by
			<a
				class="link hover:text-secondary transition"
				href="https://scottspence.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				Scott Spence
			</a>
		</p>
		<p>
			Copyright © {`${new Date().getFullYear()}`} - All right reserved
		</p>
	</div>
	<div>
		<div class="grid grid-flow-col gap-4">
			<a
				aria-label="Bluesky"
				href="https://bsky.app/profile/scottspence.dev"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Bluesky />
			</a>
			<a
				aria-label="GitHub"
				href="https://github.com/spences10"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GitHub />
			</a>
			<a
				aria-label="YouTube"
				href="https://ss10/yt"
				target="_blank"
				rel="noopener noreferrer"
			>
				<YouTube />
			</a>
		</div>
	</div>
</footer>
