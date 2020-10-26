<template>
  <div id="contact">
    <div class="inner-content">
      <div class="header">
        <h1>Contact</h1>
      </div>
      <p class="text">Need a developer? I'm currently open to new opportunities. Contact me today to see how I can help you reach your goals.</p>
      <div class="containers">
        <div class="container" v-on:click='handleLinkClick("mattviolet@gmail.com")'>
          <img class="icon" src="../assets/icons/email-white.png"/>
          <div class="icon-text">
            <h4 class="link-header">Email</h4>
            <p class="link-text">mattviolet@gmail.com</p>
          </div>
        </div>
        <div class="container" v-on:click='handleLinkClick("https://github.com/matt-violet")'>
          <img class="icon" src="../assets/icons/github-white.png"/>
          <div class="icon-text">
            <h4 class="link-header">GitHub</h4>
            <p class="link-text">github.com/matt-violet</p>
          </div>
        </div>
        <div class="container" v-on:click='handleLinkClick("https://www.linkedin.com/in/mattviolet")'>
          <img class="icon" src="../assets/icons/linkedin-white.png"/>
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
  background: var(--dark-blue);
}
.header {
  width: 100%;
  text-align: center;
}
.inner-content {
  padding: 75px;
  max-width: 800px;
  margin: auto;
}
h1 {
  color: white;
  font-size: 35px;
  font-weight: 900;
  margin: 0 auto 75px auto;
}
.text {
  color: white;
  font-size: 18px;
  font-weight: 400;
  margin: 0 auto;
  max-width: 600px;
}
.containers {
  margin: 30px auto;
  text-align: center;
}
.container {
  width: 150px;
  position: relative;
  margin: 30px;
  display: inline-block;
  text-align: center;
  transition: .3s;
  padding: 50px 5px 30px 5px;
  border-radius: 5px;
}
.container:hover {
  cursor: pointer;
  transition: .3s;
}
.container:hover .icon {
  height: 60px;
  width: 60px;
  transform: translate(-5px, -5px);
}
.icon {
  position: absolute;
  top: 15%;
  left: 50%;
  margin-left: -25px;
  height: 50px;
  width: 50px;
  transition: .3s;
}
.icon-text {
  margin-top: 50px;
}
.link-header {
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
  transition: .3s;
  color: white;
}
.link-text {
  font-size: 12px;
  font-weight: 400;
  transition: .3s;
  margin: 0;
  color: white;
}
@media (max-width: 900px) {
  .inner-content {
    padding: 75px 50px;
  }
  .text {
    max-width: 500px;
  }
  .container {
    margin: 30px 15px;
  }
}
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
}
@media (max-width: 700px) {
  h1 {
    margin-bottom: 25px;
  }
  .containers {
    margin-top: 50px;
  }
  .container {
    display: block;
    margin: 0px auto 50px auto;
    height: 70px;
  }
  .icon-text {
    margin-top: 35px;
  }
}
</style>
