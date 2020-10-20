<template>
  <div id="about">
    <div class="img-div">
      <div class="gradient"/>
      <img src="../assets/matt-sksm.png" class="img">
    </div>
    <div class="left">
      <div class="about-text-div">
        <div class="header">
          <h1>About</h1>
        </div>
        <p>I'm a converted software engineer with hands-on experience, formal education, and professional roots in non-profit communications.</p>
        <p>Over the last couple years I've transformed my career, leaving the comfort of my non-profit role in pursuit of a technical skill set, immersing myself in a rigorous coding bootcamp, and landing an internship at a startup company. In the process I've done increasingly complex <a v-on:click="$emit('scrollToSec', 'work')">work</a>, shipped my own code, and gained proficiency with industry-standard technologies (React, Vue, Node), workflows (Agile, Jira, Git), and best practices.</p>
        <p>Although my career has shifted, my heart is still in everything I do. My interest in programming comes from my experience using electronic medical devices (AKA my "<a href='https://drive.google.com/file/d/1D8tp35PoCCbMzuWLTPHFI5oGN7nFhIQ1/view?usp=sharing' target='_blank'>artificial pancreas</a>") as a type one diabetic. Since my health became linked to algorithms, I've invested myself in learning how these life-changing devices work and building apps with the potential to help others.</p>
        <p>Away from the keyboard I enjoy hiking, making music, and watching sports in my hometown of Oakland, CA.</p>
      </div>
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
}
h1 {
  font-size: 35px;
  font-weight: 300;
  margin: 0 0 75px 0;
}
p {
  margin-top: 0;
  font-weight: 300;
  /* color: white; */
  /* color: var(--body-text); */
}
strong {
  font-weight: 900;
}
.header {
  width: 100%;
  text-align: center;
}
.left {
  width: 40%;
  padding: 75px;
  position: absolute;
}
.about-text-div {
  font-size: 16px;
}
.img-div {
  border: 1px solid;
  margin: 0;
  padding: 0;
  position: absolute;
}
.img {
  width: 100%;
  /* position: relative; */
}
.gradient {
  /* width: 100%; */
  /* height: 100%; */
  /* position: absolute; */
  background: linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
}

@media (min-width: 1400px) {
  .about-text-div {
    font-size: 20px;
  }
}
@media (max-width: 1200px) {
  .left {
    padding: 50px;
  }
  h1 {
    margin-bottom: 50px;
  }
  .about-text-div {
    font-size: 14px;
  }
}
@media (max-width: 1000px) {
  .img-div {
    /* display: block; */
  }
  .left {
    /* position: relative; */
  }
}
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
}
</style>
