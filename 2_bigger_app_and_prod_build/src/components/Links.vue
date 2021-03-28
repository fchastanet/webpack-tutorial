<template>
  <div>
    <router-link class="link" to="/" @click.native="buttonClicked('home')">Home</router-link>
    <router-link class="link" to="/app1" @click.native="buttonClicked('app1')">Highcharts</router-link>
    <router-link class="link" to="/app2" @click.native="buttonClicked('app2')">PowerBi</router-link>
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
.link {
  margin-right: 20px;
}
</style>
