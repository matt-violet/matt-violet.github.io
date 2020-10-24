import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import Vuex from 'vuex'
import { softwareProjects, designProjects } from '../data.js'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lastScrollPosition: 0,
    featuredProject: {},
    backgroundImage: require("./assets/bay2.jpg"),
    showSmallMenu: false,
    resumeLink: 'https://docs.google.com/document/d/1QNbQGA8xYZ_rY8bJt6Y7lT9yVWhXIu7WmLypJb6UrZU/edit?usp=sharing',
    index: 0,
    showProject: false,
    showHomeBtn: true,
    showFixedMenu: false,
    showSoftware: true,
    softwareIconBlack: require("../src/assets/icons/software.png"),
    softwareIconWhite: require("../src/assets/icons/software-white.png"),
    designIconBlack: require("../src/assets/icons/design.png"),
    designIconWhite: require("../src/assets/icons/design-white.png"),
  },
  mutations: {
    changeAboutImg(state, i) {
      state.index = i;
    },
    viewProjectDetails(state, project) {
      state.showProject = true;
      state.featuredProject = project;
    },
    showNextProject(state, currentProj) {
      if (currentProj.isDesignProject) {
        !designProjects[designProjects.indexOf(currentProj) + 1] ?
          state.featuredProject = designProjects[0] :
          state.featuredProject = designProjects[(designProjects.indexOf(currentProj)) + 1];
      } else {
        let nextIndex = softwareProjects.indexOf(currentProj) + 1;
        !softwareProjects[nextIndex] ?
          state.featuredProject = softwareProjects[0] :
          state.featuredProject = softwareProjects[nextIndex];
      }
    },
    showPreviousProject(state, currentProj) {
      if (currentProj.isDesignProject) {
        !designProjects[designProjects.indexOf(currentProj) - 1] ?
          state.featuredProject = designProjects[designProjects.length - 1] :
          state.featuredProject = designProjects[designProjects.indexOf(currentProj) - 1];
      } else {
        !softwareProjects[softwareProjects.indexOf(currentProj) - 1] ?
          state.featuredProject = softwareProjects[softwareProjects.length - 1] :
          state.featuredProject = softwareProjects[softwareProjects.indexOf(currentProj) - 1];
      }
    },
    exitToWork(state) {
      state.showProject = false;
      setTimeout(() => {
        document.getElementById('work').scrollIntoView({ 
          behavior: 'smooth'
        });
      }, 100)
    }
  }
})

new Vue({
  created() {
    AOS.init()
  },
  store,
  render: h => h(App),
}).$mount('#app')
