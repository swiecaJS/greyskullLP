<template>
    <v-card class="mb-2">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{name}}</h3>
        </div>
      </v-card-title>
      <v-list>
        <v-list-tile class="justify-space-between" v-for="excercise in excercises" :key="excercise.excerciseKey">
          <v-layout row justify-space-between>
            <v-flex xs7>
              <v-list-tile-content class="subtitle">
                {{excercise.name}}
              </v-list-tile-content>
            </v-flex>
            <v-flex xs4>
            <v-list-tile-content class="subtitle">
              {{excercise.seriesInfo}}
            </v-list-tile-content>
            </v-flex>
          </v-layout>
        </v-list-tile>
      </v-list>
      <!-- <v-card-actions class="justify-end">
        <v-btn flat color="primary">zrobione</v-btn>
      </v-card-actions> -->
    </v-card>
</template>


<script>
export default {
  props: ['id', 'name', 'excercises']
}
</script>