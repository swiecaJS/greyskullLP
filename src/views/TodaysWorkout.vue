<template>
  <section>
    <h2 class="headline text-xs-center py-4">Trening na dziś</h2>
    <ExcerciseCard class="mb-2 mx-1"
      v-for="excercise in workout(currentWorkoutId).excercises"
      :key="excercise.excerciseKey"
      :id="excercise.excerciseKey"
      :name="excercise.name"
      :excerciseKey="excercise.key"
      :series="excercise.series"
      :seriesInfo="excercise.seriesInfo"
      :lastSeriesAMRAP="excercise.lastSeriesAMRAP"
    />
  </section>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import ExcerciseCard from '../components/workout/ExcerciseCard.vue'
  export default {
    components: {
      ExcerciseCard
    },
    computed: {
      ...mapState({
        loads: 'basicLoads',
        currentWorkoutId: 'currentWorkoutId'
      }),
      ...mapGetters({
        workout: 'getWorkoutById'
      })
    }
  }
</script>

<style lang="scss">

</style>