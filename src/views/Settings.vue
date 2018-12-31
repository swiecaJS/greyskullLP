<template>
  <v-container fluid>
    <h2 class="mb-2">Ustawienia</h2>
    <!-- <v-divider></v-divider>
    <TheAvailibleWeights /> -->
    <v-divider></v-divider>
    <TheStartingLoads 
      :startingLoads="startingLoads"
    />
    <v-layout row wrap justify-center align-center class="font-weight-light starting-load mt-4">
      <v-btn @click="$router.push('/todays-workout')" color="success">Zacznij trening</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
// import TheAvailibleWeights from '../components/settings/TheAvailibleWeights.vue'
import TheStartingLoads from '../components/settings/TheStartingLoads.vue'
export default {
  computed: {
    ...mapState({
      startingLoads: 'startingLoads'
    })
  },
  components: {
    // TheAvailibleWeights,
    TheStartingLoads
  }
}
</script>