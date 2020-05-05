<template>
  <div id="design-work-details">
    <div class="close-btn-div">
      <img class="close-btn" src="../../../assets/icons/close.png" v-on:click="$emit('nav', 'design-bg-div')">
    </div>
    <p class="details">{{ project.details }}</p>
    <div class="track">
      <img class="left arrow" src="../../../assets/icons/left-arrow.png" v-on:click="$emit('handlePreviousProject', project)">
      <div class="img-div" data-aos="zoom-in">
        <img class="img" v-for="(image, i) of project.images" :key="i" :src="image">
      </div>
      <img class="right arrow" src="../../../assets/icons/right-arrow.png" v-on:click="$emit('handleNextProject', project)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignWorkDetails',
  props: {
    nav: {type: Function},
    project: {type: Object},
    handleNextProject: {type: Function},
    handlePreviousProject: {type: Function}
  }
}
</script>

<style scoped>
#design-work-details {
  background: white;
  text-align: center;
  margin-left: 300px;
  padding-bottom: 25px;
  min-height: 100%;
  text-align: center;
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
.details {
  padding: 0 20px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 0;
}
.track {
  position: relative;
}
.arrow {
  width: 40px;
  top: 200px;
  position: absolute;
  display: inline-block;
}
.arrow:hover {
  cursor: pointer;
}
.left {
  transform: translateX(-75px); 
}
.right {
  transform: translateX(35px);
}
.img-div {
  width: 60%;
  margin: auto;
  display: inline-block;
}
.img {
  max-height: 1500px;
  max-width: 100%;
  margin: 10px auto 50px auto;
  -webkit-filter: drop-shadow(1px 2px 8px rgb(107, 107, 107));
  filter: drop-shadow(1px 2px 8px rgb(107, 107, 107));
}
@media (max-width: 1000px) {
  #design-work-details {
    margin: 0;
  }
  .close-btn {
    margin-top: 70px;
  }
}
@media (max-width: 650px) {
  .arrow {
    width: 30px;
  }
}
</style>
