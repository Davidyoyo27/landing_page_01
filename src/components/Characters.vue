<template>
  <div class="container_characters">
    <img :src="titleCharacters" alt="" />
    <div class="cont_boxs">
      <div class="box">
        <img :src="char" alt="image of section characters" />
      </div>
      <div class="box">
        <img :src="layla" alt="image of section characters" />
      </div>
      <div class="box">
        <img :src="liz" alt="image of section characters" />
      </div>
      <div class="box">
        <img :src="mary" alt="image of section characters" />
      </div>
      <div class="box">
        <img :src="maxy" alt="image of section characters" />
      </div>
      <div class="box">
        <img :src="prim" alt="image of section characters" />
      </div>
      <div class="box">
        <img :src="sasha" alt="image of section characters" />
      </div>
      <div class="box">
        <img :src="yui" alt="image of section characters" />
      </div>
    </div>
  </div>
</template>

<script>
import titleCharacters from "@/assets/images/characters/chartitle.png";
import char from "@/assets/images/characters/Social_char_1080p.png";
import layla from "@/assets/images/characters/Social_layla_1080p.png";
import liz from "@/assets/images/characters/Social_liz_1080p.png";
import mary from "@/assets/images/characters/Social_mary_1080p.png";
import maxy from "@/assets/images/characters/Social_maxy_1080p.png";
import prim from "@/assets/images/characters/Social_prim_1080p.png";
import sasha from "@/assets/images/characters/Social_sasha_1080p.png";
import yui from "@/assets/images/characters/Social_yui_1080p.png";

export default {
  setup() {
    return {
      titleCharacters,
      char,
      layla,
      liz,
      mary,
      maxy,
      prim,
      sasha,
      yui,
    };
  },
};
</script>

<style scoped>
.container_characters {
  width: 100%;
  padding-top: 10rem;
  display: grid;
  place-items: center;
}

.cont_boxs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 4rem;
  max-width: 80rem;
  gap: 4rem;
}

.box {
  background-color: rgb(53, 37, 56);
  /* background-color: rgb(83, 38, 91); */
  /* background-color: rgb(35, 8, 39); */
  padding: 1rem;
  border-radius: 3%;
  box-shadow: 10px 10px 10px 10px rgba(32, 32, 32, 0.3);
  transition: 0.5s all;
}

.box:hover {
  transform: translateY(-20px);
}

.box img {
  width: 15rem;
}
</style>
