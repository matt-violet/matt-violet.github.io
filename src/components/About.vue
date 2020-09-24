<template>
  <div id="about">
    <div class="header">
      <h1>ABOUT</h1>
    </div>
    <div class="inner-content">
      <div class="photo-div" id="photo-div" :style="{ 'background-image': 'url(' + image[index] + ')' }">
        <p class="photo-text">My interest in coding was sparked by my insulin pump and blood sugar sensor, AKA my "artificial pancreas".</p>
      </div>
      <div class="about-text-div">
        <p>I'm a full-stack developer with roots in the non-profit world. I enjoy wrestling with tough challenges, implementing elegant solutions, and learning the latest technologies.</p>
        <p>My passion for programming comes from personal experience, as a type 1 diabetic who relies on an "<a href='https://drive.google.com/file/d/1D8tp35PoCCbMzuWLTPHFI5oGN7nFhIQ1/view?usp=sharing' target='_blank'>artificial pancreas</a>" to manage his blood sugar. With my daily health literally connected to algorithms, I turned my condition into my inspiration and invested myself in learning to develop tools with the power to help others.</p>
        <p>When not writing asynchronous functions, scaling databases, or accessing web APIs, I can be found hiking, making music, or watching sports in my hometown of Oakland, CA.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { aboutImgs } from "../../data.js";

export default {
  name: 'About',
  data() {
    return {
      index: 0,
      image: aboutImgs
    }
  },
  mounted() {
      setInterval(() => {
        this.index === 0 ? this.index++ : this.index = 0;
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
  max-width: 600px;
  margin: auto;
}
.photo-div {
  width: 260px;
  height: 319px;
  float: left;
  margin: 0 20px 0px 0;
  overflow: hidden;
  border-radius: 5px;
  transition: .5s;
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
