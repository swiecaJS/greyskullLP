<template>
  <v-container fluid class="home" dark>
    <TheHomeSection />
  </v-container>
</template>

<script>
  import TheHomeSection from '../components/home/TheHomeSection'
  export default {
    components: {
      TheHomeSection
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    background-image: url('../assets/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    /* background: red; */
    height: calc(100vh - 64px);
    @media screen and (max-width: 500px) {
      background-position-x: -185px;
    }
  }
</style>