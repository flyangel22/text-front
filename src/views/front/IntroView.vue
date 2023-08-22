<template>
  <v-row class="d-flex">
    <v-col cols="6" style="padding: 0px; margin: 0px;"><v-parallax height="100vh" src="/intro1.jpg">
      </v-parallax></v-col>
    <v-col cols="6" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="400">
      <div style="width:700px; position: relative;top:400px;left:100px;">
        <h1>Texture
          版畫工作室。</h1>
        <h4>
          人工印刷產生的誤差令每一張成品擁有些微不同，再以“限制印製張數”來區別市場上“無限量”精準一致的機械印刷品，其俱有大量複製性的同時，又兼具「獨特性」。這類的作品我們稱之--版畫。「可複製性」使得藝術是可以被分享的，創作者能擁有數件相同的作品。因此，版畫的複製特性也更能令大眾親近。
        </h4>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="400">
      <div style="width:700px; position: relative;top:400px;left:100px;">
        <h1>我們的理念。</h1>
        <h4>
          Texture
          版畫工作室以版畫藝術推廣為主要目標，透過人生而具備的本能－「感受美」為基礎，追求更精神層面的互動。規劃以具跨領域、獨特性之觀念為主，版印表現方式為輔，進行藝文活動之規劃及推廣，藉此讓人文、城市與思維交織的美好得以體現。
        </h4>
      </div>
    </v-col>
    <v-col cols="6" style="padding: 0px; margin: 0px;"><v-parallax height="100vh" src="/intro2.jpg">
      </v-parallax></v-col>
  </v-row>
  <v-row class="d-flex">
    <v-col cols="6" style="padding: 0px; margin: 0px;"><v-parallax height="100vh" src="/intro3.jpg">
      </v-parallax></v-col>
    <v-col cols="6" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="400">
      <div style="width:700px; position: relative;top:400px;left:100px;">
        <h1>我們的故事。</h1>
        <h4>
          2014年成立，目的是希望建立一種資訊與情感交流的場所，初期主營運項目為工作室專用之版畫個人及團體教學、版畫相關商品印製。
          <p>2016年獨力首辦2016年國際交換計畫-『換版Exchanging
            Texture』，成功吸引世界9國創作者主動報名參加。</p>
          <p>2017年首次邀請旅美日本藝術家Tomomi
            Ono進駐空間，不同的交流規劃，都帶來專業及文化的衝擊，激盪出更好的能量，更完整了資訊與情感交流的意義。</p>
          2020年新年度規劃仍維持「永續互動」為核心目標，規劃「創作者進駐」的第三種對談方式，邀請各領域創作者至本工作室進行短期駐村，也希望讓更多人能進到這個場域與進駐者對談，從無到有的創作過程中，人與人之間也逐漸縮短彼此距離。
        </h4>
      </div>
    </v-col>
  </v-row>
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

const modules = [Navigation, FreeMode, Pagination]
</script>

<style>
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 500px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

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
</style>
