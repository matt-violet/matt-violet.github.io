<template>
  <div id="contact">
    <h1>Contact</h1>
    <div class="inner-content">
      <p>I'm currently available for hire and open to discussing any opportunities.</p>
      <div class="bg-div">
        <div class="containers">
          <div class="container" v-on:click='handleLinkClick("mattviolet@gmail.com")'>
            <img class="icon" src="../assets/icons/email.png"/>
            <p class="text">mattviolet@gmail.com</p>
          </div>
          <div class="container" v-on:click='handleLinkClick("https://github.com/matt-violet")'>
            <img class="icon" src="../assets/icons/github.png"/>
            <p class="text">github.com/matt-violet</p>
          </div>
          <div class="container" v-on:click='handleLinkClick("https://www.linkedin.com/in/mattviolet")'>
            <img class="icon" src="../assets/icons/linkedin.png"/>
            <p class="text">linkedin.com/in/mattviolet</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    handleLinkClick(url) {
      if (url === 'mattviolet@gmail.com') {
        window.location.href = "mailto:" + url;
      } else {
        window.open(url, '_blank');
      }
    }
  }
}
</script>

<style scoped>
#contact {
  background: white;
}
.inner-content {
  padding: 59px 75px 75px 75px;
}
.bg-div {
  background: rgb(238, 238, 238);
  padding: 30px;
  border-radius: 5px;
  margin-top: 30px;
}
h1 {
  /* width: 100%; */
  padding: 30px 75px;
  font-size: 50px;
  font-weight: 500;
  color: black;
  background: lightsalmon;
  margin: 0;
  border-bottom: 1px solid lightgrey;
}
.containers {
  margin-top: 30px;
}
.container {
  position: relative;
  margin: 0 0 15px 0;
  vertical-align: middle;
}
.container:hover {
  cursor: pointer;
}
.container:hover .text {
  color: steelblue;
  transition: .3s;
  font-weight: 700;
}
.icon {
  display: inline-block;
  position: relative;
  height: 40px;
  margin-right: 20px;
}
.text {
  display: inline-block;
  position: absolute;
  font-size: 18px;
  font-weight: 300;
  margin: 0;
  top: 15%;
}
</style>
