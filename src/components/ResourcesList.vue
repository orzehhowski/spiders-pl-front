<script>
export default {
  props: {
    resources: Array,
  },
};
</script>

<template>
  <div v-if="resources.length > 0">
    <h5>Źródła zewnętrzne</h5>
    <hr class="small" />
    <div class="mb-4">
      <p v-for="(source, index) in resources" :key="index" class="resources">
        <a :href="source" target="_blank" rel="noopener">{{ source }}</a>
      </p>
    </div>
  </div>
</template>
