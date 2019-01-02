export default {
  getWorkoutById: state => workourtId => state.workouts.find(workout => workout.id === workourtId),
  getResultsByName: state => name => state.results.find(result => result.name === name),
  getExcercisesLeftNumber: state => workourtId => state.workouts.find(workout => workout.id === workourtId).excercises.filter(excercise => !excercise.isFinished).length
}
