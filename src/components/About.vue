<template>
  <div id="about">
    <h1>ABOUT</h1>
    <div class="inner-content">
      <div class="bg-div">
        
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
}
.inner-content {
  padding: 75px;
}
.bg-div {
  padding: 30px;
  background: rgb(238, 238, 238);
  border-radius: 5px;
  display: table;
  table-layout: fixed;
  /* width: 100%; */
}
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
  font-size: 14px;
}
strong {
  font-weight: 900;
}
.photo-div {
  width: 300px;
  height: 369.38px;
  overflow: hidden;
  display:table-cell;
  border-radius: 5px;
}
.photo {
  border-radius: 5px;
  box-shadow: 1px 2px 8px 0px grey;
  width: 300px;
  display: block;
}
.text {
  vertical-align: top;
  width: 100%;
  padding: 0 20px;
  display: inline-block;
  font-size: 16px;
  display:table-cell;
}
.hover-text-div {
  position: absolute;
  opacity: 0;
  padding: 30px;
  border-radius: 5px;
  background: rgba(48, 48, 48);
  width: 240px;
  height: 309.375px;
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
