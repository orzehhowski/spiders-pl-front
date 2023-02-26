<script>
import SpidersList from "../components/SpidersList.vue";
import SpiderDescription from "../components/SpiderDescription.vue";
import ResourcesList from "../components/ResourcesList.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import LoadingMessage from "../components/LoadingMessage.vue";

export default {
  components: {
    SpidersList,
    SpiderDescription,
    ResourcesList,
    ErrorMessage,
    LoadingMessage,
  },
  data() {
    return {
      spiders: Array,
      appearanceDesc: String,
      behaviorDesc: String,
      resources: Array,
      polishName: String,
      latinName: { type: String, required: true },
      resStatus: null,
      message: null,
    };
  },
  async mounted() {
    try {
      const res = await fetch(
        `${this.$API_URL}/family/${this.$route.params.id}`
      );
      const resJson = await res.json();

      this.message = resJson.message;
      this.spiders = resJson.spiders;
      this.polishName = resJson.name;
      this.latinName = resJson.latinName;
      this.appearanceDesc = resJson.appearanceDesc;
      this.behaviorDesc = resJson.behaviorDesc;
      this.resources = resJson.resources;
      this.resStatus = res.status;
    } catch {
      this.resStatus = 500;
    }
  },
};
</script>

<template>
  <main v-if="resStatus === 200" class="container">
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

  <ErrorMessage v-else-if="resStatus" :status="resStatus" :message="message" />
  <LoadingMessage v-else />
</template>
