<template>
  <v-layout row wrap justify-space-between align-center class="font-weight-light starting-load">
    <v-flex xs8>
      <p>
        {{name}}
      </p>
    </v-flex>
    <v-flex xs4>
      <v-text-field :value="load" type="number" @change="changeLoad"></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["id", "name", "value"],
  methods: {
    changeLoad(value) {
      this.$store.commit('setStartingLoad', {
        id: this.id,
        name: this.name,
        value
      })
    }
  },
  computed: {
    load: {
      get () {
        return this.value
      },
      set (value) {
        console.log(value)

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.starting-load {
  border-bottom: 1px solid #eee;
}
</style>
