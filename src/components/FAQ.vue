<template>
  <div class="wrapper">
    <div class="title">
      <img :src="FAQ" alt="" />
    </div>
    <div class="container_faq">
      <div v-for="(item, index) in faqList" :key="index" class="faq-item">
        <!-- Pregunta -->
        <p
          class="question"
          @click="toggleAnswer(index)"
          :class="item.isSpoiler === true ? 'is-spoiler' : 'no-spoiler'"
        >
          {{ item.question }}
        </p>

        <!-- Respuesta con transición -->
        <Transition name="slide">
          <p
            v-if="item.isVisible"
            class="answer"
            v-html="formatAnswer(item.answer)"
          ></p>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import FAQ from "@/assets/images/FAQ/FAQ.png";

export default {
  setup() {
    const faqList = ref([
      {
        question:
          "What is the difference between the Patreon version and the free version?",
        answer:
          "The versions released for patrons are an early access. When the full update is completed, is released free after one week.",
        isVisible: false,
        isSpoiler: false,
      },
      {
        question:
          "When the new update is released, can I continue with my saved game from the previous version?",
        answer:
          "Yes, saves from old versions are compatible, so you can continue from where you left off. The only exception is the Android version, since in that case you have to make a manual backup of your saved games.",
        isVisible: false,
        isSpoiler: false,
        nameLink: "yutup",
      },
      {
        question: "How can I update the on Android without losing my saves?",
        answer:
          "Because of the security system on android you have to follow a few steps. First, you have to make a backup of your saves, then you have to uninstall the game LPX then install the new version of the game and make sure that you copy and paste the backup you made it on the same route. Remember to always have a backup of your saves.",
        isVisible: false,
        isSpoiler: false,
      },
      {
        question: "Where are the saves of the game on Android?",
        answer:
          "The saves files are in the next route: Documents > RenPy-Saves > lucky.paradox",
        isVisible: false,
        isSpoiler: false,
      },
      {
        question: "Where are the saves of the game on Windows?",
        answer:
          "The saves files are in the next route: Lucky paradox > Game > Saves",
        isVisible: false,
        isSpoiler: false,
      },
      {
        question: "Where are the saves of the game on MAC?",
        answer:
          "The saves files are in the next route: ~/Library/RenPy/game_directory, Also remember to show hidden folders it has to be turned on.",
        isVisible: false,
        isSpoiler: false,
      },
      {
        question: "When is going to be released the next free update?",
        answer:
          " The free version will be available after each big update, we announce this from time to time in our Patreon.",
        isVisible: false,
        isSpoiler: false,
      },
      {
        question: "Where do I get the other scenes of the gallery?",
        answer:
          "Besides the main story, there are secondary scenes with each girl, some events appear when performing certain activities that are detailed in the character log. Others may be shower events... You can tell if someone is taking a bath by hearing the sound of the shower.",
        isVisible: false,
        isSpoiler: false,
      },
      {
        question:
          "The game just crashed, after a certain event behind the door, should this happen?",
        answer:
          "Yes, it’s part of the game. When this happens, small variations in the story will be unlocked, in addition to unlocking some secret events. It is a permanent change, so these variations will also happen when playing a new game.",
        isVisible: false,
        isSpoiler: false,
      },
      {
        question: "There will be NTR?",
        answer: " No, never. Please do not insist.",
        isVisible: false,
        isSpoiler: false,
      },
      {
        // ALERTA DE SPOILER
        question: "I’m missing some scenes. How do I get them?",
        answer:
          "If you are potentially missing a scene with Prim, Charlotte, Maxy/Mary it is possible it is a shower scene. They are random occurrences so check the shower to experience it. Also have the sound on as you can hear the water running if someone is in it. Prim and Charlotte take showers in the morning while Maxy and Mary take one in the evening. Build your relationship with the specific girl to be able to see the scene. Other scenes you might have missed with the main girls could be their interactions. This is the “chat” “go to beach” etc. and you can check if new events with those are available on the character page. Continue their story to unlock more.",
        isVisible: false,
        isSpoiler: true,
      },
      {
        // ALERTA DE SPOILER
        question: "How do I unlock side characters?",
        answer:
          "Side characters will become available as you progress more with certain characters storylines. If under secondary it says “available” then there is more story to see. Once it says “completed” then you have seen everything for that characters story. Also remember you train with Kaede first then Shizuka will become available once you have completed with Kaede",
        isVisible: false,
        isSpoiler: true,
      },
      {
        question: "Where is the gallery?",
        answer:
          "Gallery becomes available as you get farther in the story. It will be an icon at the bottom of the screen in your (Lucky’s) room.",
        isVisible: false,
        isSpoiler: false,
      },
      {
        question: "My old saves are larger in the saves page what do I do?",
        answer:
          "If you save over it the save will go back to normal. This is because of the change in adding more save slots from the older version.",
        isVisible: false,
        isSpoiler: false,
      },
      {
        // link en la respuesta
        question: "I downloaded the Android version but it doesn't work",
        answer:
          "We have a guide of Visita nuestro how to install Android version here : https://www.patreon.com/posts/82619463 anyways we have more information about it in our Discord",
        isVisible: false,
        isSpoiler: false,
      },
    ]);

    // funcion que abre la caja de texto con la respuesta a la pregunta
    const toggleAnswer = (index) => {
      faqList.value[index].isVisible = !faqList.value[index].isVisible;
    };

    // función para convertir URLs en enlaces clickeables
    const formatAnswer = (text) => {
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      return text.replace(
        urlRegex,
        '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
      );
    };

    return {
      FAQ,
      faqList,
      toggleAnswer,
      formatAnswer,
    };
  },
};
</script>

<style scoped>
.is-spoiler {
  /* Sombra roja difuminada */
  box-shadow: 0 0 10px 5px rgba(255, 0, 0, 0.5);
}

.no-spoiler {
  border: none;
}

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-top: 10rem;
}

.container_faq {
  margin: 2rem 0rem 8rem 0rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 65vw;
}

.faq-item {
  padding: 0.6rem;
}

.question {
  background: linear-gradient(90deg, #24003e, #440044, #9327ae);
  font-weight: bold;
  cursor: pointer;
  color: #cacaca;
  padding: 0.3rem 0rem 0.3rem 1rem;
  /* 10px */
  /* border-radius: 5px;   */
}

.question:hover {
  text-decoration: underline;
}

.answer {
  margin-top: 5px;
  padding: 10px;
  border-left: 4px solid #007bff;
  background-color: #f0f8ff;
}

/* Transición de deslizamiento */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  /* Ajusta según la altura del texto */
  max-height: 200px;
  opacity: 1;
}

@media (max-width: 800px) {
  .container_faq {
    width: 85vw;
  }

  img {
    width: 8rem;
  }
}

@media (max-width: 460px) {
  .container_faq {
    width: 90vw;
  }
}
</style>
