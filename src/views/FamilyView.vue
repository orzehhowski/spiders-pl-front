<script>
import SpidersList from "../components/SpidersList.vue";
import SpiderDescription from "../components/SpiderDescription.vue";
import ResourcesList from "../components/ResourcesList.vue";

export default {
  components: {
    SpidersList,
    SpiderDescription,
    ResourcesList,
  },
  data() {
    return {
      spiders: Array,
      appearanceDesc: String,
      behaviorDesc: String,
      resources: Array,
      polishName: String,
      latinName: { type: String, required: true },
    };
  },
  async mounted() {
    let res = await fetch(`${this.$API_URL}/family/${this.$route.params.id}`);
    res = await res.json();
    this.spiders = res.spiders;
    this.polishName = res.name;
    this.latinName = res.latinName;
    this.appearanceDesc = res.appearanceDesc;
    this.behaviorDesc = res.behaviorDesc;
    this.resources = res.resources;
  },
};
</script>

<template>
  <main v-if="latinName" class="container">
    <h1 :class="`mt-3` + (polishName ? `` : ` italic`)">
      {{ polishName || latinName }}
    </h1>
    <h2 v-if="polishName" class="italic">{{ latinName }}</h2>
    <hr />
    <SpidersList v-if="spiders" :list="spiders" />
    <SpiderDescription :desc="appearanceDesc" title="Wygląd" />
    <SpiderDescription :desc="behaviorDesc" title="Tryb życia" />
    <ResourcesList :resources="resources" />
  </main>
  <main v-else>
    <h1>Ładowanie...</h1>
  </main>
</template>
