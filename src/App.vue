<template>
  <div id="app">
    <div class="bg-div">
      <img class="bg-img" :src="backgroundImage">
      <div class="bg-gradient"></div>
    </div>
    <Navbar @nav="navigate"/>
    <div class="components" v-if="!showProject">
      <Home @nav="navigate"/>
      <About/>
      <Education/>
      <Work :viewProjectDetails="handleViewProjectDetails"/>
      <Skills/>
      <Contact/>
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
  </div>
</template>

<script>
import { designProjects, backgroundImages, softwareProjects } from '../data.js'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Skills from './components/skills/Skills.vue'
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
    Skills,
    Work,
    Contact,
    SoftwareWorkDetails,
    DesignWorkDetails,
  },
  data() {
    return {
      showProject: false,
      featuredProject: {},
      backgroundIndex: 1,
      backgroundImage: require("./assets/matt-nyc.png"),
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
  mounted() {
    const bgImgs = backgroundImages;
    setInterval(() => {
      this.backgroundImage = bgImgs[this.backgroundIndex];
      this.backgroundIndex === 4 ? 
        this.backgroundIndex = 0 : 
        this.backgroundIndex++
    }, 3000);
  }
}
</script>

<style>
body, html {
  margin: 0;
  height: 100%;
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
  position: relative;
}
.components {
  margin-left: 300px;
  height: 100%;
}
.bg-div {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
}
.bg-img {
  bottom: 50;
  right: 0;
  min-width: 100%;
  height: 100%;
  position: absolute;
  animation: grow 3s infinite;
}
@keyframes grow {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}
.bg-gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(to bottom, rgba(36, 36, 36, 0.4), rgb(0, 0, 0, 0));
}
@media (max-width: 1000px) {
  .components {
    width: 100%;
    margin: 70px 0 0 0;
    position: absolute;
  }
  .bg-img {
    min-width: 1000px;
    height: 100%;
    transform: translateX(-250px);
  }
}
@media (max-width: 700px) {
  .bg-img {
    right: -40%;
  }
}
</style>
