<template>
  <div class="page-wrapper">
    <Header />
    <BannerOne />
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import BannerOne from "@/components/journey/BannerOne.vue";
import Navbar from "@/components/journey/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  name: "Journey",
  components: {
    Header,
    BannerOne,
    Navbar,
    Footer
  }
};
</script>
