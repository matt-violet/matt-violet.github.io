<template>
  <div id="contact">
    <h1>CONTACT</h1>
    <div class="inner-content">
      <p>I'm currently available for hire and open to discussing any opportunities.</p>
      <div class="containers">
        <div class="container" v-on:click='handleLinkClick("mattviolet@gmail.com")'>
          <img class="icon" src="../assets/icons/email.png"/>
          <div class="icon-text">
            <h4 class="link-header">Email</h4>
            <p class="link-text">mattviolet@gmail.com</p>
          </div>
        </div>
        <div class="container" v-on:click='handleLinkClick("https://github.com/matt-violet")'>
          <img class="icon" src="../assets/icons/github.png"/>
          <div class="icon-text">
            <h4 class="link-header">GitHub</h4>
            <p class="link-text">github.com/matt-violet</p>
          </div>
        </div>
        <div class="container" v-on:click='handleLinkClick("https://www.linkedin.com/in/mattviolet")'>
          <img class="icon" src="../assets/icons/linkedin.png"/>
          <div class="icon-text">
            <h4 class="link-header">LinkedIn</h4>
            <p class="link-text">linkedin.com/in/mattviolet</p>
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
  padding: 75px;
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
  padding: 25px 75px;
  font-size: 45px;
  font-weight: 600;
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
  margin: 50px auto;
  text-align: center;
}
.container {
  width: 150px;
  position: relative;
  margin: 30px 50px;
  display: inline-block;
  text-align: center;
}
.container:hover {
  cursor: pointer;
}
.container:hover .icon {
  height: 60px;
  width: 60px;
  transform: translate(-5px, -5px);
}
.container:hover .link-text {
  font-weight: 500;
}
.container:hover .link-header {
  font-weight: 600;
}
.icon {
  position: absolute;
  top: 10%;
  left: 50%;
  margin-left: -25px;
  height: 50px;
  width: 50px;
  transition: .3s;
}
.icon-text {
  margin-top: 80px;
}
.link-header {
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
  transition: .3s;
}
.link-text {
  font-size: 12px;
  font-weight: 400;
  transition: .3s;
  margin: 0;
}
@media (max-width: 1250px) and (min-width: 1000px), (max-width: 900px) {
  .container {
    margin: 30px 15px;
  }
}
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
}
@media (max-width: 600px) {
  .container {
    display: block;
    margin: 0px auto 40px auto;
    height: 115px;
  }
  .icon-text {
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
  }
}
</style>
