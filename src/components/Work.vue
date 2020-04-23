<template>
  <div id="work">
    <h1>WORK</h1>
    <div class="inner-content">
      <div class="bg-div">
        <h2 class="section-title">Software Projects:</h2>
        <div v-for="(project, i) in softwareProjects" :key="i" class="project" data-aos="zoom-in">
          <div class="img-div">
            <img class="img" :src="project.image">
          </div>
          <div class="text-div">
            <h4 class="title">{{ project.title }}</h4>
            <p class="description">{{ project.description }}</p>
            <p class="stack-header">STACK: </p>
            <p class="stack" v-for="(stack, i) of project.stack" :key="i">{{ stack }}</p>
            <div class="btn-div">
              <button class="details-btn" v-on:click="$emit('viewProjectDetails', project)">DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { softwareProjects } from '../../data.js'
export default {
  name: 'Work',
  props: {
    viewProjectDetails: {type: Function}
  },
  data() {
    return {
      softwareProjects: softwareProjects
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
.bg-div {
  background: rgb(238, 238, 238);
  padding: 30px;
  border-radius: 5px;
}
h1 {
  /* width: 100%; */
  padding: 30px 75px;
  font-size: 50px;
  font-weight: 500;
  color: black;
  background: lightsalmon;
  margin: 0;
  border-bottom: 1px solid lightgrey;
}
.section-title {
  display: block;
}
.project {
  width: 250px;
  height: 250px;
  box-shadow: 1px 2px 8px 0px grey;
  border-radius: 5px;
  display: inline-block;
  margin: 0 25px 25px 0;
  overflow: hidden;
  background: white;
}
.img-div {
  width: 250px;
  height: 66%;
  text-align: center;
  transition: 0.5s;
  -webkit-transition: 0.5s;
}
.img {
  position: relative;
  min-width: 100%;
  height: 100%;
}
.text-div {
  margin: 0;
  padding: 0 10px;
  position: relative;
  height: 33%;
}
.title {
  margin: 10px 0 0 0;
  font-size: 20px;
  font-weight: 900;
  display: inline-block;
}
.description {
  margin: 5px 0;
  font-size: 14px;
}
.stack-header {
  opacity: 0;
  font-size: 13px;
  font-weight: 900;
  display: inline-block;
  margin: 15px 5px 0 0;
}
.stack {
  opacity: 0;
  font-size: 12px;
  font-weight: 500;
  padding: 3px 8px;
  background: rgb(70, 130, 180, .8);
  color: white;
  border-radius: 20px;
  margin: 2px;
  display: inline-block;
}
.btn-div {
  text-align: center;
  width: 230px;
  bottom: 15px;
  position: absolute;
}
.details-btn {
  opacity: 0;
  margin: auto;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 10px;
  color: steelblue;
  border: 1.5px solid steelblue;
  border-radius: 20px;
  display: block;
}
/* ---------------------- HOVER EFFECTS ---------------------- */
.project:hover .img-div {
  height: 0;
}
.project:hover .stack, .project:hover .stack-header, .project:hover .details-btn {
  opacity: 1;
}
.project:hover .title {
  margin: 15px 0 0 0;
}
.project:hover .text-div {
  height: 250px;
}
.details-btn:hover {
  background: steelblue;
  color: white;
  transition: .3s;
  cursor: pointer;
}
</style>
