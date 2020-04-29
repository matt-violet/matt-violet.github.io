<template>
  <div id="home">
    <div class="header" data-aos="zoom-in" data-aos-duration="500">
      <h1>Welcome!</h1>
      <h2>I'm Matt, a mission-driven developer with roots in the non-profit world.</h2>
      <button v-on:click="$emit('nav', 'work')">Portfolio</button>
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
  text-align: center;
}
.header {
  width: 600px;
  margin: 60px auto;
  text-align: center;
}
h1 {
  color: white;
  font-size: 90px;
  font-weight: 500;
  border: 0;
  margin: 0;
}
h2 {
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
}
button {
  background: steelblue;
  color: white;
  margin-top: 25px;
  padding: 15px 35px;
  font-size: 24px;
  font-weight: 400;
  border-radius: 30px;
  border: 0;
  box-shadow: 1px 2px 8px 0px black;
}
button:hover {
  color: lightsalmon;
  transition: .3s;
  cursor: pointer;
}
/* --------------------------- MEDIA QUERY --------------------------- */
@media (max-width: 1000px) {
  .header {
    margin-top: 100px;
  }
}
@media (max-width: 800px) {
  .header {  
    width: 400px;
  }
}
</style>
