<template>
  <div id="work-details">
    <div class="inner-content">
      <div class="close-btn-div">
        <img class="close-btn" src="../../../assets/icons/close.png" v-on:click="$emit('nav', 'work')">
      </div>
      <div class="track">
        <div class="video-div" v-if="project.video">  
          <iframe  
            class="video" 
            width="560px" 
            height="315px" 
            :src="project.video" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          >
          </iframe>
        </div>
        <div v-else class="img-div">
          <img :class="this.project.title === 'Profile Components' ? 'pc-img' : 'img'" :src="project.image">
        </div>
      </div>
      <div class="text-div">
        <div class="arrow-div">
          <img class="left arrow" src="../../../assets/icons/left-arrow.png" v-on:click="$emit('handlePreviousProject', project)">
          <img class="right arrow" src="../../../assets/icons/right-arrow.png" v-on:click="$emit('handleNextProject', project)">
        </div>
        <div class="details-div">
          <div class="centered">
            <p class="title" data-aos="zoom-in">{{ project.title }}</p>
            <p class="description" data-aos="zoom-in">{{ project.description }}</p>
          </div>
          <p class="stack" v-for="(stack, i) of project.stack" :key="i">{{ stack }}</p>
          <div v-if="project.github && project.github.length" class="github-div">
            <a v-if="project.github && project.github.length !== 2"
              class="github-link"
              :href="project.github"
              target="_blank"
            >
              GitHub Repository
            </a>
            <a v-else v-for="(link, i) of project.github"
              v-bind:key="i"
              class="github-link-2"
              :href="link.link"
              target="_blank"
            >
              {{link.repo}}
            </a>
          </div>
          <p class="details">{{ project.details }}</p>
          <p v-if="project.screenshots && project.screenshots.length" class="screenshot-text">Screenshots:</p>
        </div>
      </div>
      <div v-if="project.screenshots" class="screenshots">
        <img
          class="screenshot"
          v-for="(screenshot, i) of project.screenshots"
          :key="i"
          :src="screenshot"
          data-aos="zoom-in"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SoftwareWorkDetails",
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
  padding-bottom: 25px;
  min-height: 100%;
}
.inner-content {
  width: 560px;
  margin: auto;
  text-align: center;
}
p {
  margin: 0;
  color: var(--body-text);
}
a {
  font-weight: 500;
}
.close-btn-div {
  text-align: left;
}
.close-btn {
  padding: 30px 0;
  width: 25px;
  left: 0;
  transition: .3s ease;
}
.arrow-div {
  position: absolute;
  height: 40px;
  width: 560px;
  clear: both;
}
.arrow {
  width: 35px;
  transform: translateY(20px);
  z-index: 1;
 }
.left {
  float: left;
  position: relative;
}
.right {
  position: relative;
  float: right;
}
.arrow:hover {
  cursor: pointer;
}
.close-btn:hover {
  cursor: pointer;
  transform: rotate(90deg);
}
.video-div, .img-div {
  margin: 0 auto 30px auto;
  text-align: center;
  overflow: hidden;
  width: 560px;
  height: 315px;
  border-radius: 5px;
  box-shadow: 1px 2px 8px 0px grey;
  vertical-align: middle;
}
.img {
  width: 100%;
  min-height: 100%;
}
.pc-img {
  width: 100%;
  transform: translateY(-35px);
}
.text-div {
  width: 560px;
  margin: 0 auto;
}
.centered {
  text-align: center;
}
.title {
  margin: 0 auto;
  font-size: 50px;
  font-weight: 500;
  color: var(--body-text);
}
.description {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
  color: var(--body-text);
}
.track {
  position: relative;
}
.details-div {
  text-align: left;
}
.details {
  margin-top: 20px;
  color: var(--body-text);
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
  margin-top: 10px;
}
.github-link-2 {
  display: block;
  margin-top: 10px;
}
.screenshots {
  width: 560px;
  margin: 50px auto 0 auto;
}
.screenshot-text {
  margin-top: 20px;
  font-size: 20px;
}
.screenshot {
  max-width: 100%;
  max-height: 500px;
  display: block;
  margin: 0 auto 50px auto;
  border-radius: 5px;
  box-shadow: 1px 2px 8px 0px grey;
}
@media (max-width: 1000px) {
  #work-details {
    margin-left: 0;
  }
}
@media (max-width: 700px) {
  .video-div, .img-div, .video {
    height: 225px;
  }
  .inner-content, .video-div, .video, .img-div, .img, .arrow-div, .text-div, .screenshots {
    width: 400px;
  }
  .pc-img {
    transform: translateY(-25px);
  }
  .close-btn {
    width: 22px;
  }
  .arrow {
    width: 25px;
  }
  .text-div {
    font-size: 14px;
  }
  .title {
    font-size: 35px;
  }
  .description {
    font-size: 18px;
  }
}
@media (max-width: 550px) {
  #work-details {
    overflow-x: hidden;
  }
  .video-div, .img-div, .img, .video {
    height: 159px;
  }
  .inner-content, .video-div, .img-div, .img, .video, .arrow-div, .text-div, .screenshots {
    width: 270px;
  }
  .pc-img {
    transform: translateY(-13px);
  }
  .arrow-div {
    transform: translateY(10px);
  }
  .close-btn {
    width: 16px;
  }
  .arrow {
    width: 20px;
  }
  .left {
    transform: translateX(-30px);
  }
  .right {
    transform: translateX(30px);
  }
  .text-div {
    font-size: 14px;
  }
  .title {
  font-size: 28px;
  }
  .description {
    font-size: 16px;
  }
}
</style>
