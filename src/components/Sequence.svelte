<script>
  import Step from "./Step.svelte";

  export let steps = 0;
  export let count = 0;
  let sequence = [];

  $: currentCount = count;
  $: currentLength = steps;

  $: if (steps) sequence = [];
  $: for (let i = 0; i < currentLength; i++) {
    let step = { active: true };
    sequence[i] = step;
    sequence = sequence;
  }
</script>

<section>
  {#each sequence as { active }, i}
    <Step id={i} count={currentCount} {active} />
  {/each}
</section>

<style>
  section {
    display: flex;
  }
</style>
