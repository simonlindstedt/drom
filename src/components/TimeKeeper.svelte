<script>
  import { createEventDispatcher } from "svelte";
  import { count, playing } from "../stores";
  import Button from "./Button.svelte";
  const dispatch = createEventDispatcher();

  let current_count;
  let isPlaying;

  count.subscribe((value) => (current_count = value));
  playing.subscribe((value) => (isPlaying = value));

  let tempo = 120;
  let steps = 8;
  let noteLength = 1;

  $: bpmToMil = (60000 / tempo) * (1 / noteLength);
  $: if (isPlaying) play();

  function note(length) {
    return new Promise((resolve) => {
      current_count++;
      if (current_count >= steps) current_count = 0;
      setTimeout(() => {
        count.set(current_count);
        resolve();
      }, length);
    });
  }

  async function play() {
    while (isPlaying) {
      if (isPlaying) {
        await note(bpmToMil);
      } else {
        return;
      }
    }
  }
</script>

<section>
  <Button
    handleClick={() => {
      playing.set(!$playing);
    }}
    size="large"
  >
    {isPlaying ? "pause" : "play"}
  </Button>
  <div>
    <label for="steps">steps</label>
    <input
      bind:value={steps}
      on:change={() => {
        dispatch("steps", { steps });
      }}
      type="number"
      id="steps"
      min={1}
    />
    <label for="tempo">tempo</label>
    <input bind:value={tempo} type="number" id="tempo" min={30} max={999} />
    <label for="note-length">note length</label>
    <select bind:value={noteLength} id="note-length">
      <option value={1}>1/1</option>
      <option value={2}>1/2</option>
      <option value={4}>1/4</option>
      <option value={8}>1/8</option>
    </select>
  </div>
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    width: 8em;
    height: 8em;
    display: flex;
    flex-direction: column;
  }
  div label {
    font-size: 1em;
    text-align: right;
  }
</style>
