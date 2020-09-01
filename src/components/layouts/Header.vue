<template>
  <header class="site-header-one stricky site-header-one__fixed-top">
    <div class="container-fluid">
      <div class="site-header-one__logo">
        <a href="/">
          <img src="../../assets/unikall/images/unikall-logo-white.png" width="136" alt />
        </a>
        <span class="side-menu__toggler">
          <i class="fa fa-bars"></i>
        </span>
      </div>
      <div class="main-nav__main-navigation one-page-scroll-menu">
        <ul class="main-nav__navigation-box">
          <li class="scrollToLink">
            <a href="/">Home</a>
          </li>
          <li class="scrollToLink">
            <a href="#freeplan">Free Plan</a>
          </li>
          <li class="scrollToLink">
            <a href="#custonplan">Custom Plan</a>
          </li>
          <li class="scrollToLink">
            <a href="#templates">Templates</a>
          </li>
          <li class="scrollToLink">
            <a href="#support">Support</a>
          </li>
          <li class="dropdown scrollToLink">
            <a href="/articles">Blog</a>
          </li>
          <li class="dropdown scrollToLink">
            <a href="#legal">Legal</a>
          </li>
          <li class="dropdown scrollToLink">
            <a href="#"></a>
          </li>
        </ul>
      </div>

      <div class="main-nav__main-navigation one-page-scroll-menu main-nav__right">
        <ul class="main-nav__navigation-box">
          <li class="dropdown scrollToLink" v-if="username">
            <a href="#" class="thm-btn main-nav__btn">
              <span class="spamwhite">{{ username }}</span>
            </a>
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/" v-on:click="handleSubmitLogout">Logout</a>
              </li>
            </ul>
          </li>
          <li v-else>
            <a class="thm-btn main-nav__btn">
              <span class="spamwhite">Log-in</span>
            </a>
            <ul>
              <li>
                <a v-b-modal.login>Log-in</a>
              </li>
              <li>
                <a v-b-modal.regiter>Register</a>
              </li>
            </ul>
            <b-modal id="login" hide-footer size="l" class="text-center">
              <template v-slot:modal-header="{ close }">
                <b-button size="sm" variant="danger" @click="close()">Close</b-button>
              </template>
              <form-wizard @on-complete="handleSubmitLogin" color="#343a40" title subtitle>
                <tab-content title="Log-in">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Username</label>
                              <input
                                type="email"
                                class="form-control"
                                aria-describedby="emailHelp"
                                v-model="login_username"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Password</label>
                              <input
                                type="password"
                                class="form-control"
                                aria-describedby="passwordHelp"
                                v-model="login_password"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </tab-content>
              </form-wizard>
            </b-modal>
            <b-modal id="regiter" hide-footer size="xl" class="text-center">
              <template v-slot:modal-header="{ close }">
                <b-button size="sm" variant="danger" @click="close()">Close</b-button>
              </template>

              <form-wizard
                @on-complete="checkRegisterForm"
                color="#343a40"
                title="Fill the information just in 3 steps"
                subtitle="to get your Web Profile done!"
              >
                <tab-content title="Business details">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">
                              How you wish your customers knows the name
                              of your brand
                            </p>
                          </div>
                          <div class="col-8">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Business Name</label>
                              <input
                                type="text"
                                class="form-control"
                                aria-describedby="emailHelp"
                                v-model="register_business_name"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">
                              It is optional to you to upload an image of your
                              business logo (jpg, png)
                            </p>
                          </div>
                          <div class="col-4">
                            <div class="form-group">
                              <label for="exampleInputPassword1">Upload Logo</label>
                              <input
                                type="file"
                                accept="image/*"
                                class="form-control fl-input-form"
                                aria-describedby="emailHelp"
                                @change="onFileChange"
                                name="logo"
                              />
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="form-group">
                              <label for="exampleInputPassword1">Preview</label>
                              <div id="preview">
                                <img v-if="register_logo_preview" :src="register_logo_preview" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">
                              What Your Customer Wants : enter an attractive
                              title, a good title encourages buyers to see you! If
                              you want to use one of our suggested phrases
                              just click here
                            </p>
                          </div>
                          <div class="col-8">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Tagline Title</label>
                              <input
                                type="text"
                                class="form-control"
                                aria-describedby="emailHelp"
                                v-model="register_tagline"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">
                              In your own words, provide a brief description
                              about what do you offer or sell
                            </p>
                          </div>
                          <div class="col-8">
                            <div class="form-group">
                              <label for="exampleInputEmail1">You Work</label>
                              <b-form-textarea
                                id="textarea"
                                v-model="register_description"
                                placeholder="Enter description of you work..."
                                rows="3"
                                max-rows="10"
                              ></b-form-textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </tab-content>
                <tab-content title="Additional Info">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">
                              Show your customers a visual example of your
                              work done, so, expose those ones options you
                              are most prod of!
                            </p>
                          </div>
                          <div class="col-8">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Photos of your work</label>
                              <input type="text" class="form-control" aria-describedby="emailHelp" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4"></div>
                          <div class="col-8">
                            <div class="form-group">
                              <div class="row">
                                <div class="col-4">
                                  <div
                                    id="my-strictly-unique-vue-upload-multiple-image"
                                    style="display: flex;"
                                  >
                                    <vue-upload-multiple-image
                                      @upload-success="uploadWorkImagesSuccess"
                                      @before-remove="beforeWorkImagesRemove"
                                      @edit-image="editWorkImagesImage"
                                      dragText="Click to upload file"
                                      browseText
                                      maxImage="6"
                                      primaryText="Primary"
                                      markIsPrimaryText="Mark as Primary"
                                      popupText="This image will be displayed as default"
                                    ></vue-upload-multiple-image>
                                  </div>
                                </div>
                                <div class="col-8">
                                  <p class="fl-micro-text">
                                    Connect with your customers, using photos! Ensure the item
                                    is properly visible from multiple angles. Upload MIN 3 and
                                    MAX 6 photos (jpg, .gif, .png.)
                                  </p>
                                  <p class="fl-micro-text">
                                    *If you want to upload more photos, please upgrade your
                                    plan*I
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">
                              Write the name of the products or services,
                              features it includes and price for each one
                            </p>
                          </div>
                          <div class="col-8">
                            <div class="form-group">
                              <div class="row">
                                <div class="col-4">
                                  <div class="row">
                                    <div class="col-4">
                                      <h3>Price</h3>
                                    </div>
                                    <div class="col-8">
                                      <button type="submit" class="fl-btn-set-images-form2">Add Item</button>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-8">
                                  <p class="fl-micro-text">
                                    Upload MAX 3 products or services prices. Please
                                    select if the price is fixed or negotiable, as applicable
                                  </p>
                                </div>
                                <p class="fl-micro-text">
                                  *If you want to write more than 3 products or services prices,
                                  please upgrade your plan*
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </tab-content>
                <tab-content title="Personal details">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">
                              Tap city Name and select from list. If you can’t
                              find your city, contact customers support
                            </p>
                          </div>
                          <div class="col-8">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Add Location</label>
                              <input
                                type="text"
                                class="form-control"
                                aria-describedby="emailHelp"
                                v-model="register_address"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">Name helps buyers to trust you</p>
                          </div>
                          <div class="col-8">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Contact Username</label>
                              <input
                                type="text"
                                class="form-control"
                                aria-describedby="emailHelp"
                                v-model="register_username"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">Insert a valid phone number</p>
                          </div>
                          <div class="col-8">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Phone Number</label>
                              <input
                                type="text"
                                class="form-control"
                                aria-describedby="emailHelp"
                                v-model="register_phone"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">Insert a valid email</p>
                          </div>
                          <div class="col-8">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Email</label>
                              <input
                                type="text"
                                class="form-control"
                                aria-describedby="emailHelp"
                                v-model="register_email"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">Insert a valid password</p>
                          </div>
                          <div class="col-8">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Password</label>
                              <input
                                type="text"
                                class="form-control"
                                aria-describedby="emailHelp"
                                v-model="register_password"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">Confirm password</p>
                          </div>
                          <div class="col-8">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Confirm Password</label>
                              <input
                                type="text"
                                class="form-control"
                                aria-describedby="emailHelp"
                                v-model="register_confirm_password"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </tab-content>
              </form-wizard>
            </b-modal>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";
