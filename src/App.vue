<template>
  <MenuPrincipal></MenuPrincipal>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Inicio from "./components/Inicio.vue";
import MenuPrincipal from "./components/MenuPrincipal.vue";

export default {
  components: {
    MenuPrincipal,
    Inicio,
  },
};
</script>

<style scoped>
.container {
  /* color original como referencia */
  /* background: linear-gradient(135deg, #4b0082, #800080, #ba55d3); */
  /* color del fondo sujeto a cambios */
  background: linear-gradient(90deg, #390062, #660066, #9327ae);
  height: 100%;
  margin-top: 5rem;
}

body {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
</style>