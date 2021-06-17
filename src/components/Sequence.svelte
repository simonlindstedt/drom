<script>
  import { count, sequence_store } from "../stores";
  import Step from "./Step.svelte";

  export let steps;
  let current_sequence = [];

  $: if (steps) {
    if (steps > $sequence_store.length) {
      $sequence_store.push({ id: steps, active: false });
    }
    current_sequence = $sequence_store.slice(0, steps);
  }
</script>

<section>
  {#each current_sequence as { active }, i}
    <Step id={i} count={$count} {active} />
  {/each}
</section>

<style>
  section {
    display: flex;
  }
</style>
