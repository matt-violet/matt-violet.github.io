<template>
  <div id="home">
    <div class="header" data-aos="zoom-in" data-aos-duration="500">
      <h1 data-aos="fade-right">Welcome!</h1>
      <h2 data-aos="fade-left" data-aos-delay="300">I'm a mission-driven professional with roots in non-profit communications, seeking a web / software developer role.</h2>
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
  text-align: center;
  position: absolute;
}
.header {
  width: 470px;
  position: fixed;
  top: 20%;
  left: 50%;
  margin-left: -65px;
  z-index: 1;
  text-align: center;
}
h1 {
  color: white;
  font-size: 90px;
  font-weight: 300;
  border: 0;
  margin: 0;
}
h2 {
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}
.btn {
  background: coral;
  color: white;
  margin-top: 25px;
  padding: 12px 20px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 50px;
  border: 0;
  transition: .3s;
  animation: pulse 2s infinite;
}
.btn:hover {
  box-shadow: 1px 2px 8px 0px rgb(51, 51, 51);
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
    padding-top: 70px;
    margin-left: -235px;
  }
}
@media (max-width: 700px) {
  .header {  
    width: 400px;
    margin-left: -200px;
  }
  h1 {
    font-size: 75px;
  }
  h2 {
    font-size: 14px;
  }
}
@media (max-width: 500px) {
  .header {
    width: 250px;
    margin-left: -125px;
  }
  h1 {
    font-size: 55px;
  }
  h2 {
    font-size: 12px;
  }
  .btn {
    padding: 10px 15px;
    font-size: 18px;
  }
}
</style>
