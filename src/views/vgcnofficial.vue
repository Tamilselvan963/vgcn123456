<template>
  <div>
    <div class="backgroundimage1">
      <v-row class="pa-0 pt-0">
        <v-col cols="6" class="pa-0 pt-0">
          <img
            src="../assets/concept vgcn logo.png"
            style="margin-top: -54px"
          />
        </v-col>
        <v-col cols="6" class="pa-0 pt-0">
          <div class="white--text investfontsize">
            Invest In <span class="cryptocoin"> Cryptocoin </span><br /><span
              class="investfontsize"
            >
              Way To Trade</span
            >
          </div>
          <div class="white--text bestcrypto">
            Best Crypto currency Company To
            <br />
            Invest In Right Now As Bitcoin Hits
          </div>
        </v-col>
        <!-- <div> -->
        <!-- <v-col col="12"> -->
        <v-col cols="6 ">
          <div class="white--text" style="text-align: center">
            <h1 class="about blue--text">ABOUT</h1>
            <br />
            <h2 class="about yellow--text">Venus Global Chain</h2>
            <p class="paragrap testimonial-text testimonial-text-small">
              We are growing more and more and our results are unbeatable in the
              financial market. There are 100% profits for each investor every
              day.We have a team that works with consistency and a lot of
              experience in market analysis. We are looking for people
              interested in investing with us.We use all technology to our
              advantage, we are connected with you and the financial market
              daily.
            </p>
          </div>
        </v-col>
        <v-col cols="6" class="mt-0">
          <div class="text-center">
            <img src="../assets/concept vgcn3 (1).png" style="width: 65%" />
          </div>
        </v-col>
        <!-- </v-col> -->
        <!-- </div> -->
      </v-row>
    </div>
    <!-- <div class="backgroundimage2"> -->
    <!-- <v-row class="pa-0 pt-0"> -->
    <!-- <div> -->
    <div class="backgroundimage7">
      <v-row>
        <v-col class="cols-6">
          <h1 class="white--text pl-4">VGCN COIN LISTED IN</h1>
          <h2 class="white--text pl-4">FOLLOWING EXCHANGES</h2>

          <div>
            <a
              href="https://azbit.com/exchange/VGCN_TRX.in/"
              class="linkid"
              style="color: #bd7202"
            >
              1.Azbit.in</a
            >
          </div>
          <div>
            <a
              href=" https://fivestarexchange.in/exchange/trx/inr"
              class="linkid"
              style="color: #bd7202"
            >
              2.Fivestarexchange.in</a
            >
          </div>
          <div>
            <a
              href=" https://coinmarketcap.com/rankings/exchanges/"
              class="linkid"
              style="color: #bd7202"
            >
              3.CoinMarketCap.com</a
            >
          </div>
          <div>
            <a
              href=" https://coinsbit.io/"
              class="linkid"
              style="color: #bd7202"
            >
              4.Coinsbit.io</a
            >
          </div>
        </v-col>

        <v-col class="col col-6 pr-14 text-end mt-5">
          <div class="my-2">
            <v-btn x-large color="success" dark>1 Hold Supermeme </v-btn>
          </div>
          <div class="my-2">
            <v-btn x-large color="success" dark>2 Visit Communities </v-btn>
          </div>
          <div class="my-2">
            <v-btn x-large color="success" dark
              >3 Start making a difference
            </v-btn>
          </div>
        </v-col>
        </v-row>
        <div>
          
          <div class="12 text-center">
            <h2 class="text-uppercase text-muted mb-1 white--text text-center">
              white paper
            </h2>

            <h3 class="text-uppercase white--text text-muted mb-1 text-center">
              How to get started
            </h3>
            <p class="text-muted mb-1 white--text text-center pl-10">
              With Venus Global Chain Communities, other projects can create a
              <br />large impact in solving real world problems.
            </p>
            <div class="text-center">
              <v-btn
                class="ma-2"
                outlined
                color="blue"
                href="White Paper A.pdf"
                download
              >
                Download PDF
              </v-btn>
            </div>
          </div>
        </div>
      
    </div>

    <h2 class="blue--text pl-5 pt-2" style=" Rubik,Arial,sans-serif;">
      Road Map
      <span>
        <img src="../assets/VGCN ROADMAP.png" style="width: 100%" />
      </span>
    </h2>
    <h2
      class="white--text text-center"
      style="font-family: Publico, Georgia, serif"
    >
      OUR
    </h2>
    <h2
      class="white--text text-center"
      style="font-family: Publico, Georgia, serif"
    >
      PROJECT
    </h2>
    <div>
      <v-row class="pl-15 pr-15">
        <!-- <div class="col-lg-1 col-md-1 col-sm-1"></div> -->
        <v-col cols="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="pl-2 text-center"
                style="height: 183px"
                :elevation="hover ? 24 : 6"
              >
                <img
                  src="../assets/Cryptocurrency.png"
                  class="text-center pt-8"
                  style="width: 15%"
                />
                <h3 class="pt-5">CRYPTO PAYMENT <br />TRANSFER</h3>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="pl-2 text-center"
                style="height: 183px"
                :elevation="hover ? 24 : 6"
              >
                <img
                  src="../assets/feature-8.png"
                  class="text-center pt-8"
                  style="width: 15%"
                />
                <h3 class="pt-5">BILL PAYMENT</h3>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="pl-2 mx-auto text-center"
                style="height: 183px"
                :elevation="hover ? 24 : 6"
              >
                <img
                  src="../assets/Recharge-9.png"
                  class="text-center pt-8"
                  style="width: 15%"
                />
                <h3 class="pt-5">RECHARGERS</h3>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <!-- <div class="col-lg-1 col-md-1 col-sm-1"></div>
              <div class="col-lg-1 col-md-1 col-sm-1"></div>
              <div class="col-lg-1 col-md-1 col-sm-1"></div> -->
        <v-col cols="12" sm="3" md="3" xs="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="pl-2 text-center"
                style="height: 183px"
                :elevation="hover ? 24 : 6"
              >
                <img
                  src="../assets/SOCIALMEDIA.png"
                  class="text-center pt-8"
                  style="width: 15%"
                />
                <h3 class="pt-5">SOCIAL MEDIA</h3>
              </v-card>
            </template>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="3" md="3" xs="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="pl-2 text-center"
                style="height: 183px"
                :elevation="hover ? 24 : 6"
              >
                <img
                  src="../assets/Cryptocurrency.png"
                  class="text-center pt-8"
                  style="width: 15%"
                />
                <h3 class="pt-5">
                  DIGITAL NEWS <br />
                  ADVERTISEMENT
                </h3>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="3" md="3" xs="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="pl-2 text-center"
                style="height: 183px"
                :elevation="hover ? 24 : 6"
              >
                <img
                  src="../assets/DIGITAL NEWS ADVERTISEMENT.png"
                  class="text-center pt-8"
                  style="width: 15%"
                />
                <h3 class="pt-5">DIGITAL NEWS <br />MEDIA</h3>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <!-- <div class="col-lg-1 col-md-1 col-sm-1"></div>
              <div class="col-lg-1 col-md-1 col-sm-1"></div>
              <div class="col-lg-1 col-md-1 col-sm-1"></div> -->

        <v-col cols="12" sm="3" md="3" xs="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="pl-2 text-center"
                style="height: 183px"
                :elevation="hover ? 24 : 6"
              >
                <img
                  src="../assets/DIGITAL CRYPTO BANK.png"
                  class="text-center pt-8"
                  style="width: 15%"
                />
                <h3 class="pt-5">
                  DIGITAL CRYPTO<br />
                  BANK
                </h3>
              </v-card>
            </template>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="3" md="3" xs="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="pl-2 text-center"
                style="height: 183px"
                :elevation="hover ? 24 : 6"
              >
                <img
                  src="../assets/DIGITAL LOANS.png"
                  class="text-center pt-8"
                  style="width: 15%"
                />
                <h3 class="pt-5">DIGITAL LOANS</h3>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="3" md="3" xs="3" class="">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="pl-2 text-center"
                style="height: 183px"
                :elevation="hover ? 24 : 6"
              >
                <img
                  src="../assets/MICRO FINANCE.png"
                  class="text-center pt-8"
                  style="width: 15%"
                />
                <h3 class="pt-5">MICRO FINANCE</h3>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <!-- <v-col cols="12" sm="3" md="3" xs="3">
              <v-card>
                <img src="../assets/Cryptocurrency.png" style="width: 15%" />
                <h1>CRYPTO PAYMENT TRANSFER</h1>
              </v-card>
            </v-col> -->
      </v-row>
    </div>

    <h2
      class="white--text text-center bold"
      style="font-family: Publico, Georgia, serif"
    >
      Our
    </h2>
    <h2
      class="white--text text-center pb-4"
      style="font-family: Publico, Georgia, serif"
    >
      Founder of the VGCN
    </h2>
    <div>
      <v-card
        class="pb-1 flat"
        style="background-color: rgb(31 31 31)"
        type="warning"
      >
        <v-row class="" style="margin: 0px">
          <v-col cols="5">
            <v-img
              src="../assets/WhatsApp Image 2021-12-31 at 17.09.31.jpeg"
              width="100%"
            ></v-img>
          </v-col>
          <v-col class="white--text" cols="5">
            <p
              class="photoname mb-3 white--text"
              style="font-family: Playfairdisplay, sans-serif"
            >
              <span class="BOLD white--text"> Mohammad. Jaffar S.K </span>
              <br />Founder of Venus Global Chain, a company traditionally
              established over many tea room meetings. Specialist in block chain
              technology and math. A strong believer in growing technology and
              its global adaptation. A promising person who wants every user to
              benefit.
            </p>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <!-- </div> -->
    <!-- </v-row> -->
    <!-- </div> -->

    <div class="background6" style="padding-bottom: 23px" flat>
      <h1 class="white--text pl-18 pt-5" style="padding-left: 95px">
        VGCN Benefits at every level
      </h1>
      <div>
        <v-row class="mr-14 ml-14">
          <v-col cols="12" sm="3">
            <v-hover v-slot="{ hover }" close-delay="200">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto hoveron"
                height="250"
                max-width="250"
              >
                <v-card-text
                  class="font-weight-medium mt-12 text-center text-subtitle-1"
                  style="
                    border-color: #ff2b2b;
                    margin-right: 22px;

                    overflow: hidden;
                    position: relative;
                    width: 283px;
                    min-width: 283px;
                    height: 260px;
                    padding: 36px 31px;
                    margin-bottom: 22px;
                    cursor: pointer;
                    background: #1f2226;
                    border-radius: 8px;
                    border: solid 2px #1f2226;
                    color: #ebebeb;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                  "
                >
                  <h3>
                    Commission-free transfers
                    <p style="font-family: Playfairdisplay, sans-serif">
                      We cover all charges for your deposits and withdrawals.
                    </p>
                  </h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>

          <v-col cols="12" sm="3">
            <v-hover v-slot="{ hover }" close-delay="200">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto hoveron"
                height="250"
                max-width="250"
              >
                <v-card-text
                  class="font-weight-medium mt-12 text-center text-subtitle-1"
                  style="
                    border-color: #ff2b2b;
                    margin-right: 22px;

                    overflow: hidden;
                    position: relative;
                    width: 283px;
                    min-width: 283px;
                    height: 260px;
                    padding: 36px 31px;
                    margin-bottom: 22px;
                    cursor: pointer;
                    background: #1f2226;
                    border-radius: 8px;
                    border: solid 2px #1f2226;
                    color: #ebebeb;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                  "
                >
                  <h3>
                    24/7 Customer Support
                    <p style="font-family: Playfairdisplay, sans-serif">
                      Our specialists are at your service 24 hours a day, Monday
                      through Friday. Available on higher statuses.
                    </p>
                  </h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" sm="3">
            <v-hover v-slot="{ hover }" close-delay="200">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto hoveron"
                height="250"
                max-width="250"
              >
                <v-card-text
                  class="font-weight-medium mt-12 text-center text-subtitle-1"
                  style="
                    border-color: #ff2b2b;
                    margin-right: 22px;

                    overflow: hidden;
                    position: relative;
                    width: 283px;
                    min-width: 283px;
                    height: 260px;
                    padding: 36px 31px;
                    margin-bottom: 22px;
                    cursor: pointer;
                    background: #1f2226;
                    border-radius: 8px;
                    border: solid 2px #1f2226;
                    color: #ebebeb;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                  "
                >
                  <h3>
                    Trading signals by Autochartist
                    <p style="font-family: Playfairdisplay, sans-serif">
                      Take advantage of real-time trading hints and constant
                      market forecasts. Available on higher statuses.
                    </p>
                  </h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
          <!-- <v-col cols="12" sm="3">
            <v-hover v-slot="{ hover }" close-delay="200">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto hoveron"
                height="250"
                max-width="250"
              >
                <v-card-text
                  class="font-weight-medium mt-12 text-center text-subtitle-1"
                  style="
                    border-color: #ff2b2b;
                    margin-right: 22px;

                    overflow: hidden;
                    position: relative;
                    width: 283px;
                    min-width: 283px;
                    height: 260px;
                    padding: 36px 31px;
                    margin-bottom: 22px;
                    cursor: pointer;
                    background: #1f2226;
                    border-radius: 8px;
                    border: solid 2px #1f2226;
                    color: #ebebeb;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                  "
                >
                  <h3>
                    Trading signals by Autochartist
                    <p style="font-family: Playfairdisplay, sans-serif">
                      Take advantage of real-time trading hints and constant
                      market forecasts. Available on higher statuses.
                    </p>
                  </h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col> -->
          <v-col cols="12" sm="3">
            <v-hover v-slot="{ hover }" close-delay="200">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto hoveron"
                height="250"
                max-width="250"
              >
                <v-card-text
                  class="font-weight-medium mt-12 text-center text-subtitle-1"
                  style="
                    border-color: #ff2b2b;
                    margin-right: 22px;

                    overflow: hidden;
                    position: relative;
                    width: 283px;
                    min-width: 283px;
                    height: 260px;
                    padding: 36px 31px;
                    margin-bottom: 22px;
                    cursor: pointer;
                    background: #1f2226;
                    border-radius: 8px;
                    border: solid 2px #1f2226;
                    color: #ebebeb;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                  "
                >
                  <h3>
                    Faster bonus withdrawal
                    <p style="font-family: Playfairdisplay, sans-serif">
                      Trade fewer lots to make the bonus amount an integral part
                      of your balance.
                    </p>
                  </h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" sm="3">
            <v-hover v-slot="{ hover }" close-delay="200">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto hoveron"
                height="250"
                max-width="250"
              >
                <v-card-text
                  class="font-weight-medium mt-12 text-center text-subtitle-1"
                  style="
                    border-color: #ff2b2b;
                    margin-right: 22px;

                    overflow: hidden;
                    position: relative;
                    width: 283px;
                    min-width: 283px;
                    height: 260px;
                    padding: 36px 31px;
                    margin-bottom: 22px;
                    cursor: pointer;
                    background: #1f2226;
                    border-radius: 8px;
                    border: solid 2px #1f2226;
                    color: #ebebeb;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                  "
                >
                  <h3>
                    Lower spreads
                    <p style="font-family: Playfairdisplay, sans-serif">
                      Trade the most popular instruments with tighter spreads.
                    </p>
                  </h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" sm="3">
            <v-hover v-slot="{ hover }" close-delay="200">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto hoveron"
                height="250"
                max-width="250"
              >
                <v-card-text
                  class="font-weight-medium mt-12 text-center text-subtitle-1"
                  style="
                    border-color: #ff2b2b;
                    margin-right: 22px;

                    overflow: hidden;
                    position: relative;
                    width: 283px;
                    min-width: 283px;
                    height: 260px;
                    padding: 36px 31px;
                    margin-bottom: 22px;
                    cursor: pointer;
                    background: #1f2226;
                    border-radius: 8px;
                    border: solid 2px #1f2226;
                    color: #ebebeb;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                  "
                >
                  <h3>
                    Accelerated transfers
                    <p style="font-family: Playfairdisplay, sans-serif">
                      Have your deposit and withdrawal requests processed
                      quicker by our financial department. Available on higher
                      statuses.
                    </p>
                  </h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" sm="3">
            <v-hover v-slot="{ hover }" close-delay="200">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto hoveron"
                height="250"
                max-width="250"
                style=""
              >
                <v-card-text
                  class="font-weight-medium mt-12 text-center text-subtitle-1"
                  style="
                    border-color: #ff2b2b;
                    margin-right: 22px;

                    overflow: hidden;
                    position: relative;
                    width: 283px;
                    min-width: 283px;
                    height: 260px;
                    padding: 36px 31px;
                    margin-bottom: 22px;
                    cursor: pointer;
                    background: #1f2226;
                    border-radius: 8px;
                    border: solid 2px #1f2226;
                    color: #ebebeb;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                  "
                >
                  <h3>
                    Experts' advice
                    <p style="font-family: Playfairdisplay, sans-serif">
                      Learn how to improve your trading based on your
                      three-month performance.
                    </p>
                  </h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" sm="3">
            <v-hover v-slot="{ hover }" close-delay="200">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto hoveron"
                height="250"
                max-width="250"
                style=""
              >
                <v-card-text
                  class="font-weight-medium mt-12 text-center text-subtitle-1"
                  style="
                    border-color: #ff2b2b;
                    margin-right: 22px;

                    overflow: hidden;
                    position: relative;
                    width: 283px;
                    min-width: 283px;
                    height: 260px;
                    padding: 36px 31px;
                    margin-bottom: 22px;
                    cursor: pointer;
                    background: #1f2226;
                    border-radius: 8px;
                    border: solid 2px #1f2226;
                    color: #ebebeb;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                  "
                >
                  <h3>
                    Personal manager
                    <p style="font-family: Playfairdisplay, sans-serif">
                      Have all your questions answered with an assigned
                      specialist.
                    </p>
                  </h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="backgroundimage3">
      <div
        class="white--text text-center .text-xl-h4"
        style="font-size: 27px; font-weight: initial; padding: 12px"
      >
        Drop Us a Line
      </div>
      <div
        class="white--text text-center .text-xl-h4 fw-initial"
        style="font-size: 27px"
      >
        Reach out to us from our contact form and we will get back to you
        shortly.
      </div>

      <div>
        <section>
          <div
            class="brown--text"
            style="
              padding-left: 16%;
              font-family: 'Geomanist webfont', sans-serif;
              color: rgb(227 91 91) !important;
              font-size: x-large;
              font-weight: 600;
            "
          >
            Contact
          </div>
          <v-container fluid>
            <v-row
              justify="center"
              style="padding-left: 110px; padding-right: 110px"
            >
              <v-col cols="12" md="5" sm="" style="padding-left: 103px">
                <v-text-field
                  v-model="password"
                  name="input-10-1"
                  label="Name"
                  counter
                  @click:append="show1 = !show1"
                  single-line
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="5" sm="4" style="padding-right: 106px">
                <v-text-field
                  label="Last Name"
                  value=""
                  class="input-group--focused"
                  @click:append="show2 = !show2"
                  single-line
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="4">
                <v-text-field
                  label="Email"
                  value=""
                  class="input-group--focused"
                  @click:append="show3 = !show3"
                  single-line
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="4">
                <v-text-field
                  name="input-10-1"
                  type="number"
                  label="Phone"
                  maxlength="13"
                  hint="At least 8 characters"
                  value=""
                  error
                  single-line
                  solo
                  style="margin-bottom: 0px"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="message"
                  label="Message"
                  type="text"
                  solo
                  outlined
                  class="textfieldmeasssage"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <div class="mx-5 text-center mt-4 pa-0">
              <v-btn x-large color="success" dark> Send Message </v-btn>
            </div>
          </v-container>
        </section>
      </div>
      <div class="backgroundimage4">
        <!-- <div class="text-center">
          <img
            src="../assets/VGC-Logo_Final - Copy (3).png"
            style="width: 25%"
          />
        </div> -->
        <div>
          <v-col class="white--text pl-6 pr-5">
            © Copyrights @ 2021 Venus Global Chain. All Rights Reserved | info.
            <!-- <v-col class="4 text-end"> -->
            <!-- <v-spacer></v-spacer> -->
            <!-- <span class="" style="padding-left: 46%"> -->
            <!-- <v-avatar style="height: 25px; min-width: 25px; width: 25px">
            <a href="https://venusglobalchain.com/">
              <img src="../assets/globe-logo-19190901.jpg" />
            </a>
          </v-avatar> -->
            <a href="https://venusglobalchain.com/" class="pa-2">
              <img
                src="../assets/globe-logo-19190901.jpg"
                style="height: 24px; width: 24px"
            /></a>

            <a href="https://twitter.com/chain_venus?s=20" class="pa-2"
              ><img
                style="height: 24px; width: 24px"
                src="../assets/twitterimage.png"
            /></a>
            <a href=" https://www.instagram.com/vgcn_official/">
              <img
                src="../assets/Instagram_logo.png"
                class=""
                style="height: 24px; width: 24px"
            /></a>
            <a
              href="https://accounts.google.com/AccountChooser/signinchooser?flowName=GlifWebSignIn&flowEntry=AccountChooser"
              class="pa-2"
            >
              <img
                src="../assets/Gmail-Logo.png"
                style="height: 24px; width: 24px"
            /></a>
            <a href="https://www.facebook.com/VenusGlobalChain/photos">
              <img
                src="../assets/facebook-logo-icon-vector-27990381.jpg"
                style="height: 24px; width: 24px"
              />
            </a>
          </v-col>
          <!-- </v-col> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: null,
      loading: false,

      overlay: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
};
</script>

