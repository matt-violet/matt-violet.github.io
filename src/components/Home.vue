<template>
  <div id="home">
    <div :class="this.$store.state.showHomeBtn ? 'welcome' : 'hidden-welcome'">
      <h1>Matt Violet</h1>
      <h2>Software Engineer</h2>
      <div class="btn-div">
        <button class="btn" v-on:click="$emit('scrollToSec', 'work')">My Work</button>
      </div>
    </div>
    <img src="../assets/matt-violet.png" :class="this.$store.state.showHomeBtn ? 'top-img' : 'hidden-top-img'">
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    scrollToSec: {type: Function},
  }
}
</script>

<style scoped>
#home {
  height: 100%;
  width: 100%;
  z-index: 1;
  margin: auto;
  position: absolute;
}
.welcome, .hidden-welcome {
  /* width: 450px; */
  position: absolute;
  top: 20%;
  left: 20%;
  transition: .3s;
}
.hidden-welcome {
  opacity: 0;
  transform: translateX(-100px);
}
h1 {
  color: white;
  font-size: 75px;
  font-weight: 900;
  border: 0;
  margin: 0;
}
h2 {
  color: white;
  font-size: 35px;
  font-weight: 300;
  margin: 0;
}
.btn {
  background: var(--primary);
  color: white;
  box-shadow: 2px 4px 8px 0px rgb(107, 107, 107);
  margin: 25px 0 0 0;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  border: 0;
  transition: .3s;
  animation: pulse 2s infinite;
}
.btn:hover {
  cursor: pointer;
  background: white;
  color: var(--body-text);
}
.top-img, .hidden-top-img {
  width: 27%;
  bottom: 0;
  position: absolute;
  right: 15%;
  transition: .3s;
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
    /* left: 5%; */
  }
  .hidden-welcome {
    transform: translateX(-100px);
  }
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 30px;
  }
  .btn {
    font-size: 20px;
  }
  .top-img, .hidden-top-img {
    min-width: 300px;
  }
}
@media (max-width: 600px) {
  #home {
    width: 100%;
    position: absolute;
    height: 100%;
    text-align: center;
  }
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 25px;
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
    top: 20%;
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
