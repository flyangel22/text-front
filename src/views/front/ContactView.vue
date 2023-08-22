<template>
  <v-parallax height="500" src="/contact0-1.jpg">
    <div class="bg-mask1"></div>
    <div class="d-flex flex-column fill-height justify-center align-center text-white" data-aos="zoom-in"
      data-aos-duration="1500" data-aos-delay="300">
      <h1 class="text-h3 font-weight-bold mb-4">
        聯絡我們
      </h1>
      <h2 class="subheading">
        CONTACT US
      </h2>
    </div>
  </v-parallax>
  <v-container class="custom-container">
    <v-row class="my-4">
      <v-col cols="12" class="my-10">
        <v-row class="d-flex">
          <v-col cols="6" class="contact1" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000"><v-img
              src="/contact1-1.jpg" style="position: relative;left:100px;"></v-img></v-col>
          <v-col cols="5" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="400">
            <div class="d-flex justify-center align-center" style="position: relative;top:120px;left:120px;">
              <v-list lines="one" style="background-color: #FFFFFF00;">
                <v-list-item v-for="item in items" :key="item.title" :title="item.title"
                  :prepend-icon="item.icon"></v-list-item>
              </v-list>
            </div>
          </v-col>
          <v-col cols="6" class="contact1" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000"
            data-aos-delay="500">
            <v-img src="/contact2-2.jpg" width="60%" style="position: relative;left:20px;top:80px;"></v-img>
          </v-col>
          <v-col cols="5" class="contact1 " data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000"
            data-aos-delay="600" style="display:flex;align-items: center;"><v-img src="/contact3-3.jpg" height="70%"
              style="position: relative;right:100px; top: 10%;"></v-img></v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="my-4">
        <div class="d-flex justify-end">
          <v-btn append-icon="mdi-chevron-right" variant="text">
            <a href="https://www.google.com/maps/place/700%E5%8F%B0%E5%8D%97%E5%B8%82%E4%B8%AD%E8%A5%BF%E5%8D%80%E5%8C%97%E9%96%80%E8%B7%AF%E4%B8%80%E6%AE%B551%E5%B7%B715%E8%99%9F/@22.990332,120.210804,17z/data=!4m6!3m5!1s0x346e7688b488e3df:0xcc5877283c9fd75!8m2!3d22.9903322!4d120.210804!16s%2Fg%2F11c23vswy9?hl=zh-TW&entry=ttu"
              target="_blank" style="text-decoration: none;">在 Google Map 上查看</a>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" class="text-center mb-8">
        <div style="height: 600px;padding: 0;">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.909990936851!2d120.20822907595638!3d22.990337117529087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7688b488e3df%3A0xcc5877283c9fd75!2zNzAw5Y-w5Y2X5biC5Lit6KW_5Y2A5YyX6ZaA6Lev5LiA5q61NTHlt7cxNeiZnw!5e0!3m2!1szh-TW!2stw!4v1692083989402!5m2!1szh-TW!2stw"
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </v-col>
    </v-row></v-container>
</template>

<script setup>
const items = [
  { title: '0933-663005', icon: 'mdi-phone' },
  { title: '​textueprint@gmail.com', icon: 'mdi-email' },
  { title: '70044 臺南市台南市中西區北門路一段51巷15號', icon: 'mdi-home' },
  { title: '星期一~六/1pm - 8pm (不定時外出，建議提前預約)', icon: 'mdi-clock' }

]
</script>

<style>
.contact1 {
  padding: 0;
  margin: 0;
}
</style>
