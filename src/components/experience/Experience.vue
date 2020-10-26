<template>
  <div id="experience">
    <Stats/>
    <div class="inner-content">
      <div class="exp-group" data-aos="zoom-in">
        <img class="exp-icon" src="../../assets/icons/graduation.png">
        <div class="exp-header-div">
          <h2 class="exp-type-header">Academics</h2>
        </div>
        <ul>
          <li>University of California, Davis, 2010</li>
          <ul>
            <li>B.A. in Communication</li>
          </ul>
          <li><a href="https://www.hackreactor.com/" target="_blank">Hack Reactor</a>, 2019</li>        
          <ul>
            <li>Top tier Software Engineering Immersive (bootcamp) modeling today’s industry</li>
          </ul>
          <li>Online learning</li>
          <ul>
            <li><a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">The Web Developer Bootcamp</a> (Udemy), 2019</li>
            <li><a href="https://www.udacity.com/course/intro-to-javascript--ud803" target="_blank">Intro to Javascript</a> (Udacity), 2018</li>
          </ul>
        </ul>
      </div>
      <div class="exp-group" data-aos="zoom-in">
        <img class="exp-icon" src="../../assets/icons/suitcase.png">
        <div class="exp-header-div">
          <h2 class="exp-type-header">Career</h2>
        </div>
        <ul>
          <li>Currently working as a Web Developer at a startup web agency</li> 
          <li>Worked as a Software Engineer Intern at a startup company</li>
          <li>Managed WordPress websites, SEO, and strategic communication for 3 non-profit organizations</li>
          <li>5 years of graphic design experience in the non-profit world (custom graphics, flyers, banners, etc.)</li>
        </ul>
      </div>
      <div class="exp-group" data-aos="zoom-in">
        <img class="exp-icon" src="../../assets/icons/achievement.png">
        <div class="exp-header-div">
          <h2 class="exp-type-header">Reputation</h2>
        </div>
        <ul>
          <li>10 years of career advancement and meeting organizational objectives</li>
          <ul>
            <li>Helped <strong>increase daily active users</strong> by 6% as a Software Engineer Intern</li>       
            <li><strong>Promoted to full-time</strong> after first year leading a new department at Starr King School</li>
            <li>Contributed to a <strong>59% fundraising increase</strong> and record student enrollment at Starr King School</li>
          </ul>
        </ul>
      </div>
      <div class="github-div">
        <p>My experience includes industry-standard tools and methodologies like Agile, Jira, Git, and <a class="github-link" href="https://github.com/matt-violet" target="_blank">GitHub</a>.</p>
        <img class="github-squares" src="../../assets/github-squares.png" data-aos="zoom-in">
      </div>
    </div>
  </div>
</template>

<script>
import Stats from './Stats.vue'
export default {
  name: 'Experience',
  components: {
    Stats
  }
}
</script>

<style scoped>
#experience {
  background: var(--dark-blue);
}
ul {
  transform: translateX(-10px);
}
li {
  color: var(--body-text);
  font-size: 16px;
  margin-bottom: 10px;
}
p {
  color: white;
}
.inner-content {
  text-align: center;
  padding: 0 0 75px 0;
  max-width: 1300px;
  margin: 0 auto;
}
.exp-group {
  display: inline-block;
  text-align: left;
  width: 335px;
  height: 440px;
  margin: 0 30px;
  padding: 50px 10px 25px 10px;
  vertical-align: top;
  background: var(--light-grey);
  border-radius: 5px;
  box-shadow: 1px 2px 8px 0px rgb(53, 53, 53);
  transition: .3s;
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
  margin-top: 75px;
}
.github-squares {
  max-width: 550px;
  text-align: center;
  margin: 50px auto 0 auto;
  width: 100%;
  box-shadow: 1px 2px 8px 0px rgb(53, 53, 53);
}
.github-text {
  position: absolute;
}
.github-link {
  color: lightsalmon;
}
@media (max-width: 1250px) {
  .exp-group {
    width: 250px;
    height: 420px;
    margin: 0 20px;
    padding: 30px 10px 25px 10px;
  }
  .exp-header-div {
    margin: 10px auto 30px auto;
  }
  .exp-type-header {
    font-size: 20px;
  }
  li {
    font-size: 14px;
  }
}
@media (max-width: 950px) {
  .exp-group {
    width: auto;
    max-width: 400px;
    height: auto;
    margin: 50px auto;
    padding: 50px 10px 25px 10px;
    display: block;
  }
  .exp-type-header {
    margin: 10px auto 50px auto;
  }
  .exp-type-header {
    font-size: 25px;
  }
  li {
    font-size: 16px;
  }
}
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 25px 20px 50px 20px;
  }
}
</style>
