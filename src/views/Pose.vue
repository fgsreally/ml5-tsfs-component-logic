<template>
  <video id="video" :ref="video"></video>
    <div>{{distance}}</div>

</template>

<script>
import { ref } from "vue";
import { getDistance } from "../packages/pose";
export default {
  setup() {
    const video = ref(null);
    let distance = getDistance(video);
    return { video,distance };
  },
};
</script>

<style></style>
