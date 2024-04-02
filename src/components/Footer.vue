<template>
    <div class="footer">
        <a href='https://github.com/Mahdi-matty'><i class="fa-brands fa-github"></i></a>
        <a href='https://mahdimohammadi.netlify.app'><i class="fa-brands fa-react"></i></a>
    </div>
</template>

<style scoped>
.footer {
  position: fixed; /* Set position to fixed */
  bottom: 0; /* Align to the bottom */
  left: 50px; /* Align to the left */
  width: 100%; /* Take up full width */
  background-color: #f8f9fa; /* Add a background color */
  display: flex;
  justify-content: center; /* Center the icons horizontally */
  align-items: center; /* Center the icons vertically */
  padding: 10px; /* Add padding for spacing */
}

.footer a {
  margin: 0 10px; /* Add margin between icons */
}

.footer i {
  font-size: 40px; /* Increase the icon size */
  color: #333; /* Adjust icon color */
}
</style>
