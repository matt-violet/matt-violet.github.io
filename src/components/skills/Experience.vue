<template>
  <div id="experience">
    <div class="header">
      <h1>EXPERIENCE</h1>
    </div>
    <div class="inner-content">
      <p>My introduction to the world of programming was maintaining <strong>WordPress websites</strong> for 3 different non-profit organizations.</p>
      <p>From there I took my software engineering skills to the next level through a combination of <strong>self study</strong>, <strong>structured coursework</strong>, and <strong>real world internship experience</strong>. As a student at Hack Reactor, a <strong>premier SF coding bootcamp</strong>, I completed 1,000+ hours of advanced computer science curriculum modeling today's software engineering industry. Next, I gained invaluable hands-on experience as a <strong>Software Engineer Intern</strong> working in a professional codebase at a <a href="https://www.seasoned.co/" target="blank">start up company</a>.</p>
      <p>Throughout my journey I've embraced challenges and relished every opportunity to expand my knowledge.</p>
    </div>
    <div class="stats-div">
      <div class="first-stats">
        <div class="stat" data-aos="zoom-in">
          <p class="num">2+</p>
          <p class="num-description">years of programming experience</p>
        </div>
        <div class="stat" data-aos="zoom-in">
          <p class="num">5</p>
          <p class="num-description">months as a Software Engineer Intern</p>
        </div>
      </div>
      <div class="second-stats">
        <div class="stat" data-aos="zoom-in">
          <p class="num">1,000+</p>
          <p class="num-description">hours of advanced CS curriculum</p>
        </div>
        <div class="stat" data-aos="zoom-in">
          <p class="num">500+</p>
          <p class="num-description">GitHub contributions per year</p>
        </div>
      </div>
    </div>
    <div class="inner-content">
      <p>I'm active on GitHub:</p>
      <div class="github-div">
        <img class="github-squares" src="../../assets/github-squares.png">
      </div>
      <p>And have demonstrated proficiency with the following tools:</p>
    </div>
    <SkillIcons class="SkillIcons"/>
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
#experience {
  background: white;
}
.header {
  width: 100%;
  text-align: center;
}
.inner-content {
  padding: 75px;
  max-width: 800px;
  margin: auto;
}
h1 {
  padding: 25px 75px;
  font-size: 45px;
  font-weight: 500;
  color: white;
  background: linear-gradient(to top, coral, lightsalmon);
  margin: 0;
}
p {
  font-size: 16px;
  font-weight: 400;
  color: var(--body-text);
}
strong {
  font-weight: 900;
}
.stats-div {
  padding: 100px 0;
  position: relative;
  text-align: center;
  background-image: linear-gradient(to bottom,  rgba(163,217,207,.3), rgba(4,178,217,.3));
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
  font-weight: 300;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
.num-description {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 0;
}
.github-div {
  width: 100%;
  text-align: center;
  margin: 45px auto;
}
.github-squares {
  width: 75%;
}
/* ---------------------------- STATS RESIZING ---------------------------- */
@media (max-width: 1250px) and (min-width: 1001px), (max-width: 850px) {
  .stat {
    width: 120px;
  }
  .num {
    font-size: 38px;
    font-weight: 500;
  }
  .num-description {
    font-size: 13px;
  }
}
@media (max-width: 639px) {
  .second-stats {
    padding-top: 35px;
  }
}
/* ---------------------------- PADDING RESIZING ---------------------------- */
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
}
</style>
