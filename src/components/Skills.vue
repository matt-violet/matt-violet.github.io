<template>
  <div id="skills">
    <h1>SKILLS</h1>
    <div class="inner-content">
      <p>Over the last couple years, I have taken a deep dive into the world of software engineering.</p>
      <p>I began by teaching myself basic skills like HTML, CSS, and vanilla JavaScript. Then I decided to focus on my learning full-time, completing <strong>over 1,000 hours</strong> of advanced computer science curriculum modeling today's software engineering industry. Most recently, I gained invaluable <strong>hands-on experience as an intern</strong> working in a professional codebase at Seasoned.
      <p>Though I have encountered plenty of challenges, I'm validated by my accomplishments and remain committed to learning and pushing myself to the next level at all times.
      <div class="stats-div">
        <div class="stat">
          <p class="num">2+</p>
          <p class="num-description">years of programming experience</p>
        </div>
        <div class="stat">
          <p class="num">5</p>
          <p class="num-description">months as a Software Engineer Intern</p>
        </div>
        <div class="stat">
          <p class="num">1,000+</p>
          <p class="num-description">hours of advanced CS curriculum</p>
        </div>
        <div class="stat">
          <p class="num">93</p>
          <p class="num-description">pull requests on GitHub</p>
        </div>
      </div>
      <p>I'm also active on GitHub:</p>
      <div class="github-div">
        <img class="github-squares" src="../assets/github-squares.png">
      </div>
      <p>My favorite tools right now are React, Vue, Express, MongoDB, and PostgreSQL. But I have experience with all of the following:</p>
      <div class="skills-boxes">
        <div class="skills-box">
          <h2 class="skills-header">Front End</h2>
          <div v-for="(skill, i) of skills.frontend" :key=i class="skill-div" data-aos="zoom-in" data-aos-offset="200">
            <img class="skill-icon" :src="skill.image">
            <p class="skill-name">{{ skill.name }}</p>
          </div>
        </div>
        <div class="skills-box">
          <h2 class="skills-header">Back End</h2>
          <div v-for="(skill, i) of skills.backend" :key=i class="skill-div" data-aos="zoom-in" data-aos-offset="200">
            <img class="skill-icon" :src="skill.image">
            <p class="skill-name">{{ skill.name }}</p>
          </div>
        </div>
        <div class="skills-box">
          <h2 class="skills-header">Additional</h2>
          <div v-for="(skill, i) of skills.other" :key=i class="skill-div" data-aos="zoom-in" data-aos-offset="200">
            <img class="skill-icon" :src="skill.image">
            <p class="skill-name">{{ skill.name }}</p>
          </div>
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
  padding: 59px 75px 75px 75px;
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
strong {
  font-weight: 900;
}
.stats-div {
  margin: 40px 0;
  position: relative;
  text-align: center;
}
.stat {
  vertical-align: top;
  margin: 0 20px;
  width: 175px;
  display: inline-block;
  text-align: center;
}
.num {
  margin: 0;
  font-size: 50px;
  font-weight: 400;
  color: steelblue;
}
.num-description {
  font-size: 15px;
  font-weight: 500;
  color: steelblue;
}
.github-div {
  width: 100%;
  text-align: center;
  margin: 45px auto 40px auto;
}
.github-squares {
  width: 75%;
}
.skills-boxes {
  margin: 40px auto 0 auto;
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
