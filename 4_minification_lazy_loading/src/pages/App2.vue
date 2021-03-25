<template>
  <base-page>
    <div
      class="power-bi-dashboard-container"
    >
      PowerBi (with bad configuration)
      <div
        id="power-bi-dashboard-app"
        class="power-bi-dashboard-app"
      >
      </div>  
    </div>
  </base-page>
</template>

<script>
import BasePage from "./BasePage.vue";
import * as pbi from 'powerbi-client'
import 'powerbi-models'
import 'powerbi-router'

export default {
  name: 'App2',
  components: { BasePage },

  mounted () {
    // Get models. models contains enums that can be used.
    const models = pbi.models
    // We give All permissions to demonstrate switching between View and Edit mode and saving report.
    const permissions = models.Permissions.Read
    // Embed configuration used to describe the what and how to embed.
    // This object is used when calling powerbi.embed.
    // This also includes settings and options such as filters.
    // You can find more information at https://docs.microsoft.com/en-us/javascript/api/overview/powerbi/embed-report

    const config = {
      type: 'report',
      tokenType: models.TokenType.Embed,
      pageName: 'PowerBi Page',
      accessToken: 'myToken',
      embedUrl: 'https://api.powerbi.com/v1.0/myorg/datasets',
      id: 'power-bi-dashboard',
      permissions: permissions,
      settings: {
        panes: {
          filters: {
            visible: false
          },
          pageNavigation: {
            visible: false
          }
        }
      }
    }

    // Get a reference to the embedded report HTML element
    const powerBiDashboardContainer = document.getElementById('power-bi-dashboard-app')
    const powerBiService = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory)

    // Embed the report and display it within the div container.
    powerBiService.embed(powerBiDashboardContainer, config)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.power-bi-dashboard {
  &-container {
    width: 100%;
    height: calc((100vw - 220px) * 0.4);
    background-color: $color-raspberry;
    padding: 0;
    clear: both;
  }
}

</style>