<style scoped>
.backgroundimage1 {
  background-image: url("../assets/1_orig (1).gif");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* -webkit-transition: all 500ms ease;
-moz-transition: all 500ms ease;
-ms-transition: all 500ms ease;
-o-transition: all 500ms ease;
transition: all 500ms ease; */
  /* transform: translate(-3em,1em); */
}
.investfontsize {
  text-align: center;
  font-size: xxx-large;
  font-family: Publico, Georgia, serif !important;
  padding-top: 78px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 600;
}
.cryptocoin {
  color: #b3b7bb !important;
  font-family: Publico, Georgia, serif !important;
}
.bestcrypto {
  text-align: center;
  font-size: larger;
  font-family: Rubik, Arial, sans-serif;
}
.about {
  font-size: larger;
  font-family: "Roboto";
  font-weight: 800;
}
.paragrap {
  padding-left: 100px;
  padding-right: 80px;
  letter-spacing: 1px;
  font-family: Rubik, Arial, sans-serif;
  font-weight: 400;
}
.backgroundimage2 {
  background-image: url("../assets/BewitchedAntiqueAllensbigearedbat-size_restricted.gif");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  animation: anim-ss steps(23) 1s infinite;
}
.linkid {
  text-decoration: none !important;
  padding: 6px;
  padding-left: 66px;
  font-size: x-large;
}
.photoname {
  font-size: 24px;
  line-height: 34px;
  padding-top: 64px;
  font-family: Playfairdisplay, sans-serif;
  letter-spacing: 1.18px;
}

