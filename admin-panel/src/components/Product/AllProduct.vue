<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from 'vue-router'

const products = ref([]);
let isLoading = ref(true);

onMounted(async () => {
  try {
    const result = await fetch("https://dummyjson.com/products");
    const response = await result.json();
    products.value = response["products"];
    isLoading.value = false;
  } catch (error) {
    console.error("Error Fetching", error);
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12" v-if="isLoading"><h1>Loading...</h1></div>
      <div class="col-md-4" v-else v-for="product in products" :key="product.id">
        <div class="card" style="margin-bottom: 15px; border: 10px solid red;">
          <img class="" :src="product.thumbnail" style="width: 100%; height: 300px;" alt="Card image"/>

          <div class="card-body">
            <h4 class="card-title">{{ product.title }}</h4>
            <p class="card-text"><strong>Price:</strong> {{ product.price }} TK</p>
            <RouterLink :to="{name:'product-details',params:{id:product.id}}" class="btn btn-primary">Product Details</RouterLink>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
