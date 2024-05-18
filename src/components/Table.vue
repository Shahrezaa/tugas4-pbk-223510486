<!-- components/Table.vue -->
<template>
  <div class="product-card">
    <img :src="product.image" alt="Product Image" class="product-image" />
    <br />
    <div class="product-info">
      <div class="product-name">Nama Produk: {{ product.name }}</div>
      <div class="product-price">Harga: {{ product.harga }}</div>
    </div>
    <div class="button-container">
      <Button @click="showInfo">Info Produk</Button>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import { emitEvent } from "../emits/emit.js";

const props = defineProps(["product"]);

const showInfo = () => {
  emitEvent("infoClicked", props.product);
};
</script>

<style scoped>
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #ffffff;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 150px;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-info {
  margin: 15px 0;
}

.product-name,
.product-price {
  font-weight: bold;
  color: #333;
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
