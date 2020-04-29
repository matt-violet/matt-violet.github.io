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
      <Work :viewProjectDetails="handleViewProjectDetails"/>
      <Skills/>
      <Contact/>
    </div>
    <SoftwareWorkDetails 
      v-if="showProject && featuredProject && !featuredProject.isDesignProject"
      :project="featuredProject"
      @nav="navigate"
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
import { designProjects, backgroundImages } from '../data.js'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'
import SoftwareWorkDetails from './components/software/SoftwareWorkDetails.vue'
import DesignWorkDetails from './components/design/DesignWorkDetails.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
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
      backgroundImage: require("./assets/pump.png"),
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
      if (!designProjects[designProjects.indexOf(currentProj) + 1]) {
        this.featuredProject = designProjects[0];
        return;
      }
      this.featuredProject = designProjects[(designProjects.indexOf(currentProj)) + 1];
    },
    showPreviousProject(currentProj) {
      if (!designProjects[designProjects.indexOf(currentProj) - 1]) {
        this.featuredProject = designProjects[designProjects.length - 1];
        return;
      }
      this.featuredProject = designProjects[designProjects.indexOf(currentProj) - 1];
    }
  },
  mounted() {
    const bgImgs = backgroundImages;
    setInterval(() => {
      this.backgroundImage = bgImgs[this.backgroundIndex];
      this.backgroundIndex === 3 ? 
        this.backgroundIndex = 0 : 
        this.backgroundIndex++
    }, 3500);
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
  position: absolute;
}
.bg-div {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
}
.bg-img {
  bottom: 50;
  min-width: 100%;
  height: 100%;
  position: absolute;
}
.bg-gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(to bottom, rgba(24, 24, 24, 0.6), rgb(0, 0, 0, 0));
}
@media (max-width: 1000px) {
  .components {
    width: 100%;
    margin: 70px 0 0 0;
  }
  .bg-img {
    width: 1000px;
    min-height: 100%;
  }
}
</style>
