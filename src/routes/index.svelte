<script>
  import CharacterPicker from '$lib/character-picker.svelte'
  import NumberOfBreaches from '$lib/number-of-breaches.svelte'
  import hash from 'sha1'
  import { fetchHIBPHashes } from '../stores/hibp-store'

  let password = ''

  function passwordChange(e) {
    let typed = e.target.value
    let sha1 = hash(typed).toUpperCase()
    fetchHIBPHashes(sha1)
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
  documentation
</p>

<input type="text" on:input={passwordChange} bind:value={password} />
<CharacterPicker {password} />

{#if password.length > 0}
  <NumberOfBreaches />
{/if}
