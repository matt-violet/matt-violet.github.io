<template>
  <div id="work-details">
    <div class="inner-content">
      <div class="close-btn-div">
        <img class="close-btn" src="../../assets/icons/close.png" v-on:click="$emit('nav', 'work')">
      </div>
      <p class="title" data-aos="zoom-in">{{ project.title }}</p>
      <p class="description" data-aos="zoom-in">{{ project.description }}</p>
      
       <div class="track">
        <img class="left arrow" src="../../assets/icons/left-arrow.png" v-on:click="$emit('handlePreviousProject', project)">

        <div class="video-div" data-aos="zoom-in">  
          <iframe 
            class="video" 
            v-if='project.title!=="Social Inn" && project.title!=="Segment Events" && project.title!=="Internal Tool"' 
            width="560px" 
            height="315px" 
            :src="project.video" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
          <img v-else class='img' width="660" height="415" :src='project.video'>
        </div>
      
        <img class="right arrow" src="../../assets/icons/right-arrow.png" v-on:click="$emit('handleNextProject', project)">
      </div>

      <div class="text-div" data-aos="zoom-in">
        <div class="details-div">
          <p class="details">{{ project.details }}</p>
          <p class="stack" v-for="(stack, i) of project.stack" :key="i">{{ stack }}</p>
          <div class="github-div">
            <a v-if='project.github.length !== 2' class='github-link' :href="project.github" target="_blank">GitHub Repository</a>
            <a v-else v-for='link of project.github' v-bind:key="link" class='github-link-2' :href="link.link" target="_blank">{{link.repo}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoftwareWorkDetails',
  props: {
    project: {type: Object},
    nav: {type: Function},
    handleNextProject: {type: Function},
    handlePreviousProject: {type: Function}
  }
}
</script>

<style scoped>
#work-details {
  background: white;
  text-align: center;
  margin-left: 300px;
  padding-bottom: 25px;
  min-height: 100%;
}
p {
  margin: 0;
}
a {
  font-weight: 500;
}
.close-btn-div {
  text-align: left;
}
.close-btn {
  padding: 25px;
  width: 25px;
  left: 0;
  transition: .3s ease;
}
.close-btn:hover {
  cursor: pointer;
  transform: rotate(90deg);
}
.video-div {
  margin: 10px auto 30px auto;
  text-align: center;
  overflow: hidden;
  width: 560px;
  height: 315px;
  border-radius: 5px;
  box-shadow: 1px 2px 8px 0px grey;
}
.img {
  width: 560px;
  height: 315px;
}
.text-div {
  width: 560px;
  margin: 0 auto;
}
.title {
  margin: 0 auto;
  font-size: 40px;
  font-weight: 700;
}
.description {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 30px;
  color: grey;
}
.track {
  position: relative;
}
.arrow {
  width: 40px;
  top: 140px;
  position: absolute;
  display: inline-block;
}
.arrow:hover {
  cursor: pointer;
}
.left {
  transform: translateX(-345px); 
}
.right {
  transform: translateX(305px);
}
.details-div {
  text-align: left;
}
.details {
  margin-bottom: 30px;
  color: grey;
  font-weight: 400;
}
.stack {
  display: inline-block;
  padding: 3px 8px;
  background: rgb(70, 130, 180, .8);
  color: white;
  border-radius: 20px;
  margin: 0 8px 8px 0;
}
.github-div {
  margin-top: 22px;
}
.github-link-2 {
  display: block;
  margin-top: 10px;
}
@media (max-width: 1000px) {
  #work-details {
    margin-left: 0;
  }
  .close-btn {
    margin-top: 70px;
  }
}
</style>
