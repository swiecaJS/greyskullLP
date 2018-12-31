export default {
  setAvailibleWeights (state, payload) {
    state.availibleWeights = payload
  },
  setStartingLoad (state, load) {
    console.log('zmieniam load')
    state.startingLoads = [
      ...state.startingLoads.filter(obj => obj.id !== load.id),
      load
    ]
  }
}
