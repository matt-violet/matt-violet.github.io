<template>
  <div id="app">
    <Navbar @nav="navigate"/>
    <div class="home-div" v-if="!showProject">
      <Home @nav="navigate"/>
      <img class="home-bg-img" :src="backgroundImage">
      <div class="bg-gradient"/>
    </div>
    <SoftwareWorkDetails 
      v-if="showProject && featuredProject && !featuredProject.isDesignProject"
      :project="featuredProject"
      @nav="navigate"
      @handleNextProject="showNextProject"
      @handlePreviousProject="showPreviousProject"
    />
    <DesignWorkDetails
      v-if="showProject && featuredProject && featuredProject.isDesignProject"
      :project="featuredProject"
      @nav="navigate"
      @handleNextProject="showNextProject"
      @handlePreviousProject="showPreviousProject"
    />
    <div class="components" v-if="!showProject">
      <About/>
      <Education/>
      <Work :viewProjectDetails="handleViewProjectDetails"/>
      <Experience/>
      <Contact/>
    </div>
  </div>
</template>

<script>
import { designProjects, softwareProjects } from '../data.js'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Experience from './components/skills/Experience.vue'
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
    Education,
    Experience,
    Work,
    Contact,
    SoftwareWorkDetails,
    DesignWorkDetails,
  },
  data() {
    return {
      showProject: false,
      featuredProject: {},
      // backgroundIndex: 1,
      backgroundImage: require("./assets/bay.jpg"),
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
    },
    showNextProject(currentProj) {
      if (currentProj.isDesignProject) {
        if (!designProjects[designProjects.indexOf(currentProj) + 1]) {
          this.featuredProject = designProjects[0];
          return;
        }
        this.featuredProject = designProjects[(designProjects.indexOf(currentProj)) + 1];
        return;
      } else {
        if (!softwareProjects[softwareProjects.indexOf(currentProj) + 1]) {
          this.featuredProject = softwareProjects[0];
          return;
        }
        this.featuredProject = softwareProjects[(softwareProjects.indexOf(currentProj)) + 1];
      }
    },
    showPreviousProject(currentProj) {
      if (currentProj.isDesignProject) {
        if (!designProjects[designProjects.indexOf(currentProj) - 1]) {
          this.featuredProject = designProjects[designProjects.length - 1];
          return;
        }
        this.featuredProject = designProjects[designProjects.indexOf(currentProj) - 1];
        return;
      } else {
        if (!softwareProjects[softwareProjects.indexOf(currentProj) - 1]) {
          this.featuredProject = softwareProjects[softwareProjects.length - 1];
          return;
        }
        this.featuredProject = softwareProjects[softwareProjects.indexOf(currentProj) - 1];
      }
    }
  },
  // mounted() {
  //   const bgImgs = backgroundImages;
  //   setInterval(() => {
  //     this.backgroundImage = bgImgs[this.backgroundIndex];
  //     this.backgroundIndex === 4 ? 
  //       this.backgroundIndex = 0 : 
  //       this.backgroundIndex++
  //   }, 4000);
  // }
}
</script>

<style>
body, html {
  margin: 0;
  height: 100%;
  width: 100%;
  position: relative;
}
a {
  color: blue;
}
a:visited {
  color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
.components {
  width: 100%;
  margin-left: 300px;
  position: relative;
}
.home-div {
  min-width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.home-bg-img {
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
  height: 100%;
  position: fixed;
  z-index: -1;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
}
@media (max-width: 1000px) {
  .components {
    margin: 0;
  }
}
</style>
