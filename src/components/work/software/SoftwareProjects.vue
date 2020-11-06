<template>
  <div class="software-projects">
    <div class="project-row">
      <div
        v-for="(project, i) in softwareProjects"
        :key="i"
        class="software-project"
        data-aos="zoom-in"
      >
        <p class="type">{{ project.type }}</p>
        <div class="img-div">
          <div class="filter"/>
          <img class="img" :src="project.image">
        </div>
        <div class="text-div">
          <h4 class="title">{{ project.title }}</h4>
          <p class="description">{{ project.description }}</p>
        </div>
        <div class="btn-div">
          <button
            class="details-btn"
            v-on:click="$store.commit('viewProjectDetails', project)"
          >
            Details
          </button>
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
}
.filter {
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(75, 75, 75, 0.6));
  width: 100%;
  height: 95px;
  z-index: 0;
  position: absolute;
}
.project-row {
  width: 825px;
  padding: 25px 25px 0 25px;
  margin: auto;
}
.software-project {
  width: 225px;
  height: 225px;
  box-shadow: 1px 2px 8px 0px grey;
  border-radius: 5px;
  display: inline-block;
  margin: 0 3% 3% 0;
  overflow: hidden;
  background: white;
  text-align: left;
  transition: .3s;
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
  color: white;
  margin: 0;
  right: 0;
  padding: 8px 12px;
  z-index: 1;
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
  height: 95px;
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
  transition: .3s;
  cursor: pointer;
}
/* ---------------------- MEDIA QUERY ---------------------- */
@media (max-width: 1000px) and (min-width: 861px) {
  .software-project:hover .img-div {
    height: 80px;
  }
  .filter {
    height: 80px;
  }
  .project-row {
    width: 675px;
  }
  .software-project {
    width: 200px;
    height: 200px;
  }
  .img-div {
    height: 135px;
  }
  .title {
    font-size: 18px;
  }
  .description {
    font-size: 12px;
  }
}
@media (max-width: 860px) {
  .project-row {
    width: 525px;
  }
  .software-project {
    width: 150px;
    height: 150px;
  }
  .img-div {
    height: 105px;
  }
  .title {
    margin: 5px 0 0 0;
    font-size: 14px;
  }
  .description {
    font-size: 11px;
    line-height: 1.2;
  }
  .text-div {
    padding: 0 10px;
  }
  .software-project:hover .img-div {
    height: 60px;
  }
  .filter {
    height: 60px;
  }
  .type {
    font-size: 10px;
  }
  .btn-div {
    margin-top: 5px !important;
    padding: 0;
  }
  .details-btn {
    font-weight: 600;
    padding: 5px !important;
    font-size: 14px;
  }
}
@media (max-width: 590px) {
  .project-row {
    width: 350px;
    padding: 25px 10px 20px 10px;
  }
}
@media (max-width: 375px) {
  .project-row {
    width: 150px;
  }
}
</style>
