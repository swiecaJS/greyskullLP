<template>
  <v-card v-if="!isDone" class="excercise">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{name}}</h3>
        <h4 class="subheading mb-0">Obciążenie na dziś: 55kg</h4>
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
            <li v-for="serie in series">
              {{serie}}
            </li>
            <!-- <li v-if="lastSeriesAMRAP">
              5+
            </li> -->
            <input v-if="lastSeriesAMRAP" placeholder="5+" type="text" name="" id="seriesInput">
          </ul>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-card-actions class="justify-end">
      <v-btn @click="isDone=true" flat color="primary">zrobione</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['name', 'excerciseKey', 'series', 'seriesInfo', 'lastSeriesAMRAP'],
  data () {
    return {
      isDone: false
    }
  },
  methods: {
    onSeriesUpdate (value, a) {
      console.log('onSeriesUpdate', value, a)
    }
  }
}
</script>

<style lang="scss" scoped>

ul {
  list-style-type: none;
}

li {
  width: 30px;
  text-align: center;
}

#seriesInput {
  width: 30px;
  background: #d7d7d7;
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