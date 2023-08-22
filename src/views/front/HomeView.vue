<template>
  <div style="width:100vw; height:100vh; margin: 0; margin: 0;">
    <section style="position: relative; margin: 0; margin: 0;">
      <video src="/newprint12.mp4" autoplay loop style="width: 100vw;object-fit: cover;
  height: 100vh;">
      </video>
      <div class="bg-mask">
        <div class="title"><img src="/logo1.png" style="scale: 80%;"></div>
        <v-btn @click="scrollToDown" icon="mdi-chevron-down" variant="text" size="x-large" class=" chevrondown"></v-btn>
      </div>
    </section>
  </div>
  <div style="background-color: #0e2a47ff; height: 600px; position: relative;">
    <img src="/contact0.jpg" style="height:300;width:500px;position: absolute;top: 18%; left: 30%;" data-aos="fade-down"
      data-aos-duration="1500" data-aos-delay="200">

    <div
      style="border-style:solid;padding: 10px; border-width: 1px;  width: 400px; position: absolute;bottom: 35%; right: 24%; color: white;"
      data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
      <h1>什麼是版畫?</h1>
      <p>
        版畫是一個統稱，指的是運用傳統印刷的技術所創作的藝術作品，具有間接性、複數性的特色，以印刷原理來分類的話，可以簡單的分成凸版、凹版、平版、孔版四個大類，各版種還可細分各種不同的製作技法。近代因電腦科技的發達，還多了數位版這一個分類。
      </p>
    </div>
  </div>

  <v-container class="custom-container my-16 text-center" data-aos="fade-down" data-aos-duration="1500"
    data-aos-delay="200">
    <h1>— 最新活動 —</h1>
    <div class="my-16">
      <swiper :navigation="true" :slidesPerView="3" :spaceBetween="10" :freeMode="true" :loop="true" :modules="modules"
        class="mySwiper">
        <swiper-slide v-for="product in products" :key="product._id">
          <v-col cols="12">
            <ProductCard v-bind="product">
            </ProductCard>
          </v-col>
        </swiper-slide>
      </swiper>
    </div>
  </v-container>

  <div style="height: 300px; margin: 0; padding: 0;">
    <v-parallax height="300" src="/home2.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white" data-aos="zoom-in"
        data-aos-duration="1500" data-aos-delay="300">
        <h1 class="text-h4 font-weight-bold">
          關於我們
        </h1>
      </div>
    </v-parallax>
  </div>
  <div style="background-color: #0e2a47ff; height: 600px; position: relative;">
    <img src="/profile1.jpg" style="width:400px;position: absolute;top: 18%; right: 25%;" data-aos="fade-down"
      data-aos-duration="1500" data-aos-delay="200">

    <div style="width: 500px; position: absolute;bottom: 20%; left: 25%; color: white;" data-aos="fade-right"
      data-aos-duration="1500" data-aos-delay="300">
      <div class="title my-4"><img src="/logo1.png"></div>
      <h3>
        以版畫藝術推廣為主要目標，透過人生而具備的本能－「感受美」為基礎，追求更精神層面的互動。規劃以具跨領域、獨特性之觀念為主，版印表現方式為輔，進行藝文活動之規劃及推廣，藉此讓人文、城市與思維交織的美好得以體現。
      </h3>
    </div>
    <v-btn class="ms-2" color="white" variant="outlined" theme="dark" size="small" to="/introduce"
      style="position: absolute;bottom: 15%; left: 45%;" data-aos="fade-right" data-aos-duration="1500"
      data-aos-delay="300">
      More
    </v-btn>
  </div>

  <div style=" position: relative;height: 1200px; ">
    <div style="background-color:#0e2a47ff; height: 500px;">
      <v-container class="custom-container text-center" style=" position: absolute;left: 15%; " data-aos="fade-down"
        data-aos-duration="1500" data-aos-delay="200">
        <v-row>
          <v-col cols="4"><v-img src="/home4-4.jpg" cover :height="300"></v-img></v-col>
          <v-col cols="8"><v-img src="/home4-6.jpg" cover :height="300"></v-img></v-col>
          <v-col cols="6"><v-img src="/service1-3.jpg" cover :height="300"></v-img></v-col>
          <v-col cols="6"><v-img src="/home4-5.jpg" cover :height="300"></v-img></v-col>
          <v-col cols="8"><v-img src="/home4-2.jpg" cover :height="400"></v-img></v-col>
          <v-col cols="4"><v-img src="/home4-3.jpg" cover :height="400"></v-img></v-col>
          <v-col cols="12"> <v-btn @click="scrollToTop" prepend-icon="mdi-chevron-up" variant="text"
              size="x-large">回到頂部</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>

  </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Navigation, FreeMode, Pagination } from 'swiper/modules'
import { api } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'

const modules = [Navigation, FreeMode, Pagination]
const createSnackbar = useSnackbar()

const products = ref([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.value.push(...data.result)
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})()

</script>
<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 添加平滑滾動效果
      })
    },
    scrollToDown() {
      window.scrollTo({
        top: 1000,
        behavior: 'smooth' // 添加平滑滾動效果
      })
    }
  }
}
</script>

<style>
.bg-mask {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(rgba(14, 42, 72, 0.7), rgba(0, 0, 0, .5));
  color: white;
}

.title {
  position: absolute;
  bottom: 80px;
  right: 80px;
  scale: 120%;
}

.chevrondown {
  position: absolute;
  bottom: 8%;
  right: 48%;
  scale: 150%;
}

html,
body {
  position: relative;
  height: 100%;
}

body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(var(--swiper-navigation-size) / 500 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0e2a47ff;
}
</style>
