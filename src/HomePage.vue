<template>
  <title>Socratique</title>
  <div class="desktop">
    <NavBar class="nav" @menu-hovered="handleMenuHovered"/>
    <Hero  v-show="showHero"/>
    <OurMission v-show="showOurMission" />
    <MiddleSection class="middle" v-show="showMiddleSection"/>
    <PricingPage v-show="showPremium" />
    <SubScribe />
    <MobileHomeScreen v-show="isMobile" />
  </div>
  <div class="mobile">
      <!-- Mobile version of the homepage -->
      <MobileHomeScreen v-if="isMobile" />
      <MobileOurMission v-if="isMobile" />
    </div>
</template>

<script>
import { inject } from '@vercel/analytics';
import NavBar from "./sections/NavBar.vue";
import Hero from "./sections/Hero.vue";
import MiddleSection from "./sections/MiddleSection.vue";
import SubScribe from "./sections/SubScribe.vue";
import OurMission from "./sections/OurMission.vue";
import PricingPage from "./sections/PricingPage.vue";
import MobileHomeScreen from "./mobileComps/MobileHomeScreen.vue";
import MobileOurMission from "./mobileComps/MobileOurMission.vue";
inject();
export default {
  name: "HomePage",
  components: {
    NavBar,
    Hero,
    MiddleSection,
    SubScribe,
    OurMission,
    PricingPage,
    MobileHomeScreen,
    MobileOurMission,
  },
  data() {
    return {
      showHero: true,
      showMiddleSection: true,
      showOurMission: false,
      showFooter: true,
      showPremium: false,
      homePage: true,
      isMobile: false,
      
    };
  },
  mounted() {
    document.title = "Socratique";
    if (window.matchMedia("(max-width: 767px)").matches) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    window.addEventListener("resize", this.handleResize);
    console.log("isMobile: ", this.isMobile);
    
  },
  beforeUnmount() {
   
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleMenuHovered(menuItem) {
      if (menuItem === "our-mission") {
        console.log("Our Mission button clicked");
        this.showHero = false;
        this.showMiddleSection = false;
        this.showOurMission = true;
        this.showFooter = false;
        this.showPremium = false;
      } else if (menuItem === "premium") {
        console.log("Premium button clicked in homepage");
        this.handleMenuPremium(menuItem);
      } 
      else if (menuItem === "home") {
        console.log("Home button clicked in homepage");
        this.handleMenuHome(menuItem);
      }
      else {
        this.showHero = true;
        this.showMiddleSection = true;
        this.showOurMission = false;
        this.showFooter = true;
        this.showPremium = false;
      }
    },
    handleMenuPremium(menuItem) {
      console.log("Menu item hovered: ", menuItem);
      if (menuItem === "premium") {
        console.log("Premium button clicked in homepage");
        this.showHero = false;
        this.showMiddleSection = false;
        this.showOurMission = false;
        this.showFooter = false;
        this.showPremium = true;
      } else {
        this.showHero = false;
        this.showMiddleSection = true;
        this.showOurMission = false;
        this.showFooter = true;
        this.showPremium = false;
      }
    },
    handleMenuHome(menuItem) {
      console.log("Menu item hovered: ", menuItem);
      if (menuItem === "home") {
        console.log("Home button clicked in homepage");
        this.showHero = true;
        this.showMiddleSection = true;
        this.showOurMission = false;
        this.showFooter = true;
        this.showPremium = false;
      } else {
        this.showHero = false;
        this.showMiddleSection = true;
        this.showOurMission = false;
        this.showFooter = true;
        this.showPremium = false;
      }
    },
    handleResize() {
      if (window.matchMedia("(max-width: 767px)").matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
      console.log("isMobile: ", this.isMobile);
    },

  },
  
};
</script>

<style>
html{
  overflow-x: hidden;
}
body{
  overflow-x: hidden;
}
.desktop{
  overflow-x: hidden;
}
.mobile{
  overflow-x: hidden;
}

.home {
  background-color: #4d3397;
  border: 1px solid;
  border-color: #000000;
  height: 3680px;
  overflow: hidden;
  position: relative;
  width: 100%;
  overflow-x: hidden;
}
.nav{
  z-index: 2;
}
.middle{
  z-index: 2;
}
.homePage{
  overflow-x: hidden;
}
.premium{
  z-index: 3;
}
@media (max-width: 767px) {
  /* Hide desktop version */
  .desktop {
    display: none;
  }

  /* Show mobile version */
  .mobile {
    display: block;
    overflow-x: hidden;
    overflow: scroll;
  }
}
</style>
