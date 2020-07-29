<template>
  <div id="home">
    <div class="header" data-aos="zoom-in" data-aos-duration="500">
      <h1 data-aos="fade-right">Welcome!</h1>
      <h2 data-aos="fade-left" data-aos-delay="300">I'm a mission-driven developer with roots in the non-profit world, currently seeking a web / software developer role.</h2>
      <button v-on:click="$emit('nav', 'work')" data-aos="zoom-in" data-aos-delay="600">View Portfolio</button>
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
  width: 500px;
  padding: 60px 0;
  margin: auto;
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
  font-weight: 500;
  margin-top: 10px;
}
button {
  background: coral;
  color: white;
  margin-top: 25px;
  padding: 10px 18px;
  font-size: 22px;
  font-weight: 500;
  border-radius: 5px;
  border: 0;
  box-shadow: 1px 2px 8px 0px rgb(51, 51, 51);
  transition: .3s;
}
button:hover {
  transform: scale(1.2);
  cursor: pointer;
}
/* --------------------------- MEDIA QUERY --------------------------- */
@media (max-width: 1000px) {
  .header {
    padding-top: 70px;
  }
}
@media (max-width: 800px) {
  .header {  
    width: 450px;
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
    width: 300px;
  }
  h1 {
    font-size: 60px;
  }
  button {
    padding: 10px 15px;
    font-size: 18px;
  }
}
</style>
