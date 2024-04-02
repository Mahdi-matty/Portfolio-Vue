<template>
  <div>
    <div class="iconResume">
      <i class="fab fa-linkedin"
        ><a href="https://www.linkedin.com/in/mahdi-mohammadi-55b63162"
          >linkedin</a
        ></i
      >
    </div>

    <div class="iconResume">
      <i class="fas fa-envelope"
        ><a href="mailto:mmiq69@gmail.com">mmiq69@gmail.com</a></i
      >
    </div>

    <div class="iconResume">
      <BriefcaseIcon class="h-1 w-1 brifIcon" />
      <a href="mahdimohammadi.netlify.app/">Portfolio</a>
    </div>
    <div class="iconResume">
      <LocationMarkerIcon class="locationIcon" />
      <span>Toronto-Ontario</span>
    </div>
    <div class="iconResume">
      <phoneIcon class="phoneIcone" />
      <a href="tel:647-785-6674">647-785-6674</a>
    </div>
  </div>
</template>


<script setup>
import { PhoneIcon } from "@heroicons/vue/solid";
import { LocationMarkerIcon } from "@heroicons/vue/solid";
import { BriefcaseIcon } from "@heroicons/vue/solid";
import "@fortawesome/fontawesome-free/css/all.css";
</script>

<style scoped>
.iconResume{
  padding: 10px;
}
.brifIcon {
  height: 20px;
  width: 20px;
}
.phoneIcone {
  height: 20px;
  width: 20px;
}
.locationIcon {
  height: 20px;
  width: 20px;
}
</style>
