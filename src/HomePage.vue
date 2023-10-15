<template>
  <div class="homePage">
    <NavBar class="nav"/>
    <Hero />
    <MiddleSection class="middle" />
    <SubScribe />
  </div>
</template>

<script>
import NavBar from "./sections/NavBar.vue";
import Hero from "./sections/Hero.vue";
import MiddleSection from "./sections/MiddleSection.vue";
import SubScribe from "./sections/SubScribe.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
    Hero,
    MiddleSection,
    SubScribe
  },
};
</script>

<style>
.home {
  background-color: #4d3397;
  border: 1px solid;
  border-color: #000000;
  height: 3680px;
  overflow: hidden;
  position: relative;
  width: 100%;
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
</style>
