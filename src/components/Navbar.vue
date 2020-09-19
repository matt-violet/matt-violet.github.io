<template>
  <div :class="this.showSmallMenu ? 'navbar-with-drop-down' : 'navbar'">
    <div class="photo-div" v-on:click="$emit('nav', 'home')">
      <img class="photo" src="../assets/matt-violet.png">
      <h2 class="name-text">MATT VIOLET</h2>
      <h4 class="title-text">WEB / SOFTWARE DEVELOPER</h4>
    </div>
    <div class="links-div">
      <p class="link-text" v-on:click="$emit('nav', 'about')">ABOUT</p>
      <p class="link-text" v-on:click="$emit('nav', 'education')">EDUCATION</p>
      <p class="link-text" v-on:click="$emit('nav', 'work')">PORTFOLIO</p>
      <p class="link-text" v-on:click="$emit('nav', 'experience')">EXPERIENCE</p>
      <p class="link-text" v-on:click="$emit('nav', 'contact')">CONTACT</p>
      <p class="link-text" v-on:click='handleLinkClick(resumeLink)'>RESUME</p>
    </div>
    <div class="icons-div">
      <img class="icon" src="../assets/icons/email-white.png" v-on:click='handleLinkClick("mattviolet@gmail.com")'/>
      <img class="icon" src="../assets/icons/github-white.png" v-on:click='handleLinkClick("https://github.com/matt-violet")'/>
      <img class="icon" src="../assets/icons/linkedin-white.png" v-on:click='handleLinkClick("https://www.linkedin.com/in/mattviolet")'/>
    </div>
    <img class="menu-icon" v-on:click="toggleSmallMenu()" src="../assets/icons/menu-white.png">
    <div v-if="this.showSmallMenu" class="drop-down">
      <p class="link-text-small" v-on:click="handleSmallMenuClick('about')">ABOUT</p>
      <p class="link-text-small" v-on:click="handleSmallMenuClick('education')">EDUCATION</p>
      <p class="link-text-small" v-on:click="handleSmallMenuClick('work')">PORTFOLIO</p>
      <p class="link-text-small" v-on:click="handleSmallMenuClick('experience')">EXPERIENCE</p>
      <p class="link-text-small" v-on:click="handleSmallMenuClick('contact')">CONTACT</p>
      <p class="link-text-small" v-on:click="handleSmallMenuClick('resume')">RESUME</p>
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
      showSmallMenu: false,
      resumeLink: 'https://docs.google.com/document/d/1QNbQGA8xYZ_rY8bJt6Y7lT9yVWhXIu7WmLypJb6UrZU/edit?usp=sharing'
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
    toggleSmallMenu() {
      this.$data.showSmallMenu = !this.$data.showSmallMenu;
    },
    handleSmallMenuClick(page) {
      this.toggleSmallMenu();
      if (page === 'resume') {
        window.open(this.resumeLink, '_blank');
        return;
      }
      this.$emit('nav', page);
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 100%;
  width: 300px;
  box-shadow: 0px 0px 4px 4px rgba(46, 46, 46, 0.5);
  background: linear-gradient(to right, rgb(70, 130, 180), rgb(70, 130, 180, .75));
  margin: 0;
  position: fixed;
  z-index: 3;
  display: inline-block;
  text-align: center;
  overflow-y: auto;
}
.navbar-with-drop-down {
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 3;
  text-align: left;
  overflow-y: visible;
  background: rgb(70, 130, 180, .95);
}
.photo {
  width: 150px;
  background: coral;
  box-shadow: 1px 2px 4px 0px black;
  margin: 0 auto 10px auto;
  border-radius: 50%;
}
.photo-div {
  text-align: center;
  margin: 50px auto;
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
  margin: 15px 0;
  font-weight: 600;
  font-size: 14px;
  color: white;
}
.invisible, .menu-icon, .drop-down {
  width: 0;
  height: 0;
  visibility: hidden;
}
/* --------------------------- HOVER --------------------------- */
.photo-div:hover .photo {
  transform: scale(1.1);
  transition: .3s;
}
.link-text:hover, .photo-div:hover {
  cursor: pointer;
}
.link-text:hover {
  color: lightsalmon;
  font-weight: 700;
  transform: scale(1.1);
  transition: .3s;
}
/* --------------------------- MEDIA QUERY --------------------------- */
@media (max-width: 1000px) {
  .photo-div, .links-div {
    width: 0;
    height: 0;
    visibility: hidden;
    margin: 0;
  }
  .navbar {
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 3;
    text-align: left;
    overflow-y: visible;
    background: rgb(70, 130, 180, .95);
  }
  .icons-div {
    display:none
  }
  .menu-icon {
    width: 30px;
    height: 30px;
    z-index: 3;
    padding: 10px 20px 0 20px;
    visibility: visible;
  }
  .drop-down {
    transform: translate(0, 9px);
    z-index: 3;
    padding: 20px 0;
    height: 250px;
    width: 250px;
    background: rgb(70, 130, 180, .95);
    visibility: visible;
    animation: fadeIn .3s;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .link-text-small {
    padding: 8px 0 8px 80px;
    margin: 0;
    color: white;
    font-weight: 500;
  }
  .menu-icon:hover {
    cursor: pointer;
  }
  .drop-down:hover {
    cursor: pointer;
  }
  .link-text-small:hover {
    background: linear-gradient(to top, coral, lightsalmon);
    font-weight: 700;
    padding-left: 100px;
    transition: .3s;
  }
}
@media (max-width: 500px) {
  .drop-down {
    width: 100%;
    height: 100%;
    padding-top: 100px;
    position: fixed;
    text-align: left;
    background: rgb(70, 130, 180, .95);
  }
  .link-text-small {
    padding-left: 120px;
    font-size: 20px;
  }
  .link-text-small:hover {
    padding-left: 140px;
  }
}
</style>
