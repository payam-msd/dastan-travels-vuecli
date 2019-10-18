<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <loadingSVG />
  </div>
</template>

<script>
import loadingSVG from "@/components/LoadingSVG.vue";
export default {
  name: "SplashScreen",
  props: ["isLoading"],
  components: {
    loadingSVG
  }
};
</script>

<style scoped>
.loader {
  background-color: #fff;
  bottom: 0;
  color: white;
  display: block;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 100;
}

.fadeout {
  animation: fadeout 1s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
