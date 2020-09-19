<template>
  <div class="containers">
    <div class="skills-container front-end">
      <div class="header-div">
        <h2 class="skills-header">Front End Skills</h2>
      </div>
      <div class="skills-row">
        <div class="skill-div" :class="i === 3 ? 'first-div-new-row' : ''" v-for ="(skill, i) of skills.frontend" :key="i" data-aos="zoom-in" data-aos-offset="200">
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
        <div class="skill-div" v-for ="(skill, i) of skills.backend" :key="i" data-aos="zoom-in" data-aos-offset="200">
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
        <div class="skill-div" v-for ="(skill, i) of skills.other" :key="i" data-aos="zoom-in" data-aos-offset="200">
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
  padding: 150px 30px;
}
.skills-row {
  margin: auto;
  max-width: 1000px;
  display: flex;
  flex-flow: wrap;
  align-items: stretch;
  justify-content: space-evenly;
}
.front-end {
  /* background: rgb(216, 238, 255); */
background-image: linear-gradient(to bottom, rgb(146, 183, 224), rgb(206, 227, 252));
  }
.back-end {
    background-image: linear-gradient(to bottom, rgba(167,220,225,1), rgba(217,239,242,1));
  /* background: rgb(183, 223, 255); */
}
.additional {
background-image: linear-gradient(to bottom, rgba(255,216,194,1), rgba(228,247,255,1));
  /* background: rgb(148, 207, 255); */
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
.skill-div:hover .skill-icon {
  transform: rotate(360deg);
}
.header-div {
  margin: 0 auto 50px auto;
  text-align: center;
}
.skills-header {
  font-weight: 400;
  font-size: 30px;
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
@media (max-width: 650px) {
  .skill-div {
    padding: 10px;
    height: 50px;
    width: 50px;
  }
  .skill-icon {
    width: 35px;
    height: 35px;
  }
}
@media (max-width: 550px) {
  .skills-container {
    padding: 100px 30px;
  }
  .skill-div {
    padding: 10px;
    flex: 1 1 1;
    margin: 10px;
  }
  .skill-icon {
    width: 30px;
    height: 30px;
  }
  .skills-row {
    width: 275px;
  }
}
</style>