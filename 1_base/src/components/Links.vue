<template>
  <div>
    <router-link to="/" @click.native="buttonClicked('home')">Home</router-link>
    <router-link to="/app1" @click.native="buttonClicked('app1')">App1</router-link>
    <router-link to="/app2" @click.native="buttonClicked('app2')">App2</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    buttonClicked(to) {
      console.log(`route link clicked ${to}`)
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
