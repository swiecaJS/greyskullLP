<template>
  <v-container fluid>
    <h2 class="title mb-2">Informacje</h2>
    <p
      class="body-1"
    >Ta aplikacja ma ułatwiać trening Greyskull LP, którego autorem jest Adam Śmigielski – Full Borsuk Workout na podstawie “The Greyskull LP. Third Edition” (Johnny Pain)</p>
    <p class="body-1">Dokładny opis planu znajdziesz
      <a
        href="https://docs.google.com/document/d/1hbbJ1mgfxwV9aQ4bVM_W_yTHcuyUToUGQaakXQpIluk/edit#"
        target="_blank"
        rel="noopener noreferrer"
      >tutaj</a>
    </p>
    <v-divider></v-divider>
    <div class="my-2">
      Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"
        title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
        target="_blank">CC 3.0 BY</a>
    </div>
    <v-divider></v-divider>
    <p class="body-1 mt-2">projekt open-source stworzony przez swiecaJS, zapraszam do kontrybucji
      <a
        href="https://github.com/swiecaJS/greyskullLP"
        target="_blank"
        rel="noopener noreferrer"
      >tutaj</a> ;)
    </p>
    <v-divider></v-divider>
    <p class="mt-2">Jesteś gotowy?</p>
    <v-layout row wrap justify-center align-center class="font-weight-light starting-load">
      <v-btn @click="$router.push('/settings')" color="info"><v-icon class="btn-icon">settings</v-icon>Przejdź do ustawień</v-btn>
    </v-layout>
    <v-layout row wrap justify-center align-center class="font-weight-light starting-load">
      <v-btn @click="$router.push('/overview')" color="success"><v-icon class="btn-icon">today</v-icon>Zobacz plan</v-btn>
    </v-layout>
  </v-container>
</template>

<style>
.btn-icon {
  margin-right: 10px;
}
</style>