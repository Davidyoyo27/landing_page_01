<template>
  <nav class="container_menu_principal">
    <!-- recordar crear el logo como un link hacia el inicio de la pagina -->
    <!-- Home -->
    <router-link to="/">
      <img :src="logo" alt="" />
    </router-link>
    <div class="cont_menu">
      <router-link to="/">About</router-link>
      <router-link to="/download">Download</router-link>
      <a :href="linkPatreon" target="_blank" rel="">Patreon</a>
      <a :href="linkWiki" target="_blank" rel="">Wiki</a>
    </div>
    <div class="cont_menu_mob">
      <label class="burger" for="burger">
        <input type="checkbox" id="burger" />
        <span></span>
        <span></span>
        <span></span>
        <div class="menu_options">
          <!-- <router-link to="/">About</router-link> -->
          <!-- <router-link to="/download">Download</router-link> -->
          <a href="/">About</a>
          <a href="/download">Download</a>
          <a :href="linkPatreon" target="_blank" rel="">Patreon</a>
          <a :href="linkWiki" target="_blank" rel="">Wiki</a>
        </div>
      </label>
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

    return {
      logo,
      linkPatreon,
      linkWiki,
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
  /* opacity: 0.5; */
  z-index: 1;
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

  .burger {
    position: relative;
    width: 20px;
    height: 15px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #cacaca;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 4px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 14px;
    left: 4px;
  }

  .burger input:checked ~ .menu_options {
    opacity: 1;
    visibility: visible;
  }

  .menu_options {
    background-color: rgb(0, 0, 0);
    position: absolute;
    width: 15rem;
    height: 20rem;
    top: 4rem;
    right: 0;
    display: flex;
    flex-direction: column;
    opacity: 0;
    visibility: hidden;
    user-select: none;
    transition: opacity 0.5s ease, max-height 0.5s ease, visibility 0.5s ease;
    gap: 2px;
    -webkit-mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .menu_options a {
    position: relative;
    display: flex;
    align-items: center;
    color: #cacaca;
    font-weight: 600;
    right: 4rem;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  .menu_options a:hover {
    color: #ffff;
  }

  img {
    width: 8rem;
  }
}

@media (max-width: 375px) {
  .container_menu_principal {
    /* justify-content: space-between; */
  }

  .container_menu_principal a {
    margin-left: 1rem;
  }

  .menu_options a {
    right: 0rem;
  }

  .cont_menu_mob {
    margin-right: 1rem;
  }
}
</style>