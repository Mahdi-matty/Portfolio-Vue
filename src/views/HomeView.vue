<script setup>
import Mahdi from "../assets/mahdi.jpg";
</script>

<template>
  <main>
    <div class="mainContain">
      <div class="aboutContain">
        <img id="mahdi" :src="Mahdi" />
      </div>
      <div class="restContain">
        <div class="nameContain">
          <h3>Mahdi Mohammadi</h3>
          <p>Full stack developer</p>
        </div>
        <div class="twinContain">
          <div class="educationContain">
            <h3>Education</h3>
            <p>BS.c industrial engineering</p>
            <p>Full stack cooding bootcamp</p>
          </div>
          <div class="skillContain">
            <h3>Skills:</h3>
            <p>React</p>
            <p>Mysql/Sequlize</p>
            <p>Node.js</p>
            <p>Vue.js</p>
            <p>MongoDB</p>
            <p>Express</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.mainContain {
  display: flex;
  padding-left: 100px;
}

.aboutContain {
  margin-right: 30px; 
}


.restContain {
  flex: 1; 
}
.nameContain {
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc; 
}

.twinContain {
  display: flex;
}

.educationContain,
.skillContain {
  flex: 1; 
  margin-right: 30px;
}
</style>
