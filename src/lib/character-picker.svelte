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

<span class="all-prose">Select Password Character:</span>
<select
  class="select select-bordered select-primary"
  {disabled}
  on:change={e => handleChange(e)}
>
  {#each items as item, index}
    <option key={index} letter={item}>
      {index + 1}
    </option>
  {/each}
</select>

<SelectedCharacter {char} />
