<template>
  <div id="about">
    <div class="header">
      <h1>ABOUT</h1>
    </div>
    <div class="inner-content">
      <div class="photo-div" data-aos="fade-right">
        <p class="photo-text">That's my insulin pump and blood sugar sensor, AKA my "artificial pancreas", which sparked my interest in coding.</p>
      </div>
      <div class="about-text-div">
        <p>I'm a full-stack developer currently exploring new employment opportunities. I enjoy wrestling with tough challenges, implementing elegant solutions, and learning the latest technologies.</p>
        <p>My passion for programming comes from personal experience, as a person with type 1 diabetes who relies on an "<a href='https://drive.google.com/file/d/1D8tp35PoCCbMzuWLTPHFI5oGN7nFhIQ1/view?usp=sharing' target='_blank'>artificial pancreas</a>" to manage his blood sugar. With my daily health literally connected to algorithms, I turned my condition into my inspiration and invested myself in learning to develop tools with the power to help others.</p>
        <p>
        <p>When not writing asynchronous functions, scaling databases, or accessing web APIs, I can be found hiking, making music, or watching sports in my hometown of Oakland, CA.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
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
  color: grey;
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
  background-image: url('../assets/showing-pump.jpg');
  background-size: contain;
  background-repeat: no-repeat;
}
.photo-div:hover .photo-text {
  opacity: .9;
  transition: .5s;
}
.photo-text {
  opacity: 0;
  width: 240px;
  height: 100%;
  margin: 0;
  top: 10;
  padding: 45% 10px 0px 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: white;
  background: rgb(0, 0, 0, .8);
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
    font-size: 12px;
    padding: 40% 10px 0px 10px;
  }
}
</style>
