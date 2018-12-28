<template>
  <section>
    <h2 class="headline text-xs-center py-4">Trening na dziś</h2>
    <ExcerciseCard class="mb-2 mx-1"/>
    <ExcerciseCard class="mb-2 mx-1"/>
    <ExcerciseCard class="mb-2 mx-1"/>
  </section>
</template>

<script>
  import ExcerciseCard from '../components/workout/ExcerciseCard.vue'
  export default {
    components: {
      ExcerciseCard
    }
  }
</script>

<style lang="scss">

</style>