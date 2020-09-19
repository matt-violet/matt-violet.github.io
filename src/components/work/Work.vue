<template>
  <div id="work">
    <div class="header">
      <h1>PORTFOLIO</h1>
    </div>
    <div class="inner-content">
      <div class="software-bg-div">
        <h2 class="section-title">Software Development:</h2>
        <SoftwareProjects @viewProjDetails="handleViewProjDetails"/>
      </div>
      <div class="design-bg-div" id="design-bg-div">
        <h2 class="section-title">Graphic Design:</h2>
        <DesignProjects @viewProjDetails="handleViewProjDetails"/>
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
  props: {
    viewProjectDetails: {type: Function}
  },
  methods: {
    handleViewProjDetails(project) {
      this.viewProjectDetails(project)
    }
  }
}
</script>

<style scoped>
#work {
  background: white;
}
.header {
  width: 100%;
  text-align: center;
}
.inner-content {
  padding: 75px;
  max-width: 1000px;
  margin: auto;
}
h1 {
  padding: 25px 75px;
  font-size: 45px;
  font-weight: 500;
  color: white;
  background: linear-gradient(to top, coral, lightsalmon);
  margin: 0;
}
.section-title {
  display: block;
  margin-top: 0;
  font-size: 30px;
  font-weight: 400;
}
.software-bg-div {
  background-image: linear-gradient(to bottom,  rgba(163,217,207,.3), rgba(4,178,217,.3));
  padding: 30px;
  border-radius: 5px;
}
.design-bg-div {
  background-image: linear-gradient(to bottom,  rgba(163,217,207,.3), rgba(4,178,217,.3));
  padding: 30px;
  border-radius: 5px;
  margin-top: 50px;
}
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
}
</style>
