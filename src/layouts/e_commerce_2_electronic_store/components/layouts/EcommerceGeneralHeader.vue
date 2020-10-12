<template>
  <!-- Navigation -->
  <nav
    id="home"
    class="menu navbar navbar-expand-lg navbar-dark bg-white fixed-top"
  >
    <div class="container">
      <router-link
        class="navbar-brand poppinfont brand-color-menu"
        :to="'/shop/' + businessid"
        >{{ businessName }}</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link
              class="nav-link poppinfont brand-color-menu font-weight-normal"
              :to="'/shop/' + businessid"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link poppinfont brand-color-menu font-weight-normal"
              href="Javascript:;"
              v-on:click="gotoPage('about')"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link poppinfont brand-color-menu font-weight-normal"
              href="Javascript:;"
              v-on:click="gotoPage('service')"
              >Services</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link poppinfont brand-color-menu font-weight-normal"
              href="Javascript:;"
              v-on:click="gotoPage('blog')"
              >Blog</a
            >
          </li>
          <li class="nav-item">
            <a
              v-b-modal="'my-booking'"
              class="nav-link brand-color-menu poppinfont font-weight-normal"
              href="Javascript:;"
              v-on:click="gotoPage('contact')"
              >Contact</a
            >
          </li>
          <li class="nav-item">
            <div class="position-relative d-inline-block">
              <b-dropdown
                variant="empty"
                size="sm"
                right
                toggle-class="header-icon notificationButton p-1"
                menu-class="position-absolute mt-3 notificationDropdown p-1"
                no-caret
              >
                <template slot="button-content">
                  <i
                    class="simple-icon-basket text-white"
                    style="font-size: 2rem"
                  />
                  <span class="count text-white">{{ cartCount }}</span>
                </template>
                <vue-perfect-scrollbar
                  :settings="{ suppressScrollX: true, wheelPropagation: false }"
                >
                  <div v-if="cart.length > 0">
                    <div
                      class="row mb-3 pb-3 border-bottom"
                      v-for="(item, index) in cart"
                      :key="item.id"
                    >
                      <div class="col-3">
                        <img
                          :src="api_url + item.photos[0].url"
                          :alt="item.name"
                          class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                        />
                      </div>
                      <div class="col-7">
                        <p class="font-weight-medium mb-1">{{ item.name }}</p>
                        <p class="text-muted mb-0 text-small">
                          ${{ item.price }}
                        </p>
                      </div>
                      <div class="col-1" @click="removeItem(index)">X</div>
                    </div>
                    <div class="row mb-3 pb-3">
                      <div
                        class="col-12"
                        style="
                          position: absolute;
                          bottom: 0;
                          text-align: center;
                        "
                      >
                        <router-link :to="'/shop/' + businessid + '/checkout'"
                          >Proceed to Checkout</router-link
                        >
                      </div>
                    </div>
                  </div>
                  <div v-else class="text-dangour">Cart is empty</div>
                </vue-perfect-scrollbar>
              </b-dropdown>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "EcommerceGeneralHeader",
  components: {},
  props: ["businessName"],
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
    };
  },
  computed: {
    cartCount() {
      return this.$store.getters.CartItems.length;
    },
    cart() {
      return this.$store.getters.CartItems;
    },
    businessid() {
      return this.$store.getters.BusinessId;
    },
  },
  methods: {
    removeItem(index) {
      return this.$store.dispatch("removeCartItem", index);
    },
    gotoPage(tag) {
      if (tag != "contact") {
        var anchor = document.querySelector("#" + tag);
        window.scrollTo(anchor.offsetLeft, anchor.offsetTop - 150);
      }
      return false;
    },
    showList() {
      var modal = document.getElementById("carpopup");
      var btn = document.getElementById("show");
      btn.onclick = function () {
        modal.style.display = "block";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
  },
  notifications: {},
};
</script>

<style>
:root {
  --brandConstructionColorMenu: #ffffff;
  --brandConstructionColor: #e94d1a;
  --brandConstructionColorBody: #e94d1a;
  --brandConstructionbtnColor: #e94d1a;
}

.hidden-item {
  display: none;
}

.bg-image-full {
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}

.bold {
  font-weight: bold !important;
}

h1 {
  display: inline-block;
  padding-bottom: 5px;
  position: relative;
  font-weight: 700;
}

.capital {
  text-transform: uppercase;
}

.h1v2 {
  padding-bottom: 20px;
}

.h1v2:before {
  content: "";
  position: absolute;
  width: 80% !important;
  height: 1px;
  bottom: 0;
  left: 10% !important;
  border-bottom: 2px solid #bb8c09;
}

/* carousel */
#quote-carousel {
  padding: 0 10px 30px 10px;
  margin-top: 30px;
  text-align: center;
}

/* indicator position */
#quote-carousel .carousel-indicators {
  right: 50%;
  top: auto;
  bottom: -10px;
  margin-right: -19px;
}

/* indicator color */
#quote-carousel .carousel-indicators li {
  background: #c0c0c0;
}

/* active indicator */
#quote-carousel .carousel-indicators .active {
  background: #333333;
  height: 10px;
  width: 10px;
  margin-bottom: 1px;
}

/* heading_color*/
.brand-color-menu {
  color: var(--brandConstructionColorMenu) !important;
}

.brand-color {
  color: var(--brandConstructionColor) !important;
}

.menu {
  background-color: rgba(0, 0, 0, 0.3) !important;
}

.brand-color-body {
  color: var(--brandConstructionColorBody) !important;
}

.brand-gbcolor {
  background-color: var(--brandConstructionbtnColor) !important;
}

.brand-btn {
  border-color: var(--brandConstructionbtnColor);
  background-color: var(--brandConstructionbtnColor);
  border-radius: 0;
}

.brand-btn:hover {
  background-color: var(--brandConstructionbtnColor);
  border-color: var(--brandConstructionbtnColor);
}

.brand-border {
  border: solid 1px !important;
  border-color: var(--brandConstructionbtnColor) !important;
}

.p-0 {
  padding: 0px !important;
}

.mt-20 {
  margin-top: 20px !important;
}

.mt-60 {
  margin-top: 60px !important;
}

.gallary .carousel-indicators {
  left: 0;
  top: auto;
  bottom: -40px;
}

/* The colour of the indicators */
.gallary .carousel-indicators li {
  background: #a3a3a3;
  border-radius: 50%;
  width: 8px;
  height: 8px;
}

.gallary .carousel-indicators .active {
  background: #707070;
}

.carousel-item-next,
.carousel-item-prev,
.carousel-item.active {
  display: flex !important;
}

.font-12 {
  font-size: 12px;
}

.circle {
  background: rgba(232, 225, 225, 0.3);
  border-radius: 130px;
  color: white;
  height: 130px;
  font-weight: bold;
  width: 130px;
  display: table;
  margin: 20px auto;
}

.circle p {
  vertical-align: middle;
  display: table-cell;
}

.heading {
  font-weight: 700;
  font-size: 40px;
}

.font-12 {
  font-size: 12px;
}

.poppinfont {
  font-family: "poppinsregular" !important;
}
</style>
