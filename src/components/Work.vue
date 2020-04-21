<template>
  <div id="work">
    <h1>WORK</h1>
    <div
      v-for="(project, i) in softwareProjects"
      :key="i"
      class="project"
    >
      <img class="project-img" :src="project.image">
      <div class="text-div">
        <h4 class="title">{{ project.title }}</h4>
        <p class="description">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { softwareProjects } from '../../data.js'
export default {
  name: 'Work',
  data() {
    return {
      softwareProjects: softwareProjects
    }
  }
}
</script>

<style>
#work {
  background: white;
  padding: 75px;
}
.project {
  width: 250px;
  height: 250px;
  box-shadow: 1px 2px 8px 0px grey;
  border-radius: 5px;
  display: inline-block;
  margin: 0 20px 20px 0;
  overflow: hidden;
  background: white;
}
.project-img {
  min-width: 100%;
  height: 66%;
}
.text-div {
  padding: 10px
}
.title {
  margin: 0 0 2px 0;
  font-size: 18px;
  font-weight: 500;
}
.description {
  margin: 0;
  font-size: 13px;
}
</style>
