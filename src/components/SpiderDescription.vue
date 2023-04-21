<script>
export default {
  props: {
    title: String,
    desc: String,
  },
  data() {
    return {
      chunks: Array,
    };
  },
  mounted() {
    const chunks = this.desc.split("===");
    const chunkObjects = [];
    let iterator = 0;
    for (let chunk of chunks) {
      if (chunk.trim()) {
        for (let splittedChunk of chunk.split("//")) {
          chunkObjects.push({ text: splittedChunk, isTitle: iterator % 2 });
        }
      }
      iterator++;
    }
    this.chunks = chunkObjects;
  },
};
</script>

<template>
  <div v-if="desc">
    <h4 class="mt-4">{{ title }}</h4>
    <hr class="small" />
    <div v-for="(chunk, index) in chunks" :key="index">
      <h6 v-if="chunk.isTitle">{{ chunk.text }}</h6>
      <p v-else>{{ chunk.text }}</p>
    </div>
  </div>
</template>
