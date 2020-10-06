<template>
  <div id="work">
    <div class="header">
      <h1>Work</h1>
    </div>
    <div class="inner-content">
      <div class="software-bg-div">
        <h2 class="section-title">Software Projects:</h2>
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
  background: rgb(220, 240, 255);
}
.header {
  width: 100%;
  text-align: center;
}
.inner-content {
  padding: 75px;
  max-width: 900px;
  margin: auto;
}
h1 {
  padding-top: 75px;
  font-size: 35px;
  font-weight: 400;
  margin: 0;
}
.section-title {
  display: block;
  margin-top: 0;
  font-size: 28px;
  font-weight: 400;
}
.software-bg-div {
  padding: 30px;
  border-radius: 5px;
}
.design-bg-div {
  padding: 30px;
  border-radius: 5px;
}
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
}
@media (max-width: 425px) {
  .software-bg-div, .design-bg-div {
    padding: 30px 10px;
  }
  .section-title {
    font-size: 25px;
    text-align: center;
  }
}
</style>
