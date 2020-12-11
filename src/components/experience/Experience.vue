<template>
  <div id="experience">
    <Stats/>
    <div class="inner-content">
      <a class="resume" href="https://docs.google.com/document/d/1EkK-JU6d9mYfXDNS4ks4pi4Ewx--oHHH5t-QoovMlRU/edit?usp=sharing" target="blank">View Resume</a>
      <div class="experience-pages">
        <div class="experience-page" data-aos="zoom-in">
          <img class="exp-icon" src="../../assets/icons/graduation.png">
          <div class="exp-header-div">
            <h2 class="exp-type-header">Education</h2>
          </div>
          <ul>
            <li>University of California, Davis, 2010</li>
            <ul>
              <li>B.A. in Communication</li>
            </ul>
            <li><a href="https://www.hackreactor.com/" target="_blank">Hack Reactor</a>, 2019</li>        
            <ul>
              <li>Top tier Software Engineering Immersive modeling today’s industry</li>
            </ul>
            <li>Online coursework</li>
            <ul>
              <li><a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">The Web Developer Bootcamp</a> (Udemy), 2019</li>
              <li><a href="https://www.udacity.com/course/intro-to-javascript--ud803" target="_blank">Intro to Javascript</a> (Udacity), 2018</li>
            </ul>
          </ul>
        </div>
        <div class="experience-page" data-aos="zoom-in">
          <img class="exp-icon" src="../../assets/icons/suitcase.png">
          <div class="exp-header-div">
            <h2 class="exp-type-header">Career</h2>
          </div>
          <ul>
            <li>2020: <strong>Web Developer</strong> at a startup web agency</li> 
            <li>2019: <strong>Software Engineer Intern</strong> experience at a startup company</li>
            <li>2013-2018: marketing and communications for 3 non-profit organizations</li>
            <ul>
              <li>Managed <strong>WordPress</strong> websites</li>
              <li>Implemented strategic campaigns</li>
              <li>Created content (photos, videos, flyer, web pages)</li>
            </ul>
          </ul>
        </div>
        <div class="experience-page" data-aos="zoom-in">
          <img class="exp-icon" src="../../assets/icons/achievement.png">
          <div class="exp-header-div">
            <h2 class="exp-type-header">Reputation</h2>
          </div>
          <ul>
            <li>Track record of producing tangible results</li>
            <ul>
              <li>Helped <strong>increase daily active users</strong> by 6% as a Software Engineer Intern</li>       
              <li><strong>Promoted to full-time</strong> after first year leading a new department at Starr King School</li>
              <li>Contributed to a <strong>59% fundraising increase</strong> and record student enrollment at Starr King School</li>
            </ul>
          </ul>
        </div>
      </div>
      <div class="github-div">
        <p>My experience includes industry-standard tools and methodologies like Agile, Jira, Git, and <a class="github-link" href="https://github.com/matt-violet" target="_blank">GitHub</a>.</p>
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
  margin: 0 auto;
}
.resume {
  color: lightsalmon;
  display: block;
  margin-bottom: 50px;
}
.experience-pages {
  display: flex;
  align-items: stretch;
  justify-content: center;
}
.experience-page {
  flex-basis: 350px;
  text-align: left;
  margin: 0 40px;
  padding: 50px 20px 20px 20px;
  background: white;
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
  font-size: 28px;
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
@media (max-width: 1300px) {
  .experience-page {
    margin: 0 20px;
    padding: 40px 10px 10px 10px;
  }
  .exp-header-div {
    margin: 10px auto 30px auto;
  }
  .exp-type-header {
    font-size: 24px;
  }
  li {
    font-size: 14px;
  }
}
@media (max-width: 950px) {
  .experience-pages {
    flex-direction: column;

  }
  .experience-page {
    max-width: 400px;
    margin: 25px auto;
    padding: 50px 25px 25px 25px;
    display: block;
  }
  .exp-type-header {
    margin: 10px auto 50px auto;
  }
  .exp-type-header {
    font-size: 28px;
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
@media (max-width: 639px) {
  .resume {
    margin-bottom: 10px;
  }
}
@media (max-width: 400px) {
  li {
    font-size: 14px;
  }
  .experience-page {
    padding: 40px 5px 5px 5px;
  }
}
</style>
