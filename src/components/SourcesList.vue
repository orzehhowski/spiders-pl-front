<script>
export default {
  props: {
    sources: Array,
  },
};
</script>

<template>
  <div v-if="sources.length > 0">
    <h4 class="mt-4 mb-0">Źródła zewnętrzne</h4>
    <hr class="small" />
    <div class="mb-4">
      <p v-for="(source, index) in sources" :key="index" class="sources">
        <a :href="source" target="_blank" rel="noopener">{{ source }}</a>
      </p>
    </div>
  </div>
</template>
