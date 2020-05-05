<template>
  <div id="skills">
    <h1>SKILLS</h1>
    <div class="inner-content">
      <p>Over the last couple years, I have taken a deep dive into the world of software engineering.</p>
      <p>I began by teaching myself basic skills like HTML, CSS, and vanilla JavaScript. Then I decided to focus on my learning full-time, completing <strong>over 1,000 hours</strong> of advanced computer science curriculum modeling today's software engineering industry. Most recently, I gained invaluable <strong>hands-on experience as an intern</strong> working in a professional codebase at <a href="https://www.seasoned.co/" target="blank">Seasoned</a>.
      <p>Though I have encountered plenty of challenges, I'm validated by my accomplishments and remain committed to learning and pushing myself to the next level at all times.
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
      <p>I'm also active on GitHub:</p>
      <div class="github-div">
        <img class="github-squares" src="../../assets/github-squares.png">
      </div>
      <p>My favorite tools right now are React, Vue, Express, MongoDB, PostgreSQL, and Node. But I have experience with all of the following:</p>
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
#skills {
  background: white;
}
.inner-content {
  padding: 59px 75px 75px 75px;
  max-width: 1000px;
  margin: auto;
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
  margin: 40px 0;
  position: relative;
  text-align: center;
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
  font-weight: 400;
  color: steelblue;
}
.num-description {
  font-size: 15px;
  font-weight: 500;
  color: steelblue;
}
.github-div {
  width: 100%;
  text-align: center;
  margin: 45px auto 40px auto;
}
.github-squares {
  width: 75%;
}
/* ---------------------------- STATS RESIZING ---------------------------- */
@media (max-width: 1250px) {
  .stat {
    width: 120px;
  }
  .num {
    font-size: 35px;
    font-weight: 500;
  }
  .num-description {
    font-size: 13px;
  }
}
@media (max-width: 1090px) {
  .stat {
    width: 100px;
    margin: 15px;
  }
  .num {
    font-size: 30px;
    font-weight: 500;
  }
}
/* ---------------------------- PADDING RESIZING ---------------------------- */
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
}
</style>
