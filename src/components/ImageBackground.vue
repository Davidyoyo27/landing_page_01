<template>
  <!-- <img :src="img_background" alt="" class="img_background" /> -->
  <div class="background_container">
    <div class="carousel">
      <!-- Imagenes -->
      <div class="carousel_container">
        <a
          v-if="objImages[currentIndex].link"
          :href="objImages[currentIndex].link"
          target="_blank"
          rel=""
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
      <button @click="prevImage" class="carousel_btn left">⬅</button>
      <button @click="nextImage" class="carousel_btn right">➡</button>

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
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
// importar las imagenes de la carpeta "news" y asignarles un nombre
import image1 from "@/assets/images/news/image1.png";
import image2 from "@/assets/images/news/image2.png";
import image3 from "@/assets/images/news/image3.png";

export default {
  setup() {
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

    onMounted(() => {
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
    };
  },
};
</script>

<style scoped>
/* .img_background {
  position: absolute;
  width: 100%;
  height: 50vw;
  margin-bottom: 2rem;
  opacity: 0.5;
} */

.background_container {
  background-image: url("@/assets/images/bgprim.png");
  width: 100%;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  position: relative;
  padding: 4rem 0rem 4rem 0rem;
  transition: 0.5s all;
}

/* -------------------------------------------------------- */
.carousel {
  background-color: aqua;
  position: relative;
  /* width: 800px;
  height: 400px; */
  width: 70%;
  /* height: 100%; */
  margin: auto;
  overflow: hidden;
  border-radius: 10px;
}

.carousel_container {
  /* background-color: yellowgreen;ç */
  display: flex;
  justify-content: center;
  align-items: center;
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
/* -------------------------------------------------------- */
@media (max-width: 1050px) {
  .background_container {
    min-height: 400px;
  }
}

@media (max-width: 800px) {
  .background_container {
    min-height: 300px;
    padding: 2rem 0rem 2rem 0rem;
  }
}

@media (max-width: 630px) {
  .background_container {
    /* min-height: 300px; */
    padding: 3rem 0rem 3rem 0rem;
  }

  .carousel {
    width: 100%;
  }

  .background_container {
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
  }
}

@media (max-width: 375px) {
  .background_container {
    /* min-height: 300px; */
    padding: 3rem 0rem 3rem 0rem;
  }

  .carousel {
    width: 100%;
  }
}
</style>