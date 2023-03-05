<script>
export default {
  props: {
    messages: Array,
  },
};
</script>

<template>
  <div class="container">
    <div
      v-for="(message, index) in messages"
      :class="`alert alert-${message.type} my-3`"
      :key="index"
      role="alert"
    >
      {{ message.message }}
    </div>
  </div>
</template>

<style>
.alert {
  padding: 0.9rem;
}
@media only screen and (min-width: 768px) {
  .alert {
    width: 50%;
  }
}
</style>
