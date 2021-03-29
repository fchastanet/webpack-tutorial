<template>
  <div class="wrapper">
    <base-page>
      <div
        id="div-container"
        class="div-container"
      >
        Home
      </div>
    </base-page>
  </div>
</template>

<script>
import BasePage from "./BasePage.vue";
export default {
  name: 'Home',
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
    background-color: $color-white;
    padding: 0;
    clear: both;
  }
}

</style>