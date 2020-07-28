<template>
  <div class="page-wrapper">
    <div v-show="config.builder_page">
      <ConstructionPage />
    </div>
    <div v-show="!config.builder_page">
      <Header />
      <BannerOne />
      <ServiceOne />
      <div class="col-12">
        <img class="imageHome1" src="../assets/unikall/images/fondo-seccion-dos.jpg" alt />
      </div>
      <BannerTwo />
      <ServiceTwo />
      <CatalogOne />
      <BannerThree />
      <BannerFour />
      <Footer />

      <!-- in construction -->
      <a href="#" data-target="html" class="scroll-to-target scroll-to-top">
        <i class="fa fa-angle-up"></i>
      </a>
      <div class="side-menu__block">
        <div class="side-menu__block-overlay custom-cursor__overlay">
          <div class="cursor"></div>
          <div class="cursor-follower"></div>
        </div>
        <div class="side-menu__block-inner">
          <div class="side-menu__top justify-content-end">
            <a href="#" class="side-menu__toggler side-menu__close-btn">
              <img src="../assets/oapee/images/shapes/close-1-1.png" alt />
            </a>
          </div>

          <nav class="mobile-nav__container"></nav>
          <div class="side-menu__sep"></div>
          <div class="side-menu__content">
            <p>
              Lorem Ipsum is simply dummy text the printing and setting industry. Lorm Ipsum has been the
              industry's stanard dummy text ever.
            </p>
            <p>
              <a href="mailto:needhelp@oapee.com">needhelp@oapee.com</a>
              <br />
              <a href="tel:888-999-0000">
                888 999
                0000
              </a>
            </p>
            <div class="side-menu__social">
              <a href="#">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import BannerOne from "@/components/home/BannerOne.vue";
import ServiceOne from "@/components/home/ServiceOne.vue";
import BannerTwo from "@/components/home/BannerTwo.vue";
import ServiceTwo from "@/components/home/ServiceTwo.vue";
import CatalogOne from "@/components/home/CatalogOne.vue";
import BannerThree from "@/components/home/BannerThree.vue";
import BannerFour from "@/components/home/BannerFour.vue";
import Footer from "@/components/layouts/Footer.vue";
import gql from "graphql-tag";
import ConstructionPage from "@/containers/ConstructionPage.vue";

export default {
  name: "Home",
  components: {
    Header,
    BannerOne,
    ServiceOne,
    BannerTwo,
    ServiceTwo,
    CatalogOne,
    BannerThree,
    BannerFour,
    Footer,
    ConstructionPage,
  },
  data() {
    return {
      config: [],
      api_url: process.env.VUE_APP_STRAPI_API_URL,
    };
  },
  apollo: {
    config: gql`
      query getInitConfig($id: ID! = 1) {
        config(id: $id) {
          id
          name
          builder_page
        }
      }
    `,
  },
};
</script>

<style scoped>
.page-wrapper {
  position: inherit;
}
.imageHome1 {
  width: 90%;
}
</style>
