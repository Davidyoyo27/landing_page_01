<template>
  <footer>
    <div class="container">
      <router-link to="/">
        <img :src="logo" alt="" />
      </router-link>
      <div class="cont_links">
        <div class="links">
          <a href="https://discord.com/" target="_blank" rel="external">discord</a>
          <router-link to="/privacy_policy">privacy policy</router-link>
        </div>
        <p>© 2025 Ddraigx Productions. All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from "@/assets/images/logo.png";

export default {
  setup() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
footer {
  /* background-color: #000; */
  /* background-color: #1a151c; */
  background-color: #27202a;
  /* background: linear-gradient(90deg, #24003e, #440044, #721689); */
  /* background-color: #24003e; */
  /* background-color: #440044; */
  width: 100%;
  height: 13rem;
  display: flex;
  justify-content: center;
}

img {
  width: 10rem;
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.cont_links {
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cont_links a {
  padding: 0rem 1rem 0rem 1rem;
  color: #cacaca;
  text-decoration: none;
}

.cont_links a:hover {
  color: #ffff;
  text-decoration: underline;
}

p {
  color: #ffff;
  text-align: center;
}

@media (max-width: 800px) {
  .container {
    justify-content: space-around;
  }

  img {
    width: 8rem;
  }
}

@media (max-width: 610px) {
  .container {
    justify-content: center;
  }

  .links {
    display: flex;
    justify-content: center;
  }

  .cont_links {
    height: 40%;
  }

  img {
    display: none;
  }
}

@media (max-width: 460px) {
  .container {
    width: 100%;
  }
}
</style>
