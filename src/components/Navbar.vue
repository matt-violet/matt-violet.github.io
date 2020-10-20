<template>
  <div id="nav-component">
    <div :class="!this.$store.state.showFixedMenu ? 'initial-navbar' : 'fixed-navbar'">
      <div :class="this.$store.state.showSmallMenu ? 'navbar-with-drop-down' : 'navbar'">
        <div class="links-div">
          <p class="link" v-on:click="$emit('scrollToSec', 'services')">Services</p>
          <p class="link" v-on:click="$emit('scrollToSec', 'experience')">Experience</p>
          <p class="link" v-on:click="$emit('scrollToSec', 'work')">Work</p>
          <p class="link" v-on:click="$emit('scrollToSec', 'about')">About</p>
          <!-- <p class="link" v-on:click='handleLinkClick(resumeLink)'>Resume</p> -->
          <p class="link" v-on:click="$emit('scrollToSec', 'contact')">Contact</p>
        </div>
        <img class="menu-icon" v-on:click="toggleSmallMenu()" src="../assets/icons/menu-white.png">
        <div v-if="this.$store.state.showSmallMenu" class="drop-down">
          <p class="link-text-drop-down" v-on:click="handleSmallMenuClick('services')">Services</p>
          <p class="link-text-drop-down" v-on:click="handleSmallMenuClick('experience')">Experience</p>
          <p class="link-text-drop-down" v-on:click="handleSmallMenuClick('work')">Work</p>
          <p class="link-text-drop-down" v-on:click="handleSmallMenuClick('about')">About</p>
          <!-- <p class="link-text-drop-down" v-on:click="handleSmallMenuClick('resume')">Resume</p> -->
          <p class="link-text-drop-down" v-on:click="handleSmallMenuClick('contact')">Contact</p>
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
  height: 50px;
  width: 100%;
  position: absolute;
  /* box-shadow: 0px 0px 4px 4px rgba(46, 46, 46, 0.5); */
  /* background: white; */
  /* margin: 0; */
  /* position: fixed; */
  z-index: 3;
  /* display: inline-block; */
  text-align: center;
  /* overflow-y: auto; */
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
.fixed-navbar {
  height: 60px;
  width: 100%;
  z-index: 1;
  background: rgba(70, 131, 180);
  position: fixed;
  transition: .3s;
  box-shadow: 0px 0px 4px 4px rgba(46, 46, 46, 0.5);
  animation: fadeDown .3s ease-in-out forwards;
  /* animation: fadeUp .3s ease-in forwards; */
}
@keyframes fadeDown {
  from { transform: translateY(-100px); }
  to { transform: translateY(0); }
}
/* @keyframes fadeUp {
  from { transform: translateY(0); }
  to { transform: translateY(-100px); }
} */
.link {
  margin: 15px 25px;
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
.link:hover, .photo-div:hover {
  cursor: pointer;
}
.link:hover {
  color: lightsalmon;
  /* transform: scale(1.1); */
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
    /* position: fixed; */
    z-index: 3;
    text-align: left;
    overflow-y: visible;
    /* background: rgb(70, 130, 180, .95); */
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
  .link-text-drop-down {
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
  .link-text-drop-down:hover {
    background: linear-gradient(to top, coral, lightsalmon);
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
  .link-text-drop-down {
    padding-left: 120px;
    font-size: 30px;
    margin: 5px 0;
  }
  .link-text-drop-down:hover {
    padding-left: 140px;
  }
}
</style>
