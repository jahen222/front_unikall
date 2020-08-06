<template>
  <div class="page-wrapper">
    <HeaderAlt />
    <BannerOne />
    <ServiceOne />
  </div>
</template>

<script>
import HeaderAlt from "@/components/layouts/HeaderAlt.vue";
import BannerOne from "@/components/aboutus/BannerOne.vue";
import ServiceOne from "@/components/aboutus/ServiceOne.vue";


export default {
  name: "AboutUs",
  components: {
    HeaderAlt,
    BannerOne,
    ServiceOne
  }
};
</script>
