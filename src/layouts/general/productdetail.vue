<template>
  <!-- Product Details section -->
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row">
        <div
          class="col-2"
          v-if="product && product.photos && product.photos.length > 0"
        >
          <div class="row" v-for="(item, index) in product.photos" :key="index">
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
              <h1>{{ product.name }}</h1>
            </div>
            <div class="col-12">Availability: {{ product.quantity }}</div>
            <div
              class="col-12"
              style="font-size: 1rem; font-weight: normal; line-height: 2rem"
            >
              {{ product.description }}
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-4 m-auto" style="cursor: pointer">
                  <i
                    class="simple-icon-plus bold"
                    @click="updatequantity(true, product.quantity)"
                  />
                  <span
                    style="
                      font-size: 16px;
                      padding: 0px 13px 0px 13px;
                      position: relative;
                      bottom: 2px;
                    "
                    >{{ this.selected_quantity }}</span
                  >
                  <i
                    class="simple-icon-minus bold"
                    @click="updatequantity(false, product.quantity)"
                  />
                </div>
                <div class="col-4">
                  <button
                    @click="addToCart(product)"
                    type="button"
                    class="btn btn-outline-secondary text-black poppinfont mt-2"
                  >
                    <b class="text-black">ADD TO CART</b>
                  </button>
                </div>
                <div class="col-4">
                  <button
                    @click="addToCartandcheckout(product)"
                    type="button"
                    class="btn btn-outline-secondary text-black poppinfont mt-2"
                  >
                    <b class="text-black">Buy Now</b>
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
  props: ["business"],
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      selected_image: this.product
        ? this.api_url + this.product.photos[0].url
        : "",
      selected_quantity: 1,
      productid: this.$route.params.pid,
      product: [],
    };
  },
  computed: {
    cart() {
      return this.$store.getters.CartItems;
    },
  },
  methods: {
    updateImage(url) {
      this.selected_image = url;
    },
    addToCart(item) {
      var findProduct = this.cart.find((o) => o.id === item.id);
      //console.log("findProduct: ", findProduct);
      if (findProduct) {
        //findProduct.quantity += 1;
        return;
      } else {
        item.quantity = this.selected_quantity;
        this.$store.dispatch("addCartItem", item);
        this.showSuccess({
          message: "Item (" + item.name + ") added to cart",
        });
      }
    },
    addToCartandcheckout(item) {
      this.addToCart(item);
      this.$router.push({
        path: "/site/" + this.business.user.id + "/checkout/2607",
        params: { businessid: this.businessid },
      });
    },
    updatequantity(direction, quantity) {
      if (quantity > 0) {
        if (direction) {
          this.selected_quantity =
            this.selected_quantity + 1 > quantity
              ? this.selected_quantity
              : this.selected_quantity + 1;
        } else {
          if (this.selected_quantity > 1) {
            this.selected_quantity = this.selected_quantity - 1;
          }
        }
      }
    },
  },
  async mounted() {
    await axios
      .get(process.env.VUE_APP_STRAPI_API_URL + "/products/" + this.productid)
      .then((response) => {
        this.product = response.data;
        console.log("product: ", response.data.quantity);
        this.selected_image = this.product
          ? this.api_url + this.product.photos[0].url
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
