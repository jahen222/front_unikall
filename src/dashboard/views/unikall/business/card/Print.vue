<template>
  <div class="flip-container centered">
    <div class="flipper">
      <div class="front"></div>
      <div
        class="back"
        v-bind:style="{ backgroundImage: 'url(' + business_card + ')' }"
      >
        <img :src="logo_preview" alt="" width="100px" style="margin-left: 7%; margin-top: 20%;"/>
        <h1 style="margin-left: 123px;">{{ user.username }}</h1>
        <p>{{ business.business_position }}</p>
        <br />
        <br />
        <div class="font-a-icons">
          <div class="icon-group">
            <span class="contact">{{ address }}</span>
            <div class="icon-group">
              <a
                class="contact"
                href="mailto:hello@petrusrex.com"
                target="_top"
                >{{ phone }}</a
              >
            </div>
            <div class="icon-group">
              <a
                class="contact"
                href="mailto:hello@petrusrex.com"
                target="_top"
                >{{ email }}</a
              >
            </div>
            <div class="icon-group">
              <a
                class="contact"
                href="http://www.petrusrex.com"
                target="_blank"
                >{{ link }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Cookies from "js-cookie";
//import axios from "axios";

export default {
  data() {
    return {
      user: null,
      business: null,
      layouts: [],
      complete_layouts: [],
      layoutOptions: [],
      layout: {
        name: null,
      },
      link: null,
      preview: null,
      business_card: null,
      address: null,
      web: null,
      email: null,
      phone: null,
      logo_preview: null,
    };
  },
  async mounted() {
    this.user = JSON.parse(Cookies.get("user"));
    var layout = JSON.parse(localStorage.getItem("user")).layout;
    var business = JSON.parse(localStorage.getItem("user")).business;
    this.business = business;
    this.link = process.env.VUE_APP_URL + "/site/" + this.user.id;
    this.address = business.address1;
    this.web = this.link;
    this.email = this.user.email;
    this.phone = this.user.phone;

    if (business.logo != undefined) {
      this.logo_preview =
        process.env.VUE_APP_STRAPI_API_URL + business.logo.url;
    }
    if (layout != null) {
      this.layout = layout;
      this.layoutOptions.push(layout.name);
      this.preview = process.env.VUE_APP_STRAPI_API_URL + layout.mockup.url;
      this.business_card = process.env.VUE_APP_STRAPI_API_URL + layout.card.url;
    }

    console.log(business);
  },
  methods: {
    ...mapMutations({
      updateUser: "updateUser",
    }),
    helpLayoutInfoForm: function () {
      this.showInfo({
        message: "Here you can change your template or or layout",
      });
    },
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
    showInfo: {
      title: "Information",
      message: "Success",
      type: "info",
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);

/* CENTERING */

.centered {
  position: fixed;
  top: 40%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

/* /end */

body {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/326221/bg.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

h3 {
  position: relative;
  left: 45%;
}

/* THE FRONT */

.front {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/326221/bc-front.jpg);
  background-size: cover;
}

/* /end */

/* THE BACK */

.back {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/326221/bc-back.jpg);
  background-size: cover;
}

h1,
p,
.font-a-icons {
  color: white;
  font-family: "Lato";
  margin-left: 43%;
  line-height: 145%;
  margin-top: -145px;
}

h1 {
  margin-top: 5%;
}

p {
  font-size: 16px;
  padding-bottom: 15px;
  width: 35%;
  border-bottom: 2px solid white;
}

.bold {
  font-weight: bold;
}

.font-a-icons {
  margin-top: 25px;
}
.icon-group {
  margin-top: 8px;
}

span,
.link,
.fa,
a {
  color: white;
}

.fa {
  font-size: 18px;
}

span,
a {
  font-size: 16px;
}

a,
.website {
  text-decoration: none;
}

a:hover,
.website:hover {
  color: #3f3f3f;
}

.icon-box {
  position: relative;
  color: black;
  font-size: 24px;
  height: 45px;
  width: 45px;
  padding: 5px;
  top: 75px;
  left: 30%;
  display: inline-block;
  border: 2px solid white;
  margin: 5px;
  text-align: center;
  cursor: pointer;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  transition: all ease 0.5s;
}
.icon-box:hover {
  box-shadow: inset 0 50px 0 0 white;
  color: white;
}

/* /end */

/* THE FLIP EFFECT */

/* entire container, keeps perspective */
.flip-container {
  perspective: 1000px;
}
/* flip the pane when hovered */
.flip-container:hover .flipper,
.flip-container.hover .flipper {
  transform: rotateY(180deg);
  cursor: pointer;
}

.flip-container,
.front,
.back {
  height: 350px;
  width: 600px;
}

.flipper {
  transition: 0.5s;
  transform-style: preserve-3d;
  position: relative;
}

.front,
.back {
  backface-visibility: hidden;
  position: absolute;
}

.front {
  z-index: 2;
  /* firefox 31 */
  transform: rotateY(0deg);
}

.back {
  background-color: white;
}

.back {
  transform: rotateY(180deg);
}

.vertical.flip-container {
  position: relative;
}

.vertical .back {
  transform: rotateX(180deg);
}

.vertical.flip-container .flipper {
  transform-origin: 100% 400x;
}

.vertical.flip-container:hover .flipper {
  transform: rotateX(-180deg);
}
</style>