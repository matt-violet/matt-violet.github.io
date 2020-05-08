<template>
  <div id="skills">
    <h1>SKILLS</h1>
    <div class="inner-content">
      <p>My first taste of programming was building and maintaining WordPress websites for non-profit organizations using basic HTML.</p>
      <p>From there I gained proficiency in full stack software development through a combination of self study and structured education. As a student at San Francisco's premiere coding bootcamp, Hack Reactor (Galvanize), I completed <strong>over 1,000 hours</strong> of advanced computer science curriculum modeling today's software engineering industry. Most recently, I gained invaluable <strong>hands-on experience as an intern</strong> working on a team of developers in a professional codebase at <a href="https://www.seasoned.co/" target="blank">Seasoned</a>.</p>
      <p>Throughout my journey I've embraced every challenge as an opportunity and sought out ways to make each project better than my last.</p>
    </div>
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
    <div class="inner-content">
      <p>I'm also active on GitHub:</p>
      <div class="github-div">
        <img class="github-squares" src="../../assets/github-squares.png">
      </div>
      <p>I have demonstrated proficiency with the following tools:</p>
      <SkillIcons class="SkillIcons"/>
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
#skills {
  background: white;
}
.inner-content {
  padding: 59px 75px 75px 75px;
  max-width: 1000px;
  margin: auto;
}
.SkillIcons {
  margin-top: 75px;
}
h1 {
  padding: 30px 75px;
  font-size: 50px;
  font-weight: 700;
  color: white;
  background: linear-gradient(to top, coral, lightsalmon);
  margin: 0;
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
  padding: 60px 0;
  position: relative;
  text-align: center;
  background: rgb(238, 238, 238);
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
  font-weight: 500;
  color: steelblue;
}
.num-description {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0;
  color: steelblue;
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
