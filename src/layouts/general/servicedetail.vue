<template>
  <!-- Product Details section -->
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row">
        <div
          class="col-2"
          v-if="product && product.image && product.image.length > 0"
        >
          <div class="row" v-for="(item, index) in product.image" :key="index">
            <img
              v-on:click="updateImage(api_url + item.url)"
              class="d-block smImage mt-1"
              :src="api_url + item.url"
              alt="Small Image"
            />
          </div>
        </div>
        <div class="col-2" v-else>
          <div class="row">
            <img
              class="d-block smImage mt-1"
              src="http://placehold.it/100x100"
              alt="Small Image"
            />
          </div>
        </div>
        <div class="col-5">
          <img class="d-block w-100" :src="selected_image" alt="Image" />
        </div>
        <div class="col-5" v-if="product">
          <div class="row text-left">
            <div class="col-12">
              <h1>{{ product.title }}</h1>
            </div>
            <div
              class="col-12"
              style="font-size: 1rem; font-weight: normal; line-height: 2rem"
            >
              {{ product.description }}
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-4">
                  <button
                    v-b-modal="'my-booking'"
                    @click="gotoPage('contact')"
                    type="button"
                    class="btn btn-outline-secondary text-black poppinfont mt-2"
                  >
                    <b class="text-black">Contact Now</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "EcommerceProductdetails",
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      selected_image: this.product
        ? this.api_url + this.product.photos[0].url
        : "",
      selected_quantity: 1,
      productid: this.$route.params.sid,
      product: null,
    };
  },

  methods: {
    updateImage(url) {
      this.selected_image = url;
    },
    gotoPage(tag) {
      console.log(tag);
      if (tag != "contact") {
        var anchor = document.querySelector("#" + tag);
        window.scrollTo(anchor.offsetLeft, anchor.offsetTop - 150);
        //console.log(window);
      }
      return false;
    },
  },
  async mounted() {
    await axios
      .get(
        process.env.VUE_APP_STRAPI_API_URL +
          "/business-services/" +
          this.productid
      )
      .then((response) => {
        this.product = response.data;
        this.selected_image = this.product
          ? this.api_url + this.product.image[0].url
          : "";
      })
      .catch(() => {
        this.product = "notFound";
      });
  },
  notifications: {
    showError: {
      title: "Failed",
      message: "Failed",
      type: "error",
    },
    showSuccess: {
      title: "Success",
      message: "Success",
      type: "success",
    },
  },
};
</script>

<style>
.fixed-top {
  position: relative;
}

.smImage {
  width: 100px !important;
  height: 100px !important;
}
</style>
