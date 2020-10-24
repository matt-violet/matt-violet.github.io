<template>
  <div class="stats-div">
    <div class="header">
      <h1>Experience</h1>
    </div>
    <div class="first-stats">
      <div class="stat">
        <p class="num">3</p>
        <p class="num-description">years of developer experience</p>
      </div>
      <div class="stat">
        <p class="num">2</p>
        <p class="num-description">professional developer roles worked</p>          
      </div>
    </div>
    <div class="second-stats">
      <div class="stat">
        <p class="num">1,000+</p>
        <p class="num-description">hours of Computer Science curriculum</p>
      </div>
      <div class="stat">
        <p class="num">5</p>
        <p class="num-description">years of graphic design</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats'
}
</script>

<style scoped>
h1 {
  padding-bottom: 75px;
  font-size: 35px;
  font-weight: 900;
  color: white;
  margin: 0;
}
.stats-div {
  padding: 75px 0;
  position: relative;
  text-align: center;
}
.first-stats {
  display: inline-block;
  position: relative;
}
.second-stats {
  display: inline-block;
  position: relative;
}
.stat {
  vertical-align: top;
  margin: 0 20px;
  width: 160px;
  display: inline-block;
  position: relative;
  text-align: center;
}
.num {
  margin: 0;
  font-size: 40px;
  font-weight: 300;
  color: white;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
.num-description {
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 0;
  color: white;
}
@media (max-width: 800px) {
  .stat {
    width: 120px;
  }
  .num {
    font-size: 38px;
  }
  .num-description {
    font-size: 13px;
  }
}
@media (max-width: 639px) {
  .stats-div {
    padding: 50px 0;
  }
  .second-stats {
    padding-top: 35px;
  }
}
</style>
