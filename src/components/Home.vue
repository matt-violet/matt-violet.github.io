<template>
  <div id="home">
    <div :class="this.showHomeBtn ? 'welcome' : 'hidden-welcome'">
      <h1>Welcome,</h1>
      <h2>I'm an Oakland-based software engineer currently exploring new job opportunities.</h2>
      <div class="btn-div">
        <button class="btn" v-on:click="$emit('nav', 'work')">Portfolio</button>
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
.welcome {
  width: 600px;
  position: fixed;
  top: 15%;
  left: 30%;
  transition: .3s;
}
.hidden-welcome {
  width: 600px;
  position: fixed;
  display: block;
  top: 15%;
  left: 30%;
  transition: .3s;
  opacity: 0;
  transform: translateY(-200px);
}
h1 {
  color: white;
  font-size: 75px;
  font-weight: 600;
  border: 0;
  margin: 0;
}
h2 {
  color: white;
  font-size: 25px;
  font-weight: 500;
  margin-top: 10px;
}
.btn {
  background: coral;
  color: white;
  box-shadow: 2px 4px 8px 0px rgb(107, 107, 107);
  margin: 15px 20px 0 20px;
  padding: 12px 24px;
  font-size: 25px;
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
  width: 30%;
  bottom: 0;
  position: absolute;
  right: 5%;
  transition: .5s;
}
.hidden-top-img {
  opacity: 0;
  /* transform: translateY(-200px); */
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
/* --------------------------- MEDIA QUERY --------------------------- */
@media (max-width: 1300px) {
  h1 {
    font-size: 70px;
  }
  h2, .btn {
    font-size: 18px;
  }
  .welcome, .hidden-welcome {
    width: 450px;
    left: 35%;
  }
  .top-img, .hidden-top-img {
    width: 33%;
  }
}
@media (max-width: 1000px) {
  .welcome {
    top: 20%;
    left: 10%;
  }
  .hidden-welcome {
    transform: translateY(-100px);
    left: 10%;
  }
  .top-img, .hidden-top-img {
    min-width: 250px;
  }
}
@media (max-width: 600px) {
  h1 {
    font-size: 60px;
  }
  h2, .btn {
    font-size: 18px;
  }
  #home {
    width: 100%;
    position: absolute;
    height: 100%;
    text-align: center;
  }
  .top-img, .hidden-top-img {
    left: 0;
    right: 0;
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
    transform: translateY(-100px);
  }
}
</style>
