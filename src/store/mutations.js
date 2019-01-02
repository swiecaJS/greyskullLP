export default {
  setAvailibleWeights (state, payload) {
    state.availibleWeights = payload
  },
  setStartingLoad (state, load) {
    state.startingLoads = [
      ...state.startingLoads.filter(obj => obj.id !== load.id),
      load
    ]
  },
  setCurrentWorkoutId (state, id) {
    state.currentWorkoutId = id
  },
  setExcerciseDone (state, { workoutId, excerciseKey }) {
    state.workouts
      .find(workout => workout.id === workoutId)
      .excercises
      .find(excercise => excercise.excerciseKey === excerciseKey)
      .isFinished = true
  },
  addResult (state, { excerciseKey, resultsData }) {
    console.log(state.results.find(result => result.id === excerciseKey))
    state.results.find(result => result.id === excerciseKey).data.push(resultsData)
  }
}
