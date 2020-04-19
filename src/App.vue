<template>
  <div id="app">
    <img class="bg-img" src="./assets/sunset.jpg">
    <Navbar/>
    <div class="components">
      <Home/>
      <About/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
  }
}
</script>

<style>
body, html {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.components {
  margin-left: 300px;
  height: 100%;
}
.bg-img {
  min-width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
}
</style>
