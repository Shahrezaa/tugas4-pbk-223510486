<!-- App.vue -->
<template>
  <div>
    <div class="product-container">
      <Table
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
    <Info />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Table from "./components/Table.vue";
import Info from "./components/Info.vue";

const products = ref([
  {
    name: "Keyboard Gaming",
    harga: "Rp 300000",
    image: "/src/assets/keyboard/keyboard.jpg",
    details: {
      switch: "Hot-swappable switches untuk kustomisasi.",
      fitur:
        "RGB backlighting dengan teknologi Lightsync, onboard memory, dan kompatibilitas dengan perangkat lunak Logitech.",
      keunggulan:
        "Desain tenkeyless untuk lebih banyak ruang gerak mouse, sangat cocok untuk kompetisi esports.",
    },
  },
  {
    name: "Stand Laptop",
    harga: "Rp 40000",
    image: "/src/assets/stand/stand.jpg",
    details: {
      material: "Aluminium alloy, kuat dan tahan lama.",
      desain:
        "Ergonomis, dapat disesuaikan ketinggiannya untuk kenyamanan penggunaan.",
      keunggulan:
        "Meningkatkan ventilasi laptop, kompatibel dengan berbagai ukuran laptop hingga 17 inci, dan mudah dirakit.",
    },
  },
  {
    name: "Mouse Gaming",
    harga: "Rp 150000",
    image: "/src/assets/mouse/mouse.jpg",
    details: {
      sensor: "HERO 25K, sangat presisi dengan DPI hingga 25,600.",
      fitur:
        "7 tombol yang dapat diprogram, berat yang dapat disesuaikan, dan RGB lighting.",
      keunggulan:
        "Responsivitas tinggi, nyaman untuk sesi gaming panjang, dan sangat customizable.",
    },
  },
]);
</script>

<style scoped>
.product-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #f5f5f5aa;
}
</style>
