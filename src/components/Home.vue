<template>
  <div class="home">
    <div class="header">
      <h1>Insert one sentence header here.</h1>
    </div>
    <div class="bg-img-div">
      <img class="bg-img" src="../assets/hills.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  height: 100%;
  display: inline-block;
  position: absolute;
  overflow: hidden;
}
.header {
  position: absolute;
  margin: 100px;
}
.bg-img-div {
  height: 100%;
}
.bg-img {
  min-width: 100%;
  height: 100%;
}
</style>
