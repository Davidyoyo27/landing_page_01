<template>
  <nav class="container_menu_principal">
    <router-link to="/">
      <img :src="logo" alt="" />
    </router-link>
    <div class="cont_menu">
      <router-link to="/about">About</router-link>
      <router-link to="/download">Download</router-link>
      <a :href="linkPatreon" target="_blank" rel="external">Patreon</a>
      <a :href="linkWiki" target="_blank" rel="external">Wiki</a>
    </div>
    <div class="cont_menu_mob">
      <!-- Botón de menú -->
      <div class="menu-icon" :class="{ open: isOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Menú Móvil -->
      <Transition name="fade">
        <div v-if="isOpen" class="menu-overlay">
          <nav class="menu-nav">
            <router-link to="/" @click="closeMenu" class="menu-item"
              >Home</router-link
            >
            <router-link to="/about" @click="closeMenu" class="menu-item"
              >About</router-link
            >
            <router-link to="/download" @click="closeMenu" class="menu-item"
              >Download</router-link
            >
            <a
              :href="linkPatreon"
              @click="closeMenu"
              target="_blank"
              rel="external"
              class="menu-item"
              >Patreon</a
            >
            <a
              :href="linkWiki"
              @click="closeMenu"
              target="_blank"
              rel="external"
              class="menu-item"
              >Wiki</a
            >
          </nav>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import logo from "@/assets/images/logo.png";

export default {
  setup() {
    const linkPatreon = ref("https://www.google.com");
    const linkWiki = ref("https://www.youtube.com");
    const isOpen = ref(false);

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };

    const closeMenu = () => {
      isOpen.value = false;
    };

    return {
      logo,
      linkPatreon,
      linkWiki,
      isOpen,
      toggleMenu,
      closeMenu,
    };
  },
};
</script>

<style scoped>
.container_menu_principal {
  background: linear-gradient(90deg, #24003e, #440044, #721689);
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
}

img {
  width: 10rem;
}

.cont_menu {
  display: flex;
  align-items: stretch;
  height: 100%;
}

.cont_menu a {
  padding: 0rem 0.8rem 0rem 0.8rem;
  color: #cacaca;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s all;
}

.cont_menu a:hover {
  text-decoration: underline;
  color: #ffff;
  transform: translateY(1em);
}

.burger,
#burger,
span {
  display: none;
}

.cont_menu_mob {
  display: none;
}

@media (max-width: 800px) {
  .cont_menu a {
    display: none;
  }

  .container_menu_principal {
    justify-content: space-between;
  }

  .container_menu_principal a {
    margin-left: 4rem;
  }

  .cont_menu_mob {
    display: flex;
    align-items: center;
    margin-right: 4rem;
  }

  .menu-icon {
    position: fixed;
    z-index: 50;
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }

  .menu-icon span {
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 0.1rem;
    background: white;
    transition: transform 0.3s, opacity 0.3s;
  }

  .menu-icon.open span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }

  .menu-icon.open span:nth-child(2) {
    opacity: 0;
  }

  .menu-icon.open span:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
  }

  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    z-index: 40;
  }

  .close-button {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 2rem;
    background: none;
    color: white;
    border: none;
    cursor: pointer;
  }

  .menu-nav {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .menu-item {
    padding: 10px;
    text-decoration: none;
    color: white;
    border-radius: 4px;
    transition: background 0.3s;
  }

  .menu-item:hover {
    background: gray;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  img {
    width: 8rem;
  }
}

@media (max-width: 460px) {
  .container_menu_principal a {
    margin-left: 1rem;
  }

  .menu_options a {
    right: 0rem;
  }

  .cont_menu_mob {
    margin-right: 3rem;
  }
}
</style>
