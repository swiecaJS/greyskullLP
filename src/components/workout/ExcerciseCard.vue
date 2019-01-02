<template>
  <transition name="slide-y-transition" appear>
    <v-card v-if="!isFinished" class="excercise">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{name}}</h3>
          <h4 class="subheading mb-0">Obciążenie na dziś: {{loadForToday}} kg</h4>
          <p class="caption">{{ seriesInfo }} </p>
        </div>
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
</template>

<script>
export default {
  props: ['name', 'series', 'seriesInfo', 'lastSeriesAMRAP', 'id', 'isFinished', 'workoutId'],
  data () {
    return {
      isDone: false,
      maxRepsDone: undefined
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
        return this.incrementedLastResult ? this.incrementedLastResult : this.startingLoad.value
      },
      set () {
      }
    }
  },
  methods: {
    onSeriesUpdate (value, a) {
      console.log('onSeriesUpdate', value, a)
    },
    onExcerciseDone () {
      // TO DO: update storage
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
      this.isDone = true
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