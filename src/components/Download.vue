<template>
  <div class="container_download">
    <div class="title">
      <img :src="titleCharacters" alt="" />
    </div>
    <div class="cont_links">
      <div class="cont_box">
        <img :src="char" alt="" />
        <div class="links">
          <h2>MEDIAFIRE LINKS:</h2>
          <p>
            WIN/LINUX:<a
              href="https://www.mediafire.com/file_premium/68o48tcsapp5vdf/Lucky_Paradox-v0.9.5Final-pc.zip/file"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
          <p>
            ANDROID:<a
              href="https://www.mediafire.com/file_premium/s9gmicxuened0ep/LPX95FINAL.rar/file"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
          <p>
            MAC:<a
              href="https://www.mediafire.com/file_premium/oydtioc92t1x4xh/Lucky_Paradox-v0.9.5Final-mac.zip/file"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
          <p>
            COMPRESSED:<a
              href="https://www.mediafire.com/file_premium/9lojpbbkoatg3qh/Lucky_Paradox-v0.9.5cFinal-pc.zip/file"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
        </div>
      </div>
      <div class="cont_box">
        <img :src="layla" alt="" />
        <div class="links">
          <h2>GOOGLE DRIVE LINKS:</h2>
          <p>
            WIN/LINUX:<a
              href="https://drive.google.com/file/d/1YGVNt4R_Al81ENL9TwKvrsIG88P9BfbU/view?usp=sharing"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
          <p>
            ANDROID:<a
              href="https://drive.google.com/file/d/1_pvF7NVI7kAkn4HTsCt9e3fIrC-P9pqU/view?usp=sharing"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
          <p>
            MAC:<a
              href="https://drive.google.com/file/d/1i5BIFzvf4mL2Q_EAaA6NKqWKu2BczuMZ/view?usp=sharing"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
          <p>
            COMPRESSED:<a
              href="https://drive.google.com/file/d/15SrBpMcU8KViwbSYce7Em3mky1bfJDdB/view?usp=sharing"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
        </div>
      </div>
      <div class="cont_box">
        <img :src="liz" alt="" />
        <div class="links">
          <h2>MEGA LINKS:</h2>
          <p>
            WIN/LINUX:<a
              href="https://mega.nz/file/bzJxiC7D#19Ds2KmA1yXqOx3rqU0szHMytuCZ-1riZhHW8C1OQJ4"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
          <p>
            ANDROID:<a
              href="https://mega.nz/file/6z5hjALY#hkLFXeeodOOgkr3I5u3CAeRdRI7qri7d2lHXm9eKd7c"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
          <p>
            MAC:<a
              href="https://mega.nz/file/Pq5ESTKA#TA4QdztVe6F_oKeD_4SfpkVwV2LIeXuQYSedITwDMIs"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
          <p>
            COMPRESSED:<a
              href="https://mega.nz/file/jmAlCQJA#n2dC9gYfZtxSRFfjifJdnHxQCWkF8O2uYjqSEhXsJ9E"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
        </div>
      </div>
      <div class="cont_box">
        <img :src="mary" alt="" />
        <div class="links">
          <h2>LINKS:</h2>
          <p>
            If you just prefer to download the new content, and you already have
            version 0.9.4, just unzip and then copy and paste the content into
            the Lucky Paradox game folder, if it asks you to replace, press YES!
            MEGA
          </p>
          <p>MEGA LINKS</p>
          <p>
            UPDATE PATCH:<a
              href="https://mega.nz/file/Gmo3CDAb#xHXwWXs9kmnh0RUtlqUqEQ_8B_HdqaS7jxoAbDipqP8"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
          <p>GOOGLE DRIVE LINKS</p>
          <p>
            UPDATE PATCH:<a
              href="https://drive.google.com/file/d/1Nxp_PBQt3GGk7HKhmNqnmIR15eTXr1ZQ/view?usp=sharing"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
          <p>MEDIAFIRE LINKS</p>
          <p>
            UPDATE PATCH:<a
              href="https://www.mediafire.com/file_premium/6gvtfnkct2kvodb/Update95Final.rar/file"
              target="_blank"
              rel="external"
              >Ingresar al link</a
            >
          </p>
        </div>
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

export default {
  setup() {
    return {
      titleCharacters,
      char,
      layla,
      liz,
      mary,
    };
  },
};
</script>

<style scoped>
.container_download {
  min-height: 100vh;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-bottom: 3rem;
}

.cont_links {
  width: 60%;
  margin-bottom: 8rem;
}

.cont_box {
  display: flex;
  margin-bottom: 2rem;
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4rem;
}

a {
  margin-left: 0.5rem;
  color: #009dff;
}

h2,
p {
  color: #cacaca;
  margin-bottom: 0.5rem;
}

.cont_box img {
  width: 15rem;
}

@media (max-width: 1250px) {
  .cont_links {
    width: 80%;
  }
}

@media (max-width: 1000px) {
  .cont_links {
    width: 90%;
  }
}

@media (max-width: 800px) {
  .cont_box {
    display: grid;
    place-items: center;
  }

  .links {
    margin: 1rem 0rem 0rem 0rem;
  }

  .cont_box img {
    width: 13rem;
  }
}

@media (max-width: 460px) {
  .cont_box img {
    width: 10rem;
  }
}
</style>
