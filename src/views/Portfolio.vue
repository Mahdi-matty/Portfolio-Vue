<template>
  <div class="container">
    <ul>
      <div class="imgContain">
        <li>
          <a href="https://makteb.netlify.app">Online School</a>
          <img id="Maktab" :src="Maktab" />
        </li>
      </div>
      <div class="imgContain">
        <li>
          <a href="https://brillamentee.netlify.app">Learn by flashcards</a>
          <img id="brilla" :src="Brilla" />
        </li>
      </div>
      <div class="imgContain">
        <li>
          <a href="https://salut-2-d1e41c6b2557.herokuapp.com/">Social media</a>
          <img id="salut" :src="salut" />
        </li>
      </div>
      <div class="imgContain">
        <li>
          <a href="https://mahdi-matty.github.io/Open-Weather/">Weather app</a>
          <img id="weather" :src="Weather" />
        </li>
      </div>
      <div class="imgContain">
        <li>
          <a href="https://mahdi-matty.github.io/code-Qiez/"
            >Assess yourself by a quiz!</a
          >
          <img id="quiz" :src="Quiz" />
        </li>
      </div>
    </ul>
  </div>
</template>


<script setup>
import Brilla from "../assets/Brillascreen.png";
import Maktab from "../assets/Maktab.png";
import salut from "../assets/salut.png";
import Weather from "../assets/Weather.png";
import Quiz from "../assets/Quiz.png";
</script>


<style scoped>
img {
  height: 300px;
  width: 400px;
  left: 100px;
  padding: 10px;
}
#Maktab:hover{
  height: 70vh;
  width: 70vw;
}
#brilla:hover{
  height: 70vh;
  width: 70vw;
}
#weather:hover{
  height: 70vh;
  width: 70vw;
}
#quiz:hover{
  height: 70vh;
  width: 70vw;
}
#salut:hover{
  height: 70vh;
  width: 70vw;
}
.imgContain {
  border-bottom: 1px dashed greenyellow;
  margin: 5px;
}
.imgContain li{
   margin-bottom: 20px;
  flex: 1 0 0;
  width: calc(66.33% - 20px);
  padding: 10px;
  text-align: center;
}
.imgContain a{
   text-decoration: none;
  color: #333;
  display: block;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.container {
  position: relative;
  display: flex;
}
.container ul{
   display: flex;
  margin-left: 100px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  justify-content: space-between;
}



/* Add any additional styling for your links and images as needed */
</style>