<template>
  <div class="software-projects">
    <div class="project-row">
      <div v-for="(project, i) in softwareProjects" :key="i" class="software-project" data-aos="zoom-in">
        <p class="type">{{ project.type }}</p>
        <div class="img-div">
          <img class="img" :src="project.image">
        </div>
        <div class="text-div">
          <h4 class="title">{{ project.title }}</h4>
          <p class="description">{{ project.description }}</p>
          <!-- <p class="stack-header">Tools: </p> -->
          <!-- <p class="stack" v-for="(stack, i) of project.stack" :key="i">{{ stack }}</p> -->
        </div>
        <div class="btn-div">
          <button class="details-btn" v-on:click="$store.commit('viewProjectDetails', project)">Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { softwareProjects } from '../../../../data.js'
export default {
  data() {
    return {
      softwareProjects: softwareProjects
    }
  }
}
</script>

<style scoped>
.software-projects {
  margin: 0 75px;
  background: var(--light-grey);
}
.project-row {
  padding: 25px 50px 0 50px;
}
.software-project {
  max-width: 30%;
  min-height: 225px;
  box-shadow: 1px 2px 8px 0px grey;
  border-radius: 5px;
  display: inline-block;
  margin: 0 3% 3% 0;
  overflow: hidden;
  background: white;
  text-align: left;
}
.img-div {
  height: 150px;
  transition: 0.3s;
  overflow: hidden;
  background: linear-gradient(135deg, white, lightgrey);
  background: cover;
  -webkit-transition: 0.3s;
}
.img {
  width: 100%;
  min-height: 100%;
}
.text-div {
  padding: 10px;
  border-top: 1px solid grey;
}
.type {
  font-size: 12px;
  font-weight: 500;
  border-bottom-left-radius: 5px;
  color: white;
  background: rgba(41, 41, 41, 0.5);
  margin: 0;
  right: 0;
  padding: 4px 8px;
  position: absolute;
}
.title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  display: inline-block;
}
.description {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: grey;
}
.stack-header {
  font-size: 16px;
  font-weight: 400;
  color: grey;
  display: inline-block;
  margin: 20px 5px 0 0;
}
.stack {
  font-size: 11px;
  font-weight: 500;
  padding: 3px 8px;
  background: coral;
  color: white;
  border-radius: 20px;
  margin: 2px;
  display: inline-block;
}
.btn-div {
  text-align: center;
}
.details-btn {
  display: none;
  width: calc(100% - 20px);
  margin: auto;
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: steelblue;
  border: 0;
  border-radius: 5px;
}
/* ---------------------- HOVER EFFECTS ---------------------- */
.software-project:hover .img-div {
  height: 100px;
}
.software-project:hover .btn-div {
  border-top: 1px solid lightgrey;
  margin: 0 10px;
}
.software-project:hover .details-btn {
  padding: 10px;
  display: block;
  margin: 10px auto 0 auto;
  position: absolute;
}
.details-btn:hover {
  background: coral;
  color: white;
  /* color: var(--body-text); */
  transition: .3s;
  cursor: pointer;
  /* box-shadow: 1px 2px 4px 0px grey; */
}
/* ---------------------- SOFTWARE PROJECTS MEDIA QUERY ---------------------- */
/* @media (max-width: 1335px) and (min-width: 1185px), (max-width: 1000px) and (min-width: 860px) {
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
} */
</style>