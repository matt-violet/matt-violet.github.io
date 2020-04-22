<template>
  <div class="navbar" data-aos="fade-right" data-aos-easing="ease-in-sine">
    <div class="header-div" v-on:click="$emit('nav', 'home')">
      <img class="photo" src="../assets/matt-violet.png">
      <h2 class="name-text">MATT VIOLET</h2>
      <h4 class="title-text">SOFTWARE / WEB DEVELOPER</h4>
    </div>
    <div class="links-div">
      <p class="link-text" v-on:click="$emit('nav', 'about')">ABOUT</p>
      <p class="link-text" v-on:click="$emit('nav', 'work')">WORK</p>
      <p class="link-text" v-on:click="$emit('nav', 'skills')">SKILLS</p>
      <p class="link-text" v-on:click="$emit('nav', 'contact')">CONTACT</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    nav: {type: Function}
  }
}
</script>

<style scoped>
.navbar {
  height: 100%;
  width: 300px;
  background: rgb(70, 130, 180, .8);
  margin: 0;
  position: fixed;
  display: inline-block;
  text-align: center;
}
.photo {
  width: 125px;
  background: lightsalmon;
  box-shadow: 1px 2px 4px 0px black;
  margin: 0 auto 10px auto;
  border-radius: 50%;
}
.header-div {
  text-align: center;
  margin: 50px auto 100px auto;
  width: 200px;
}
.name-text, .title-text {
  margin: 0;
}
.name-text {
  color: white;
  font-weight: 700;
}
.title-text {
  color: lightsalmon;
  font-size: 12px;
  font-weight: 500;
}
.links-div {
  width: 100px;
  margin: auto;
  text-align: left;
}
.link-text {
  margin: 10px 0;
  font-weight: 500;
  font-size: 16px;
  color: white;
}
/* --------------------------- HOVER --------------------------- */
.link-text:hover, .header-div:hover {
  cursor: pointer;
}
.link-text:hover {
  color: lightsalmon;
  transition: .3s;
}
</style>
