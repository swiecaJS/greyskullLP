const getDataFromLocalStorage = (state, storageKey, stateKey) => {
  const raw = window.localStorage.getItem(storageKey)
  if (raw) {
    try {
      state[stateKey] = JSON.parse(raw)
    } catch (error) {
      console.error(error)
    }
  }
}

export default {
  getStoredData ({ state }) {
    getDataFromLocalStorage(state, 'greyskullResults', 'results')
    getDataFromLocalStorage(state, 'greyskullLoads', 'startingLoads')
  }
}
