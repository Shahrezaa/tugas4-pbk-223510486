<!-- components/Info.vue -->
<template>
  <div v-if="info" class="info-container">
    <h2>Informasi Produk</h2>
    <p><strong>Nama Produk:</strong> {{ info.name }}</p>
    <p><strong>Harga:</strong> {{ info.harga }}</p>
    <div v-if="info.details">
      <p v-if="info.details.switch">
        <strong>Switch:</strong> {{ info.details.switch }}
      </p>
      <p v-if="info.details.fitur">
        <strong>Fitur:</strong> {{ info.details.fitur }}
      </p>
      <p v-if="info.details.keunggulan">
        <strong>Keunggulan:</strong> {{ info.details.keunggulan }}
      </p>
      <p v-if="info.details.material">
        <strong>Material:</strong> {{ info.details.material }}
      </p>
      <p v-if="info.details.desain">
        <strong>Desain:</strong> {{ info.details.desain }}
      </p>
      <p v-if="info.details.sensor">
        <strong>Sensor:</strong> {{ info.details.sensor }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { onEvent } from "../emits/emit.js";

const info = ref(null);

const handleInfoClick = (productInfo) => {
  info.value = productInfo;
};

onMounted(() => {
  onEvent("infoClicked", handleInfoClick);
});

onBeforeUnmount(() => {
  // Bersihkan event listener jika diperlukan
});
</script>

<style scoped>
.info-container {
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
</style>
