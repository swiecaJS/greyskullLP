<template>
  <v-layout align-center justify-center column fill-height class="home-section">
    <h1>Greskull Lp</h1>
    <h3>najlepszy plan FBW dla początkujących</h3>
    <section class="cta-buttons">
      <v-btn color="success">Login</v-btn>
      <v-btn color="info">Sign Up</v-btn>
    </section>
  </v-layout>
</template>

<style lang="scss">
  .home-section {
    max-width: 500px;
    text-align: center;
    color: #f5f5f5;
      text-shadow:
        0.07em 0 black,
        0 0.07em black,
        -0.07em 0 black,
        0 -0.07em black;

    h1 {
      font-size: 60px;
    }

    h3 {
      font-size: 20px;
    }
    .cta-buttons {
      margin-top: 2em;
      display: flex;
    }
  }
</style>