<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <merry-christmas></merry-christmas>
  </div>
</template>

<script>
import MerryChristmas from './containers/MerryChristmas.vue';

export default {
  name: 'app',
  components: {
    MerryChristmas,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Anonymous+Pro");
#app {
  font-family: 'Anonymous PRo', 'Waiting for the Sunrise', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
