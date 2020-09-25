<template>
  <div class="software-projects">
    <div class="project-row">
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
            <button class="details-btn" v-on:click="$emit('viewProjDetails', project)">Details</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="project-row">
      <div v-for="(project, i) in softwareProjects.slice(3,6)" :key="i" class="software-project" data-aos="zoom-in">
        <div class="img-div">
          <img class="img" :src="project.image">
        </div>
        <div class="text-div">
          <h4 class="title">{{ project.title }}</h4>
          <p class="description">{{ project.description }}</p>
          <p class="stack-header">STACK: </p>
          <p class="stack" v-for="(stack, i) of project.stack" :key="i">{{ stack }}</p>
          <div class="btn-div">
            <button class="details-btn" v-on:click="$emit('viewProjDetails', project)">Details</button>
          </div>
        </div>
      </div>
    </div>
    <div class="project-row">
      <div v-for="(project, i) in softwareProjects.slice(6,9)" :key="i" class="software-project" data-aos="zoom-in">
        <div class="img-div">
          <img class="img" :src="project.image">
        </div>
        <div class="text-div">
          <h4 class="title">{{ project.title }}</h4>
          <p class="description">{{ project.description }}</p>
          <p class="stack-header">STACK: </p>
          <p class="stack" v-for="(stack, i) of project.stack" :key="i">{{ stack }}</p>
          <div class="btn-div">
            <button class="details-btn" v-on:click="$emit('viewProjDetails', project)">Details</button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { softwareProjects } from '../../../../data.js'
export default {
  props: {
    viewProjDetails: {type: Function}
  },
  data() {
    return {
      softwareProjects: softwareProjects
    }
  }
}
</script>

<style scoped>
  .software-projects {
    text-align: center;
  }
  .project-row {
    width: 825px;
    position: relative;
    margin: auto;
    text-align: left;
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
    text-align: left;
  }
  .img-div {
    width: 250px;
    height: 66%;
    text-align: center;
    transition: 0.3s;
    overflow: hidden;
    background: black;
    -webkit-transition: 0.3s;
  }
  .img {
    position: relative;
    min-width: 100%;
    height: 100%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .text-div {
    margin: 0;
    padding: 0 15px;
    position: relative;
    height: 33%;
    border-top: 1px solid black;
  }
  .title {
    margin: 10px 0 0 0;
    font-size: 20px;
    font-weight: 900;
    display: inline-block;
  }
  .description {
    margin: 4px 0;
    font-size: 14px;
    color: var(--body-text);
  }
  .stack-header {
    opacity: 0;
    font-size: 13px;
    font-weight: 500;
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
    font-weight: 600;
    padding: 8px 12px;
    color: white;
    background: coral;
    border: 0;
    border-radius: 20px;
    display: block;
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
    border: 0;
  }
  .details-btn:hover {
    background: white;
    color: coral;
    transition: .3s;
    cursor: pointer;
    /* border: 2px solid; */
    box-shadow: 1px 2px 4px 0px rgb(44, 44, 44);
  }
/* ---------------------- SOFTWARE PROJECTS MEDIA QUERY ---------------------- */
@media (max-width: 1335px) and (min-width: 1185px), (max-width: 1000px) and (min-width: 860px) {
  .project-row {
    width: 675px;
  }
  .software-project {
    width: 200px;
    height: 200px;
  }
  .img-div {
    width: 200px;
  }
  .title {
    margin: 5px 0 0 0;
    font-size: 16px;
    font-weight: 700;
  }
  .description {
    font-size: 12px;
  }
  .stack-header {
    font-size: 11px;
    font-weight: 700;
    margin: 5px 5px 0 0;
  }
  .stack {
    font-size: 10px;
    font-weight: 600;
    padding: 3px 8px;
  }
  .btn-div {
    width: 170px;
    bottom: 10px;
  }
  .details-btn {
    font-size: 12px;
    font-weight: 600;
    padding: 4px 8px;
  }
  .software-project:hover .text-div {
    height: 200px;
    width: 170px;
  }
}
@media (max-width: 1185px) and (min-width: 1000px), (max-width: 860px) {
  .project-row {
    width: 525px;
  }
  .software-project {
    width: 150px;
    height: 150px;
  }
  .img-div {
    width: 150px;
  }
  .title {
    margin: 0;
    font-size: 12px;
    font-weight: 700;
  }
  .description {
    font-size: 10px;
    margin-top: 0;
    line-height: 1.2;
  }
  .text-div {
    padding: 0 10px;
  }
  .stack, .stack-header {
    width: 0;
    height: 0;
    visibility: hidden;
  }
  .software-project:hover .text-div {
    height: 150px;
    width: 130px;
  }
  .btn-div {
    width: 130px;
    bottom: 10px;
  }
  .details-btn {
    font-size: 11px;
    font-weight: 600;
    padding: 4px 8px;
  }
}
@media (max-width: 590px) {
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