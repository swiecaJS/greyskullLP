<template>
  <v-flex xs12 lg5>
    <transition name="slide-y-transition" appear>
    <v-card v-if="!isFinished" class="excercise">
      <v-card-title primary-title>
        <v-layout column>
          <h3 class="headline mb-0">{{name}}</h3>
          <p class="caption ma-0">{{ seriesInfo }} </p>
          <v-layout row justify-space-between align-center class="mt-2">
            <v-flex xs9 lg11>
              <h3 class="subheading mb-0">Obciążenie na dziś: {{loadForToday}} kg</h3>
            </v-flex>
            <v-flex xs3 lg1>
              <ChangeWeightModal :currentLoad="loadForToday" :name="name" :excerciseKey="id" @loadForTodayChanged="userInputLoad = $event" />
            </v-flex>
          </v-layout>
        </v-layout>
      </v-card-title>
      <v-list>
        <v-list-tile>
          <v-list-tile-content class="subtitle">
            Seria
          </v-list-tile-content>
          <v-list-tile-content class="excercise-details">
            <ul class="excercise-details__right">
              <li>I</li>
              <li>II</li>
              <li>III</li>
            </ul>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content class="subtitle">
            Powtórzenia
          </v-list-tile-content>
          <v-list-tile-content class="excercise-details">
            <ul class="excercise-details__right">
              <li v-for="(serie, index) in series" :key="index">
                {{serie}}
              </li>
              <input v-if="lastSeriesAMRAP" v-model='maxRepsDone' placeholder="?" type="text" name="" id="seriesInput">
            </ul>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-card-actions class="justify-end">
        <v-btn @click="onExcerciseDone" flat color="primary">zrobione</v-btn>
      </v-card-actions>
    </v-card>
    </transition>
    </v-flex>
</template>

<script>
import ChangeWeightModal from './ChangeWeightModal.vue'
export default {
  props: ['name', 'series', 'seriesInfo', 'lastSeriesAMRAP', 'id', 'isFinished', 'workoutId'],
  components: {
    ChangeWeightModal
  },
  data () {
    return {
      maxRepsDone: undefined,
      userInputLoad: null
    }
  },
  computed: {
    startingLoad: {
      get () {
        return this.$store.state.startingLoads.find(load => load.id === this.id)
      }
    },
    incrementedLastResult: {
      get () {
        const currentExcerciseResults = this.$store.state.results.find(result => result.id === this.id)
        if (currentExcerciseResults) {
          const data = currentExcerciseResults.data
          return data[data.length - 1].load + 1// increment by 1
        } else {
          return null
        }
      }
    },
    loadForToday: {
      get () {
        if (this.userInputLoad) {
          return this.userInputLoad
        } else {
          return this.incrementedLastResult ? this.incrementedLastResult : this.startingLoad.value
        }
      },
      set (value) {
        console.log('loadForToday setter' , value)
      }
    }
  },
  methods: {
    onSeriesUpdate (value, a) {
      console.log('onSeriesUpdate', value, a)
    },
    onExcerciseDone () {
      if (this.lastSeriesAMRAP) {
        console.log('max reps', this.maxRepsDone)
        this.$store.commit('addResult', {
          resultsData: {
            reps: this.maxRepsDone,
            load: this.loadForToday
          },
          excerciseKey: this.id
        })
      }
      // TO DO: increment excercise counter
      this.$store.commit('setExcerciseDone', {
        workoutId: this.workoutId,
        excerciseKey: this.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.card-enter {
  opacity: 0;
}

.card-enter-to {
  opacity: 1;
}

.card-enter-active {
  transition: opacity 0.4s ease-in;
}

ul {
  list-style-type: none;
}

li {
  width: 30px;
  text-align: center;
}

#seriesInput {
  width: 30px;
  background: #08941b;
  color: #fff;
  text-align: center;

  &::placeholder {
    color: #fff;
  }
}
  .subtitle {
    width: 20%
  }
  .excercise-details {
    flex: 2
  }

  .excercise-details__right {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .editable-series {
      background: red;
    }
  }

</style>