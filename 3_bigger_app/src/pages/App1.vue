<template>
  <base-page>
    <div
      id="divContainer"
      class="div-container"
    >
      Highcharts
      
    </div>
  </base-page>
</template>

<script>
import BasePage from "./BasePage.vue";
const Highcharts = require('highcharts')

export default {
  name: 'App1',
  components: { BasePage },

  mounted () {
    // Create the chart
    Highcharts.chart('divContainer', {
      chart: {
        margin: [0, 0, 0, 0],
        type: 'column'
      },
      title: {
        text: ''
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        type: 'category',
        labels: {
          enabled: false
        }
      },
      yAxis: {
        softMax: 1,
        visible: false
      },
      legend: {
        enabled: false
      },
      colors: ['#f00', '#0f0', '#00f'],
      plotOptions: {
        column: {
          minPointLength: 2
        },
        series: {
          pointPadding: 0,
          groupPadding: 0.1,
          borderWidth: 0,
          borderRadius: 3,
          dataLabels: {
            enabled: true,
            format: '{point.y:.f}',
            style: {
              fontFamily: 'Raleway Bold',
              fontSize: 18,
              fontWeight: 'normal'
            }
          }
        }
      },
      tooltip: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [
        {
          colorByPoint: true,
          data: [
            {
              name: '1',
              y: 1.5
            },
            {
              name: '2',
              y: 4
            },
            {
              name: '3',
              y: 12
            }
          ]
        }
      ]
    })
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
