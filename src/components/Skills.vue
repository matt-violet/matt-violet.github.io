<template>
  <div id="skills">
    <h1>SKILLS</h1>
    <div class="inner-content">
      <p>I offer over 2 years of full stack engineering experience.</p>
      <p>I have maintained, developed, and launched <strong>multiple projects from scratch,</strong> carrying the development of both back-end and front-end codebases. Here is the time I've been putting in:</p>
      <ul>
        <li><strong>2+ years</strong> of combined coursework / personal projects / professional experience</li>
        <li><strong>5 months</strong> working in a <strong>professional codebase</strong> as a Software Engineer Intern at Seasoned</li>
        <li>Completed <strong>1000+ hours</strong> of advanced Computer Science curriculum modeling today’s software engineering industry</li>
        <li><strong>Self-taught</strong> skills such as HTML, CSS, Vue, Photoshop, and InDesign</li>
        <li>Active contributer on GitHub:</li>
      </ul>
      <img class="github-squares" src="../assets/github-squares.png">
      <p>My favorite tools right now are React, Vue, Express, MongoDB, and PostgreSQL. But I have experience with all of the following:</p>
      <div class="skills-box">
        <h2 class="skills-header">Front End</h2>
        <div v-for="(skill, i) of skills.frontend" :key=i class="skill-div" data-aos="zoom-in" data-aos-offset="300">
          <img class="skill-icon" :src="skill.image">
          <p class="skill-name">{{ skill.name }}</p>
        </div>
      </div>
      <div class="skills-box">
        <h2 class="skills-header">Back End</h2>
        <div v-for="(skill, i) of skills.backend" :key=i class="skill-div" data-aos="zoom-in" data-aos-offset="300">
          <img class="skill-icon" :src="skill.image">
          <p class="skill-name">{{ skill.name }}</p>
        </div>
      </div>
      <div class="skills-box">
        <h2 class="skills-header">Additional</h2>
        <div v-for="(skill, i) of skills.other" :key=i class="skill-div" data-aos="zoom-in" data-aos-offset="300">
          <img class="skill-icon" :src="skill.image">
          <p class="skill-name">{{ skill.name }}</p>
        </div>
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

<style scoped>
#skills {
  background: white;
}
.inner-content {
  padding: 75px
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
li {
  margin: 5px 0;
}
.github-squares {
  width: 70%;
  margin-left: 40px;
  margin: 20px 0 15px 25px;
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
.skill-icon:hover {
  transform: rotate(360deg);

}
.skills-header {
  margin: 0 0 10px 0;
  font-weight: 500;
  color: slategray;
}
.skill-icon {
  transition: 1s ease;
  height: 50px;
}
.skill-name {
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 14px;
}
</style>
