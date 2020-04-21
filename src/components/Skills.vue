<template>
  <div id="skills">
    <h1>SKILLS</h1>
    <p>I offer over 2 years of full stack engineering experience.</p>
    <p>I have maintained, developed and launched multiple projects from scratch, carrying the development of its' back-end and front-end codebases.</p>
    <p>My favorite tools include React, Vue, Express, Mongo, and Postgres.</p>
    <div class="skills-box">
      <h2 class="skills-header">Front End</h2>
      <div v-for="(skill, i) of skills.frontend" :key=i class="skill-div">
        <img class="skill-icon" :src="skill.image">
        <p class="skill-name">{{ skill.name }}</p>
      </div>
    </div>
    <div class="skills-box">
      <h2 class="skills-header">Back End</h2>
      <div v-for="(skill, i) of skills.backend" :key=i class="skill-div">
        <img class="skill-icon" :src="skill.image">
        <p class="skill-name">{{ skill.name }}</p>
      </div>
    </div>
    <div class="skills-box">
      <h2 class="skills-header">Additional</h2>
      <div v-for="(skill, i) of skills.other" :key=i class="skill-div">
        <img class="skill-icon" :src="skill.image">
        <p class="skill-name">{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { skills } from '../../data.js'
export default {
  name: 'Skills',
  data() {
    return {
      skills: skills
    }
  }
}
</script>

<style>
#skills {
  background: white;
  padding: 75px;
}
.skills-box {
  background: rgb(238, 238, 238);
  border-radius: 5px;
  padding: 20px 30px;
  margin: 30px 0;
}
.skill-div {
  box-shadow: 1px 2px 8px 0px grey;
  display: inline-block;
  position: relative;
  width: 100px;
  margin: 0 20px 0 0;
  background: white;
  border-radius: 5px;
  padding: 20px 0 15px 0;
  text-align: center;
  overflow: hidden;
}
.skills-header {
  margin: 0 0 10px 0;
  font-weight: 500;
  color: slategray;
}
.skill-icon {
  height: 50px;
}
.skill-name {
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 14px;
  /* background: lightgrey; */
  /* color: white; */
}
</style>
