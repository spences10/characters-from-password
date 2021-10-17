<script>
  import CharacterPicker from '$lib/components/character-picker.svelte'
  import Head from '$lib/components/head.svelte'
  import NumberOfBreaches from '$lib/components/number-of-breaches.svelte'
  import { description, siteName, website as url } from '$lib/info'
  import hash from 'sha1'
  import { fetchHIBPHashes } from '../stores/hibp-store'

  let password = ''

  function passwordChange(e) {
    let typed = e.target.value
    let sha1 = hash(typed).toUpperCase()
    fetchHIBPHashes(sha1)
  }
</script>

<Head
  title={`Welcome! · ${siteName}`}
  {description}
  image={'/favicon.png'}
  {url}
/>

<div class="all-prose">
  <h1>Password Character Picker</h1>
</div>

<div class="mb-20 all-prose">
  <p>Enter a password to pick specific characters from it.</p>
</div>

<div class="mb-20 form-control">
  <input
    class="mx-1 lg:-mx-40 text-center text-4xl input input-primary input-bordered input-lg shadow-lg"
    type="password"
    placeholder="Enter a password here"
    on:input={passwordChange}
    bind:value={password}
  />
</div>

<CharacterPicker {password} />

<div class="h-36">
  {#if password.length > 0}
    <NumberOfBreaches />
  {/if}
</div>

<div class="divider" />
