<template>
  <div id="work">
    <div class="inner-content">
        <div class="header">
          <h1>Work</h1>
        </div>
      <div v-if="!showProject">
        <div class="left">
          <div class="software-projects-btn" v-on:click="toggleShowSoftware">
            <img class="icon software-black" :src="softwareImg">
            <h2 class="section-title">Software</h2>
          </div>
        </div>
        <div class="right">
          <div class="design-projects-btn" v-on:click="toggleShowDesign">
            <img class="icon design-white" :src="designImg">
            <h2 class="section-title">Design</h2>
          </div>
        </div>
        <div :class="showSoftware ? 'software-projects' : 'hidden'">
          <SoftwareProjects @viewProjDetails="handleViewProjDetails"/>
        </div>
        <div :class="showDesign ? 'design-projects' : 'hidden'">
          <DesignProjects @viewProjDetails="handleViewProjDetails"/>
        </div>
      </div>
      <SoftwareWorkDetails 
        v-if="showProject && showSoftware"
        class="software-details"
        :project="project"
      />
      <DesignWorkDetails
        v-if="showProject && showDesign"
        class="work-details"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import SoftwareProjects from './software/SoftwareProjects.vue'
import DesignProjects from './design/DesignProjects.vue'
import SoftwareWorkDetails from './software/SoftwareWorkDetails.vue'
import DesignWorkDetails from './design/DesignWorkDetails.vue'
export default {
  name: 'Work',
  components: {
    SoftwareProjects,
    DesignProjects,
    SoftwareWorkDetails,
    DesignWorkDetails
  },
  props: {
    viewProjectDetails: {type: Function},
    project: {type: Object},
    nav: {type: Function},
    handleNextProject: {type: Function},
    handlePreviousProject: {type: Function},
    showProject: {type: Boolean}
  },
  data() {
    return {
      showSoftware: true,
      showDesign: false,
      softwareImg: require("../../assets/icons/software.png"),
      designImg: require("../../assets/icons/design-white.png"),
    }
  },
  methods: {
    handleViewProjDetails(project) {
      this.viewProjectDetails(project)
    },
    toggleShowSoftware() {
      if (this.showSoftware) {
        return
      }
      this.showSoftware = !this.showSoftware
      this.showDesign = !this.showDesign
    },
    toggleShowDesign() {
      if (this.showDesign) {
        return
      }
      this.showDesign = !this.showDesign
      this.showSoftware = !this.showSoftware
    }
  }
}
</script>

<style scoped>
#work {
  background: rgb(231, 231, 231);
}
.header {
  text-align: center;
}
.inner-content {
  padding: 75px;
  max-width: 900px;
  margin: auto;
  /* text-align: center; */
}
h1 {
  margin: 0 auto 75px auto;
  font-size: 35px;
  font-weight: 400;
}
.left, .right {
  display: inline-block;
  position: relative;
  vertical-align: top;
  margin: 0 10px 0 0;
}
.software-projects-btn {
  background: white;
}
.design-projects-btn {
  background: steelblue;
  color: white;
}
.software-projects-btn, .design-projects-btn {
  width: 150px;
  height: 50px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  text-align: left;
  padding: 15px 15px 0 15px;
  margin: auto;
}
.selected {
  background: white;
  color: black;
}
.software-white-hidden, .software-black-hidden, .design-white-hidden, .design-black-hidden {
  opacity: 0;
  transition: .3s;
}
.software-projects-btn:hover, .design-projects-btn:hover {
  cursor: pointer;
}
.icon {
  width: 25px;
  margin-top: 3px;
  position: absolute;
  display: inline-block;
}
.icon-hidden {
  display: none;
}
.section-title {
  margin: 5px 0 0 45px;
  font-size: 20px;
  font-weight: 500;
  display: inline-block;
}
.software-projects, .design-projects {
  padding: 0 0 75px 0;
  height: 100%;
  margin: auto;
  max-width: 900px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
.hidden {
  display: none;
}
.software-details {
  height: 500px;
  overflow: auto;
  position: relative;
  /* margin-bottom: 75px; */
}
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
}
@media (max-width: 425px) {
  .section-title {
    font-size: 25px;
    text-align: center;
  }
}
</style>
