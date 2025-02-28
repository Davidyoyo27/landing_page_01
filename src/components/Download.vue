<template>
  <div class="container_download">
    <div class="title">
      <img :src="banner_downloads" alt="banner_seccion" />
    </div>
    <div class="cont_links">
      <div class="cont_box">
        <img :src="mediafire_img_title" alt="imagen gestor de descarga" />
        <div class="links">
          <h2>MEDIAFIRE LINKS:</h2>
          <div class="link">
            <a href="https://www.mediafire.com/file_premium/68o48tcsapp5vdf/Lucky_Paradox-v0.9.5Final-pc.zip/file" target="_blank" rel="external">
              <img :src="win_linux_img" alt="imagen tipo de dispositivo">
            </a>
          </div>
          <div class="link">
            <a href="https://www.mediafire.com/file_premium/s9gmicxuened0ep/LPX95FINAL.rar/file" target="_blank" rel="external">
              <img :src="android_img" alt="imagen tipo de dispositivo">
            </a>
          </div>
          <div class="link">
            <a href="https://www.mediafire.com/file_premium/oydtioc92t1x4xh/Lucky_Paradox-v0.9.5Final-mac.zip/file" target="_blank" rel="external">
              <img :src="mac_img" alt="imagen tipo de dispositivo">
            </a>
          </div>
          <div class="link">
            <a href="https://www.mediafire.com/file_premium/9lojpbbkoatg3qh/Lucky_Paradox-v0.9.5cFinal-pc.zip/file"target="_blank" rel="external">
              <img :src="compressed_img" alt="imagen tipo de dispositivo">
            </a>
          </div>
        </div>
      </div>
      <div class="cont_box">
        <img :src="drive_img_title" alt="" />
        <div class="links">
          <h2>GOOGLE DRIVE LINKS:</h2>
          <div class="link">
            <a href="https://drive.google.com/file/d/1YGVNt4R_Al81ENL9TwKvrsIG88P9BfbU/view?usp=sharing" target="_blank" rel="external">
              <img :src="win_linux_img" alt="imagen tipo de dispositivo">
            </a>
          </div>
          <div class="link">
            <a href="https://drive.google.com/file/d/1_pvF7NVI7kAkn4HTsCt9e3fIrC-P9pqU/view?usp=sharing" target="_blank" rel="external">
              <img :src="android_img" alt="imagen tipo de dispositivo">
            </a>
          </div>
          <div class="link">
            <a href="https://drive.google.com/file/d/1i5BIFzvf4mL2Q_EAaA6NKqWKu2BczuMZ/view?usp=sharing"target="_blank" rel="external">
              <img :src="mac_img" alt="imagen tipo de dispositivo">
            </a>
          </div>
          <div class="link">
            <a href="https://drive.google.com/file/d/15SrBpMcU8KViwbSYce7Em3mky1bfJDdB/view?usp=sharing" target="_blank" rel="external">
              <img :src="compressed_img" alt="imagen tipo de dispositivo">
            </a>
          </div>
        </div>
      </div>
      <div class="cont_box">
        <img :src="mega_img_title" alt="" />
        <div class="links">
          <h2>MEGA LINKS:</h2>
          <div class="link">
            <a href="https://mega.nz/file/bzJxiC7D#19Ds2KmA1yXqOx3rqU0szHMytuCZ-1riZhHW8C1OQJ4" target="_blank" rel="external">
              <img :src="win_linux_img" alt="imagen tipo de dispositivo">
            </a>
          </div>
          <div class="link">
            <a href="https://mega.nz/file/6z5hjALY#hkLFXeeodOOgkr3I5u3CAeRdRI7qri7d2lHXm9eKd7c" target="_blank" rel="external">
              <img :src="android_img" alt="imagen tipo de dispositivo">
            </a>
          </div>
          <div class="link">
            <a href="https://mega.nz/file/Pq5ESTKA#TA4QdztVe6F_oKeD_4SfpkVwV2LIeXuQYSedITwDMIs" target="_blank" rel="external">
              <img :src="mac_img" alt="imagen tipo de dispositivo">
            </a>
          </div>
          <div class="link">
            <a href="https://mega.nz/file/jmAlCQJA#n2dC9gYfZtxSRFfjifJdnHxQCWkF8O2uYjqSEhXsJ9E" target="_blank" rel="external">
              <img :src="compressed_img" alt="imagen tipo de dispositivo">
            </a>
          </div>
        </div>
      </div>
      <div class="cont_box">
        <div class="links">
          <h2>LINKS:</h2>
          <p>
            If you just prefer to download the new content, and you already have
            version 0.9.4, just unzip and then copy and paste the content into
            the Lucky Paradox game folder, if it asks you to replace, press YES!
            MEGA
          </p>
          <p>UPDATE PATCH:</p>
          <div class="link">
            <a href="https://mega.nz/file/Gmo3CDAb#xHXwWXs9kmnh0RUtlqUqEQ_8B_HdqaS7jxoAbDipqP8" target="_blank" rel="external">
              <img :src="mega_img_title" alt="imagen gestor de descarga" />
            </a>
          </div>
          <div class="link">
            <a href="https://drive.google.com/file/d/1Nxp_PBQt3GGk7HKhmNqnmIR15eTXr1ZQ/view?usp=sharing" target="_blank" rel="external">
              <img :src="drive_img_title" alt="imagen gestor de descarga" />
            </a>
          </div>
          <div class="link">
            <a href="https://www.mediafire.com/file_premium/6gvtfnkct2kvodb/Update95Final.rar/file" target="_blank" rel="external">
              <img :src="mediafire_img_title" alt="imagen gestor de descarga" />
            </a>              
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner_downloads from "@/assets/images/download/version_converted.webp";
import mediafire_img_title from "@/assets/images/download/Mediafirebutton_converted.webp";
import drive_img_title from "@/assets/images/download/Drivebutton_converted.webp";
import mega_img_title from "@/assets/images/download/Megabutton_converted.webp";
import mac_img_title from "@/assets/images/download/BannerMAC_converted.webp";
import windows_img from "@/assets/images/download/Megabutton_converted.webp";
import win_linux_img from "@/assets/images/download/Bannerwindows_converted.webp";
import android_img from "@/assets/images/download/Bannerandroid_converted.webp";
import mac_img from "@/assets/images/download/BannerMAC_converted.webp";
import compressed_img from "@/assets/images/download/Bannercompress_converted.webp";

export default {
  setup() {
    return {
      banner_downloads,
      mediafire_img_title,
      drive_img_title,
      mega_img_title,
      mac_img_title,
      windows_img,
      android_img,
      mac_img,
      win_linux_img,
      compressed_img,
    };
  },
};
</script>

<style scoped>
.container_download {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  background-image: url("@/assets/images/bgprim_converted.webp");
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 300px;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title img {
  width: 50%;
}

.cont_links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 8rem;
  gap: 2rem;
}

.cont_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  width: 22rem;
}

.links {
  margin-top: 2rem;
}

.links img{
  width: 8rem;
}

.link{
  display: flex;
  align-items: center;
  margin: 1rem 0rem .5rem 0rem;
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

@media (max-width: 1400px) {
  .title img {
    width: 70%;
  }
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
  .title {
    min-height: 250px;
  }

  .title img {
    width: 80%;
  }

  .cont_box {
    display: grid;
    place-items: center;
  }

  .links {
    margin: 1rem 0rem 0rem 0rem;
  }
}

@media (max-width: 460px) {
  .title {
    min-height: 150px;
  }

  .title img {
    width: 100%;
  }
}
</style>
