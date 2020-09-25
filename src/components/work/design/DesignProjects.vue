<template>
  <div class="design-projects">
    <div class="project-row">
      <div v-for="(project, i) in designProjects" :key="i" class="design-project" v-on:click="$emit('viewProjDetails', project)" data-aos="zoom-in">
        <div class="design-img-div">
          <img class="design-img" :src="project.images[0]">
        </div>
        <div class="design-text-div">
          <p class="design-description">{{ project.description }}</p>
        </div>
      </div>
    </div>
    <!-- <div class="project-row">
      <div class="project-row">
        <div v-for="(project, i) in designProjects.slice(3,6)" :key="i" class="design-project" v-on:click="$emit('viewProjDetails', project)" data-aos="zoom-in">
          <div class="design-img-div">
            <img class="design-img" :src="project.images[0]">
          </div>
          <div class="design-text-div">
            <p class="design-description">{{ project.description }}</p>
          </div>
        </div>
      </div>
      <div class="project-row">
        <div v-for="(project, i) in designProjects.slice(6,9)" :key="i" class="design-project" v-on:click="$emit('viewProjDetails', project)" data-aos="zoom-in">
          <div class="design-img-div">
            <img class="design-img" :src="project.images[0]">
          </div>
          <div class="design-text-div">
            <p class="design-description">{{ project.description }}</p>
          </div>
        </div>
      </div>
      <div class="project-row">
        <div v-for="(project, i) in designProjects.slice(9,12)" :key="i" class="design-project" v-on:click="$emit('viewProjDetails', project)" data-aos="zoom-in">
          <div class="design-img-div">
            <img class="design-img" :src="project.images[0]">
          </div>
          <div class="design-text-div">
            <p class="design-description">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { designProjects } from '../../../../data.js'
export default {
  props: {
    viewProjDetails: {type: Function}
  },
  data() {
    return {
      designProjects: designProjects
    }
  }
}
</script>

<style scoped>
.design-projects {
  text-align: center;
}
.project-row {
  width: 825px;
  position: relative;
  margin: auto;
  text-align: left;
}
.design-project {
  width: 250px;
  height: 250px;
  box-shadow: 1px 2px 8px 0px grey;
  border-radius: 5px;
  display: inline-block;
  margin: 0 25px 25px 0;
  overflow: hidden;
  background: white;
}
.design-img-div {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.design-img {
  width: 100%;
  min-height: 100%;
}
.design-text-div {
  margin: 0;
  padding: 0px 10px;
  height: 33%;
  text-align: left;
}
.design-description {
  margin: 10px 0 0 5px;
  padding-top: 5px;
  font-weight: 900;
  font-size: 18px;
}
.design-project:hover {
  cursor: pointer;
}
.design-project:hover .design-img {
  transform: scale(1.1);
  transition: .3s;
}
/* ---------------------- MEDIA QUERY ---------------------- */
@media (max-width: 1335px) and (min-width: 1185px), (max-width: 1000px) and (min-width: 860px){
  .project-row {
    width: 675px;
  }
  .design-project {
    width: 200px;
    height: 200px;
  }
  .design-img-div {
    height: 160px;
  }
  .design-description {
    margin-top: 5px;
    font-weight: 700;
    font-size: 16px;
  }
}
/* ---------------------- MEDIA QUERY ---------------------- */
@media (max-width: 1185px) and (min-width: 1000px), (max-width: 860px) {
  .project-row {
    width: 525px;
  }
  .design-project {
    width: 150px;
    height: 150px;
  }
  .design-img-div {
    height: 115px;
  }
  .design-description {
    font-size: 13px;
    margin: 5px 0 0 5px;
  }
}
@media (max-width: 595px) {
  .project-row {
    width: 350px;
  }
}
@media (max-width: 375px) {
  .project-row {
    width: 150px;
  }
}
</style>