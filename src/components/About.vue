<template>
  <div id="about">
    <div class="header">
      <h1>About</h1>
    </div>
    <div class="inner-content">
      <div class="photo-div" :style="{ 'background-image': 'url(' + this.$store.state.image[this.$store.state.index] + ')' }">
        <p class="photo-text">My interest in coding comes from my insulin pump and continuous glucose monitor, AKA my "artificial pancreas".</p>
      </div>
      <div class="about-text-div">
        <p>I'm a converted software engineer with hands-on experience, formal education, and professional roots in non-profit communications.</p>
        <p>Over the last couple years I've transformed my career, leaving the comfort of my non-profit role in pursuit of a technical skill set, immersing myself in a rigorous coding bootcamp, and landing an internship at a startup company. In the process I've done increasingly complex <a v-on:click="$emit('scrollToSec', 'work')">work</a>, shipped my own code, and gained proficiency with industry-standard technologies (React, Vue, Node), workflows (Agile, Jira, Git), and best practices.</p>
        <p>Although my career has shifted, my heart is still in everything I do. My interest in programming comes from my experience using electronic medical devices (AKA my "<a href='https://drive.google.com/file/d/1D8tp35PoCCbMzuWLTPHFI5oGN7nFhIQ1/view?usp=sharing' target='_blank'>artificial pancreas</a>") as a type one diabetic. Since my health became linked to algorithms, I've invested myself in learning how these life-changing devices work and building apps with the potential to help others.</p>
        <p>Away from the keyboard I enjoy hiking, making music, and watching sports in my hometown of Oakland, CA.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    scrollToSec: {type: Function }
  },
  mounted() {
    setInterval(() => {
      this.$store.state.index < 1 ? this.$store.state.index++ : this.$store.state.index = 0;
    }, 5000);
  }
}
</script>

<style scoped>
h1 {
  padding-top: 75px;
  font-size: 35px;
  font-weight: 300;
  margin: 0;
}
p {
  margin-top: 0;
  font-weight: 400;
  color: var(--body-text);
}
strong {
  font-weight: 900;
}
#about {
  background: white;
  width: 100%;
}
.header {
  width: 100%;
  text-align: center;
}
.inner-content {
  padding: 75px;
  max-width: 700px;
  margin: auto;
}
.photo-div {
  width: 260px;
  height: 319px;
  float: left;
  margin: 0 20px 0px 0;
  overflow: hidden;
  border-radius: 5px;
  background-position: center;
  transition: .3s;
  background-size: cover;
}
.photo-div:hover .photo-text {
  opacity: .9;
  transition: .3s;
}
.photo-text {
  opacity: 0;
  width: 220px;
  height: 100%;
  margin: 0;
  top: 10;
  padding: 45% 20px 0px 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: rgba(70, 131, 180, 0.9);
}
.about-text-div {
  vertical-align: top;
  font-size: 16px;
}
@media (max-width: 1100px) {
  .about-text-div {
    font-size: 16px;
  }
}
@media (max-width: 700px) {
  .inner-content, h1 {
    padding: 30px 15px;
  }
  .photo-div {
    width: 180px;
    height: 220px;
  }
  .photo-text {
    width: 160px;
    font-size: 14px;
    padding: 40% 10px 0px 10px;
  }
}
</style>
