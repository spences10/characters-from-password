<script>
  import hash from 'sha1'

  let password = ''
  const getHIBPData = async sha1 => {
    const res = await fetch(
      `https://api.pwnedpasswords.com/range/${sha1}`
    )
    if (res.ok) {
      console.log('=====================')
      console.log(await res.text())
      console.log('=====================')
    }
  }

  function passwordChange(e) {
    let typed = e.target.value
    let sha1 = hash(typed).toUpperCase().substring(0, 5)
    getHIBPData(sha1)
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
  documentation
</p>

<input type="text" on:input={passwordChange} bind:value={password} />
