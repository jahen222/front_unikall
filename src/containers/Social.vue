<template>
  <div class="page-wrapper">
    <HeaderAlt />
    <BannerOne />
    <ServiceOne />
    <FooterSocial />
  </div>
</template>

<script>
import HeaderAlt from "@/components/layouts/HeaderAlt.vue";
import BannerOne from "@/components/social/BannerOne.vue";
import ServiceOne from "@/components/social/ServiceOne.vue";
import FooterSocial from "@/components/social/FooterSocial.vue";

export default {
  name: "Social",
  components: {
    HeaderAlt,
    BannerOne,
    ServiceOne,
    FooterSocial
  }
};
</script>

<style>
</style>