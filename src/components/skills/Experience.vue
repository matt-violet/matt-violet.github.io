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
      <h2 class="exp-type-header">Real World Experience</h2>
      <ul>
        <li>Software Engineer Intern at a <a href="https://www.seasoned.co/" target="blank">startup company</a>, contributing to codebases in React, Redux, Vue, Java, and GraphQL.</li>
      </ul>
      <h2 class="exp-type-header">Structured Coursework</h2>
      <ul>
        <li><a href="https://www.hackreactor.com/" target="_blank">Hack Reactor (Galvanize), 2019</a></li>        
          <ul>
            <li>One of San Francisco's premier Software Engineering Immersive programs modeling today’s industry</li>
          </ul>
        <li><a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">The Web Developer Bootcamp</a> (Udemy), 2019</li>
        <li><a href="https://www.udacity.com/course/intro-to-javascript--ud803" target="_blank">Intro to Javascript</a> (Udacity), 2018</li>
      </ul>
      <h2 class="exp-type-header">Achievements & Transferrable Skills</h2>
      <ul>
        <li>Portfolio of full stack web applications using modern front end frameworks / libraries, RESTful / external APIs, and responsive design.</li>
        <li>4 years of WordPress and graphic design experience in the non-profit world</li>
        <li>10+ years of non-profit communications experience and demonstrated advancement</li>
      </ul>
      <p>As you can see from my GitHub activity, coding is a muscle I've been exercising regularly.</p>
      <div class="github-div">
        <img class="github-squares" src="../../assets/github-squares.png">
      </div>
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
  max-width: 600px;
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
  margin: 0 auto 40px auto;
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
.exp-type-header {
  font-weight: 600;
  font-size: 20px;
}
.github-squares {
  width: 100%;
  text-align: center;
  margin: 45px auto 0 auto;
  width: 100%;
}
.github-text {
  position: absolute;
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
/* ---------------------------- PADDING RESIZING ---------------------------- */
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
}
</style>
