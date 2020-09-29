<template>
  <div id="about">
    <div class="header">
      <h1>ABOUT</h1>
    </div>
    <div class="inner-content">
      <div class="photo-div" id="photo-div" :style="{ 'background-image': 'url(' + image[index] + ')' }">
        <p class="photo-text">My interest in coding comes from my insulin pump and continuous glucose monitor, AKA my "artificial pancreas".</p>
      </div>
      <div class="about-text-div">
        <p>I'm a rising software engineer, recent intern, and proud graduate of Hack Reactor’s Advanced Software Engineering Immersive program.</p>
        <p>Over the last couple years I have transformed my career, leaving the comfort of my non-profit role in pursuit of a technical skill set, immersing myself in advanced courses, and landing an internship at a startup company. In the process I've done increasingly complex <a v-on:click="$emit('nav', 'work')">work</a> and gained proficiency with industry-standard technologies (React, Vue, Node), workflows (Agile, Jira, Git), and best practices.</p>
        <p>Although my career has taken some twists and turns, my heart is still in everything I do. My passion for programming comes from my lived experience as a type one diabetic using electronic medical devices (AKA my "<a href='https://drive.google.com/file/d/1D8tp35PoCCbMzuWLTPHFI5oGN7nFhIQ1/view?usp=sharing' target='_blank'>artificial pancreas</a>"). Since my health became linked to algorithms, I've invested myself in learning how these life-changing devices work and building apps with the potential to help others.</p>
        <p>When I'm not rambling about diabetes technology, I can be found hiking, making music, or watching sports in my hometown of Oakland, CA.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { aboutImgs } from "../../data.js";

export default {
  name: 'About',
  props: {
    nav: {type: Function }
  },
  data() {
    return {
      index: 0,
      image: aboutImgs
    }
  },
  mounted() {
      setInterval(() => {
        this.index < 1 ? this.index++ : this.index = 0;
      }, 5000);
  }
}
</script>

<style scoped>
h1 {
  padding: 25px 75px;
  font-size: 45px;
  font-weight: 500;
  color: white;
  background: linear-gradient(to top, coral, lightsalmon);
  margin: 0;
}
p {
  margin-top: 0;
  font-weight: 400;
  color: var(--body-text);
}
strong {
  font-weight: 900;
}
#about {
  background: white;
  width: 100%;
}
.header {
  width: 100%;
  text-align: center;
}
.inner-content {
  padding: 75px;
  max-width: 800px;
  margin: auto;
}
.photo-div {
  width: 260px;
  height: 319px;
  float: left;
  margin: 0 20px 0px 0;
  overflow: hidden;
  border-radius: 5px;
  transition: .3s;
  background-size: cover;
}
.photo-div:hover .photo-text {
  opacity: .9;
  transition: .3s;
}
.photo-text {
  opacity: 0;
  width: 220px;
  height: 100%;
  margin: 0;
  top: 10;
  padding: 45% 20px 0px 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: rgba(70, 131, 180, 0.9);
}
.about-text-div {
  vertical-align: top;
  font-size: 16px;
}
@media (max-width: 1100px) {
  .about-text-div {
    font-size: 16px;
  }
}
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
  .photo-div {
    width: 180px;
    height: 220px;
  }
  .photo-text {
    width: 160px;
    font-size: 14px;
    padding: 40% 10px 0px 10px;
  }
}
</style>
