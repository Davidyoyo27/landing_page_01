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


<!-- SUBEEE LA PAGINA A NETLIFY PARA VERIFICAR QUE TODO ESTE CORRECTO EN CUANTO AL RESPONSIVE DE LA PAGINA Y SU TAMAÑO TAMBIEN -->
<!-- RECUERDA INTENTARLO PRIMERO POR CODIGO, CONECTARLO A UN REPO Y LUEGO ESTE MISMO SUBIRLO A NETLIFY -->