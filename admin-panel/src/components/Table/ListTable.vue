<script setup>

import { ref, onMounted } from "vue";


const Items = ref([]);
let isLoading = ref(true)
const searchField = ["title","price","stock"];
const searchValue = ref();

onMounted(async () => {
  try {
    const result = await fetch("https://dummyjson.com/products");
    const response = await result.json();
    Items.value = response["products"];
    //console.log("--------",Item)
    isLoading.value = false
  } catch (error) {
    console.error("Error Fetching", error);
    isLoading.value = false
  }
});



const Header = [
  { text: "TITLE", value: "title" },
  { text: "UNIT PRICE", value: "price" },
  { text: "NUMBER OF ITEMS", value: "stock" },
  { text: "ACTION", value: "operations"},
];

</script>


<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12" v-if="isLoading"><h1>Loading...</h1></div>
        <div class="col-12" v-else>
          <div class="card">
            <div class="card-body">
              <div>
                <input placeholder="Search..." class="form-control mb-2 w-auto form-control-sm" type="text" v-model="searchValue">
                <EasyDataTable show-index buttons-pagination alternating :headers="Header" :items="Items" :rows-per-page="10" :search-field="searchField"  
                :search-value="searchValue">
                <template #item-operations="items">
                  <RouterLink :to="{ name: 'product-details', params: { id: items.id } }"><button class="btn  btn-success">Product Details</button></RouterLink>
                </template>
                </EasyDataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


