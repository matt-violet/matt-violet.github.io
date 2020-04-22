<template>
  <div id="about">
    <h1>ABOUT</h1>
    <div class="photo-div">
      <div class="hover-text-div">
        <p class="hover-text">That's an insulin pump and blood glucose sensor. Together they create a continuous glucose monitoring (CGM) system, AKA an "artificial pancreas".</p>
      </div>
      <img class="photo" src="../assets/showing-pump.jpg">
    </div>
    <div class="text">
      <p><strong>Honestly, I never thought I'd become a software developer,</strong> but now I can't see myself doing anything else.</p>
      <p>Throughout my career I've sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns — from tutoring students of underserved schools in East Oakland, to empowering Burmese migrant communities in Thailand, to establishing a new communications department for a social justice non-profit in Berkeley — <strong>I've always followed my passion</strong> to help others and solve problems.</p>
      <p>My passion for programming comes from the role software plays in my personal health, as a <strong>self-identified <a href='https://drive.google.com/file/d/1D8tp35PoCCbMzuWLTPHFI5oGN7nFhIQ1/view?usp=sharing' target='_blank'>human cyborg</a></strong> who has used an <strong>"artificial pancreas"</strong> to manage his type one diabetes since 2016. With my daily well-being now literally tied to algorithms, I'm invested in learning and developing applications that have the potential to help others as much as these devices have helped me.</p>
      <p>When not coding I can be found DJing, making Photoshop creations, and social distancing in my hometown of Oakland, CA.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
#about {
  background: white;
  padding: 75px;
}
h1 {
  width: 100%;
  color: steelblue;
  margin-top: 0;
  border-bottom: 1px solid lightgrey;
}
strong {
  font-weight: 900;
}
.photo-div {
  width: 300px;
  border-radius: 5px;
  display: inline-block;
  overflow: hidden;
  box-shadow: 1px 2px 8px 0px grey;
}
.photo {
  width: 100%;
  height: 100%;
  display: block;
}
.text {
  margin: 0 75px 0 20px;
  position: absolute;
  display: inline-block;
  font-size: 16px;
}
.hover-text-div {
  position: absolute;
  opacity: 0;
  padding: 10px;
  border-radius: 5px;
  background: rgba(48, 48, 48);
  width: 280px;
  height: 349.375px;
}
.hover-text {
  margin-top: 45%;
  font-size: 16px;
  font-weight: 500;
  color: white;
  position: relative;
  top: 10;
}
.hover-text-div:hover {
  opacity: .9;
  transition: .5s;
}
</style>
