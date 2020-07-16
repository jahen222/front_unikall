<template>
  <div class="page-wrapper">
    <Header />
    <BannerOne />
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import BannerOne from "@/components/aboutus/BannerOne.vue";

export default {
  name: "AboutUs",
  components: {
    Header,
    BannerOne
  }
};
</script>

<style>
</style>