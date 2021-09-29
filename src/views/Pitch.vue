<template>
  <div class="flex p-6">
    <div class="flex-none w-44  h-44 relative">
      <img
        src="../assets/kids-jumpsuit.jpg"
        alt=""
        class="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
    </div>
    <form class="flex-auto pl-6">
      <div class="flex flex-wrap items-baseline">
        <h1 class="w-full flex-none font-semibold mb-2.5">
          Kids Jumpsuit
        </h1>
        <div
          class="text-4xl leading-7 font-bold "
          :class="value ? 'text-purple-600' : 'text-red-600'"
        >
          $39.00
        </div>
        <div class="text-sm font-medium text-gray-400 ml-3">
          In stock
        </div>
      </div>
      <div class="flex items-baseline my-8">
        <div class="space-x-2 flex text-sm font-medium">
          <label>
            <input
              class="w-9 h-9 flex items-center justify-center rounded-full  text-white"
              :class="value ? 'bg-purple-700' : 'bg-red-700'"
              name="size"
              type="radio"
              value="xs"
              checked
            />
            XS
          </label>
          <label>
            <input
              class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200"
              name="size"
              type="radio"
              value="s"
            />
            S
          </label>
          <label>
            <input
              class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200"
              name="size"
              type="radio"
              value="m"
            />
            M
          </label>
          <label>
            <input
              class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200"
              name="size"
              type="radio"
              value="l"
            />
            L
          </label>
          <label>
            <input
              class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200"
              name="size"
              type="radio"
              value="xl"
            />
            XL
          </label>
        </div>
        <div class="ml-3 text-sm text-gray-500 underline">Size Guide</div>
      </div>
      <div class="flex space-x-3 mb-4 text-sm font-semibold">
        <div class="flex-auto flex space-x-3">
          <button
            class="w-1/2 flex items-center justify-center rounded-full  text-white"
            :class="value ? 'bg-purple-700' : 'bg-red-700'"
            type="submit"
          >
            Buy now
          </button>
          <button
            class="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700"
            type="button"
          >
            Add to bag
          </button>
        </div>
        <button
          class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-purple-50"
            :class='value?" text-purple-700":" text-red-700"'
          type="button"
          aria-label="like"
        >
          <svg width="20" height="20" fill="currentColor">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
      <p class="text-sm text-gray-500">
        Free shipping on all continental US orders.
      </p>
    </form>
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted } from "vue";
export default {
  setup() {
    function modelLoaded() {
      console.log("模型加载完成");
    }

    let value = ref(true);
    window.navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then((mediaStream) => {
        const audioContext = new AudioContext();
        // const MicStream = MicStream
        const pitch = ml5.pitchDetection(
          "/model",
          audioContext,
          mediaStream,
          modelLoaded
        );

        // When the model is loaded

        pitch.getPitch((err, frequency) => {
          if (frequency > 100) {
            if (!timer) {
              value = false;
              let timer = setTimeout(() => {
                value = true;
                clearTimeout(timer);
                timer = null;
              }, 2000);
            }
          }
        });
      })
      .catch((err) => {
        // 如果用户电脑没有麦克风设备或者用户拒绝了，或者连接出问题了等
        // 这里都会抛异常，并且通过err.name可以知道是哪种类型的错误
      });
    return { value };
  },
};
</script>

<style></style>
