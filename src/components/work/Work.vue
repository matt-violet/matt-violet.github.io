<template>
  <div id="work">
    <div class="inner-content">
      <div class="header">
        <h1>Work</h1>
      </div>
      <div v-if="!this.$store.state.showProject">
        <div class="left">
          <div :class="this.$store.state.showSoftware ? 'software-projects-btn selected' : 'software-projects-btn unselected'" v-on:click="showSoftware">
            <img class="icon software-black" :src="this.$store.state.softwareIconBlack" v-if="!this.$store.state.showSoftware">
            <img class="icon software-white" :src="this.$store.state.softwareIconWhite" v-if="this.$store.state.showSoftware">
            <h2 class="section-title">Software</h2>
          </div>
        </div>
        <div class="right">
          <div :class="this.$store.state.showSoftware ? 'design-projects-btn unselected' : 'design-projects-btn selected'" v-on:click="showDesign">
            <img class="icon design-white" :src="this.$store.state.designIconWhite" v-if="!this.$store.state.showSoftware">
            <img class="icon design-black" :src="this.$store.state.designIconBlack" v-if="this.$store.state.showSoftware">
            <h2 class="section-title">Design</h2>
          </div>
        </div>
        <div :class="this.$store.state.showSoftware ? 'software-projects' : 'hidden'">
          <SoftwareProjects/>
        </div>
        <div :class="this.$store.state.showSoftware ? 'hidden' : 'design-projects'">
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
      }
    },
    showDesign() {
      if (this.$store.state.showSoftware) {
        this.$store.state.showSoftware = false;
      }
    }
  }
}
</script>

<style scoped>
#work {
  background: var(--light-grey);
}
.header {
  text-align: center;
}
.inner-content {
  padding: 75px;
  max-width: 900px;
  margin: auto;
  text-align: center;
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
  margin: 0 0 20px 0;
}
.selected {
  background: coral;
  color: white;
}
.unselected {
  color: coral;
}
.unselected:hover {
  background: white;
}
.software-projects-btn {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.design-projects-btn {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.software-projects-btn, .design-projects-btn {
  border: 2px solid coral;
  width: 100px;
  text-align: left;
  padding: 5px 10px;
  margin: auto;
  transition: .3s;
}
.software-white-hidden, .software-black-hidden, .design-white-hidden, .design-black-hidden {
  opacity: 0;
  transition: .3s;
}
.software-projects-btn:hover, .design-projects-btn:hover {
  cursor: pointer;
}
.icon {
  width: 22px;
  margin-top: 4px;
  position: absolute;
  display: inline-block;
}
.icon-hidden {
  display: none;
}
.section-title {
  margin: 3px 0 0 30px;
  padding: 2px 5px;
  font-size: 16px;
  font-weight: 700;
  display: inline-block;
}
.software-projects, .design-projects {
  padding: 0;
  margin: auto;
  max-width: 900px;
  border-radius: 5px;
  transition: .3s;
}
.hidden {
  display: none;
  transition: .3s;
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
