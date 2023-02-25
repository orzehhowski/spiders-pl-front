<script>
export default {
  props: {
    title: String,
    desc: String,
  },
};
</script>

<template>
  <div v-if="desc">
    <h5 class="mt-4">{{ title }}</h5>
    <hr class="small" />
    <p>{{ desc }}</p>
  </div>
</template>
