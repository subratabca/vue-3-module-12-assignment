<script setup>
 import NavBar from "./Navbar/MyNavBar.vue"
 import SideBar from "./Sidebar/MySideBar.vue"
</script>

<template>
  <div>

    <NavBar/>

    <SideBar/>

    <div id="content" class="content">
      <div class="container-fluid">
        <main>
          <slot></slot>
        </main>
      </div>
    </div>

  </div>

</template>