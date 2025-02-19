<template>
  <div class="background_container">
    <div v-if="isLoaded" class="carousel">
      <!-- Imagenes -->
      <div class="carousel_container">
        <a
          v-if="objImages[currentIndex].link"
          :href="objImages[currentIndex].link"
          target="_blank"
          rel="external"
        >
          <img
            :src="objImages[currentIndex].image"
            alt="Imagen del carrusel"
            class="carousel_image"
          />
        </a>
        <img
          v-else
          :src="objImages[currentIndex].image"
          alt="Imagen del carrusel"
          class="carousel_image_no_link"
        />
      </div>

      <!-- Controles -->
      <button @click="prevImage" class="carousel_btn left">&#10094;</button>
      <button @click="nextImage" class="carousel_btn right">&#10095;</button>

      <!-- Indicadores -->
      <div class="indicators">
        <span
          v-for="(slide, index) in objImages"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="goToImage(index)"
        >
        </span>
      </div>
    </div>
    <div class="cont_buttons">
      <a href="https://news.google.com/home?hl=es-419&gl=CL&ceid=CL:es-419" target="_blank" rel="external">
        <img :src="button_patreon" alt="" class="img_patron">
      </a>
      <router-link to="/download" class="download_game">DOWNLOAD GAME</router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
// importar las imagenes de la carpeta "news" y asignarles un nombre
import image1 from "@/assets/images/news/image1.png";
import image2 from "@/assets/images/news/image2.png";
import image3 from "@/assets/images/news/image3.png";
import button_patreon from "@/assets/images/socialmedia/patreon-1-892x610.png";

export default {
  setup() {
    const isLoaded = ref(false);
    // luego agregar en esta parte las imagenes que se deseen mostrar en el carrusel
    // y su link si es que esta lo tiene
    const objImages = ref([
      {
        // EJ: imagen con link
        image: image1,
        link: "https://google.com",
      },
      // EJ: imagen sin link
      { image: image2 },
      {
        image: image3,
        link: "https://github.com",
      },
    ]);

    const currentIndex = ref(0);
    let interval = null;

    // Función para avanzar
    const nextImage = () => {
      currentIndex.value = (currentIndex.value + 1) % objImages.value.length;
    };

    // Función para retroceder
    const prevImage = () => {
      currentIndex.value =
        (currentIndex.value - 1 + objImages.value.length) %
        objImages.value.length;
    };

    // Ir a una imagen específica
    const goToImage = (index) => {
      currentIndex.value = index;
    };

    // Iniciar el auto-slide
    const startAutoSlide = () => {
      interval = setInterval(nextImage, 5000);
    };

    // Detener el auto-slide
    const stopAutoSlide = () => {
      clearInterval(interval);
    };

    const preloadImages = () => {
      let loadedCount = 0;
      objImages.value.forEach((item) => {
        const img = new Image();
        img.src = item.image;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === objImages.value.length) {
            isLoaded.value = true;
          }
        };
      });
    };

    onMounted(() => {
      preloadImages();
      startAutoSlide();
    });

    onUnmounted(() => {
      stopAutoSlide();
    });

    return {
      objImages,
      currentIndex,
      nextImage,
      prevImage,
      goToImage,
      startAutoSlide,
      isLoaded,
      button_patreon,
    };
  },
};
</script>

<style scoped>
.background_container {
  background-image: url("@/assets/images/bgprim.png");
  width: 100%;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 4rem 0rem 4rem 0rem;
  transition: 0.5s all;
}

.carousel {
  position: relative;
  width: 70%;
  margin: auto;
  overflow: hidden;
  border-radius: 10px;
}

.carousel_container {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out;
}

.carousel_container a {
  display: block;
  width: 100%;
  height: 100%;
}

.carousel_image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
}

.carousel_image_no_link {
  width: 100%;
  height: 100%;
  margin-bottom: 0.25rem;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
}

.carousel_btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
}

.carousel_btn.left {
  left: 1rem;
}

.carousel_btn.right {
  right: 1rem;
}

.carousel_btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.indicators span {
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.indicators span.active {
  background-color: white;
}

.cont_buttons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 3rem;
  gap: 3rem;
}

.cont_buttons .download_game {
  --color: #560bad;
  font-family: inherit;
  display: inline-block;
  width: 12em;
  line-height: 2.5em;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color 0.5s;
  font-size: 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  color: rgb(254, 33, 246);
  background-color: rgba(77, 29, 84, 0.5);
  text-decoration: none;
  text-align: center;
  z-index: 1;
}

.img_patron{
  display: flex;
  width: 20rem;
  height: 6rem;
  box-shadow: 7px 10px 10px 1px rgba(255, 255, 255, 0.2);
}

.cont_buttons .download_game:before {
  content: "";
  position: absolute;
  background: var(--color);
  height: 120px;
  width: 400px;
  border-radius: 50%;
  z-index: -1;
}

a:hover {
  color: #fff;
}

a:before {
  top: 100%;
  left: 100%;
  transition: all 0.7s;
}

a:hover:before {
  top: -2rem;
  left: -2rem;
}

a:active:before {
  background: #3a0ca3;
  transition: background 0s;
}

@media (max-width: 1050px) {
  .background_container {
    min-height: 400px;
  }

  .cont_buttons button {
    font-size: 1.3rem;
  }
}

@media (max-width: 800px) {
  .background_container {
    min-height: 300px;
    padding: 2rem 0rem 2rem 0rem;
  }

  .cont_buttons button {
    font-size: 1.1rem;
  }
}

@media (max-width: 559px) {
  .cont_buttons {
    display: grid;
  }

  .carousel {
    width: 85%;
  }
}

@media (max-width: 460px) {
  .background_container {
    min-height: 500px;
    padding: 3rem 0rem 3rem 0rem;
  }

  .carousel {
    width: 100%;
  }

  .cont_buttons {
    display: flex;
    flex-direction: column;
  }

  /* .download_game */
  .cont_buttons a {
    margin-left: 2rem;
  }
}
</style>
