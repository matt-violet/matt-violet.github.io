<template>
  <div id="skills">
    <h1>SKILLS</h1>
    <div class="inner-content">
      <p>Over the last couple years, I have taken a deep dive into the world of software engineering.</p>
      <p>I began by teaching myself basic skills like HTML, CSS, and vanilla JavaScript. Then I decided to focus on my learning full-time, completing <strong>over 1,000 hours</strong> of advanced computer science curriculum modeling today's software engineering industry. Most recently, I gained invaluable <strong>hands-on experience as an intern</strong> working in a professional codebase at <a href="https://www.seasoned.co/" target="blank">Seasoned</a>.
      <p>Though I have encountered plenty of challenges, I'm validated by my accomplishments and remain committed to learning and pushing myself to the next level at all times.
      <div class="stats-div">
        <div class="first-stats">
          <div class="stat">
            <p class="num">2+</p>
            <p class="num-description">years of programming experience</p>
          </div>
          <div class="stat">
            <p class="num">5</p>
            <p class="num-description">months as a Software Engineer Intern</p>
          </div>
        </div>
        <div class="second-stats">
          <div class="stat">
            <p class="num">1,000+</p>
            <p class="num-description">hours of advanced CS curriculum</p>
          </div>
          <div class="stat">
            <p class="num">93</p>
            <p class="num-description">pull requests on GitHub</p>
          </div>
        </div>
      </div>
      <p>I'm also active on GitHub:</p>
      <div class="github-div">
        <img class="github-squares" src="../assets/github-squares.png">
      </div>
      <p>My favorite tools right now are React, Vue, Express, MongoDB, PostgreSQL, and Node. But I have experience with all of the following:</p>
      <div class="skills-boxes">
        <div class="skills-box">
          <h2 class="skills-header">Front End</h2>
          <div class="first-skills">
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.frontend[0].image">
              <p class="skill-name">{{ skills.frontend[0].name }}</p>
            </div>
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.frontend[1].image">
              <p class="skill-name">{{ skills.frontend[1].name }}</p>
            </div>
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.frontend[2].image">
              <p class="skill-name">{{ skills.frontend[2].name }}</p>
            </div>
          </div>
          <div class="second-skills">
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.frontend[3].image">
              <p class="skill-name">{{ skills.frontend[3].name }}</p>
            </div>
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.frontend[4].image">
              <p class="skill-name">{{ skills.frontend[4].name }}</p>
            </div>
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.frontend[5].image">
              <p class="skill-name">{{ skills.frontend[5].name }}</p>
            </div>
          </div>
        </div>
        <div class="skills-box">
          <h2 class="skills-header">Back End</h2>
          <div class="first-skills">
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.backend[0].image">
              <p class="skill-name">{{ skills.backend[0].name }}</p>
            </div>
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.backend[1].image">
              <p class="skill-name">{{ skills.backend[1].name }}</p>
            </div>
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.backend[2].image">
              <p class="skill-name">{{ skills.backend[2].name }}</p>
            </div>
          </div>
          <div class="second-skills">
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.backend[3].image">
              <p class="skill-name">{{ skills.backend[3].name }}</p>
            </div>
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.backend[4].image">
              <p class="skill-name">{{ skills.backend[4].name }}</p>
            </div>
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.backend[5].image">
              <p class="skill-name">{{ skills.backend[5].name }}</p>
            </div>
          </div>
        </div>
        <div class="skills-box">
          <h2 class="skills-header">Additional</h2>
          <div class="first-skills">
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.other[0].image">
              <p class="skill-name">{{ skills.other[0].name }}</p>
            </div>
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.other[1].image">
              <p class="skill-name">{{ skills.other[1].name }}</p>
            </div>
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.other[2].image">
              <p class="skill-name">{{ skills.other[2].name }}</p>
            </div>
          </div>
          <div class="second-skills">
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.other[3].image">
              <p class="skill-name">{{ skills.other[3].name }}</p>
            </div>
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.other[4].image">
              <p class="skill-name">{{ skills.other[4].name }}</p>
            </div>
            <div class="skill-div" data-aos="zoom-in" data-aos-offset="200">
              <img class="skill-icon" :src="skills.other[5].image">
              <p class="skill-name">{{ skills.other[5].name }}</p>
            </div>
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
  max-width: 1000px;
  margin: auto;
}
h1 {
  padding: 30px 75px;
  font-size: 50px;
  font-weight: 700;
  color: white;
  background: lightsalmon;
  margin: 0;
  border-bottom: 1px solid lightgrey;
}
p {
  font-size: 18px;
  font-weight: 400;
  color: grey;
}
strong {
  font-weight: 900;
}
.stats-div {
  margin: 40px 0;
  position: relative;
  text-align: center;
}
.first-stats {
  display: inline-block;
  position: relative;
}
.second-stats {
  display: inline-block;
  position: relative;
}
.stat {
  vertical-align: top;
  margin: 0 20px;
  width: 160px;
  display: inline-block;
  position: relative;
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
  text-align: center;
  border-radius: 5px;
  padding: 20px 30px;
  margin: 30px 0;
}
.first-skills {
  display: inline-block;
  position: relative;
}
.second-skills {
  display: inline-block;
  position: relative;
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
  text-align: left;
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
/* ---------------------------- STATS RESIZING ---------------------------- */
@media (max-width: 1250px) {
  .stat {
    width: 120px;
  }
  .num {
    font-size: 35px;
    font-weight: 500;
  }
  .num-description {
    font-size: 13px;
  }
}
@media (max-width: 1090px) {
  .stat {
    width: 100px;
    margin: 15px;
  }
  .num {
    font-size: 30px;
    font-weight: 500;
  }
}
/* ---------------------------- ICONS RESIZING ---------------------------- */
@media (max-width: 1230px) {
  .skill-div {
    width: 75px;
    padding: 15px 0 10px 0;
  }
  .skill-icon {
    height: 30PX;
  }
  .skill-name {
    font-size: 12px;
  }
}
@media (max-width: 1080px) {
  .skill-div {
    width: 60px;
  }
  .skill-icon {
    height: 25PX;
  }
  .skill-name {
    font-size: 10px;
  }
  p {
    font-size: 16px;
  }
}
@media (max-width: 570px) {
  .skill-div {
    width: 50px;
    margin: 0 15px 0 0;
  }
  .skill-icon {
    height: 25PX;
  }
  .skill-name {
    width: 0;
    height: 0;
    visibility: hidden;
  }
}
@media (max-width: 479px) {
  .skill-div {
    margin: 5px 10px;
  }
}
/* ---------------------------- PADDING RESIZING ---------------------------- */
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
}
</style>
