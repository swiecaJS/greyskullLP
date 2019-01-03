<!-- <template>
  <v-layout row wrap justify-center align-center class="font-weight-light starting-load mt-2">
    <v-btn @click="$router.push('/overview')" color="error">
      <v-icon class="btn-icon">warning</v-icon> Wyczyść historię treningów
    </v-btn>
  </v-layout> -->
  <template>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-btn slot="activator" color="error">
          <v-icon class="btn-icon">warning</v-icon> Wyczyść historię treningów
        </v-btn>
        <v-card>
          <v-card-title class="headline">Jesteś pewny?</v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" flat @click="dialog = false">COFNIJ</v-btn>
            <v-btn color="red darken-1" flat @click="clearWorkoutStorage">TAK, USUŃ HISTORIĘ</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    clearWorkoutStorage () {
      this.$store.commit('clearResults')
      this.dialog = false
    }
  }
}
</script>

<style>
  .btn-icon {
    margin-right: 10px;
  }
</style>