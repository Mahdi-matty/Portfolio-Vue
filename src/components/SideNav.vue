<template>
  <div class="sidenav-wrapper">
    <router-link class="nav-item" to="/"><i class="fa fa-user fa-fw" aria-hidden="true"></i><span class="nav-text">about</span></router-link>
    <router-link class="nav-item" to="/contact"><i class="fas fa-envelope"
        ></i><span class="nav-text">Contact</span></router-link>
    <router-link class="nav-item" to="/resume"><i class="fa fa-file-text fa-fw" aria-hidden="true"></i><span class="nav-text">Resume</span></router-link>
    <router-link class="nav-item" to="portfolio"><i class="fa fa-folder" aria-hidden="true"></i><span class="nav-text">Portfolio</span></router-link>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
</script>

<style scoped>
.sidenav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50px; /* Set the initial width of the side nav */
  background-color: burlywood; /* Set background color */
  overflow-x: hidden;
  transition: width 0.5s; /* Add transition effect to width */
}

.sidenav-wrapper:hover {
  width: 200px; /* Set the expanded width of the side nav on hover */
}

/* Style for router links */
/* .sidenav-wrapper a {
  display: block;
  padding: 16px;
  text-decoration: none;
  color: white;
}

.sidenav-wrapper a:hover {
  background-color: #ddd; 
} */
.nav-item {
  display: flex;
  align-items: center;
  padding: 16px;
  text-decoration: none;
  color: white;
  transition: padding 0.5s;
}

.nav-item:hover {
  padding-left: 24px; /* Increase padding on hover to make space for text */
}

.nav-text {
  margin-left: 10px; /* Add space between icon and text */
  opacity: 0; /* Initially hide the text */
  transition: opacity 0.5s;
}

.nav-item:hover .nav-text {
  opacity: 1; /* Show the text on hover */
}
</style>
