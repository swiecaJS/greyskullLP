<template>
      <v-card class="excercise">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Przysiad ze sztangą</h3>
            <h4 class="subheading mb-0">Obciążenie na dziś: 55kg</h4>
          </div>
        </v-card-title>
        <v-list>
          <v-list-tile>
            <v-list-tile-content class="subtitle">
              Seria
            </v-list-tile-content>
            <v-list-tile-content class="excercise-details">
              <div class="excercise-details__right">
                <p>I</p>
                <p>II</p>
                <p>III</p>
              </div>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content class="subtitle">
              Powtórzenia
            </v-list-tile-content>
            <v-list-tile-content class="excercise-details">
              <div class="excercise-details__right">
                <p>5</p>
                <p>5</p>
                <p>10</p>
              </div>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-card-actions class="justify-end">
          <v-btn flat color="primary">done</v-btn>
        </v-card-actions>
      </v-card>
</template>

<style lang="scss" scoped>

  .subtitle {
    width: 20%
  }
  .excercise-details {
    flex: 4
  }

  .excercise-details__right {
    display: flex;
    justify-content: space-around;
    width: 100%;

    p {
      padding: 0;
      margin: 0;
    }
  }
</style>