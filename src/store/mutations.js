export default {
  setAvailibleWeights (state, payload) {
    state.availibleWeights = payload
  },
  setStartingLoad (state, load) {
    state.startingLoads = [
      ...state.startingLoads.filter(obj => obj.id !== load.id),
      load
    ]
    window.localStorage.setItem('greyskullLoads', JSON.stringify(state.startingLoads))
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
    state.results.find(result => result.id === excerciseKey).data.push(resultsData)
    window.localStorage.setItem('greyskullResults', JSON.stringify(state.results))
  },
  clearResults (state) {
    state.results = [{ 'id': 'bench', 'name': 'Wyciskanie leżąc', 'data': [] }, { 'id': 'squat', 'name': 'Przysiad', 'data': [] }, { 'id': 'deadlift', 'name': 'Martwy ciąg', 'data': [] }, { 'id': 'ohp', 'name': 'Wyciskanie żołnierskie', 'data': [] }]
    window.localStorage.setItem('greyskullResults', JSON.stringify(state.results))
  }
}
