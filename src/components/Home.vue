<template>
  <div id="home">
    <div class="header" data-aos="zoom-in" data-aos-duration="500">
      <h1 data-aos="fade-right">Hello,</h1>
      <h2 data-aos="fade-left" data-aos-delay="300">I'm a mission-driven developer with roots in non-profit communications, currently seeking a web / software developer role.</h2>
      <div class="btn-div" data-aos="zoom-in" data-aos-delay="600">
        <button class="btn" v-on:click="$emit('nav', 'work')">View Portfolio</button>
      </div>
    </div>
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
  margin: auto;
  position: absolute;
}
.header {
  width: 470px;
  padding: 20px;
  border-radius: 10px;
  /* border: 1px solid white; */
  box-shadow: 2px 4px 8px 0px rgb(107, 107, 107);
  background: linear-gradient(to bottom, rgba(89, 156, 211, 0.7), rgba(0, 0, 0, 0.05));
  position: absolute;
  top: 15%;
  left: 50%;
  margin-left: -65px;
  z-index: 1;
}
h1 {
  color: white;
  font-size: 40px;
  font-weight: 300;
  border: 0;
  margin: 0;
}
h2 {
  color: white;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
}
.btn {
  background: coral;
  color: white;
  margin-top: 10px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 50px;
  border: 0;
  transition: .3s;
  animation: pulse 2s infinite;
}
.btn:hover {
  cursor: pointer;
  background: white;
  color: coral;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
/* --------------------------- MEDIA QUERY --------------------------- */
@media (max-width: 1000px) {
  .header {
    width: 400px;
    padding: 15px;
    margin-left: -235px;
    top: 150px;
  }
}
@media (max-width: 700px) {
  .header {  
    width: 300px;
    margin-left: -200px;
  }
  h1 {
    font-size: 30px;
  }
}
@media (max-width: 500px) {
  .header {
    width: auto;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    padding: 150px 50px;
    margin: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1));
  }
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
  }
  .btn {
    padding: 10px 15px;
    font-size: 22px;
  }
}
</style>
