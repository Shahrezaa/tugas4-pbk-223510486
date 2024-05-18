// src/emits/emit.js
import { ref } from "vue";

const eventBus = ref({});

export function emitEvent(eventName, payload) {
  if (eventBus.value[eventName]) {
    eventBus.value[eventName](payload);
  }
}

export function onEvent(eventName, callback) {
  eventBus.value[eventName] = callback;
}
