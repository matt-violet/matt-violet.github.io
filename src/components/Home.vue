<template>
  <div id="home">
    <div :class="this.showHomeBtn ? 'header' : 'hidden-header'">
      <h1>Welcome,</h1>
      <h2>I'm an Oakland-based web developer currently seeking new opportunities.</h2>
      <div class="btn-div">
        <button class="btn" v-on:click="$emit('nav', 'work')">View Portfolio</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    nav: {type: Function},
    showHomeBtn: {type: Boolean}
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
  width: 400px;
  position: fixed;
  top: 20%;
  left: 50%;
  text-align: center;
  transition: .3s;
  transform: translateX(-50px);
}
.hidden-header {
  width: 400px;
  position: fixed;
  display: block;
  top: 20%;
  left: 50%;
  text-align: center;
  transition: .3s;
  opacity: 0;
  transform: translateY(-100px);
  margin-left: -50px;
}
h1 {
  color: white;
  font-size: 80px;
  font-weight: 700;
  border: 0;
  margin: 0;
}
h2 {
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
}
.btn {
  background: coral;
  color: white;
  box-shadow: 2px 4px 8px 0px rgb(107, 107, 107);
  margin: 15px 20px 0 20px;
  padding: 10px 15px;
  font-size: 18px;
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
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
/* --------------------------- MEDIA QUERY --------------------------- */
@media (max-width: 1000px) {
  .header {
    top: 25%;
    margin-left: -150px;
  }
  .hidden-header {
    transform: translateY(-100px);
    margin-left: -200px;
  }
}
@media (max-width: 500px) {
  #home {
    width: 100%;
    position: absolute;
    height: 100%;
  }
  .header {
    width: auto;
    padding: 0 40px;
    left: 0;
    margin: 0;
    position: fixed;
    transform: translateX(0);
    transition: .3s;
  }
  .hidden-header {
    width: auto;
    padding: 0 40px;
    left: 0;
    margin: 0;
    position: fixed;
    transform: translateY(-100);
    transition: .3s;
  }
  h1 {
    font-size: 60px;
  }
}
</style>
