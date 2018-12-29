export default {
  getWorkoutById: state => workourtId => state.workouts.find(workout => workout.id === workourtId)
}
