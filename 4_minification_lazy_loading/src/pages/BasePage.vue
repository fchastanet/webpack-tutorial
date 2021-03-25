<template>
  <div class="div-wrapper">
    <links></links>
    <slot />
  </div>
</template>

<script>
import Links from "../components/Links.vue";
export default {
  name: "base-page",
  components: { Links },
}
</script>

<style lang="scss" scoped>

</style>
