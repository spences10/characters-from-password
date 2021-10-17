<script>
  import { breaches } from '../stores/hibp-store'

  const formattedNumber = breaches => {
    const number = new Intl.NumberFormat()
    return number.format(breaches)
  }
</script>

{#if $breaches > 0}
  <div class="stat place-items-center place-content-center">
    <div class="stat-title">This password appears in</div>
    <div class="stat-value text-error">
      {formattedNumber($breaches)}
    </div>
    <div class="stat-desc">Breaches</div>
  </div>
{:else}
  <div class="stat place-items-center place-content-center">
    <div class="stat-title">
      This password doesn't appear in any breaches.
    </div>
  </div>
{/if}
