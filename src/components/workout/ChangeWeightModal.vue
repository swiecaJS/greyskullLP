<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-btn slot="activator" flat>
        <v-icon class="primary--text">edit</v-icon>
      </v-btn>
      <v-card>
        <v-card-title class="text-xs-center">
          <h3 class="title">
            Zmiana obciążenia
          </h3>
          <p class="caption">
            wartość zgodna z progresją o 1 kg: <span class="font-weight-medium">{{initialLoadCopy}} kg</span>
          </p>
        </v-card-title>
        <v-card-text>
          <v-layout row wrap align-center>
            <v-flex xs8>
              <p>
                {{name}}
              </p>
            </v-flex>
            <v-flex xs4>
              <v-layout row align-center>
                <v-flex xs10>
                  <v-text-field :value="load" type="number" @change="changeLoad"></v-text-field>
                </v-flex>
                <v-flex xs2>
                  kg
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn color="red darken-1" flat @click="closeModalAndCancelChanges">ANULUJ</v-btn> -->
          <v-btn color="green darken-1" flat @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    props: ['excerciseKey', 'name', 'currentLoad'],
    computed: {
      load () {
        return this.currentLoad
      }
    },
    methods: {
      changeLoad (value) {
        this.$emit('loadForTodayChanged', value)
      }
      // closeModalAndCancelChanges () {
      //   console.log('closeModalAndCancelChanges', this.initialLoadCopy)
      //   this.$emit('loadForTodayChanged', this.initialLoadCopy)
      //   // this.$emit('loadForTodayChanged', 1)
      //   this.dialog = false
      // }
    },
    created () {
      this.initialLoadCopy = this.currentLoad
    },
    data () {
      return {
        dialog: false,
        initialLoadCopy: null
      }
    }
  }
</script>