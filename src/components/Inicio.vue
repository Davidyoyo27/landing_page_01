<template>
  <Carousel></Carousel>
  <Characters></Characters>
  <FAQ></FAQ>
</template>

<script>
import Carousel from "./Carousel.vue";
import Characters from "./Characters.vue";
import FAQ from "./FAQ.vue";

export default {
  components: {
    Carousel,
    Characters,
    FAQ,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>