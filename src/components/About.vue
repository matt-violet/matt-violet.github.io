<template>
  <div id="about">
    <h1>ABOUT</h1>
    <div class="inner-content">
      <div class="bg-div">
        
        <div class="photo-div">
          <p class="photo-text">
            That's an insulin pump and blood glucose sensor. Together they create a continuous glucose monitoring (CGM) system, AKA an "artificial pancreas".
          </p>
        </div>
        
        <div class="about-text-div">
          <p><strong>I never could have anticipated my journey into software development,</strong> but now I can't see myself doing anything else.</p>
          <p>Although my professional path has taken many twists and turns — from tutoring students of East Oakland's underserved schools, to empowering Burmese migrants in Thailand, to establishing a new communications department for an activist non-profit in Berkeley — <strong>I've always followed my passion</strong> to help others and solve problems.</p>
          <p>My passion for programming comes from the role software plays in my personal health, as a <strong>self-identified <a href='https://drive.google.com/file/d/1D8tp35PoCCbMzuWLTPHFI5oGN7nFhIQ1/view?usp=sharing' target='_blank'>human cyborg</a></strong> who has used an <strong>"artificial pancreas"</strong> to manage his type one diabetes since 2016. With my daily well-being now literally tied to algorithms, I'm invested in learning and developing applications that have the potential to help others as much as these devices have helped me.</p>
          <p>When not coding I can be found DJing, making Photoshop creations, and social distancing in my hometown of Oakland, CA.</p>
        </div>
      
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
  padding: 30px 75px;
  font-size: 50px;
  font-weight: 500;
  color: black;
  background: lightsalmon;
  margin: 0;
  border-bottom: 1px solid lightgrey;
}
p {
  margin-top: 0;
  font-weight: 300;
}
strong {
  font-weight: 900;
}
#about {
  background: white;
}
.inner-content {
  padding: 75px;
}
.bg-div {
  padding: 30px 30px 16px 30px;
  background: rgb(238, 238, 238);
  border-radius: 5px;
  margin: 0 10px 10px 0;
  overflow: hidden;
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
    font-size: 14px;
  }
}
</style>
