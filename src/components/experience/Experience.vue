<template>
  <div id="experience">
    <Stats/>
    <div class="inner-content">
      <div class="exp-group">
        <img class="exp-icon" src="../../assets/icons/graduation.png">
        <div class="exp-header-div">
          <h2 class="exp-type-header">Academics</h2>
        </div>
        <ul>
          <li><a href="https://www.hackreactor.com/" target="_blank">Hack Reactor</a>, 2019</li>        
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
          <li>Web Developer at a Hayward startup company, Webbull.co</li> 
          <li>Software Engineer Intern at a San Francisco startup company, <a href="https://www.seasoned.co/" target="blank">Seasoned</a></li>
          <li>Managed WordPress websites for 3 non-profit organizations, including Starr King School</li>
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
            <li>Helped <strong>increase daily active users</strong> by 6% as an intern at Seasoned</li>       
            <li><strong>Promoted to full-time</strong> after first year leading a new communications department at Starr King School</li>
            <li>Contributed to a <strong>59% fundraising increase</strong> and record student enrollment at Starr King School</li>
          </ul>
        </ul>
      </div>
      <div class="github-div">
        <p>I'm a pretty active <a href="https://github.com/matt-violet" target="_blank">GitHub</a> user, too:</p>
        <img class="github-squares" src="../../assets/github-squares.png">
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
  background: var(--light-grey);
}
h3 {
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  margin: 0 auto 50px auto;
}
ul {
  transform: translateX(-10px);
}
li {
  color: var(--body-text);
  font-size: 16px;
  margin-bottom: 10px;
}
.inner-content {
  text-align: center;
  padding: 75px 0;
  max-width: 1200px;
  margin: auto;
}
.exp-group {
  display: inline-block;
  text-align: left;
  width: 28%;
  height: 440px;
  margin: 0 20px;
  padding: 50px 10px 25px 10px;
  vertical-align: top;
  background: white;
  border-radius: 5px;
  box-shadow: 1px 2px 8px 0px grey;
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
  margin-top: 75px;
}
.github-squares {
  max-width: 550px;
  text-align: center;
  margin: 50px auto 0 auto;
  box-shadow: 1px 2px 8px 0px grey;
  width: 100%;
}
.github-text {
  position: absolute;
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