<template>
  <div id="nav-component">
    <div :class="!this.$store.state.showFixedMenu ? 'initial-navbar' : 'fixed-navbar'">
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
        <p class="link" v-on:click="$emit('scrollToSec', 'contact')">Contact</p>
      </div>
      <img
        class="menu-icon"
        v-on:click="toggleSmallMenu()"
        src="../assets/icons/menu-white.png"
      >
      <div v-if="this.$store.state.showSmallMenu" class="drop-down" data-aos="fade-down">
        <p class="drop-down-link" v-on:click="handleSmallMenuClick('services')">Services</p>
        <p class="drop-down-link" v-on:click="handleSmallMenuClick('experience')">Experience</p>
        <p class="drop-down-link" v-on:click="handleSmallMenuClick('work')">Work</p>
        <p class="drop-down-link" v-on:click="handleSmallMenuClick('about')">About</p>
        <p class="drop-down-link" v-on:click="handleSmallMenuClick('contact')">Contact</p>
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
.initial-navbar {
  position: absolute;
  z-index: 3;
  text-align: center;
  width: 100%;
}
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
  transition: .3s;
  box-shadow: 1px 2px 8px 0px rgb(53, 53, 53);
  z-index: 3;
  text-align: left;
  padding-top: 60px !important;
  background: rgb(70, 130, 180, .95);
}
.fixed-navbar {
  height: 60px;
  width: 100%;
  text-align: center;
  z-index: 3;
  box-shadow: 1px 2px 8px 0px rgb(53, 53, 53);
  background: steelblue;
  position: fixed;
  transition: .3s;
  animation: fadeDown .3s ease-in-out forwards;
}
@keyframes fadeDown {
  from { transform: translateY(-100px); }
  to { transform: translateY(0); }
}
.link {
  margin: 10px;
  padding: 10px;
  font-weight: 700;
  font-size: 14px;
  color: white;
  display: inline-block;
}
.invisible, .menu-icon, .drop-down {
  display: none;
}
/* --------------------------- HOVER --------------------------- */
.logo:hover {
  transform: rotate(360deg);
  transition: .3s;
  cursor: pointer;
}
.link:hover, .photo-div:hover {
  cursor: pointer;
}
.link:hover {
  transform: scale(1.15);
  transition: .3s;
}
/* --------------------------- MEDIA QUERY --------------------------- */
@media (max-width: 800px) {
  .photo-div, .links-div {
    display: none;
  }
  .navbar {
    width: 100%;
    height: 70px;
    z-index: 3;
    text-align: left;
  }
  .icons-div {
    display:none
  }
  .menu-icon {
    width: 25px;
    height: 25px;
    left: 0;
    z-index: 4;
    position: absolute;
    padding: 17px 20px 0 20px;
    display: block;
  }
  .drop-down {
    z-index: 3;
    height: 300px;
    width: 100%;
    transition: .3s;
    background: rgb(70, 130, 180, .95);
    display: block;
    animation: fadeIn .3s;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .drop-down-link {
    width: 100px;
    padding: 8px 0;
    margin: 0 auto;
    color: white;
    font-size: 20px;
    font-weight: 500;
  }
  .menu-icon:hover {
    cursor: pointer;
  }
  .drop-down:hover {
    cursor: pointer;
  }
  .drop-down-link:hover {
    color: coral;
    transition: .3s;
  }
}
@media (max-width: 500px) {
  .drop-down {
    height: 10000px;
    padding: 0px;;
    text-align: left;
    background: rgb(70, 130, 180, .95);
  }
  .drop-down-link {
    transform: translateY(75px);
    font-size: 30px;
    margin: 10px auto;
  }
}
</style>
