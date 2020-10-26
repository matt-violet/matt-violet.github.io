<template>
  <div id="design-work-details">
    <div class="inner-content">
      <div class="close-btn-div">
        <img class="close-btn" src="../../../assets/icons/close.png" v-on:click="$store.commit('exitToWork')">
      </div>
      <p class="details">{{ project.details }}</p>
      <div class="track">
        <img
          class="left arrow"
          src="../../../assets/icons/left-arrow.png"
          v-on:click="$store.commit('showPreviousProject', project)"
        >
        <div class="img-div" data-aos="zoom-in">
          <img class="img" v-for="(image, i) of project.images" :key="i" :src="image">
        </div>
        <img
          class="right arrow"
          src="../../../assets/icons/right-arrow.png"
          v-on:click="$store.commit('showNextProject', project)"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignWorkDetails',
  mounted() {
    window.parent.scrollTo(0, 0);
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
  text-align: center;
}
.inner-content {
  width: 100%;
  max-width: 700px;
  margin: auto;
}
.close-btn-div {
  text-align: left;
}
.close-btn {
  padding: 10px;
  width: 25px;
  left: 0;
  margin: 25px 0 25px 75px;
  border-radius: 5px;
  background: var(--light-grey);
}
.close-btn:hover {
  cursor: pointer;
  transition: .3s;
  box-shadow: 1px 2px 8px 0px grey;
}
.details {
  max-width: 500px;
  height: 50px;
  padding: 0 20px;
  font-size: 22px;
  font-weight: 500;
  margin: 0 auto 25px auto;
}
.track {
  vertical-align: top;
  position: relative;
}
.arrow {
  width: 25px;
  padding: 10px;
  border-radius: 5px;
  margin-top: 150px;
  position: absolute;
  display: inline-block;
  background: var(--light-grey);
}
.arrow:hover {
  cursor: pointer;
  box-shadow: 1px 2px 8px 0px grey;
  transition: .3s;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
.img-div {
  width: 80%;
  display: inline-block;
}
.img {
  max-height: 1000px;
  max-width: 100%;
  margin: 10px auto 50px auto;
  -webkit-filter: drop-shadow(1px 2px 8px rgb(107, 107, 107));
  filter: drop-shadow(1px 2px 8px rgb(107, 107, 107));
}
@media (max-width: 740px) {
  .inner-content {
    width: calc(100% - 40px);
    padding: 0 20px;
  }
  .details {
    max-width: 350px;
    font-size: 16px;
  }
  .arrow, .close-btn {
    width: 15px;
  }
  .close-btn {
    margin-left: 50px;
  }
}
@media (max-width: 500px) {
  .details {
    width: 300px;
    font-size: 14px;
    height: 30px;
  }
  .arrow {
    margin-top: 90px;
  }
  .img-div {
    width: 70%;
  }
  .close-btn {
    margin-left: 25px;
  }
}
</style>
