<script>
  import Head from '$lib/components/head.svelte'
  import { description, siteName, website as url } from '$lib/info'
  import MaskedPasswords from '../copy/masked-passwords.md'
</script>

<Head
  title={`Masked Passwords · ${siteName}`}
  {description}
  image={'./favicon.png'}
  {url}
/>

<div class="all-prose">
  <MaskedPasswords />
</div>

<div class="divider" />
