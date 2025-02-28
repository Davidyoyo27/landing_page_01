<template>
  <div class="menu-icon" :class="{ active: isActive }" @click="toggleMenu">
    <div></div>
  </div>
  <div class="menu_sticky" :class="{ hidden: !isActive }">
    <a href="https://discord.com/invite/vb33F5v" target="_blank">
      <img :src="discord_logo" alt="iconos menu sticky" />
    </a>
    <a href="https://www.patreon.com/Stawer" target="_blank">
      <img :src="patreon_logo" alt="iconos menu sticky" />
    </a>
    <a href="https://subscribestar.adult/stawer" target="_blank">
      <img :src="suscribe_logo" alt="iconos menu sticky" />
    </a>
    <a href="https://twitter.com/Stawer7 " target="_blank">
      <img :src="twitter_logo" alt="iconos menu sticky" />
    </a>
    <a href="https://www.youtube.com/@Stawer7" target="_blank">
      <img :src="youtube_logo" alt="iconos menu sticky" />
    </a>
  </div>
</template>

<script>
import { ref } from "vue";
import discord_logo from "@/assets/images/socialmedia/discordlogo_converted.webp";
import patreon_logo from "@/assets/images/socialmedia/patreonlogo_converted.webp";
import suscribe_logo from "@/assets/images/socialmedia/subscribestarlogo_converted.webp";
import twitter_logo from "@/assets/images/socialmedia/xlogo_converted.webp";
import youtube_logo from "@/assets/images/socialmedia/Youtubelogo_converted.webp";

export default {
  setup() {
    // Estado reactivo para alternar la clase "active"
    const isActive = ref(false);

    // Función para alternar el estado del menú
    const toggleMenu = () => {
      isActive.value = !isActive.value;
    };

    return {
      discord_logo,
      patreon_logo,
      suscribe_logo,
      twitter_logo,
      youtube_logo,
      isActive,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
.menu_sticky {
  position: fixed;
  top: 10rem;
  right: 1rem;
  width: 6rem;
  height: auto;
  max-height: 50vh;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0) transparent;
  z-index: 1;
}

.menu_sticky:hover {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.4);
}

.menu_sticky img {
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.6);
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
}

.menu_sticky img:hover {
  color: black;
  transform: scale(1.2);
}

img {
  width: 4rem;
  height: 4rem;
}

a {
  padding: 0.5rem 0rem 0.5rem 0rem;
}

.menu-overlay::-webkit-scrollbar {
  width: 6px;
}

.menu-overlay::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}

.menu-overlay::-webkit-scrollbar-track {
  background: transparent;
}

@media (max-width: 1250px) {
  .menu_sticky {
    padding: 0.3rem;
  }
}

@media (max-width: 800px) {
  .menu_sticky {
    top: 22rem;
    padding: 0rem;
  }

  img {
    width: 3rem;
    height: 3rem;
  }
}

@media (max-width: 460px) {
  /* Contenedor del botón */
  .menu-icon {
    position: fixed;
    top: 8rem;
    right: 0;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transform: translateY(-50%);
    transition: transform 0.3s ease-in-out;
  }

  /* Líneas del icono (tres barras verticales) */
  .menu-icon div {
    width: 2rem;
    height: 2rem;
    border-radius: 15px 0px 0px 15px;
    background: #fff;
    transition: background 0.3s, transform 0.3s;
  }

  /* Efecto al pasar el mouse */
  .menu-icon:hover div {
    background: #909090;
  }

  /* Estado activo para indicar selección */
  .menu-icon.active div:nth-child(1) {
    transform: scaleY(1.5);
  }

  .menu-icon.active div:nth-child(3) {
    transform: scaleY(1.5);
  }

  .hidden {
    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
  }
}
</style>