.backgroundimage3 {
  background-image: url("../assets/637a4d42e1738853b2f96ffbbd60622a (1).gif");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
/* .backgroundimage4 {
  background-image: url("../assets/responsive_medium_oSCtg9CHVfbwX-OHR3cuH6P-1g5pXvw53vakWGxuOoE.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
} */
.backgroundimage5 {
  background-image: url("../assets/BewitchedAntiqueAllensbigearedbat-size_restricted.gif");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.backgroundimage7 {
  background-image: url("../assets/1_orig (1).gif");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.background6 {
  background-color: #000000e0;
}

.textfieldmeasssage {
  align-items: baseline !important;
  min-height: 68px !important;
}
.v-text-field__details {
  padding-top: 0px;
  margin-bottom: -22px !important;
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding-top: 0px;
  margin-bottom: -22px;
}

.v-text-field--outlined > .v-input__control > .v-input__slot {
  align-items: baseline !important;
  min-height: 117px !important;
}
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 52px !important;
}
.v-card.on-hover.theme--dark {
  background-color: rgba(#fff, 0.8);
}
.v-card__text {
  color: #000;
}

.v-card {
  transition: opacity 0.12s ease-in-out;
}

.hoveron:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

.v-card.on-hover.theme--dark {
  background-color: rgba(#fff, 0.8);
}
.v-card__text {
  color: rgb(243, 243, 243);
}
</style>