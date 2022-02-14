<script context="module">
  export const load = async ({
    error,
    status,
    url: { pathname },
  }) => {
    return { props: { error, status, pathname } }
  }
</script>

<script>
  export let error, status, pathname
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<main class="all-prose h-[73vh]">
  <h1>{status}</h1>
  <p>{error.message}</p>
  <p>It looks like <code>{pathname}</code> doesn't exist</p>
  <p>
    Maybe check out the <a href="/">homepage</a>?
  </p>
</main>
