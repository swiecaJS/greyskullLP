<template>
  <v-app>
    <TheNavbar />
    <v-content>
      <router-view :key="$route.fullPath" />
    </v-content>
  </v-app>
</template>

<script>
  import TheNavbar from './components/main/TheNavbar'

  export default {
    name: 'App',
    components: {
      TheNavbar
    }
  }
</script>