<template>
    <div>
      <h1>Products</h1>
      <ul>
        <li v-for="product in products" :key="product._id">
          {{ product.name }} - {{ product.price }}
          <button @click="editProduct(product)">Edit</button>
          <button @click="deleteProduct(product._id)">Delete</button>
        </li>
      </ul>
      <button @click="addProduct">Add Product</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const products = ref([]);
  
  onMounted(async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get('/api/products', {
      headers: { Authorization: `Bearer ${token}` },
    });
    products.value = response.data;
  });
  
  const editProduct = (product) => {
    // Логика редактирования
  };
  
  const deleteProduct = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`/api/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    products.value = products.value.filter(p => p._id !== id);
  };
  
  const addProduct = () => {
    // Логика добавления
  };
  </script>