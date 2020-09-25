<template>
  <div id="contact">
    <div class="header">
      <h1>CONTACT</h1>
    </div>
    <div class="inner-content">
      <p class="text">Want to chat? I'm currently available for hire and open to discussing any opportunities.</p>
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
  padding: 25px 75px;
  font-size: 45px;
  font-weight: 500;
  color: white;
  background: linear-gradient(to top, coral, lightsalmon);
  margin: 0;
}
.text {
  color: var(--body-text);
  font-size: 18px;
  font-weight: 400;
  margin: 0 auto;
  max-width: 600px;
}
.containers {
  margin: 50px auto;
  text-align: center;
}
.container {
  width: 150px;
  position: relative;
  margin: 30px;
  display: inline-block;
  text-align: center;
  transition: .3s;
  padding: 20px 5px;
  border-radius: 5px;
}
.container:hover {
  cursor: pointer;
  /* box-shadow: 1px 2px 8px 0px grey; */
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
  margin-top: 55px;
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
  .inner-content {
    margin-top: 16px;
  }
}
@media (max-width: 600px) {
  .container {
    display: block;
    margin: 0px auto 50px auto;
    height: 70px;
  }
  .icon-text {
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
  }
}
</style>
