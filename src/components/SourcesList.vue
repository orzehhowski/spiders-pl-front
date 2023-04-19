<script>
export default {
  props: {
    sources: Array,
  },
};
</script>

<template>
  <div v-if="sources.length > 0">
    <h5>Źródła zewnętrzne</h5>
    <hr class="small" />
    <div class="mb-4">
      <p v-for="(source, index) in sources" :key="index" class="sources">
        <a :href="source" target="_blank" rel="noopener">{{ source }}</a>
      </p>
    </div>
  </div>
</template>
