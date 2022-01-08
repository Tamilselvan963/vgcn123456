<template>
  <v-app id="inspire">
    <v-app-bar
      app
      height="115px"
      class=""
      style="padding-left: 0px; padding-right: 83px"
      src="../assets/91ce552608ac76b33642d4a22058ac93.gif"
      flat
    >
      <!-- <v-container class="py-0 pa-0 pl-0 py-0 fill-height">
        <img src="../assets/VGC-Logo_Final1.png" height="115px" />
        <div class="white--text text-h6">
          VGCN<br />
          <div class="white--text text-h6">Frist International Crypto</div>
        </div>
        <v-spacer></v-spacer>
        <v-tabs class="white--text tabs">
          <v-tabs-slider color="blue"></v-tabs-slider>
          <v-tab class="white--text">Home</v-tab>
          <v-tab class="white--text">About us</v-tab>
          <v-tab class="white--text">White Pape</v-tab>
          <v-tab class="white--text">Team</v-tab>
          <v-tab class="white--text">RoadMap</v-tab>
          <v-tab class="white--text">Contact</v-tab>
          <v-tab-item v-for="n in 6" :key="n"> </v-tab-item>
        </v-tabs> -->

      <!-- <v-tabs
      class=" white--text  tabs"
      
    >
      <v-tab
        v-for="item in items"
        :key="item"
        class="white--text"
      >
        {{ item }}
      </v-tab>
    </v-tabs> -->

      <!-- <v-tabs>
     <v-tab>Home</v-tab>
     <v-tab>About us</v-tab>
     <v-tab>White Pape</v-tab>
     <v-tab>Team</v-tab>
     <v-tab>RoadMap</v-tab>

     <v-tab>Contact</v-tab>
     </v-tabs> -->

      <!-- <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive> -->
      <!-- </v-container> -->
      <div class="row ma-0 pa-0 d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <img src="../assets/VGC-Logo_Final1.png" height="115px" />
          <div class="white--text text-h6">
            VGCN<br />
            <div class="white--text text-h6">Frist community Crypto</div>
          </div>
        </div>
        <div>
          <v-tabs class="white--text">
            <v-tab class="white--text">Home</v-tab>
            <v-tab class="white--text">About us</v-tab>
            <v-tab class="white--text">Buy</v-tab>
            <v-tab class="white--text">White Paper</v-tab>
            <v-tab class="white--text">Team</v-tab>
            <v-tab class="white--text">RoadMap</v-tab>
            <v-tab  class="white--text">Contact</v-tab>
            <v-tab-item v-for="n in 7" :key="n"> </v-tab-item>
          </v-tabs>
        </div>
      </div>
    </v-app-bar>
    <div>
      <marquee
        width="100%"
        height="40"
        class="text-h6 marqueescroll align-center"
      >
        <span
          ><img
            src="../assets/VGC-Logo_Final (1).png"
            width="30"
            height="25"
            class="pl-10 vgcnlogoscroll"
          />
          <!-- <a href=" https://coinsbit.io/" class="linkid">
             VGCN &#9650;</a
          > -->
          VGCN &#9650;
        </span>
        <span
          ><img
            src="../assets/azbit-logo.png"
            width="30"
            height="25"
            class="pl-10 vgcnlogoscroll"
          />
          <a
            href="https://azbit.com/exchange/VGCN_TRX.in/"
            class="vgcnlogoscroll"
            style="color: rgb(0 0 0)"
          >
            Azbit &#9650;</a
          >
        </span>
        <span>
          <img
            src="../assets/Coinsbit.png"
            width="30"
            height="25"
            class="pl-10 vgcnlogoscroll"
          />
          <a
            href=" https://coinsbit.io/"
            class="vgcnlogoscroll"
            style="color: rgb(219 219 219)"
          >
            Coinsbit &#9650;</a
          >
        </span>
        <!-- <span>
          <img
            src="../assets/coinMarketcap.png"
            width="30"
            height="25"
            class="pl-10 vgcnlogoscroll"
          />
          <a
            href=" https://coinmarketcap.com/rankings/exchanges/"
            class="vgcnlogoscroll"
            style="color: rgb(219 219 219)"
          >
            CoinMarketCap &#9650;</a
          ></span
        > -->
        <span>
          <img
            src="../assets/fivestarlogo.png"
            width="30"
            height="25"
            class="pl-10 vgcnlogoscroll"
          />
          <a
            href="https://fivestarexchange.in/exchange/trx/inr"
            class="vgcnlogoscroll"
            style="color: rgb(219 219 219)"
          >
            Fivestar &#9650;</a
          ></span
        >
      </marquee>
    </div>

    <div class="pt-9 heightCalc">
      <router-view />
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      // tab: null,
      // items: [
      //   'Home', 'About us', 'White Pape', 'Team', 'RoadMap',
      // ],
    };
  },
};
</script>
<style scoped>
.vgcnlogoscroll {
  width: 30px;
  height: 30px;
  padding-left: 15px;
  vertical-align: middle;
  padding: 5px;
  text-decoration: none !important;
}
.marqueescroll {
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: fixed;
  background-color: #849d91;
  color: rgb(90 46 46);
  z-index: 1;
}
/* ::v-deep.theme--light.v-tabs > .v-tabs-bar {
    background-color: hsl(0, 0%, 15%);

} */
::v-deep.theme--light.v-tabs > .v-tabs-bar {
  background-color: transparent !important;
}

::v-deep.theme--light.v-tabs > .v-tabs-bar {
  background-color: transparent !important;
}

/* .tabs {
  width: 50%;
} */
.vgcnlogoscroll {
  color: brown;
}
</style>
