<template>
  <div class="container_privacy">
    <img :src="in_construction_img" alt="">
  </div>
</template>

<script>
import in_construction_img from "@/assets/images/comingsoon_1080p.webp"

export default {
  setup() {
    return {in_construction_img};
  },
};
</script>

<style scoped>
.container_privacy {
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
}

img{
  width: 100%;
}
</style>
