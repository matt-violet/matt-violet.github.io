<template>
  <div id="experience">
    <div class="stats-div">
      <div class="header">
        <h1>Experience</h1>
      </div>
      <div class="first-stats">
        <div class="stat" data-aos="zoom-in">
          <p class="num">2+</p>
          <p class="num-description">years of programming experience</p>
        </div>
        <div class="stat" data-aos="zoom-in">
          <p class="num">1,000+</p>
          <p class="num-description">hours of advanced CS curriculum</p>
        </div>
      </div>
      <div class="second-stats">
        <div class="stat" data-aos="zoom-in">
          <p class="num">6</p>
          <p class="num-description">months as a Software Engineer Intern</p>          
        </div>
        <div class="stat" data-aos="zoom-in">
          <p class="num">500+</p>
          <p class="num-description">GitHub contributions per year</p>
        </div>
      </div>
    </div>
     <div class="inner-content">
      <div class="exp-group">
        <img class="exp-icon" src="../../assets/icons/graduation.png">
        <div class="exp-header-div">
          <h2 class="exp-type-header">Academics</h2>
        </div>
        <ul>
          <li><a href="https://www.hackreactor.com/" target="_blank">Hack Reactor</a> (Galvanize), 2019</li>        
            <ul>
              <li>Advanced Software Engineering Immersive modeling today’s industry</li>
            </ul>
          <li>Self study</li>
          <ul>
            <li><a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">The Web Developer Bootcamp</a> (Udemy), 2019</li>
            <li><a href="https://www.udacity.com/course/intro-to-javascript--ud803" target="_blank">Intro to Javascript</a> (Udacity), 2018</li>
          </ul>
          <li>University of California, Davis, 2010</li>
          <ul>
            <li>B.A. in Communication</li>
          </ul>
        </ul>
      </div>
      <div class="exp-group">
        <img class="exp-icon" src="../../assets/icons/suitcase.png">
        <div class="exp-header-div">
          <h2 class="exp-type-header">Career</h2>
        </div>
        <ul>
          <li>Software Engineer Intern at a startup company, <a href="https://www.seasoned.co/" target="blank">Seasoned</a></li>
          <ul>
            <li>Shipped code in React, Redux, Vue, and GraphQL</li>
            <li>Collaborated with teams using industry-standard workflows (Agile, Jira, Git) and best practices</li>
          </ul>
          <li>Managed WordPress website content for 3 non-profit organizations</li>
          <li>5 years of graphic design experience (Photoshop, InDesign) in the non-profit world</li>
        </ul>
      </div>
      <div class="exp-group">
        <img class="exp-icon" src="../../assets/icons/achievement.png">
        <div class="exp-header-div">
          <h2 class="exp-type-header">Reputation</h2>
        </div>
        <ul>
          <li>Track record of career advancement and meeting organizational objectives</li>
            <ul>
              <li>Helped increase daily active users by 6% as an intern at Seasoned</li>       
              <li>Pioneered a new communications dept. and promoted to full-time status after one year at Starr King School</li>
              <li>Contributed to a 59% fundraising increase and record student enrollment at Starr King School</li>
            </ul>
        </ul>
      </div>
      <div class="github-div">
        <p>As you can see, I'm an active <a href="https://github.com/matt-violet" target="_blank">GitHub</a> user:</p>
        <img class="github-squares" src="../../assets/github-squares.png">
      </div>
    </div>
    <SkillIcons/>
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
  padding-bottom: 75px;
  font-size: 35px;
  font-weight: 400;
  color: white;
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
  margin-bottom: 10px;
}
.stats-div {
  padding: 75px 0;
  position: relative;
  text-align: center;
  background: linear-gradient(to top, rgba(70, 131, 180, 0.719), steelblue);
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
  font-size: 40px;
  font-weight: 300;
  color: white;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
.num-description {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0;
  color: white;
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
  margin: 10px auto 50px auto;
  text-align: center;
}
.exp-type-header {
  font-weight: 400;
  font-size: 25px;
  margin: auto;
}
.github-div {
  padding: 0 25px;
  margin-top: 50px;
}
.github-squares {
  max-width: 600px;
  text-align: center;
  margin: 75px auto 0 auto;
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
    padding: 25px 15px 50px 15px;
  }
  h3 {
    margin-top: 50px;
  }
}
@media (max-width: 630px) {
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
