<template>
  <div class="navbar">
    <div class="bg-img-div">
      <img class="bg-img" src="../assets/matt-violet.png">
    </div>
    <div class="header-div">
      <h2 class="name-text">Matt Violet</h2>
      <h4 class="title-text">Software Engineer</h4>
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
  background: steelblue;
  margin: 0;
  position: relative;
  display: inline-block;
}
.bg-img-div {
  text-align: center;
  margin: 50px auto;
}
.bg-img {
  width: 150px;
  background: white;
  margin: auto;
  border-radius: 50%;
}
.header-div {
  text-align: center;
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
</style>
