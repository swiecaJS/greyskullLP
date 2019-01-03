<template>
  <section>
    <v-navigation-drawer v-model="drawer" fixed right app>
      <v-list dense>
          <v-list-tile @click="$router.push('/')">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Strona główna</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="$router.push('/info')">
            <v-list-tile-action>
              <v-icon>info</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Info</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="$router.push('/todays-workout')">
            <v-list-tile-action>
              <v-icon>accessibility</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Trening na dziś</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="$router.push('/overview')">
            <v-list-tile-action>
              <v-icon>today</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Plan</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="$router.push('/strength')">
            <v-list-tile-action>
              <v-icon>trending_up</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Progres</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="$router.push('/settings')">
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Ustawienia</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <router-link to="/">
        <v-toolbar-title class="headline text-uppercase">
          <span>Greyskull LP</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
  </section>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .no-effects {
    color: black;
    text-decoration: none;
  }
  .router-link-active {
    color: black;
    text-decoration: none;
  }
</style>