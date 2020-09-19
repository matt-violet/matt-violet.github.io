<template>
  <div id="about">
    <h1>ABOUT</h1>
    <div class="inner-content">
      <div class="photo-div" data-aos="fade-right">
        <p class="photo-text">That's my insulin pump and blood sugar sensor. Together they create a continuous glucose monitoring (CGM) system, AKA an "artificial pancreas".</p>
      </div>
      <div class="about-text-div">
        <p>Two years ago <strong>I could not have anticipated</strong> writing asynchronous functions, scaling databases, or accessing open APIs, but now I can’t see myself doing any other work.</p>
        <p>Although my career has taken some twists and turns - from tutoring youth of East Oakland, to empowering Burmese migrants in Thailand, to establishing a new communications department for a progressive non-profit - <strong>I’ve always followed my passion</strong>, produced tangible results, and earned the respect of others.</p>
        <p>My passion for programming comes from appreciating the role it plays in my daily health, as a person with type 1 diabetes who's used an "<a href='https://drive.google.com/file/d/1D8tp35PoCCbMzuWLTPHFI5oGN7nFhIQ1/view?usp=sharing' target='_blank'>artificial pancreas</a>" to manage his blood sugar since 2016. With my well-being tied to algorithms (literally), I've invested myself in learning and developing applications that have the potential to help others as much as my medical devices have helped me.</p>
        <p>When not coding I can be found hiking, making music, or watching a game in my hometown of Oakland, CA.</p>
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
  font-weight: 600;
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
.inner-content {
  padding: 75px;
  max-width: 1000px;
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
  font-size: 18px;
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
