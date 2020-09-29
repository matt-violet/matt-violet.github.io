<template>
  <div class="skill-icons-container">
    <h3>Technical Skills</h3>
    <div class="col">
      <div class="inner-skill">
        <h2 class="skills-header">Front End</h2>
        <div class="row"
          v-for ="(skill, i) of skills.frontend"
          :class="i === 3 ? 'first-div-new-row' : ''"
          :key="i"
        >
          <img class="icon" :src="skill.image">
          <p class="name">{{ skill.name }}</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="inner-skill">
        <h2 class="skills-header">Back End</h2>
        <div class="row"
          v-for ="(skill, i) of skills.backend"
          :class="i === 3 ? 'first-div-new-row' : ''"
          :key="i"
        >
          <img class="icon" :src="skill.image">
          <p class="name">{{ skill.name }}</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="inner-skill">
        <h2 class="skills-header">Additional</h2>
        <div class="row"
          v-for ="(skill, i) of skills.additional"
          :class="i === 3 ? 'first-div-new-row' : ''"
          :key="i"
        >
          <img class="icon" :src="skill.image">
          <p class="name">{{ skill.name }}</p>
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
.skill-icons-container {
  max-width: 800px;
  text-align: center;
  transition: .3s;
}
h3 {
  font-size: 30px;
  font-weight: 400;
  margin: 0 auto 50px auto;
}
.col {
  width: 33%;
  text-align: center;
  display: inline-block;
}
.inner-skill {
  margin: auto;
  max-width: 130px;
  text-align: left;
}
.row {
  margin: 0 0 10px 0;
  height: 30px;
  position: relative;
  text-align: left;
}
.icon {
  height: 100%;
  display: inline-block;
  margin-right: 10px;
}
.name {
  top: 5px;
  display: inline-block;
  position: absolute;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: var(--body-text);
}
.skills-header {
  font-size: 25px;
  font-weight: 400;
  text-decoration: underline;
  margin-bottom: 40px;
}
@media (max-width: 550px) {
  .col {
    width: 190px;
    margin: 50px auto 0 auto;
    display: block;
  }
  .row {
    height: 25px;
    margin-bottom: 8px;
  }
  h3 {
    margin-bottom: 25px;
  }
  .skills-header {
    margin-bottom: 20px;
    font-size: 20px;
  }
  .name {
    top: 3px;
    font-size: 14px;
  }
}
</style>