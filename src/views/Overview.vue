<template>
<v-container fluid>
  <h2 class="headline text-xs-center py-4">Przebieg planu</h2>
  <WorkoutCard
    v-for="workout in workouts"
    :key="workout.id"
    :id="workout.id"
    :name="workout.name"
    :excercises="workout.excercises"
    :isActive="isWorkoutActive(workout.id)"
  />
</v-container>

</template>

<script>
  import { mapState } from 'vuex'
  import WorkoutCard from '../components/workout/WorkoutCard.vue'
  export default {
    components: {
      WorkoutCard
    },
    computed: {
      ...mapState({
        workouts: 'workouts',
        currentWorkoutId: 'currentWorkoutId'
      })
    },
    methods: {
      isWorkoutActive (id) {
        return id === this.currentWorkoutId
      }
    }
  }
</script>