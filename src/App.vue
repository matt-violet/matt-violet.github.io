<template>
  <div id="app">
    <Navbar @nav="navigate"/>
    <div class="home-div">
      <Home @nav="navigate" :showHomeBtn="showHomeBtn"/>
      <div class="bg-div">
        <img class="bg-img" :src="backgroundImage">
        <div class="bg-gradient"/>
      </div>
    </div>
    <!-- <SoftwareWorkDetails 
      v-if="showProject && featuredProject && !featuredProject.isDesignProject"
      class="work-details"
      :project="featuredProject"
      @nav="navigate"
      @handleNextProject="showNextProject"
      @handlePreviousProject="showPreviousProject"
    />
    <DesignWorkDetails
      v-if="showProject && featuredProject && featuredProject.isDesignProject"
      class="work-details"
      :project="featuredProject"
      @nav="navigate"
      @handleNextProject="showNextProject"
      @handlePreviousProject="showPreviousProject"
    /> -->
    <div class="components">
      <About @nav="navigate"/>
      <!-- <Education/> -->
      <Work
        :showProject="showProject"
        :project="featuredProject"
        :viewProjectDetails="handleViewProjectDetails"
      />
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
// import Education from './components/Education.vue'
import Experience from './components/skills/Experience.vue'
import Work from './components/work/Work.vue'
import Contact from './components/Contact.vue'
// import SoftwareWorkDetails from './components/work/software/SoftwareWorkDetails.vue'
// import DesignWorkDetails from './components/work/design/DesignWorkDetails.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    // Education,
    Experience,
    Work,
    Contact,
    // SoftwareWorkDetails,
    // DesignWorkDetails,
  },
  data() {
    return {
      showProject: false,
      showHomeBtn: true,
      lastScrollPosition: 0,
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
        !designProjects[designProjects.indexOf(currentProj) + 1] ?
          this.featuredProject = designProjects[0] :
          this.featuredProject = designProjects[(designProjects.indexOf(currentProj)) + 1];
      } else {
        !softwareProjects[softwareProjects.indexOf(currentProj) + 1] ?
          this.featuredProject = softwareProjects[0] :
          this.featuredProject = softwareProjects[(softwareProjects.indexOf(currentProj)) + 1]
      }
    },
    showPreviousProject(currentProj) {
      if (currentProj.isDesignProject) {
        !designProjects[designProjects.indexOf(currentProj) - 1] ?
          this.featuredProject = designProjects[designProjects.length - 1] :
          this.featuredProject = designProjects[designProjects.indexOf(currentProj) - 1]
      } else {
        !softwareProjects[softwareProjects.indexOf(currentProj) - 1] ?
          this.featuredProject = softwareProjects[softwareProjects.length - 1] :
          this.featuredProject = softwareProjects[softwareProjects.indexOf(currentProj) - 1];
      }
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      this.showHomeBtn = currentScrollPosition >= 0 && currentScrollPosition <= 275;
      this.lastScrollPosition = currentScrollPosition;
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style>
body {
  --body-text: rgb(90, 90, 90);
  --nav-grey: rgb(233, 233, 233);
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
