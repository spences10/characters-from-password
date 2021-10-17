<script>
  export let password = ''
  let selectedCharacter = ''

  $: characterFromPassword = password.charAt(selectedCharacter - 1)
  $: items = [...password]

  const handleChange = e => (selectedCharacter = e.target.value)
</script>

<select on:change={e => handleChange(e)}>
  {#each items as item, index}
    <option key={index} letter={item}>
      {index + 1}
    </option>
  {/each}
</select>

{characterFromPassword}
