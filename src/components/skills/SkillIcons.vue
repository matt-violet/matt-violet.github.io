<template>
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
</template>

<script>
import { skills } from '../../../data.js'
export default {
  name: 'SkillIcons',
  data() {
    return {
      skills: skills
    }
  }
}
</script>

<style scoped>
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
</style>