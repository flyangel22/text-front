<template>
  <v-parallax height="500" src="/service1-4.jpg">
    <div class="bg-mask1"></div>

    <div class="d-flex flex-column fill-height justify-center align-center text-white" data-aos="zoom-in"
      data-aos-duration="1500" data-aos-delay="300">
      <h1 class="text-h3 font-weight-bold mb-4">
        服務項目
      </h1>
      <h2 class="subheading">
        SERVICE </h2>
    </div>
  </v-parallax>
  <v-container class="custom-container">
    <v-row class="my-4">
      <v-col cols="12">
        <v-card class="my-8" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
          <v-row>
            <v-col cols="6"><v-img src="/service00.jpg" height="500px" cover></v-img>
            </v-col>
            <v-col cols="5" style="margin: auto;padding: 0;">
              <div d-flex flex-column justify-center align-center text-center>
                <v-card-title class="text-h4">
                  課程教學
                </v-card-title>
                <div class="ml-4">
                  Texture工作室除了不定期舉辦版畫工作坊外，平日並無設定任何版種教學，可來信預約時間與版種。兩位負責人剛好專長不同，會依版種來指派老師。
                  課程可以是一次性體驗式、學習完整技法。長度深度由你自己決定。
                </div>
                <v-card-actions class="d-flex justify-end">
                  <v-btn class="ms-2" color="#0e2a47ff" variant="elevated" theme="dark" size="small" to="/activity">
                    More
                  </v-btn>
                </v-card-actions>
              </div>
            </v-col>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="my-8" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
          <v-row>
            <v-col cols="5" style="margin: auto;padding: 0;">
              <div d-flex flex-column justify-center align-center text-center>
                <v-card-title class="text-h4">
                  展覽講座
                </v-card-title>
                <div class="ml-4">
                  Texture 版畫工作室 在2019-2020, 邀請了16位創作者. 來自4個國家, 共13個月, 繞了地球四圈共同創作出16件獨一無二的作品. 我們誠意邀請你一起進入他的們創作路程。
                </div>
                <v-card-actions class="d-flex justify-end">
                  <v-btn class="ms-2" color="#0e2a47ff" variant="elevated" theme="dark" size="small" to="/activity">
                    More
                  </v-btn>
                </v-card-actions>
              </div>
            </v-col>
            <v-col cols="6"><v-img src="/service4.jpg" height="500px" cover></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="my-8" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
          <v-row>
            <v-col cols="6"><v-img src="/service3.jpg" height="500px" cover></v-img>
            </v-col>
            <v-col cols="5" style="margin: auto;padding: 0;">
              <div d-flex flex-column justify-center align-center text-center>
                <v-card-title class="text-h4">
                  換版活動
                </v-card-title>
                <div class="ml-4">
                  Texture版畫工作室抱持著聖誕節的交換禮物般的心情,舉辦『換版EXCHANGING
                  TEXTURE』給來自世界各地的版畫家。藉由交換計畫,讓來自世界各地的版畫創作者互相交
                  流。從2016年開始至今,Texture版畫工作室即將舉辦第五屆『換版』,身為創作者的我們,
                  樂於分享自己的創作給相同的愛好者,也希望能把這份喜悅分享給全世界。
                </div>
                <v-card-actions class="d-flex justify-end">
                  <v-btn class="ms-2" color="#0e2a47ff" variant="elevated" theme="dark" size="small" to="/activity">
                    More
                  </v-btn>
                </v-card-actions>
              </div>
            </v-col>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    reveal: false
  })
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  margin: auto;
  padding: 0;
}

.v-col .v-container {
  padding: 0px;
  margin: 0px;
}

.bg-mask1 {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  color: white;
}
</style>
