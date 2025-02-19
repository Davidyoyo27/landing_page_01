<template>
  <div class="menu_sticky">
    <a href="https://discord.com/" target="_blank">
      <img :src="discord_logo" alt="iconos menu sticky" />
    </a>
    <a href="https://www.patreon.com/" target="_blank">
      <img :src="patreon_logo" alt="iconos menu sticky" />
    </a>
    <a href="https://es.wiktionary.org/wiki/suscr%C3%ADbete" target="_blank">
      <img :src="suscribe_logo" alt="iconos menu sticky" />
    </a>
    <a href="https://x.com/?lang=es&mx=2" target="_blank">
      <img :src="twitter_logo" alt="iconos menu sticky" />
    </a>
    <a href="https://www.youtube.com/" target="_blank">
      <img :src="youtube_logo" alt="iconos menu sticky" />
    </a>
  </div>
</template>

<script>
import discord_logo from "@/assets/images/socialmedia/discordlogo.png";
import patreon_logo from "@/assets/images/socialmedia/patreonlogo.png";
import suscribe_logo from "@/assets/images/socialmedia/subscribestarlogo.png";
import twitter_logo from "@/assets/images/socialmedia/xlogo.png";
import youtube_logo from "@/assets/images/socialmedia/Youtubelogo.png";

export default {
  setup() {
    return {
      discord_logo,
      patreon_logo,
      suscribe_logo,
      twitter_logo,
      youtube_logo,
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
  height: 50%;
  background: rgba(255, 255, 255, 0.2); /* Fondo semitransparente */
  backdrop-filter: blur(10px); /* Efecto vidrio */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3); /* Sombra lateral */
  padding: 1rem;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 1;
}

/* Efecto al pasar el mouse */
.menu_sticky:hover {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.4);
}

/* Estilos para los iconos dentro del menú */
.menu_sticky img {
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.6);
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
}

/* Efecto al pasar el mouse sobre los iconos */
.menu_sticky img:hover {
  color: black;
  transform: scale(1.2); /* Aumenta el tamaño del icono */
}

img {
  width: 4rem;
  height: 4rem;
}

@media (max-width: 1250px) {
  .menu_sticky {
    padding: 0.3rem;
  }
}

@media (max-width: 800px) {
  .menu_sticky {
    top: 6rem;
    right: 0.5rem;
    width: 6rem;
    height: 45%;
    padding: 0rem;
  }
}

@media (max-width: 460px) {
  .menu_sticky {
    top: 22rem;
    /* right: -2rem; */
    width: 6rem;
    height: 35%;
    padding: 0rem;
  }

  img {
    width: 3rem;
    height: 3rem;
  }
}
</style>
