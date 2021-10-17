<script>
  import Footer from '$lib/components/footer.svelte'
  import Nav from '$lib/components/nav.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'

  onMount(async () => {
    themeChange(false)
  })
</script>

<Nav />
<main class="container max-w-xl mx-auto px-4">
  <slot />
</main>
<Footer />
