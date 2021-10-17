<script>
  export let char = ''

  $: asciiNumber = char.charCodeAt(0)
</script>

{#if asciiNumber > 47 && asciiNumber < 58}
  <p>This character is numerical</p>
{/if}
{#if asciiNumber > 64 && asciiNumber < 91}
  <p>This character is uppercase</p>
{/if}
{#if asciiNumber > 96 && asciiNumber < 123}
  <p>This character is lowercase</p>
{/if}
<span>"</span>
{char}
<span>"</span>
