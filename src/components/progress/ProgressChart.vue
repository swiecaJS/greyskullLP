<template>
  <article>
    <v-divider></v-divider>
    <h3 class="subheading mt-3 mb-4 ml-3">{{name}}</h3>
    <section class="chart-wrapper">
      <canvas :id="chartId" width="400" height="400"></canvas>
    </section>
  </article>
</template>

<script>
import Chart from 'chart.js';
export default {
  props: ['name', 'data', 'chartId'],
  methods: {
    get1RM (load, reps) {
      return Number(load / this.percentagesOf1RM[reps]).toFixed(2)
    },
    getChartData () {
      return this.data.reduce((acc, curr, index) => {
        acc.labels.push(index + 1)
        acc.chartData.push(this.get1RM(curr.load, curr.reps))
        return acc
      }, {
        labels: [],
        chartData: []
      })
    }
  },
  mounted () {
    const { chartData, labels } = this.getChartData()
    this.chart = new Chart(this.chartId, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Maksymalne obciążenie na 1 powtórzenie',
          data: chartData,
          borderWidth: 1,
          // fill: false,
          borderColor: 'rgb(75,192,192)',
          backgroundColor: 'rgba(75,192,192,.2)'
          
        }]
      },
      options: {
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Trening'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: (value) => `${value} kg`
            }
          }]
        }
      }
    })
  },
  data () {
    return {
      chart: null,
      percentagesOf1RM: {
        1: 1,
        2: 0.97,
        3: 0.94,
        4: 0.92,
        5: 0.89,
        6: 0.86,
        7: 0.83,
        8: 0.81,
        9: 0.78,
        10: 0.75,
        11: 0.73,
        12: 0.71,
        13: 0.70,
        14: 0.68,
        15: 0.67,
        16: 0.65,
        17: 0.64,
        18: 0.63,
        19: 0.61,
        20: 0.60,
        21: 0.59,
        22: 0.58,
        23: 0.57,
        24: 0.56,
        25: 0.55,
        26: 0.54,
        27: 0.53,
        28: 0.52,
        29: 0.51,
        30: 0.50
      }
    }
  }
}
</script>

<style scoped>
  .chart-wrapper {
    height: 400px;
  }
</style>