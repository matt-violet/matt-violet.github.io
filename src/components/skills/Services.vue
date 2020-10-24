<template>
  <div id="services">
    <div class="inner-content">
      <h3>Services</h3>
      <div class="intro-text">
        <p>I am a <strong>full-stack software engineer</strong> with <strong>3 years of experience.</strong></p>
        <p>My favorite tools for coding are <strong>React</strong> and <strong>Vue</strong>, however I have developed, maintained, and launched multiple projects from scratch using the frameworks, libraries, and technologies below.</p>
        <p>In addition to building software, I design <strong>graphics and layouts</strong> with tools like <strong>Sketchable</strong> and <strong>Adobe Creative Suite.</strong></p> 
      </div>
      <SkillIcons/>      
    </div>
  </div>
</template>

<script>
import SkillIcons from './SkillIcons.vue'
export default {
  name: 'Skills',
  components: {
    SkillIcons
  }
}
</script>

<style scoped>
#services {
  background: var(--light-grey);
}
h3 {
  text-align: center;
  font-size: 30px;
  font-weight: 900;
  margin: 0 auto 50px auto;
}
.inner-content {
  text-align: center;
  padding: 75px 0;
  max-width: 1000px;
  margin: auto;
}
.intro-text {
  margin: 75px auto 25px auto;
  padding: 0 40px;
  text-align: left;
  max-width: 700px;
}
p {
  font-size: 16px;
  font-weight: 400;
  color: var(--body-text);
}
</style>
