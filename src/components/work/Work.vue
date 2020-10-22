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
    </div>
  </div>
</template>

<script>
import SoftwareProjects from './software/SoftwareProjects.vue'
import DesignProjects from './design/DesignProjects.vue'
export default {
  name: 'Work',
  components: {
    SoftwareProjects,
    DesignProjects
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
  background: white;
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
  font-weight: 900;
}
.left, .right {
  display: inline-block;
  position: relative;
  vertical-align: top;
  margin: 0 10px 0 0;
}
.software-projects-btn {
  background: var(--light-grey);
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
  margin-top: 4px;
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
  .software-projects-btn, .design-projects-btn {
    width: 100px;
  }
  .section-title {
    font-size: 16px;
    margin: 4px 0 0 30px;
  }
  .icon {
    width: 20px;
  }
}
</style>
