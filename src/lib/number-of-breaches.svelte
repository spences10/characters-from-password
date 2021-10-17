<script>
  import { breaches } from '../stores/hibp-store'

  const formattedNumber = breaches => {
    const number = new Intl.NumberFormat()
    return number.format(breaches)
  }
</script>

{#if $breaches > 0}
  <p>
    {`This password appears in ${formattedNumber(
      $breaches
    )} breaches.`}
  </p>
{:else}
  <p>{`This password doesn't appear in any breaches.`}</p>
{/if}
