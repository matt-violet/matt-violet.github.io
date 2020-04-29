<template>
  <div>
    <div v-for="(project, i) in designProjects" :key="i" class="design-project" v-on:click="$emit('viewProjDetails', project)">
      <div class="design-img-div">
        <img class="design-img" :src="project.images[0]">
      </div>
      <div class="design-text-div">
        <p class="design-description">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { designProjects } from '../../../data.js'
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
/* ---------------------- MEDIA QUERY ---------------------- */
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