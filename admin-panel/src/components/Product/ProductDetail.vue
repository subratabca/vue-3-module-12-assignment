<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

// const props = defineProps({
//   id: {
//     type: String,
//     required: true,
//   },
// });


let product = reactive({});
let isLoading = ref(true);

const route = useRoute()
const id = route.params.id

onBeforeMount(() => {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            product.id = data.id
            product.title = data.title
            product.price = data.price
            product.stock = data.stock
            product.description = data.description
            product.images = data.thumbnail
        })
    })
</script>

<template>
  <div class="container-fluid">
    <div class="row card" style="padding: 10px;">
        <div class="col-md-4">
            <img class="" :src="product.images" style="width: 100%; height: 300px;" alt="Card image"/>
        </div>
        <div class="col-md-6">
            <div class="card">
            <h4 class="card-title" style="margin-top: 10px;">{{ product.title }}</h4>
            <p class="card-text"><strong>Price:</strong> {{ product.price }} TK</p>
            <p class="card-text"><strong>Stock:</strong> {{ product.stock }}</p>
            <p class="card-text"><strong>Description:</strong> {{ product.description }}</p>

          </div>
        </div>
    </div>
  </div>
</template>


