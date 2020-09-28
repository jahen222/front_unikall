<template>
  <section class="blog-one" id="blog">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 block-title">
          <div>
            <b-tabs content-class="mt-3">
              <b-tab v-for="subcategory in subcategories" v-bind:key="subcategory.id">
                <template v-slot:title style="color: black">{{subcategory.name}}</template>
                <div v-if="subcategory.layouts && subcategory.layouts.length > 0" class="row">
                  <div v-for="item in subcategory.layouts" v-bind:key="item.id" class="col-lg-6">
                    <div class="blog-one__single">
                      <div class="blog-one__image" v-if="item.preview && item.preview.url">
                        <img @click="showModal(item.id)" :src="api_url + item.preview.url" alt />
                      </div>
                      <div class="blog-one__image" v-else>
                        <img
                          @click="showModal(item.id)"
                          src="../../assets/unikall/images/default.jpg"
                          alt
                        />
                      </div>
                      <div class="blog-one__content">
                        <h3>
                          <a @click="showModal(item.id)">{{ item.name }}</a>
                        </h3>
                      </div>
                    </div>

                    <b-modal :ref="'modal'+item.id" hide-footer size="xl" class="text-center">
                      <template v-slot:modal-header="{ close }">
                        <b-button size="sm" variant="danger" @click="close()">Close</b-button>
                      </template>
                      <form>
                        <form-wizard
                          @on-complete="checkRegisterForm(item.id)"
                          color="#343a40"
                          title
                          subtitle
                        >
                          <input type="hidden" layout="item.id" />
                          <tab-content
                            title="Layout details"
                            icon="fab fa-font-awesome"
                            class="text-center"
                            v-if="item.mockup && item.mockup.url"
                          >
                            <img :src="api_url + item.mockup.url" width="70%" alt />
                          </tab-content>
                          <tab-content
                            title="Layout details"
                            icon="fab fa-font-awesome"
                            class="text-center"
                            v-else
                          >
                            <img src="../../assets/unikall/images/default.jpg" alt />
                          </tab-content>
                          <tab-content title="Personal details" icon="fas fa-user">
                            <div class="container">
                              <div class="row">
                                <div class="col-12">
                                  <div class="row">
                                    <div class="col-4">
                                      <p class="fl-micro-text">
                                        How you wish your customers know the name
                                        of your brand
                                      </p>
                                    </div>
                                    <div class="col-8">
                                      <div class="form-group">
                                        <input
                                          type="text"
                                          name="name"
                                          style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;"
                                          class="form-control"
                                          placeholder="Business Name"
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
                                    <div class="col-8">
                                      <div class="form-group">
                                        <label for="exampleInputPassword1">Upload Logo</label>
                                        <vue-upload-multiple-image
                                          @upload-success="uploadWorkImagesSuccess"
                                          @before-remove="beforeWorkImagesRemove"
                                          @edit-image="editWorkImagesImage"
                                          dragText="Click to upload file"
                                          browseText
                                          maxImage="1"
                                          primaryText="Primary"
                                          markIsPrimaryText="Mark as Primary"
                                          popupText="This image will be displayed as default"
                                        ></vue-upload-multiple-image>
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
                                        <input
                                          name="tagline"
                                          type="text"
                                          style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;"
                                          class="form-control"
                                          placeholder="Tagline Title"
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
                                        <input
                                          name="description"
                                          type="text"
                                          style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;"
                                          class="form-control"
                                          placeholder="Your Work"
                                          v-model="register_description"
                                        />
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
                                  </div>
                                  <div class="row">
                                    <div class="col-4">
                                      <p class="fl-micro-text">
                                        Tap city Name and select from list. If you can’t
                                        find your city, contact customers support
                                      </p>
                                    </div>
                                    <div class="col-8">
                                      <div class="form-group">
                                        <input
                                          name="address1"
                                          type="text"
                                          style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;"
                                          class="form-control"
                                          placeholder="Add Location"
                                          v-model="register_address"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-4">
                                      <p class="fl-micro-text">Insert a valid username</p>
                                    </div>
                                    <div class="col-8">
                                      <div class="form-group">
                                        <input
                                          name="username"
                                          type="text"
                                          style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;"
                                          class="form-control"
                                          placeholder="Usernme"
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
                                        <input
                                          name="phone"
                                          type="text"
                                          style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;"
                                          class="form-control"
                                          placeholder="Phone Number"
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
                                        <input
                                          name="email"
                                          type="text"
                                          style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;"
                                          class="form-control"
                                          placeholder="Email"
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
                                        <input
                                          type="password"
                                          style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;"
                                          class="form-control"
                                          placeholder="Password"
                                          v-model="register_password"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </tab-content>
                        </form-wizard>
                      </form>
                    </b-modal>
                  </div>
                </div>
                <div
                  v-if="!subcategory.layouts || subcategory.layouts.length == 0"
                  class="row text-danger"
                >No Templates Found...</div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

    width: 200px;
    height: 100px;

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "GenericLayouts",
  props: ["name", "id", "layouts", "subcategories"],
  components: {
    VueUploadMultipleImage,
  },
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      logo_url: "",
      logo_file: "",
      work_files: "",
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
  apollo: {},
  methods: {
    ...mapMutations({
      setUser: "setUser",
      updateUser: "updateUser",
      logout: "logout",
    }),
    showModal(i) {
      this.$refs["modal" + i][0].show();
    },
    onComplete: function () {
      alert("Yay. Done!");
    },
    onLogoFileChange(e) {
      const file = e.target.files[0];
      this.logo_url = URL.createObjectURL(file);
      this.logo_file = this.$refs.file.files[0];
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
    checkRegisterForm: function (layout_id) {
      this.errors = [];

      if (!this.register_business_name) {
        this.errors.push(" The business name is required.");
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
      if (this.register_work_images.length < 1) {
        this.errors.push(" The logo is required.");
      }
      //if (this.register_logo.length < 1) {
      //  this.errors.push(" The logo is required.");
      //}
      if (this.errors.length) {
        this.showRegisterError({ message: this.errors });
      } else {
        this.handleSubmitRegister(layout_id);
      }
    },
    async handleSubmitRegister(layout_id) {
      /*for (let index = 0; index < this.aux_layout.length; index++) {
        const element = this.aux_layout[index];
        if (element.name == this.register_layout) {
          layout_id = element.id;
        }
      }*/

      await axios
        .post(this.api_url + "/auth/local/register", {
          username: this.register_username,
          email: this.register_email,
          phone: this.register_phone,
          password: this.register_password,
          layout: layout_id,
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
          //const register_logo = this.register_logo;
          const register_description = this.register_description;
          const register_address = this.register_address;
          const user_id = response.data.user.id;

          const data = {};
          data["name"] = business_name;
          data["tagline"] = register_tagline;
          data["description"] = register_description;
          data["address"] = register_address;
          data["user"] = user_id;
          //formData.append("files.logo", register_logo, "logo");
          //console.log("logo: ", register_logo);

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
            //console.log("blod: ", blob);
            formData.append(`files.logo`, blob, register_work_images[i].name);
          }

          formData.append("data", JSON.stringify(data));
          request.open("POST", this.api_url + "/businesses");
          request.setRequestHeader(
            "Authorization",
            "Bearer " + localStorage.getItem("jwt")
          );

          request.onreadystatechange = () => {
            if (request.readyState == 4) {
              if (request.status == 200) {
                var user = JSON.parse(localStorage.getItem("user"));
                user.business = JSON.parse(request.response);
                this.updateUser(user);
                this.$router.go();
              }
            }
          };

          request.send(formData);
        })
        .catch((error) => {
          this.showRegisterError({
            message: error.response.data.message[0].messages[0].message,
          });
        });
    },
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

<style>
.blog-one {
  background-color: #ffffff;
  padding-top: 0px;
}

.blog-one__image {
  background-color: #504c54;
}

.blog-one__content::after {
  background-image: linear-gradient(90deg, #000 0%, #000 100%);
  height: 0px;
}

[class*="col-"]:nth-child(2) .blog-one__content::after {
  background-image: linear-gradient(90deg, #000 0%, #000 100%);
}

[class*="col-"]:nth-child(3) .blog-one__content::after {
  background-image: linear-gradient(90deg, #000 0%, #000 100%);
}

[class*="col-"]:nth-child(4) .blog-one__content::after {
  background-image: linear-gradient(90deg, #000 0%, #000 100%);
}

[class*="col-"]:nth-child(5) .blog-one__content::after {
  background-image: linear-gradient(90deg, #000 0%, #000 100%);
}

[class*="col-"]:nth-child(6) .blog-one__content::after {
  background-image: linear-gradient(90deg, #000 0%, #000 100%);
}

.blog-one__content h3 {
  color: #000;
}

.fl-icon-navar {
  margin-right: 5px;
  color: gray;
  font-size: xx-large;
}

.fl-input-form {
  width: 200px;
  height: 100px;
}

.fl-btn-set-images-form {
  background-color: white;
  border-color: black;
  color: black;
  width: 100%;
  border-width: 2px;
  border-radius: 6px;
}

.fl-btn-set-images-form2 {
  background-color: white;
  border-color: black;
  color: black;
  border-width: 2px;
  border-radius: 6px;
}

.fl-micro-text {
  font-size: 12px;
  line-height: 25px;
}

.special-input {
  border: 0px !important;
  border-bottom: #000000 solid 1px !important;
}
</style><style scoped>
.block-title h3 {
  font-size: 40px !important;
}

label {
  color: #000000;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #000000;
  opacity: 1;
  font-size: 18px;
  /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #000000;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #000000;
}

.imgpreview {
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
