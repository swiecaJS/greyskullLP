<template>
  <section class="py-2">
    <h4 class="subheading">Dostępne talerze</h4>
      <v-layout row wrap class="font-weight-light">
        <v-checkbox v-model="loads" label="0.5 kg" value="0.5"></v-checkbox>
        <v-checkbox v-model="loads" label="1 kg" value="1"></v-checkbox>
        <v-checkbox v-model="loads" label="1.25 kg" value="1.25"></v-checkbox>
        <v-checkbox v-model="loads" label="2.5 kg" value="2.5"></v-checkbox>
      </v-layout>
      <p class="font-weight-light">Przykładowa progresja:</p>
      <v-layout row wrap justify-space-between class="font-weight-light">
        <p v-for="load in getSampleProgression()" :key="load">
          {{load}}
        </p>
      </v-layout>
  </section>
</template>

<script>
  export default {
    computed: {
      loads: {
        get () {
          return this.$store.state.availibleWeights
        },
        set (val) {
          this.$store.commit('setAvailibleWeights', val)
        }
      }
    },
    methods: {
      getNextWeight(value, i) {
        console.log('getNextWeight', this.loads)
        switch (this.loads.length) {
          case 0:
            return ''
          case 1:
            return value + (Number(this.loads[0]) * 2)
        }
        // return value + 1
      },
      getSampleProgression () {
        const startingLoad = 50
        const output = [startingLoad]
        for (let i = 0; i < 10 ; i++) {
          output.push(this.getNextWeight(output[i], i))
        }
        return output
      }
    }
  }
</script>