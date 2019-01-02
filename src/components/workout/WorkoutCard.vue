<template>
    <v-card class="mb-2 elevation-2" :class="{'elevation-8': isActive}">
      <v-card-title primary-title>
        <v-layout row justify-space-between align-center>
          <v-flex xs10>
            <h3 class="headline mb-0 text-capitalize">{{name}}</h3>
          </v-flex>
          <v-flex xs1 v-show="isActive">
            <v-icon class="teal--text">beenhere</v-icon>
            <!-- <v-icon class="teal--text">lens</v-icon> -->
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-list>
        <v-list-tile class="justify-space-between" v-for="excercise in excercises" :key="excercise.excerciseKey">
          <v-layout row justify-space-between>
            <v-flex xs7>
              <v-list-tile-content class="subheading font-weight-regular">
                {{excercise.name}}
              </v-list-tile-content>
            </v-flex>
            <v-flex xs4>
            <v-list-tile-content class="body-2 font-weight-light">
              {{excercise.seriesInfo}}
            </v-list-tile-content>
            </v-flex>
          </v-layout>
        </v-list-tile>
      </v-list>
      <v-card-actions class="justify-end">
        <v-btn v-if="!isActive" @click="$store.commit('setCurrentWorkoutId', id)" flat color="primary">Wybierz trening na dziś</v-btn>
        <v-btn v-else @click="$router.push('/todays-workout')" flat color="primary">Rozpocznij trening</v-btn>
      </v-card-actions>
    </v-card>
</template>


<script>
export default {
  props: ['id', 'name', 'excercises', 'isActive']
}
</script>