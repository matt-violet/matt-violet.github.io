<template>
  <div id="app">
    <img class="bg-img" src="./assets/sunset.jpg">
    <div class="bg-img"></div>
    <Navbar @nav="navigate"/>
    <div class="components" v-if="!showProject">
      <Home/>
      <About/>
      <Skills/>
      <Work @viewProjectDetails="handleViewProjectDetails"/>
      <Contact/>
    </div>
    <WorkDetails 
      v-if="showProject"
      :project="featuredProject"
      @nav="navigate"
    />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'
import WorkDetails from './components/WorkDetails.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Work,
    Contact,
    WorkDetails,
  },
  data() {
    return {
      showProject: false,
      featuredProject: {}
    }
  },
  methods: {
    async navigate(id) {
      if (this.showProject) {
        let obj = {};
        await this.handleViewProjectDetails(obj)
        document.getElementById(id).scrollIntoView({ 
          behavior: 'smooth'
        });
      }
      document.getElementById(id).scrollIntoView({ 
        behavior: 'smooth'
      });
    },
    handleViewProjectDetails(project) {
      this.showProject = !this.showProject;
      this.featuredProject = project;
    }
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
  background: rgb(0, 0, 0, 0.2);
}
</style>
