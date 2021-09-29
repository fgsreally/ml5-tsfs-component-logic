<template>
  <video id="video" :ref="video"></video>
  <div>{{ obj[0] }}</div>
</template>

<script>
import { ref } from "vue";
import { getHandpose } from "../packages/hand";
export default {
  setup() {
    const video = ref(null);
    let obj = getHandpose(video);
    return { video, obj };
  },
};
</script>

<style></style>
