<template>
  <div id="home">
    <div class="header">
      <h1>Hi, I'm Matt,</h1>
      <h2>a mission-driven developer with roots in the non-profit world.</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
#home {
  height: 100%;
  width: 100%;
}
.header {
  position: absolute;
  margin: 100px;
}
h1 {
  color: white;
  font-size: 60px;
  font-weight: 500;
  border: 0;
  margin: 0;
}
h2 {
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-top: 5px;
}
</style>
