<template>
    <div v-if="product">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <p>Category: {{ product.category }}</p>
      <p>Stock: {{ product.stock }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const product = ref(null);
  
  onMounted(async () => {
    const id = route.params.id;
    const response = await fetch(`/api/products/${id}`);
    product.value = await response.json();
  });
  </script>
  
  <style scoped>
  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }
  p {
    margin: 0.5em 0;
  }
  </style>