<script>
  import { count, playing, tempo_store } from "../stores";
  import { onMount } from "svelte";
  import Step from "./Step.svelte";
  import Button from "./Button.svelte";

  export let id;
  let steps = 8;
  let seq = [];
  let current_seq = [];
  let localCount = -1;
  let note = 1;

  onMount(() => {
    for (let i = 0; i < steps; i++) {
      seq[i] = randomStep(i);
    }
    current_seq = seq;
    updateSequence();
  });

  $: division = $tempo_store * (1 / note);
  $: if ($count && $playing) play();

  function updateSequence() {
    if (steps > seq.length) {
      console.log(steps);
      seq.push({ id: steps, active: false });
      console.log(seq.length);
    }
    current_seq = seq.slice(0, steps);
  }

  function updateStep(e) {
    let { id, active } = e.detail;
    seq[id] = { id, active };
  }

  function randomStep(id) {
    return { id, active: Math.random() > 0.5 ? true : false };
  }

  function beat(length) {
    return new Promise((resolve) => {
      setTimeout(() => {
        localCount += 1;
        if (localCount >= steps) localCount = 0;
        if (id === 1) console.log(length);
        resolve();
      }, length);
    });
  }

  async function play() {
    for (let i = 0; i < note; i++) {
      if ($playing) {
        await beat(division);
      } else {
        return;
      }
    }
  }
</script>

<section>
  <div class="steps">
    <Button
      handleClick={() => {
        steps += 1;
        updateSequence();
      }}
      size="small">+</Button
    >
    <Button
      handleClick={() => {
        steps -= 1;
        updateSequence();
      }}
      size="small">-</Button
    >
    <label for="note">note length</label>
    <select bind:value={note} id="note">
      <option value={1}>1/1</option>
      <option value={2}>1/2</option>
      <option value={4}>1/4</option>
      <option value={8}>1/8</option>
    </select>
  </div>
  {#each current_seq as { active }, i}
    <Step id={i} count={localCount} {active} on:state={updateStep} />
  {/each}
</section>

<style>
  .steps {
    display: flex;
    flex-direction: column;
  }
  section {
    display: flex;
    justify-content: space-between;
  }
</style>
