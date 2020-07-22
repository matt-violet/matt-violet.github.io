<template>
  <div class="navbar" data-aos="fade-right">
    <div class="header-div" v-on:click="$emit('nav', 'home')">
      <img class="photo" src="../assets/matt-violet.png">
      <h2 class="name-text">MATT VIOLET</h2>
      <h4 class="title-text">WEB / SOFTWARE DEVELOPER</h4>
    </div>
    <div class="links-div">
      <p class="link-text" v-on:click="$emit('nav', 'about')">ABOUT</p>
      <p class="link-text" v-on:click="$emit('nav', 'education')">EDUCATION</p>
      <p class="link-text" v-on:click="$emit('nav', 'work')">PORTFOLIO</p>
      <p class="link-text" v-on:click="$emit('nav', 'skills')">SKILLS</p>
      <p class="link-text" v-on:click="$emit('nav', 'contact')">CONTACT</p>
    </div>
    <div class="icons-div">
      <img class="icon" src="../assets/icons/email-white.png" v-on:click='handleLinkClick("mattviolet@gmail.com")'/>
      <img class="icon" src="../assets/icons/github-white.png" v-on:click='handleLinkClick("https://github.com/matt-violet")'/>
      <img class="icon" src="../assets/icons/linkedin-white.png" v-on:click='handleLinkClick("https://www.linkedin.com/in/mattviolet")'/>
    </div>
    <img class="small-menu" v-on:click="handleShowSmallMenu()" src="../assets/icons/menu-white.png">
    <div :class="this.showSmallMenu ? 'drop-down' : 'invisible'">
      <p class="link-text-small" v-on:click="handleSmallMenuClick('about')">ABOUT</p>
      <p class="link-text-small" v-on:click="handleSmallMenuClick('education')">EDUCATION</p>
      <p class="link-text-small" v-on:click="handleSmallMenuClick('work')">PORTFOLIO</p>
      <p class="link-text-small" v-on:click="handleSmallMenuClick('skills')">SKILLS</p>
      <p class="link-text-small" v-on:click="handleSmallMenuClick('contact')">CONTACT</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    nav: {type: Function}
  },
  data() {
    return {
      showSmallMenu: false
    }
  },
  methods: {
    handleLinkClick(url) {
      if (url === 'mattviolet@gmail.com') {
        window.location.href = "mailto:" + url;
      } else {
        window.open(url, '_blank');
      }
    },
    handleShowSmallMenu() {
      this.$data.showSmallMenu = !this.$data.showSmallMenu;
    },
    handleSmallMenuClick(page) {
      this.handleShowSmallMenu();
      this.$emit('nav', page);
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 100%;
  width: 300px;
  background: linear-gradient(to right, rgb(70, 130, 180), rgb(70, 130, 180, .9));
  margin: 0;
  position: fixed;
  display: inline-block;
  text-align: center;
}
.photo {
  width: 125px;
  background: linear-gradient(to top, coral, lightsalmon);
  box-shadow: 1px 2px 4px 0px black;
  margin: 0 auto 10px auto;
  border-radius: 50%;
}
.header-div {
  text-align: center;
  margin: 50px auto 100px auto;
  width: 200px;
}
.name-text, .title-text {
  margin: 0;
}
.name-text {
  color: white;
  font-weight: 700;
}
.title-text {
  color: lightsalmon;
  font-size: 12px;
  font-weight: 700;
}
.icons-div {
  margin: 76px auto 0 auto;
}
.icon {
  margin: 0 10px;
  width: 25px;
  height: 25px;
  transition: .3s;
}
.icon:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.links-div {
  width: 100px;
  margin: auto;
  text-align: left;
}
.link-text {
  margin: 10px 0;
  font-weight: 700;
  font-size: 16px;
  color: white;
}
.invisible, .small-menu, .drop-down {
  width: 0;
  height: 0;
  visibility: hidden;
}
/* --------------------------- HOVER --------------------------- */
.link-text:hover, .header-div:hover {
  cursor: pointer;
}
.link-text:hover {
  color: lightsalmon;
  transition: .3s;
}
/* --------------------------- MEDIA QUERY --------------------------- */
@media (max-width: 1000px) {
  .header-div, .links-div {
    width: 0;
    height: 0;
    visibility: hidden;
    margin: 0;
  }
  .navbar {
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 2;
    text-align: left;
    background: linear-gradient(to right, rgb(70, 130, 180), rgb(70, 130, 180, .9));
  }
  .small-menu {
    width: 30px;
    height: 30px;
    z-index: 3;
    margin: 10px 20px 0 20px;
    visibility: visible;
  }
  .drop-down {
    width: 200px;
    height: auto;
    margin-top: 14px;
    background: linear-gradient(to right, rgb(70, 130, 180), rgb(70, 130, 180, .9));
    visibility: visible;
    padding: 10px 10px 5px 10px;
  }
  .link-text-small {
    margin-left: 10px;
    color: white;
    font-weight: 600;
  }
  .small-menu:hover {
    cursor: pointer;
  }
  .drop-down:hover {
    cursor: pointer;
  }
  .link-text-small:hover {
    color: lightsalmon;
  }
}
</style>
