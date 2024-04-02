<template>
<div class="sidenav-wrapper">
    <router-link to="/" >Home</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/resume" >Resume</router-link>
    <router-link to="portfolio">Portfolio</router-link>

    <router-view></router-view>
</div>
    
    
</template>

<script>
    
</script>

<style scoped>
    .sidenav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50px; /* Set the initial width of the side nav */
  background-color: #333; /* Set background color */
  overflow-x: hidden;
  transition: width 0.5s; /* Add transition effect to width */
}

.sidenav-wrapper:hover {
  width: 200px; /* Set the expanded width of the side nav on hover */
}

/* Style for router links */
.sidenav-wrapper a {
  display: block;
  padding: 16px;
  text-decoration: none;
  color: white;
}

.sidenav-wrapper a:hover {
  background-color: #ddd; /* Change background color on hover */
}
</style>
