<template>
  <!-- visit us section -->
  <section style="background-color: #000" class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="capital text-white poppinfont">VISIT US</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-4 text-left py-5">
          <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
              <h1 class="text-white poppinfont">{{ businessName }}</h1>
              <div class="mt-20">
                <i class="fa fa-map-marker text-white" aria-hidden="true"></i>
                <span class="poppinfont font-weight-normal text-white">{{
                  address
                }}</span>
              </div>
              <div>
                <i class="fa fa-envelope text-white" aria-hidden="true"></i>
                <span
                  calss="poppinfont font-weight-normal text-white"
                  style="color: #fff; font-weight: normal"
                  >{{ email }}</span
                >
              </div>
              <div>
                <i class="fa fa-phone-square text-white" aria-hidden="true"></i>
                <span class="poppinfont font-weight-normal text-white">{{
                  phone
                }}</span>
              </div>
            </div>
            <div class="col-2"></div>
          </div>
        </div>
        <div class="col-4">
          <!-- lat & long -->
          <iframe
            style="
              border: 0px;
              width: 100%;
              height: -webkit-fill-available;
              height: 100%;
            "
            v-bind:src="map"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div class="col-2"></div>
      </div>
      <div class="row mt-60">
        <div class="col-4"></div>
        <div class="col-4">
          <h2 class="text-white poppinfont"><b>Contact me by:</b></h2>
          <div class="row text-center">
            <div class="col-5">
              <i
                class="fa fa-phone-square text-white"
                style="font-size: 4rem"
                aria-hidden="true"
              ></i>
              <p class="text-white">{{ phone }}</p>
            </div>
            <div class="col-2 text-center text-white m-auto">or</div>
            <div class="col-5">
              <button
                v-b-modal="'my-booking'"
                v-on:click="gotoPage('contact')"
                style="background-color: black; border: 0"
              >
                <img
                  src="../../../assets/unikall/images/logo_chat.png"
                  width="90px"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EcommerceVisitUs",
  props: ["businessName", "address", "email", "phone", "latitude", "longitude"],
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      map: "https://maps.google.com/maps?q="+this.latitude+"%20"+this.longitude+"&t=&z=13&ie=UTF8&iwloc=&output=embed"
    };
  },
  methods: {
    gotoPage(tag) {
      if (tag != "contact") {
        var anchor = document.querySelector("#" + tag);
        window.scrollTo(anchor.offsetLeft, anchor.offsetTop - 150);
      }
      return false;
    },
  },
};
</script>
