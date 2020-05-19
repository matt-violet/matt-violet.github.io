<template>
  <div class="skills-containers">
    <div class="skills-container front-end">
      <div class="header-div">
        <h2 class="skills-header">Front End Skills</h2>
      </div>
      <div class="skills-row">
        <div v-for ="(skill, i) of skills.frontend" :key="i" class="skill-div" data-aos="zoom-in" data-aos-offset="200">
          <div class="icon-div">
            <img class="skill-icon" :src="skill.image">
          </div>
          <div class="skill-name-div">
            <p class="skill-name">{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="skills-container back-end">
      <div class="header-div">
        <h2 class="skills-header">Back End Skills</h2>
      </div>
      <div class="skills-row">
        <div v-for ="(skill, i) of skills.backend" :key="i" class="skill-div" data-aos="zoom-in" data-aos-offset="200">
          <div class="icon-div">
            <img class="skill-icon" :src="skill.image">
          </div>
          <p class="skill-name">{{ skill.name }}</p>
        </div>
      </div>
    </div>
    <div class="skills-container additional">
      <div class="header-div">
        <h2 class="skills-header">Additional Skills</h2>
      </div>
      <div class="skills-row">
        <div v-for ="(skill, i) of skills.other" :key="i" class="skill-div" data-aos="zoom-in" data-aos-offset="200">
          <div class="icon-div">
            <img class="skill-icon" :src="skill.image">
          </div>
          <p class="skill-name">{{ skill.name }}</p>
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
.skills-container {
  padding: 100px 30px;
}
.skills-row {
  margin: auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-evenly;
}
.front-end {
  background: rgb(216, 238, 255);
}
.back-end {
  background: rgb(183, 223, 255);
}
.additional {
  background: rgb(148, 207, 255);
}
.skill-div {
  box-shadow: 1px 2px 8px 0px grey;
  background: white;
  border-radius: 5px;
  padding: 20px 30px 15px 30px;
  text-align: center;
  overflow: hidden;
}
.skill-icon {
  transition: 1s ease;
  width: 60px;
  height: 60px;
}
.skill-icon:hover {
  transform: rotate(360deg);
}
.header-div {
  margin: 0 auto 50px auto;
  text-align: center;
}
.skills-header {
  font-weight: 400;
  font-size: 24px;
  margin: 0;
}
.skill-name {
  margin: 5px 0 0 0;
  font-weight: 400;
  font-size: 14px;
}
/* ---------------------------- ICONS RESIZING ---------------------------- */
@media (max-width: 1250px) and (min-width: 1001px), (max-width: 900px) {
  .skill-div {
    padding: 15px 20px 10px 20px;
  }
  .skill-icon {
    width: 40px;
    height: 40PX;
  }
  .skill-name {
    margin: 0;
    font-size: 10px;
  }
}
@media (max-width: 700px) {
  .skills-container {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media (max-width: 479px) {
  .skill-div {
    margin: 5px 10px;
  }
}
</style>