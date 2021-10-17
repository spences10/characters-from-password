<script>
  import { getFunPassword } from './password-gen'
  $: funPassword = ''
  const handlePassword = () => (funPassword = getFunPassword())
</script>

<button on:click={handlePassword}>Get Fun Password</button>
<p>{funPassword}</p>
