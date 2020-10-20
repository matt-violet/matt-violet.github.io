<template>
  <div id="app">
    <Navbar v-if="!this.$store.state.showProject" @scrollToSec="scrollToSection"/>
    <div class="home-div" v-if="!this.$store.state.showProject">
      <Home @scrollToSec="scrollToSection"/>
      <div class="bg-div">
        <img class="bg-img" :src="this.$store.state.backgroundImage">
        <div class="bg-gradient"/>
      </div>
    </div>
    <div v-if="!this.$store.state.showProject" class="components">
      <Services/>
      <Experience/>
      <Work/>
      <About @scrollToSec="scrollToSection"/>
      <Contact/>
    </div>
    <SoftwareWorkDetails 
        v-if="this.$store.state.showProject && this.$store.state.showSoftware"
        class="software-details"
      />
      <DesignWorkDetails
        v-if="this.$store.state.showProject && this.$store.state.showDesign"
        class="work-details"
      />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Services from './components/skills/Services.vue'
import Experience from './components/experience/Experience.vue'
import Work from './components/work/Work.vue'
import Contact from './components/Contact.vue'
import SoftwareWorkDetails from './components/work/software/SoftwareWorkDetails.vue'
import DesignWorkDetails from './components/work/design/DesignWorkDetails.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Services,
    Experience,
    Work,
    SoftwareWorkDetails,
    DesignWorkDetails,
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
      this.$store.state.showHomeBtn = currentScrollPosition >= 0 && currentScrollPosition <= 100;
      this.$store.state.showFixedMenu = currentScrollPosition >= 0 && currentScrollPosition >= 100;
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
  --primary: coral;
  --light-grey: rgb(241, 241, 241);
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
  position: relative;
  overflow: none;
}
.home-div {
  width: 100%;
  height: 66%;
  overflow: hidden;
  position: relative;
}
.home-div-absolute {
  position: absolute;
}
.bg-div {
  width: 100%;
  /* height: 66%; */
  overflow: hidden;
  z-index: -100;
}
.bg-img {
  width: 100%;
  min-height: 100%;
  position: absolute;
  bottom: 0;
  animation: grow 5s;
  animation-fill-mode: forwards;
}
@keyframes grow {
  from { transform: scale(1); }
  to { transform: scale(1); }
}
.bg-gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(to bottom, rgba(42, 101, 150, 0.5), rgba(0, 0, 0, 0));
}
@media (max-width: 1000px) {
  .components {
    margin: 0;
  }
  .bg-gradient {
    margin: 0;
  }
}
@media (max-width: 600px) {
  .home-div {
    height: 100%;
  }
/* } */
/* @media (max-width: 500px) { */
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
