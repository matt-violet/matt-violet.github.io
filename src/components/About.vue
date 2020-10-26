<template>
  <div id="about">
    <img class="img-block" src="../assets/matt-sksm.png">
    <div class="left-text">
      <div class="header">
        <h1>About</h1>
      </div>
      <p>I'm a converted software engineer with professional roots in non-profit communications.</p>
      <p>Over the last few years I've transformed my career, leaving the comfort of my non-profit role in pursuit of a technical skill set. I immersed myself in a rigorous coding bootcamp, landed an internship at a startup company, and grew into a full stack developer role at a web agency. In the process I've done increasingly complex <a v-on:click="$emit('scrollToSec', 'work')">work</a>, shipped quality code regularly, and gained proficiency with industry-standard technologies (React, Vue, Node), workflows (Agile, Jira, Git), and best practices.</p>
      <p>Although my career has shifted, I still love what I do. My interest in programming comes from my experience using electronic medical devices (AKA my "<a href='https://drive.google.com/file/d/1D8tp35PoCCbMzuWLTPHFI5oGN7nFhIQ1/view?usp=sharing' target='_blank'>artificial pancreas</a>") as a type one diabetic. Since my health became linked to algorithms, I've invested myself in learning how these life-changing devices work and building apps with the potential to help others.</p>
      <p>Away from the keyboard I enjoy barbecuing, making music, and watching sports in my hometown of Oakland, CA.</p>
    </div>
    <div class="img-div">
      <div class="gradient"/>
      <img class="img" src="../assets/matt-sksm.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    scrollToSec: {type: Function }
  }
}
</script>

<style scoped>
#about {
  position: relative;
  text-align: right;
}
h1 {
  font-size: 35px;
  font-weight: 900;
  margin: 0 0 50px 0;
}
.img-block {
  display: none;
}
.header {
  width: 100%;
  text-align: center;
}
.left-text {
  text-align: left;
  width: 40%;
  font-weight: 300;
  padding: 75px 0 0 75px;
  z-index: 2;
  position: absolute;
  transition: .3s;
}
.img-div {
  max-width: 1300px;
  position: relative;
  margin: 0 0 0 auto;
}
.img {
  display: block;
  width: 100%;
  z-index: 0;
  margin: 0 0 0 auto;
}
.gradient {
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  background: linear-gradient(to right, white, rgba(0, 0, 0, 0) 66%);
}
@media (min-width: 1400px) {
  .left-text {
    padding: 75px 0 0 12%;
    max-width: 600px;
  }
}
@media (max-width: 1200px) {
  .left-text {
    width: 45%;
    padding: 50px 0 0 50px;
    font-size: 14px;
  }
  h1 {
    margin-bottom: 30px;
  }
}
@media (max-width: 1000px) {
  h1 {
    margin-bottom: 20px;
  }
  .left-text {
    width: 45%;
    padding: 25px;
    font-size: 13px;
  }
}
@media (max-width: 900px) {
  h1 {
    margin-bottom: 50px;
  }
  p {
    max-width: 550px;
    margin: 16px auto;
  }
  .left-text {
    position: relative;
    font-size: 16px;
    padding: 75px;
    width: auto;
    color: var(--body-text);
  }
  .img, .gradient {
    display: none;
  }
  .img-block {
    display: block;
    width: 100%;
  }
}
@media (max-width: 700px) {
  h1 {
    margin: 45px 0 50px 0;
  }
  .left-text {
    padding: 30px 15px;
  }
}
</style>
