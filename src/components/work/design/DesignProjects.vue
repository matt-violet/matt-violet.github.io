<template>
  <div class="design-projects">
    <div class="project-row">
      <div v-for="(project, i) in designProjects" :key="i" class="design-project" v-on:click="$store.commit('viewProjectDetails', project)">
        <div class="design-img-div">
          <img class="design-img" :src="project.images[0]">
        </div>
        <div class="design-text-div">
          <p class="design-description">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { designProjects } from '../../../../data.js'
export default {
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
  margin: 0 75px;
  background: linear-gradient(to bottom, steelblue, rgb(151, 199, 238));
}
.project-row {
  width: 825px;
  padding: 50px 25px 0 25px;
  position: relative;
  margin: auto;
  text-align: left;
}
.design-project {
  width: 250px;
  height: 250px;
  box-shadow: 1px 2px 8px 0px rgb(37, 37, 37);
  border-radius: 5px;
  display: inline-block;
  margin: 0 25px 25px 0;
  overflow: hidden;
  background: white;
}
.design-img-div {
  width: 100%;
  height: 195px;
  overflow: hidden;
}
.design-img {
  width: 100%;
  min-height: 100%;
}
.design-text-div {
  margin: 0;
  padding: 0px 10px;
  border-top: 1px solid;
  height: 33%;
  text-align: left;
}
.design-description {
  margin: 10px;
  padding-top: 5px;
  font-weight: 500;
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
@media (max-width: 1000px) and (min-width: 850px){
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
@media (max-width: 850px) {
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
@media (max-width: 400px) {
  .project-row {
    padding: 50px 10px 0 10px;
  }
  .design-project {
    margin: 10px 0 0 10px;
  }
}
@media (max-width: 370px) {
  .project-row {
    width: 150px;
  }
}
</style>