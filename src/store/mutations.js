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
  }
}
