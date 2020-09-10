<template>
  <div id="education">
    <h1>EDUCATION</h1>
    <div class="inner-content">
      <div class="school-section" data-aos="zoom-in">
        <p class="school-name">Hack Reactor at Galvanize, SF</p>
        <p class="school-details"><a href="https://www.hackreactor.com/" target="_blank">Advanced Software Engineering Immersive Program</a></p>
        <p class="school-details">April 2019 - July 2019</p>
      </div>
      <div class="school-section" data-aos="zoom-in">
        <p class="school-name">Online Courses</p>
        <p class="school-details"><a href="https://www.udacity.com/course/intro-to-javascript--ud803" target="_blank">Intro to Javascript</a> (Udacity, 2018)</p>
        <p class="school-details"><a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">The Web Developer Bootcamp</a> (Udemy, 2019)</p>
      </div>
      <div class="school-section-last" data-aos="zoom-in">
        <p class="school-name">University of California, Davis</p>
        <p class="school-details">Bachelor of Arts in Communication</p>
        <p class="school-details">Minor in Sociology</p>
        <p class="school-details">2006 - 2010</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
#education {
  background: white;
  overflow: hidden;
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
.school-details {
  color: grey;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 2px 0;
}
.school-section, .school-section-last {
  width: 450px;
  display: block;
  padding: 20px;
  margin-bottom: 40px;
  border-radius: 5px;
  background: rgb(238, 238, 238);
}
.school-section-last {
  margin-bottom: 0;
}
.school-name {
  font-size: 22px;
  font-weight: 900;
  color: black;
  margin: 0 0 5px 0;
}
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
}
@media (max-width: 700px) {
  .school-section, .school-section-last {
    width: 400px;
  }
  .school-section {
    margin-bottom: 25px;
  }
  .school-name {
    font-size: 18px;
  }
  .school-details {
    font-size: 14px;
  }
}
@media (max-width: 480px) {
  .school-section, .school-section-last {
    width: auto;
  }
}
@media (max-width: 415px) {
  .school-name {
    font-size: 16px;
  }
  .school-details {
    font-size: 12px;
  }
}
</style>
