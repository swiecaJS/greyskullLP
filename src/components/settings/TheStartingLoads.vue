<template>
  <section class="py-2">
    <h4 class="subheading mb-3">Startowe obciążenia [kg]</h4>
    <StartingLoad 
      v-for="load in startingLoadSorted"
      :key="load.id"
      :name="load.name"
      :value="load.value"
      :id="load.id"
    />
  </section>
</template>


<script>
import StartingLoad from './StartingLoad.vue'
export default {
  props: ['startingLoads'],
  computed: {
    startingLoadSorted () {
      console.log('startingLoads', this.startingLoads)
      const loads = this.startingLoads
      return loads.sort((a, b) => {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        return 0
      })
    }
  },
  components: {
    StartingLoad
  },
  methods: {
  }
}
</script>
