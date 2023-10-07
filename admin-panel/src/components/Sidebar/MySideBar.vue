<script setup></script>

<template>
    <div id="sideNav" class="side-nav-open">
      <div class="side-nav-top text-center">
        <img alt="" class="side-nav-logo" src="../assets/logo.svg" />
      </div>

      <router-link to="/" class="side-bar-item">
        <span class="side-bar-item-icon"
          ><i class="fa text-green fa-circle-notch"
        /></span>
        <span class="side-bar-item-caption">Dashboard</span>
      </router-link>

      <router-link to="/products" class="side-bar-item">
        <span class="side-bar-item-icon"
          ><i class="fa text-green fa-circle-notch"
        /></span>
        <span class="side-bar-item-caption">Stock DataTable</span>
      </router-link>

      <router-link to="/all-products" class="side-bar-item">
        <span class="side-bar-item-icon"
          ><i class="fa text-green fa-circle-notch"
        /></span>
        <span class="side-bar-item-caption">All Products</span>
      </router-link>
    </div>
</template>
