<template>
  <div id="work">
    <div class="inner-content">
      <div class="header">
        <h1>Work</h1>
      </div>
      <div v-if="!this.$store.state.showProject">
        <div class="left">
          <div class="software-projects-btn" v-on:click="showSoftware">
            <img class="icon software-black" :src="this.$store.state.softwareImg">
            <h2 class="section-title">Software</h2>
          </div>
        </div>
        <div class="right">
          <div class="design-projects-btn" v-on:click="showDesign">
            <img class="icon design-white" :src="this.$store.state.designImg">
            <h2 class="section-title">Design</h2>
          </div>
        </div>
        <div :class="this.$store.state.showSoftware ? 'software-projects' : 'hidden'">
          <SoftwareProjects/>
        </div>
        <div :class="this.$store.state.showDesign ? 'design-projects' : 'hidden'">
          <DesignProjects/>
        </div>
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
  methods: {
    showSoftware() {
      if (!this.$store.state.showSoftware) {
        this.$store.state.showSoftware = true;
        this.$store.state.showDesign = false;
      }
    },
    showDesign() {
      if (!this.$store.state.showDesign) {
        this.$store.state.showDesign = true;
        this.$store.state.showSoftware = false;
      }
    }
  }
}
</script>

<style scoped>
#work {
  background: rgb(241, 241, 241);
}
.header {
  text-align: center;
}
.inner-content {
  padding: 75px;
  max-width: 900px;
  margin: auto;
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
  background: var(--light-blue);
}
.design-projects-btn {
  background: var(--dark-blue);
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
