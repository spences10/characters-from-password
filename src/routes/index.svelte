<script>
  import CharacterPicker from '$lib/character-picker.svelte'
  import GetFunPassword from '$lib/get-fun-password.svelte'
  import NumberOfBreaches from '$lib/number-of-breaches.svelte'
  import hash from 'sha1'
  import About from '../copy/about.md'
  import MaskedPasswords from '../copy/masked-passwords.md'
  import { fetchHIBPHashes } from '../stores/hibp-store'

  let password = ''

  function passwordChange(e) {
    let typed = e.target.value
    let sha1 = hash(typed).toUpperCase()
    fetchHIBPHashes(sha1)
  }
</script>

<div class="all-prose">
  <h1>Password Character Picker</h1>
</div>

<div class="all-prose">
  <p class="all-prose">
    Enter a password to pick specific characters from it.
  </p>
</div>

<input type="text" on:input={passwordChange} bind:value={password} />
<CharacterPicker {password} />

{#if password.length > 0}
  <NumberOfBreaches />
{/if}

<GetFunPassword />

<div class="divider" />

<div class="all-prose">
  <MaskedPasswords />
</div>

<div class="divider" />

<div class="all-prose">
  <About />
</div>
