<template>
  <div id="contact">
    <h1>CONTACT</h1>
    <div class="inner-content">
      <p>I'm currently available for hire and open to discussing any opportunities.</p>
      <div class="containers">
        <div class="container" v-on:click='handleLinkClick("mattviolet@gmail.com")'>
          <img class="icon" src="../assets/icons/email.png"/>
          <p class="link-text">mattviolet@gmail.com</p>
        </div>
        <div class="container" v-on:click='handleLinkClick("https://github.com/matt-violet")'>
          <img class="icon" src="../assets/icons/github.png"/>
          <p class="link-text">github.com/matt-violet</p>
        </div>
        <div class="container" v-on:click='handleLinkClick("https://www.linkedin.com/in/mattviolet")'>
          <img class="icon" src="../assets/icons/linkedin.png"/>
          <p class="link-text">linkedin.com/in/mattviolet</p>
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
  max-width: 1000px;
  margin: auto;
}
.bg-div {
  background: rgb(238, 238, 238);
  padding: 30px;
  border-radius: 5px;
  margin-top: 30px;
}
h1 {
  padding: 30px 75px;
  font-size: 50px;
  font-weight: 700;
  color: white;
  background: linear-gradient(to top, coral, lightsalmon);
  margin: 0;
}
p {
  color: grey;
  font-size: 18px;
  font-weight: 400;
  margin-top: 0;
}
.containers {
  margin: 30px 0 0 50px;
}
.container {
  position: relative;
  margin: 0 0 10px 0;
  vertical-align: middle;
}
.container:hover {
  cursor: pointer;
}
.container:hover .link-text {
  transition: .3s;
  font-weight: 600;
}
.icon {
  display: inline-block;
  position: relative;
  height: 30px;
  margin-right: 15px;
}
.link-text {
  display: inline-block;
  position: absolute;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  top: 10%;
  color: black;
}
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
}
</style>
