<script setup>
import Nav from "./components/Nav.vue";
</script>

<template>
  <div id="app">

    <Nav />

    <router-view />

  </div>
</template>

<style>

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

</style>
