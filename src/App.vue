<template>
  <div id="app">
    <Navbar @scrollToSec="scrollToSection"/>
    <div class="home-div">
      <Home @scrollToSec="scrollToSection"/>
      <div class="bg-div">
        <img class="bg-img" :src="this.$store.state.backgroundImage">
        <div class="bg-gradient"/>
      </div>
    </div>
    <div class="components">
      <About @scrollToSec="scrollToSection"/>
      <Work/>
      <Experience/>
      <Contact/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Experience from './components/skills/Experience.vue'
import Work from './components/work/Work.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Experience,
    Work,
    Contact
  },
  methods: {
    scrollToSection(section) {
      document.getElementById(section).scrollIntoView({ 
        behavior: 'smooth'
      });
    },
    onScrollSetCurrentPos() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      this.$store.state.showHomeBtn = currentScrollPosition >= 0 && currentScrollPosition <= 275;
      this.$store.state.lastScrollPosition = currentScrollPosition;
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScrollSetCurrentPos)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScrollSetCurrentPos)
  }
}
</script>

<style>
body {
  --body-text: rgb(90, 90, 90);
  --nav-grey: rgb(233, 233, 233);
  --dark-blue: rgb(63, 128, 180);
  --light-blue: rgb(178, 212, 240);
}
body, html {
  margin: 0;
  height: 100%;
  width: 100%;
  position: relative;
}
a {
  color: steelblue;
  font-weight: 600;
  text-decoration: underline;
}
a:hover {
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
.work-details {
  z-index: 100;
  position: relative;
}
.components {
  margin-left: 300px;
  position: relative;
  overflow-x: hidden;
}
.home-div {
  width: 100%;
  height: 100%;
  position: relative;
}
.home-div-absolute {
  position: absolute;
}
.bg-div {
  width: 100%;
  overflow-x: hidden;
}
.bg-img {
  min-width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
  animation: grow 5s;
  animation-fill-mode: forwards;
}
@keyframes grow {
  from { transform: scale(1); }
  to { transform: scale(1.2); }
}
.bg-gradient {
  width: 100%;
  margin-left: 300px;
  height: 100%;
  position: fixed;
  z-index: -1;
  background: linear-gradient(160deg, rgba(0, 0, 0, 0.3) 5%, rgba(0, 0, 0, 0) 95%);
}
@media (max-width: 1000px) {
  .components {
    margin: 0;
  }
  .bg-gradient {
    margin: 0;
  }
}
@media (max-width: 500px) {
  .bg-img {
    width: 1000px;
    margin: auto;
    margin-left: -300px;
  }
  .bg-div {
    text-align: center;
  }
}
</style>
