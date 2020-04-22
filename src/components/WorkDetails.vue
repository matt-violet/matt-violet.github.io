<template>
  <div id="work-details">
    <div class="close-btn-div">
      <img class="close-btn" src="../assets/icons/close.png" v-on:click="$emit('nav', 'work')">
    </div>
    <p class="title">{{ project.title }}</p>
    <p class="description">{{ project.description }}</p>
    <div class="video-div">  
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
    <div class="text-div">
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
</template>

<script>
export default {
  name: 'WorkDetails',
  props: {
    project: {type: Object},
    nav: {type: Function}
  }
}
</script>

<style scoped>
#work-details {
  background: white;
  text-align: center;
  margin-left: 300px;
  padding-bottom: 25px;
}
p {
  margin: 0;
}
.close-btn-div {
  text-align: left;
}
.close-btn {
  padding: 25px;
  width: 20px;
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
  box-shadow: 1px 2px 8px 0px grey;
}
.video, .img {
  border-radius: 5px;
}
.img {
  min-width: 560px;
  min-height: 315px;
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
  font-size: 16px;
  margin-bottom: 30px;
}
.details-div {
  text-align: left;
}
.details {
  margin-bottom: 30px;
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
</style>
