<script>
  import { onMount } from "svelte";
  import { sequence_store } from "./stores";
  import Sequence from "./components/Sequence.svelte";
  import TimeKeeper from "./components/TimeKeeper.svelte";

  let steps = 8;

  onMount(() => {
    for (let i = 0; i < steps; i++) {
      $sequence_store[i] = randomStep(i);
    }
  });

  function setSteps(event) {
    steps = event.detail.steps;
  }

  function randomStep(id) {
    return { id, active: Math.random() > 0.5 ? true : false };
  }
</script>

<main>
  <TimeKeeper on:steps={setSteps} />
  <Sequence {steps} />
</main>

<style>
  main {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
</style>
