<template>
  <div id="home">
    <div class="header" data-aos="zoom-in" data-aos-duration="500">
      <h1>Hi, I'm Matt,</h1>
      <h2>a mission-driven developer with roots in the non-profit world.</h2>
    </div>
    <img class="arrow" src="../assets/icons/white-down-arrow.png" v-on:click="$emit('nav', 'about')">
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    nav: {type: Function}
  }
}
</script>

<style scoped>
#home {
  height: 100%;
  width: 100%;
  text-align: center;
}
.header {
  position: absolute;
  margin: 80px;
  text-align: left;
}
h1 {
  color: white;
  font-size: 60px;
  font-weight: 300;
  border: 0;
  margin: 0;
}
h2 {
  color: rgb(187, 187, 187);
  font-size: 18px;
  font-weight: 700;
  margin-top: 5px;
}
.arrow {
  width: 50px;
  position: absolute;
  padding-bottom: 20px;
  bottom: 0;
  animation: pulse 2s infinite;
}
.arrow:hover {
  cursor: pointer;
}
@keyframes pulse {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.5);
	}
	100% {
		transform: scale(1);
	}
}
</style>
