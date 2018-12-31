<template>
<section>
  <h2 class="headline text-xs-center pt-4">Progres siłowy</h2>
  <p content-class="text-xs-center body-1">Teoretyczne maksymalne obciążenie na 1 powtórzenie</p>
  <ProgressChart 
    v-for="result in results"
    :key="result.id"
    :name="result.name"
    :data="result.data"
    :chartId="result.id"
  />
</section>
</template>

<script>
//   <v-container fluid> dodaj
import { mapState } from 'vuex'
import ProgressChart from '../components/progress/ProgressChart.vue'
export default {
  computed: {
    ...mapState({
      results: 'results'
    })
  },
  components: {
    ProgressChart
  }
}
</script>

<style scoped>
  p {
    text-align: center;
  }
</style>