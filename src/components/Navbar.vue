<template>
  <div class="navbar">
    <img class="photo" src="../assets/matt-violet.png">
    <div class="header-div">
      <h2 class="name-text">Matt Violet</h2>
      <h4 class="title-text">Software / Web Developer</h4>
    </div>
    <div class="links-div">
      <p class="link-text">ABOUT</p>
      <p class="link-text">SKILLS</p>
      <p class="link-text">WORK</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.navbar {
  height: 100%;
  width: 300px;
  background: rgb(70, 130, 180, .9);
  margin: 0;
  position: fixed;
  display: inline-block;
  text-align: center;
}
.photo {
  width: 125px;
  background: coral;
  margin: 50px auto 20px auto;
  border-radius: 50%;
}
.header-div {
  text-align: center;
  margin: 20px 0 40px 0;
}
.name-text, .title-text {
  margin: 0;
}
.name-text {
  color: white;
}
.title-text {
  color: lightgrey;
}
.links-div {
  width: 100px;
  margin: auto;
  text-align: left;
}
.link-text {
  margin: 5px 0;
  font-weight: 600;
  font-size: 14px;
  color: white;
}
</style>
