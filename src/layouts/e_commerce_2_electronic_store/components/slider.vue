<template>
  <!-- Header - set the background image for the header in the line below -->
  <header
    class="py-5 bg-image-full tex-center"
    v-bind:style="{ 'background-image': 'url(' + sliderimage + ')' }"
    style="text-allign: center; min-height: 500px; position: relative"
  >
    <div class="sliderCaption tex-center" style="max-width: 500px">
      <div class="d-none d-sm-block d-md-block d-lg-block">
        <h2 class="text-white poppinfont bold texttag">{{ tagline }}</h2>
      </div>
      <div
        class="d-block d-sm-none"
        style="padding-top: 30%; margin-left: 5%; margin-right: 5%"
      >
        <h4 class="text-white poppinfont bold texttag">{{ tagline }}</h4>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "ServiceSlider",
  props: ["businessbanner", "tagline"],
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
    };
  },
  computed: {
    sliderimage() {
      if (this.businessbanner && this.businessbanner.length > 0) {
        return this.api_url + this.businessbanner[0].topbannerimage.url;
      } else {
        return "https://unsplash.it/1900/1080?image=1076";
        //return process.env.VUE_APP_URL+"/";
      }
    },
  },
};
</script>

<style scoped>
.sliderCaption {
  text-align: center;
  margin: auto;
  padding-top: 7%;
}
.texttag {
  text-align: center;
}
</style>
