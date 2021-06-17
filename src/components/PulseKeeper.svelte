<script>
  import { count, playing, tempo_store } from "../stores";

  import Button from "./Button.svelte";
  let tempo = 120;

  $: $tempo_store = 60000 / tempo;
  $: if ($playing) play();

  function pulse(length) {
    return new Promise((resolve, reject) => {
      if ($playing) {
        setTimeout(() => {
          count.update((value) => value + 1);
          resolve();
        }, length);
      } else {
        reject();
      }
    });
  }

  async function play() {
    while ($playing) {
      if ($playing) {
        await pulse($tempo_store);
      } else {
        return;
      }
    }
  }
</script>

<section>
  <Button handleClick={() => playing.set(!$playing)} size="large" />
  <div>
    <label for="tempo">tempo</label>
    <input bind:value={tempo} id="tempo" type="number" min={30} max={999} />
  </div>
</section>
