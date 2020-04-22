<template>
  <div id="contact">
    <h1>Contact</h1>
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
  padding: 75px;
}
h1 {
  width: 100%;
  color: steelblue;
  margin-top: 0;
  border-bottom: 1px solid lightgrey;
}
.containers {
  margin-top: 50px;
}
.container {
  position: relative;
  margin: 0 0 20px 0;
  vertical-align: middle;
}
.container:hover {
  cursor: pointer;
}
.container:hover .text {
  color: steelblue;
  transition: .3s;
}
.icon {
  display: inline-block;
  position: relative;
  height: 50px;
  margin-right: 20px;
}
.text {
  display: inline-block;
  position: absolute;
  font-size: 22px;
  font-weight: 500;
  margin: 0;
  top: 15%;
}
</style>
