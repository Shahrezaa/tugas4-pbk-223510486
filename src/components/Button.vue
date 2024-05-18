<!-- components/Button.vue -->
<template>
  <button class="info-button">
    <slot>Info Produk</slot>
  </button>
</template>

<script setup>
import { emitEvent } from "../emits/emit.js";

const emitInfo = () => {
  emitEvent("infoClicked", "Informasi tentang produk ini");
};
</script>

<style scoped>
.info-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>
