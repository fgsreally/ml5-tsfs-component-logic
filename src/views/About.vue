<template>
  <video id="video" :ref="video"></video>
  <div>{{ distance }}</div>
</template>

<script>
import { ref } from "vue";
import { getDistance } from "../packages/pose";
export default {
  setup() {
    const video = ref(null);
    const style = ml5.styleTransfer("data/myModel/", modelLoaded);

    // When the model is loaded
    function modelLoaded() {
      console.log("Model Loaded!");
    }
    // Grab a img element and generate a new image.
    style.transfer(document.getElementById("img"), function(error, result) {
      img.src = result.src;
    });
    return { video, distance };
  },
};
</script>

<style></style>
