<template>
  <div id="work">
    <h1>WORK</h1>
    <div class="inner-content">
      <div class="software-bg-div">
        <h2 class="section-title">Software:</h2>
        <SoftwareProjects/>
      </div>
      <div class="design-bg-div" id="design-bg-div">
        <h2 class="section-title">Design:</h2>
        <div v-for="(project, i) in designProjects" :key="i" class="design-project" v-on:click="$emit('viewProjectDetails', project)">
          <div class="design-img-div">
            <img class="design-img" :src="project.images[0]">
          </div>
          <div class="design-text-div">
            <p class="design-description">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SoftwareProjects from './SoftwareProjects.vue'
import { designProjects } from '../../data.js'
export default {
  name: 'Work',
  components: {
    SoftwareProjects
  },
  props: {
    viewProjectDetails: {type: Function}
  },
  data() {
    return {
      designProjects: designProjects
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
.software-bg-div {
  background: rgb(238, 238, 238);
  padding: 30px;
  border-radius: 5px;
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
/* ---------------------- DESIGN PROJECTS ---------------------- */
.design-bg-div {
  background: rgb(238, 238, 238);
  padding: 30px;
  border-radius: 5px;
  margin-top: 50px;
}
.design-project {
  width: 175px;
  height: 175px;
  box-shadow: 1px 2px 8px 0px grey;
  border-radius: 5px;
  display: inline-block;
  margin: 0 25px 25px 0;
  overflow: hidden;
  background: white;
}
.design-img-div {
  width: 100%;
  height: 130px;
  overflow: hidden;
}
.design-img {
  width: 100%;
  min-height: 100%;
}
.design-text-div {
  margin: 0;
  padding: 5px 10px;
  height: 33%;
}
.design-description {
  margin: 0;
  padding-top: 5px;
  font-weight: 700;
  font-size: 16px;
}
.design-project:hover {
  cursor: pointer;
}
.design-project:hover .design-img {
  transform: scale(1.1);
  transition: .3s;
}
/* ---------------------- DESIGN PROJECTS MEDIA QUERY ---------------------- */
@media (max-width: 1111px) {
  .design-project {
    width: 125px;
    height: 125px;
  }
  .design-img-div {
    height: 95px;
  }
  .design-text-div {
    padding: 5px 10px;
    height: 33%;
  }
  .design-description {
    padding-top: 2px;
    font-weight: 500;
    font-size: 12px;
  }
}
</style>
