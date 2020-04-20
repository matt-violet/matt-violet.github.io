<template>
  <div id="app">
    <img class="bg-img" src="./assets/sunset.jpg">
    <Navbar/>
    <div class="components">
      <Home/>
      <About/>
      <Skills/>
      <Work/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Work from './components/Work.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Work,
  }
}
</script>

<style>
body, html {
  margin: 0;
  height: 100%;
}
h1 {
  width: 100%;
  color: steelblue;
  margin-top: 0;
  border-bottom: 1px solid lightgrey;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  position: relative;
}
.components {
  margin-left: 300px;
  height: 100%;
}
.bg-img {
  width: 100%;
  min-height: 100%;
  z-index: -1;
  position: fixed;
  bottom: 0;
}
</style>
