<template>
  <div id="work">
    <h1>WORK</h1>
    <div class="inner-content">
      <div class="software-bg-div">
        <h2 class="section-title">Software:</h2>
        <div v-for="(project, i) in softwareProjects" :key="i" class="software-project" data-aos="zoom-in">
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
import { softwareProjects, designProjects } from '../../data.js'
export default {
  name: 'Work',
  props: {
    viewProjectDetails: {type: Function}
  },
  data() {
    return {
      softwareProjects: softwareProjects,
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
  font-weight: 500;
  color: black;
  background: lightsalmon;
  margin: 0;
  border-bottom: 1px solid lightgrey;
}
.section-title {
  display: block;
  margin-top: 0;
}
.software-project {
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
/* ---------------------- HOVER EFFECTS ---------------------- */
.software-project:hover .img-div {
  height: 0;
}
.software-project:hover .stack, .software-project:hover .stack-header, .software-project:hover .details-btn {
  opacity: 1;
}
.software-project:hover .title {
  margin: 15px 0 0 0;
}
.software-project:hover .text-div {
  height: 250px;
}
.details-btn:hover {
  background: steelblue;
  color: white;
  transition: .3s;
  cursor: pointer;
}
</style>
