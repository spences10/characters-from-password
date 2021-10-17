<script>
  import Footer from '$lib/components/footer.svelte'
  import Nav from '$lib/components/nav.svelte'
  import * as Fathom from 'fathom-client'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'

  onMount(async () => {
    themeChange(false)
    Fathom.load(import.meta.env.VITE_FATHOM_ID, {
      url: import.meta.env.VITE_FATHOM_URL,
      excludedDomains: ['localhost'],
    })
  })
</script>

<Nav />
<main class="container max-w-xl mx-auto px-4">
  <slot />
</main>
<Footer />
