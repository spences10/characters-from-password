<script>
  import CharacterPicker from '$lib/character-picker.svelte'
  import GetFunPassword from '$lib/get-fun-password.svelte'
  import NumberOfBreaches from '$lib/number-of-breaches.svelte'
  import hash from 'sha1'
  import MaskedPasswords from '../copy/masked-passwords.md'
  import Preamble from '../copy/preamble.md'
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

<div class="mb-20 all-prose">
  <p>Enter a password to pick specific characters from it.</p>
</div>

<div class="mb-20 form-control">
  <input
    class="mx-1 lg:-mx-40 text-center text-4xl input input-primary input-bordered input-lg shadow-lg"
    type="text"
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

<div class="all-prose mb-20">
  <Preamble />
</div>

<GetFunPassword />

<div class="divider" />

<div class="all-prose">
  <MaskedPasswords />
</div>

<div class="divider" />
