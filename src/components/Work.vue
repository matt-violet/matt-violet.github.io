<template>
  <div id="work">
    <h1>WORK</h1>
    <div class="inner-content">
      <div class="software-bg-div">
        <h2 class="section-title">Software:</h2>
        <SoftwareProjects
          @viewProjDetails="handleViewProjDetails"
        />
      </div>
      <div class="design-bg-div" id="design-bg-div">
        <h2 class="section-title">Design:</h2>
        <DesignProjects
          @viewProjDetails="handleViewProjDetails"
        />
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
.inner-content {
  padding: 75px;
}
h1 {
  padding: 30px 75px;
  font-size: 50px;
  font-weight: 700;
  color: white;
  background: lightsalmon;
  margin: 0;
  border-bottom: 1px solid lightgrey;
}
.section-title {
  display: block;
  margin-top: 0;
}
.software-bg-div {
  background: rgb(238, 238, 238);
  padding: 30px;
  border-radius: 5px;
}
.design-bg-div {
  background: rgb(238, 238, 238);
  padding: 30px;
  border-radius: 5px;
  margin-top: 50px;
}
@media (max-width: 700px) {
  .inner-content {
    padding: 35px;
  }
}
</style>
