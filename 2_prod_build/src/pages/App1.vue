<template>
  <base-page>
    <div
      id="div-container"
      class="div-container"
    >
      App1
    </div>
  </base-page>
</template>

<script>
import BasePage from "./BasePage.vue";
export default {
  name: 'App1',
  components: { BasePage },

  mounted () {
    // do something
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.div {
  &-container {
    width: 100%;
    height: calc((100vw - 220px) * 0.4);
    background-color: $color-blue;
    padding: 0;
    clear: both;
  }
}

</style>
