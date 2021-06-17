import { writable } from "svelte/store";

export const count = writable(0);
export const playing = writable(false);
export const sequence_store = writable([]);
export const tempo_store = writable(0);
