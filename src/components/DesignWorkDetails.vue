<template>
  <div id="design-work-details">
    <div class="close-btn-div">
      <img class="close-btn" src="../assets/icons/close.png" v-on:click="$emit('nav', 'design-bg-div')">
    </div>
    <div class="img-div" data-aos="zoom-in">
      <img class="img" :src="project.image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignWorkDetails',
  props: {
    nav: {type: Function},
    project: {type: Object} 
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
.img-div {
  max-width: 70%;
  margin: auto;
}
.img {
  max-height: 1500px;
  max-width: 100%;
  -webkit-filter: drop-shadow(1px 2px 8px rgb(107, 107, 107));
  filter: drop-shadow(1px 2px 8px rgb(107, 107, 107));
}
</style>
