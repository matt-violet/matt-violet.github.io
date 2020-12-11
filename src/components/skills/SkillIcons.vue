<template>
  <div class="skill-icons-container">
    <div class="inner-content">
      <div class="col">
        <div class="inner-skill">
          <h2 class="skills-header">
            Front End
          </h2>
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
          <h2 class="skills-header">
            Back End
          </h2>
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
          <h2 class="skills-header">
            Additional
          </h2>
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
.inner-content {
  margin: 0 auto;
  transition: .3s;
  display: flex;
  justify-content: center;
}
.col {
  width: 200px;
  text-align: center;
  display: inline-block;
  box-shadow: 1px 2px 8px 0px grey;
  background: white;
  margin: 0 30px;
  padding: 40px 25px 10px 25px;
  transition: .3s;
}
.inner-skill {
  margin: auto;
  padding: 10px 0;
  max-width: 150px;
  text-align: center;
}
.row {
  margin: 0 0 15px 0;
  height: 25px;
  position: relative;
  text-align: left;
}
.icon {
  height: 100%;
  display: inline-block;
  margin-right: 20px;
}
.name {
  top: 2px;
  display: inline-block;
  position: absolute;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: var(--body-text);
}
.skills-header {
  color: steelblue;
  font-size: 28px;
  font-weight: 400;
  margin: 0 0 30px 0;
}
@media (max-width: 900px) {
  .skills-header {
    font-size: 24px;
  }
  .col {
    padding: 30px 15px 10px 15px;
    margin: 0 15px;
  }
  .row {
    height: 20px; 
  }
}
@media (max-width: 700px) {
  .inner-content {
    flex-direction: column;
  }
  .col {
    margin: 0 auto 30px auto;
    display: block;
    padding: 25px 20px 15px 20px;
  }
  .row {
    height: 25px;
    margin-bottom: 10px;
  }
  .name {
    font-size: 16px;
  }
}
</style>