import store from "../../store";
import Cookies from "js-cookie";
import axios from "axios";
import VueUploadMultipleImage from "vue-upload-multiple-image";
//import POST_BUSINESS from "./mutations/POST_BUSINESS";

export default {
  name: "Header",
  components: {
    VueUploadMultipleImage,
  },
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      headerBgVariant: "dark",
      headerTextVariant: "light",
      login_username: null,
      login_password: null,
      register_errors: [],
      register_business_name: null,
      register_logo: null,
      register_logo_preview: null,
      register_tagline: null,
      register_description: null,
      register_address: null,
      register_username: null,
      register_phone: null,
      register_email: null,
      register_password: null,
      register_confirm_password: null,
      register_work_images: [],
    };
  },
  computed: {
    username() {
      let user = store.state.auth.user;
      //console.log(store.state);
      if (Cookies.get("user") !== undefined) {
        user = JSON.parse(Cookies.get("user"));
        return user.username;
      }
      return user;
    },
  },
  methods: {
    ...mapMutations({
      setUser: "setUser",
      logout: "logout",
    }),
    async handleSubmitLogin() {
      await axios
        .post(this.api_url + "/auth/local", {
          identifier: this.login_username,
          password: this.login_password,
        })
        .then((response) => {
          this.showLoginSuccess({
            message: "Welcome " + response.data.user.username,
          });
          this.setUser(response.data);
          this.$router.go();
        })
        .catch((error) => {
          this.showLoginError({
            message: error.response.data.message[0].messages[0].message,
          });
        });
    },
    async handleSubmitRegister() {
      await axios
        .post(this.api_url + "/auth/local/register", {
          username: this.register_username,
          email: this.register_email,
          phone: this.register_phone,
          password: this.register_password,
        })
        .then((response) => {
          this.showRegisterSuccess({
            message: "Welcome " + response.data.user.username,
          });
          this.setUser(response.data);
          // business data
          const request = new XMLHttpRequest();
          const formData = new FormData();
          const business_name = this.register_business_name;
          const register_tagline = this.register_tagline;
          const register_logo = this.register_logo;
          const register_description = this.register_description;
          const register_address = this.register_address;
          const user_id = response.data.user.id;
          const data = {};
          data["name"] = business_name;
          data["tagline"] = register_tagline;
          data["description"] = register_description;
          data["address"] = register_address;
          data["user"] = user_id;
          formData.append("files.logo", register_logo, "logo");
          console.log("logo: ", register_logo);

          const register_work_images = this.register_work_images;
          for (let i = 0; i < register_work_images.length; i++) {
            //console.log("file: ", JSON.stringify(register_work_images[i].path));
            const dataURI = register_work_images[i].path;
            var byteString = atob(dataURI.split(",")[1]);
            var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var j = 0; j < byteString.length; j++) {
              ia[j] = byteString.charCodeAt(j);
            }
            var blob = new Blob([ab], { type: mimeString });
            console.log("blod: ", blob);
            formData.append(`files.work_images[${i}]`, blob, register_work_images[i].name);
          }

          formData.append("data", JSON.stringify(data));
          request.open("POST", this.api_url + "/businesses");
          request.setRequestHeader(
            "Authorization",
            "Bearer " + localStorage.getItem("jwt")
          );
          request.send(formData);

          //this.$router.go();
        })
        .catch((error) => {
          this.showRegisterError({
            message: error.response.data.message[0].messages[0].message,
          });
        });
    },
    handleSubmitLogout: function () {
      this.logout();
    },
    onFileChange(e) {
      this.register_logo = e.target.files[0];
      this.register_logo_preview = URL.createObjectURL(this.register_logo);
    },
    checkRegisterForm: function () {
      this.errors = [];

      if (!this.register_business_name) {
        this.errors.push(" The business name is required.");
      }
      if (!this.register_logo) {
        this.errors.push(" The logo is required.");
      }
      if (!this.register_tagline) {
        this.errors.push(" The tagline is required.");
      }
      if (!this.register_description) {
        this.errors.push(" The business description is required.");
      }
      if (!this.register_address) {
        this.errors.push(" The address is required.");
      }
      if (!this.register_email) {
        this.errors.push(" The email is required.");
      }
      if (!this.register_password) {
        this.errors.push(" The password is required.");
      }
      if (!this.register_confirm_password) {
        this.errors.push(" The confirm password is required.");
      }
      if (this.register_password != this.register_confirm_password) {
        this.errors.push(" The password and confirm password must match.");
      }
      if (this.register_work_images.length < 3) {
        this.errors.push(" Must be at least 3 work images.");
      }
      //if (this.register_logo.length < 1) {
      //  this.errors.push(" The logo is required.");
      //}
      if (this.errors.length) {
        this.showRegisterError({ message: this.errors });
      } else {
        this.handleSubmitRegister();
      }
    },
    uploadWorkImagesSuccess: function (formData, index, fileList) {
      this.register_work_images = fileList;
    },
    beforeWorkImagesRemove: function (index, done, fileList) {
      this.register_work_images = fileList;
    },
    editWorkImagesImage: function (formData, index, fileList) {
      this.register_work_images = fileList;
    },
    /*uploadLogoSuccess: function (formData, index, fileList) {
      this.register_logo = fileList;
    },
    beforeLogoRemove: function (index, done, fileList) {
      this.register_logo = fileList;
    },
    editLogoImage: function (formData, index, fileList) {
      this.register_logo = fileList;
    },*/
  },
  notifications: {
    showLoginError: {
      title: "Login Failed",
      message: "Failed to authenticate",
      type: "error",
    },
    showLoginSuccess: {
      title: "Login Success",
      message: "Welcome",
      type: "success",
    },
    showRegisterError: {
      title: "Register Failed",
      message: "Failed to register",
      type: "error",
    },
    showRegisterSuccess: {
      title: "Register Success",
      message: "Welcome",
      type: "success",
    },
  },
};
</script>

<style scoped>
.main-nav__main-navigation {
  margin-left: auto;
}
.main-nav__right {
  margin-left: 0;
}
.thm-btn {
  background-image: linear-gradient(
    0deg,
    #ff5f5e 0%,
    #ffc52f 51%,
    #ff5f5e 100%
  );
}
.spamwhite {
  color: #fff !important;
}
#preview {
  display: flex;
  justify-content: left;
  align-items: left;
}
#preview img {
  max-width: 100%;
  max-height: 100px;
}
</style>

<style>
.modal-header {
  display: flex;
  background-image: url(../../assets/unikall/images/Unikall-home-final-particion.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
  padding-bottom: 20%;
}
</style>