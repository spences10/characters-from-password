<script>
  import GetFunPassword from '$lib/components/get-fun-password.svelte'
  import Head from '$lib/components/head.svelte'
  import { description, siteName, website as url } from '$lib/info'
  import About from '../copy/about.md'
</script>

<Head
  title={`About · ${siteName}`}
  {description}
  image={'./favicon.png'}
  {url}
/>

<div class="all-prose mb-20">
  <About />
</div>

<div class="divider" />

<GetFunPassword />

<div class="divider" />
