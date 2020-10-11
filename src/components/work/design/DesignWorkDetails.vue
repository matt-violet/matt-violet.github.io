<template>
  <div id="design-work-details">
    <div class="close-btn-div">
      <img class="close-btn" src="../../../assets/icons/close.png" v-on:click="exitToDesign">
    </div>
    <p class="details">{{ project.details }}</p>
    <div class="track">
      <img class="left arrow" src="../../../assets/icons/left-arrow.png" v-on:click="$store.commit('showPreviousProject', project)">
      <div class="img-div" data-aos="zoom-in">
        <img class="img" v-for="(image, i) of project.images" :key="i" :src="image">
      </div>
      <img class="right arrow" src="../../../assets/icons/right-arrow.png" v-on:click="$store.commit('showNextProject', project)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignWorkDetails',
  methods: {
    exitToDesign() {
      this.$store.state.showDesign = true;
      this.$store.state.showProject = false;
      document.getElementById('work').scrollIntoView({ 
        behavior: 'smooth'
      });
    }
  },
  computed: {
    project: function() {
      return this.$store.state.featuredProject
    }
  }
}
</script>

<style scoped>
#design-work-details {
  background: white;
  text-align: center;
  padding-bottom: 25px;
  min-height: 100%;
  text-align: center;
}
.close-btn-div {
  text-align: left;
}
.close-btn {
  padding: 10px;
  width: 25px;
  left: 0;
  margin: 50px;
  border-radius: 5px;
  background: var(--nav-grey);
}
.close-btn:hover {
  cursor: pointer;
  transition: .3s;
  box-shadow: 1px 2px 8px 0px grey;
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
  width: 25px;
  padding: 10px;
  border-radius: 5px;
  top: 200px;
  position: absolute;
  display: inline-block;
  background: var(--nav-grey);
}
.arrow:hover {
  cursor: pointer;
  box-shadow: 1px 2px 8px 0px grey;
  transition: .3s;
}
.left {
  transform: translateX(-75px); 
}
.right {
  transform: translateX(35px);
}
.img-div {
  width: 60%;
  max-width: 600px;
  margin: auto;
  display: inline-block;
}
.img {
  max-height: 1000px;
  max-width: 100%;
  margin: 10px auto 50px auto;
  -webkit-filter: drop-shadow(1px 2px 8px rgb(107, 107, 107));
  filter: drop-shadow(1px 2px 8px rgb(107, 107, 107));
}
@media (max-width: 1000px) {
  #design-work-details {
    margin: 0;
  }
}
@media (max-width: 650px) {
  .arrow {
    width: 30px;
  }
  .close-btn {
    margin: 10px;
  }
}
</style>
