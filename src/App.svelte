<script>
  import Sequence from "./components/Sequence.svelte";
  import TimeKeeper from "./components/TimeKeeper.svelte";
  let count = 0;
  let steps = 8;

  function setCount(event) {
    count = event.detail.count;
  }

  function setSteps(event) {
    steps = event.detail.steps;
  }
</script>

<main>
  <TimeKeeper on:step={setCount} on:steps={setSteps} />
  <Sequence {count} {steps} />
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
