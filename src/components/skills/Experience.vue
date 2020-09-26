<template>
  <div id="experience">
    <div class="header">
      <h1>EXPERIENCE</h1>
    </div>
    <div class="stats-div">
      <div class="first-stats">
        <div class="stat" data-aos="zoom-in">
          <p class="num">2+</p>
          <p class="num-description">years of programming experience</p>
        </div>
        <div class="stat" data-aos="zoom-in">
          <p class="num">6</p>
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
      <h3>Experience Highlights</h3>
      <div class="exp-group">
        <img class="exp-icon" src="../../assets/icons/suitcase.png">
        <div class="exp-header-div">
          <h2 class="exp-type-header">Career</h2>
        </div>
        <ul>
          <li>Software Engineer Intern at a <a href="https://www.seasoned.co/" target="blank">startup company</a>, contributing to codebases in React, Redux, Vue, Java, and GraphQL.</li>
          <li>Maintained WordPress websites for 3 non-profit organizations</li>
          <li>4 years of professional graphic design experience</li>
        </ul>
      </div>
      <div class="exp-group">
        <img class="exp-icon" src="../../assets/icons/graduation.png">
        <div class="exp-header-div">
          <h2 class="exp-type-header">Coursework</h2>
        </div>
        <ul>
          <li><a href="https://www.hackreactor.com/" target="_blank">Hack Reactor (Galvanize), 2019</a></li>        
            <ul>
              <li>A premier SF Software Engineering Immersive program modeling today’s industry</li>
            </ul>
          <li><a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">The Web Developer Bootcamp</a> (Udemy), 2019</li>
          <li><a href="https://www.udacity.com/course/intro-to-javascript--ud803" target="_blank">Intro to Javascript</a> (Udacity), 2018</li>
          <li>UC Davis, 2010 (B.A. in Communication)</li>
        </ul>
      </div>
      <div class="exp-group">
        <img class="exp-icon" src="../../assets/icons/achievement.png">
        <div class="exp-header-div">
          <h2 class="exp-type-header">Achievements</h2>
        </div>
        <ul>
          <li>Portfolio of full stack apps built with modern front end frameworks / libraries, RESTful / external APIs, and responsive design.</li>
          <li>A decade of non-profit communications experience</li>
          <li>Demonstrated professional advancement</li>
        </ul>
      </div>
      <p>As you can see from my <a href="https://github.com/matt-violet" target="_blank">GitHub</a> activity, coding is a muscle I exercise regularly:</p>
      <div class="github-div">
        <img class="github-squares" src="../../assets/github-squares.png">
      </div>
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
#experience {
  background: white;
}
.header {
  width: 100%;
  text-align: center;
}
.inner-content {
  text-align: center;
  padding: 75px 25px;
  max-width: 1000px;
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
h3 {
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  margin: 0 auto 50px auto;
}
li {
  color: var(--body-text);
  font-size: 16px;
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
.exp-group {
  display: inline-block;
  text-align: left;
  width: 30%;
  padding: 0 10px;
  vertical-align: top;
}
.exp-icon {
  width: 50px;
  margin: 0 auto;
  display: block;
}
.exp-header-div {
  margin: 10px auto 30px auto;
  text-align: center;
}
.exp-type-header {
  font-weight: 500;
  font-size: 25px;
  margin: auto;
}
.github-div {
  padding: 0 25px;
}
.github-squares {
  max-width: 800px;
  text-align: center;
  margin: 75px auto 0 auto;
  width: 100%;
}
.github-text {
  position: absolute;
}
.SkillIcons {
  margin: 75px auto 0 auto;
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
  .stats-div {
    padding: 50px 0;
  }
  .second-stats {
    padding-top: 35px;
  }
}
/* ---------------------------- HIGHLIGHTS RESIZING ---------------------------- */
@media (max-width: 1150px) and (min-width: 1001px), (max-width: 830px) {
  .exp-type-header {
    font-size: 20px;
  }
  li {
    font-size: 14px;
  }
}
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px 50px 15px;
  }
  h3 {
    margin-top: 50px;
  }
}
@media (max-width: 700px) {
  .exp-group {
    display: block;
    margin: 0 auto 50px auto;
    padding: 0;
    width: auto;
    max-width: 500px;
  }
  li {
    font-size: 16px;
  }
}
@media (max-width: 400px) {
  h3 {
    font-size: 25px;
  }
}
</style>
