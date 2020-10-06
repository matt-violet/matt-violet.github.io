<template>
  <div id="home">
    <div :class="this.showHomeBtn ? 'welcome' : 'hidden-welcome'">
      <h1>Welcome,</h1>
      <h2>I'm an Oakland-based software engineer currently exploring new job opportunities.</h2>
      <div class="btn-div">
        <button class="btn" v-on:click="$emit('nav', 'work')">My Work</button>
      </div>
    </div>
    <img src="../assets/matt-oak-blank.png" :class="this.showHomeBtn ? 'top-img' : 'hidden-top-img'">
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
.welcome, .hidden-welcome {
  width: 450px;
  position: fixed;
  top: 12%;
  left: calc(300px + 5%);
  transition: .3s;
}
.hidden-welcome {
  opacity: 0;
  transform: translateX(-100px);
}
h1 {
  color: white;
  font-size: 65px;
  font-weight: 600;
  border: 0;
  margin: 0;
}
h2 {
  color: white;
  font-size: 18px;
  font-weight: 400;
  margin-top: 5px;
}
.btn {
  background: coral;
  color: white;
  box-shadow: 2px 4px 8px 0px rgb(107, 107, 107);
  margin: 20px 20px 0 20px;
  padding: 12px 24px;
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
.top-img, .hidden-top-img {
  width: 25%;
  bottom: 0;
  position: absolute;
  right: 5%;
  transition: .5s;
}
.hidden-top-img {
  opacity: 0;
  transform: translateX(100px);
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
/* --------------------------- MEDIA QUERY --------------------------- */
@media (max-width: 1000px) {
  .welcome, .hidden-welcome {
    top: calc(70px + 5%);
    left: 5%;
  }
  .hidden-welcome {
    transform: translateX(-100px);
  }
  h1 {
    font-size: 60px;
  }
  h2, .btn {
    font-size: 18px;
  }
  .top-img, .hidden-top-img {
    width: 300px;
  }
}
@media (max-width: 600px) {
  #home {
    width: 100%;
    position: absolute;
    height: 100%;
    text-align: center;
  }
  .top-img, .hidden-top-img {
    left: 0;
    right: 0;
    width: 250px;
    margin: auto;
  }
  .welcome, .hidden-welcome {
    width: auto;
    max-width: 450px;
    margin: auto;
    text-align: center;
    padding: 0 10px;
    left: 0;
    right: 0;
    position: fixed;
    transform: translateX(0);
    transition: .3s;
  }
  .hidden-welcome { 
    transform: translateX(-100px);
  }
}
</style>
