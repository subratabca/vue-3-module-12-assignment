<script setup>
const NavOpenClose = () => {
  let sideNav = document.getElementById("sideNav");
  let content = document.getElementById("content");
  let topNav = document.getElementById("topNav");
  if (sideNav.classList.contains("side-nav-open")) {
    sideNav.classList.add("side-nav-close");
    sideNav.classList.remove("side-nav-open");
    content.classList.add("content-expand");
    content.classList.remove("content");
    topNav.classList.add("top-navbar-expand");
    topNav.classList.remove("top-navbar");
  } else {
    sideNav.classList.remove("side-nav-close");
    sideNav.classList.add("side-nav-open");
    content.classList.remove("content-expand");
    content.classList.add("content");
    topNav.classList.remove("top-navbar-expand");
    topNav.classList.add("top-navbar");
  }
};
</script>

<template>
  <nav id="topNav" class="navbar fixed-top bg-success top-navbar">
    <div class="container-fluid">
      <a id="MenuBar" @click="NavOpenClose" class="icon-nav mx-0 my-1 h5">
        <i class="fa text-white fa-bars"></i>
      </a>
    </div>
  </nav>
</template>
