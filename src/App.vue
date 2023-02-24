<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
</script>

<template>
  <TheNavbar />
  <RouterView />
</template>

<style lang="scss">
.italic {
  font-style: italic;
}

hr.small {
  width: 40%;
}

.resources {
  overflow-x: hidden;
}

.carousel {
  border-radius: 10px;
  max-height: 30rem;
  max-width: 36rem;
  overflow: hidden;
  img {
    object-fit: cover;
  }
}
</style>
