<template>
  <section>
    <h2 class="headline text-xs-center pt-4">Trening na dziś</h2>
    <p v-show="!areAllExcercisesDone" class="text-xs-center body-1">Uzupełnij ilość powtórzeń w serii AMRAP</p>
    <WorkoutEndedCard v-show="areAllExcercisesDone" />
    <ExcerciseCard class="mb-2 mx-1"
      v-for="excercise in workout(currentWorkoutId).excercises"
      :key="excercise.excerciseKey"
      :id="excercise.excerciseKey"
      :name="excercise.name"
      :series="excercise.series"
      :seriesInfo="excercise.seriesInfo"
      :isFinished="excercise.isFinished"
      :lastSeriesAMRAP="excercise.lastSeriesAMRAP"
      :workoutId="currentWorkoutId"
    />
  </section>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import ExcerciseCard from '../components/workout/ExcerciseCard.vue'
  import WorkoutEndedCard from '../components/workout/WorkoutEndedCard.vue'
  export default {
    components: {
      ExcerciseCard,
      WorkoutEndedCard
    },
    computed: {
      ...mapState({
        loads: 'basicLoads',
        currentWorkoutId: 'currentWorkoutId'
      }),
      ...mapGetters({
        workout: 'getWorkoutById',
        excercisesLeft: 'getExcercisesLeftNumber'
      }),
      areAllExcercisesDone () {
        return this.excercisesLeft(this.currentWorkoutId) === 0
      }
    }
  }
</script>

<style lang="scss">

</style>