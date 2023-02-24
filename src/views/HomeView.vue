<script>
import SpidersList from "../components/SpidersList.vue";

export default {
  components: {
    SpidersList,
  },
  data() {
    return {
      families: null,
    };
  },

  async mounted() {
    let res = await fetch(`${this.$API_URL}/family`);
    res = await res.json();
    this.families = res.families;
  },
};
</script>

<template>
  <main class="container">
    <h1 class="mt-3">Rodziny</h1>
    <hr />
    <SpidersList v-if="families" :list="families" :isFamily="true" />
    <h1 v-else>Ładowanie...</h1>
  </main>
</template>
