<template>
  <div id="nav-component">
    <div :class="!this.$store.state.showFixedMenu ? 'initial-navbar' : 'fixed-navbar'">
      <div :class="this.$store.state.showSmallMenu ? 'drop-down' : 'navbar'">
        <div class="links-div">
          <img
            class="logo"
            src="../assets/icons/mv-logo-light.png"
            v-on:click="$emit('scrollToSec', 'home')"
          >
          <p class="link" v-on:click="$emit('scrollToSec', 'services')">Services</p>
          <p class="link" v-on:click="$emit('scrollToSec', 'experience')">Experience</p>
          <p class="link" v-on:click="$emit('scrollToSec', 'work')">Work</p>
          <p class="link" v-on:click="$emit('scrollToSec', 'about')">About</p>
          <!-- <p class="link" v-on:click='handleLinkClick(resumeLink)'>Resume</p> -->
          <p class="link" v-on:click="$emit('scrollToSec', 'contact')">Contact</p>
        </div>
        <img class="menu-icon" v-on:click="toggleSmallMenu()" src="../assets/icons/menu-white.png">
        <div v-if="this.$store.state.showSmallMenu" class="drop-down">
          <p class="drop-down-link" v-on:click="handleSmallMenuClick('services')">Services</p>
          <p class="drop-down-link" v-on:click="handleSmallMenuClick('experience')">Experience</p>
          <p class="drop-down-link" v-on:click="handleSmallMenuClick('work')">Work</p>
          <p class="drop-down-link" v-on:click="handleSmallMenuClick('about')">About</p>
          <!-- <p class="drop-down-link" v-on:click="handleSmallMenuClick('resume')">Resume</p> -->
          <p class="drop-down-link" v-on:click="handleSmallMenuClick('contact')">Contact</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    scrollToSec: {type: Function}
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
      this.$store.state.showSmallMenu = !this.$store.state.showSmallMenu;
    },
    handleSmallMenuClick(page) {
      this.toggleSmallMenu();
      if (page === 'resume') {
        window.open(this.$store.state.resumeLink, '_blank');
        return;
      }
      this.$emit('scrollToSec', page);
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 60px;
  width: 100%;
  position: absolute;
  z-index: 3;
  text-align: center;
}
.logo {
  margin: 15px 30px;
  position: absolute;
  left: 0;
  width: 30px;
}
.drop-down {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;
  text-align: left;
  overflow-y: visible;
  background: rgb(70, 130, 180, .95);
}
.fixed-navbar {
  height: 60px;
  width: 100%;
  z-index: 3;
  background: linear-gradient(to bottom, rgb(62, 116, 160), rgb(92, 153, 202));
  position: fixed;
  transition: .3s;
  animation: fadeDown .3s ease-in-out forwards;
}
@keyframes fadeDown {
  from { transform: translateY(-100px); }
  to { transform: translateY(0); }
}
.links-div {
  height: 100%;
}
.link {
  margin: 0;
  padding: 20px;
  font-weight: 700;
  font-size: 14px;
  color: white;
  display: inline-block;
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
.logo:hover {
  transform: rotate(360deg);
  transition: .3s;
  cursor: pointer;
}
.link:hover, .photo-div:hover {
  cursor: pointer;
}
.link:hover {
  color: lightsalmon;
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
    z-index: 3;
    text-align: left;
    overflow-y: visible;
  }
  .icons-div {
    display:none
  }
  .menu-icon {
    width: 30px;
    height: 30px;
    z-index: 3;
    padding: 20px 20px 0 20px;
    visibility: visible;
  }
  .drop-down {
    z-index: 3;
    height: 200px;
    width: 250px;
    background: rgb(70, 130, 180, .95);
    visibility: visible;
    animation: fadeIn .3s;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .drop-down-link {
    padding: 8px 0 8px 80px;
    margin: 0;
    color: white;
    font-weight: 600;
  }
  .menu-icon:hover {
    cursor: pointer;
  }
  .drop-down:hover {
    cursor: pointer;
  }
  .drop-down-link:hover {
    background: linear-gradient(to top, coral, lightsalmon);
    padding-left: 100px;
    transition: .3s;
  }
}
@media (max-width: 500px) {
  .drop-down {
    width: 100%;
    height: 100%;
    padding: 0px;
    position: fixed;
    text-align: left;
    background: rgb(70, 130, 180, .95);
  }
  .drop-down-link {
    padding-left: 120px;
    font-size: 30px;
    margin: 5px 0;
  }
  .drop-down-link:hover {
    padding-left: 140px;
  }
}
</style>
