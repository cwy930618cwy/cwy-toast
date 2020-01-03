<template>
  <div id="app">
    <Hallo />
  </div>
</template>

<script>
import Hallo from './demo/Hallo.vue'

export default {
  name: 'app',
  components: {
    Hallo
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
