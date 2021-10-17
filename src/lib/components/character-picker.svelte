<script>
  import SelectedCharacter from './selected-character.svelte'

  export let password = ''
  let selectedCharacter = ''
  $: items = [...password]
  $: char = password.charAt(selectedCharacter - 1)
  $: disabled = items.length ? `` : `disabled="disabled"`

  const handleChange = e => {
    selectedCharacter = e.target.value
    char = selectedCharacter
  }
</script>

<div class="all-prose text-center">
  <span class="pr-2">Select Password Character:</span>

  <select
    class="select select-bordered select-primary shadow-lg"
    {disabled}
    on:change={e => handleChange(e)}
  >
    {#each items as item, index}
      <option key={index} letter={item}>
        {index + 1}
      </option>
    {/each}
  </select>
</div>

<SelectedCharacter {char} />
