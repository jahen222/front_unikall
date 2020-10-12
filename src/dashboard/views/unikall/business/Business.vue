<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h1>Business</h1>
        <h5>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </h5>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Business Imformation')" no-body>
          <b-card-body>
            <h4>
              Business Imformation
              <a @click="helpBusinessInfoForm">
                <i
                  class="iconsminds-speach-bubble-asking"
                  style="color: #007bff"
                />
              </a>
            </h4>
            <b-form @submit.prevent="checkBusinessInfoForm">
              <b-row>
                <b-colxx sm="6">
                  <b-form-group :label="$t('Business Name')">
                    <b-form-input type="text" v-model="gridForm.name" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="6">
                  <b-form-group :label="$t('Company Email')">
                    <b-form-input type="email" v-model="gridForm.email" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="6">
                  <b-form-group :label="$t('Tagline Title')">
                    <b-form-input type="text" v-model="gridForm.tagline" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="6">
                  <b-form-group :label="$t('Your work')">
                    <b-form-textarea
                      id="textarea"
                      v-model="gridForm.description"
                      rows="3"
                      max-rows="10"
                    ></b-form-textarea>
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="6">
                  <b-form-group :label="$t('latitude')">
                    <b-form-input type="number" v-model="gridForm.latitude" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="6">
                  <b-form-group :label="$t('longitude')">
                    <b-form-input type="number" v-model="gridForm.longitude" />
                  </b-form-group>
                </b-colxx>
              </b-row>
              <b-button type="submit" variant="primary" class="mt-4">{{
                $t("Save")
              }}</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Company Address')" no-body>
          <b-card-body>
            <h4>
              Company Address
              <a @click="helpCompanyAddressForm">
                <i
                  class="iconsminds-speach-bubble-asking"
                  style="color: #007bff"
                />
              </a>
            </h4>
            <b-form @submit.prevent="checkCompanyAddressForm">
              <b-row>
                <b-colxx sm="3">
                  <b-form-group :label="$t('Country')">
                    <b-form-input type="text" v-model="gridForm.country" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="3">
                  <b-form-group :label="$t('forms.state')">
                    <b-form-input type="text" v-model="gridForm.state" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="3">
                  <b-form-group :label="$t('forms.city')">
                    <b-form-input type="text" v-model="gridForm.city" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="3">
                  <b-form-group :label="$t('forms.zip')">
                    <b-form-input
                      type="number"
                      v-model="gridForm.zip"
                    ></b-form-input>
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="12">
                  <b-form-group :label="$t('Address 1')">
                    <b-form-input
                      type="text"
                      v-model="gridForm.address1"
                    ></b-form-input>
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="12">
                  <b-form-group :label="$t('forms.address2')">
                    <b-form-input
                      type="text"
                      v-model="gridForm.address2"
                    ></b-form-input>
                  </b-form-group>
                </b-colxx>
              </b-row>
              <b-button type="submit" variant="primary" class="mt-4">{{
                $t("Save")
              }}</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Logo')" no-body>
          <b-card-body>
            <h4>
              Logo
              <a @click="helpLogoForm">
                <i
                  class="iconsminds-speach-bubble-asking"
                  style="color: #007bff"
                />
              </a>
            </h4>
            <b-form @submit.prevent="checkLogoForm">
              <b-row>
                <b-colxx sm="6">
                  <b-form-group :label="$t('Upload')">
                    <vue-upload-multiple-image
                      @upload-success="uploadLogoSuccess"
                      @before-remove="beforeLogoRemove"
                      @edit-image="editLogoImage"
                      dragText="Click to upload file"
                      browseText
                      maxImage="1"
                      primaryText="Primary"
                      markIsPrimaryText="Mark as Primary"
                      popupText="This image will be displayed as default"
                    ></vue-upload-multiple-image>
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="6">
                  <b-form-group :label="$t('Actual')">
                    <img
                      v-if="logo_preview"
                      :src="logo_preview"
                      width="200px"
                    />
                  </b-form-group>
                </b-colxx>
              </b-row>
              <b-button type="submit" variant="primary" class="mt-4">{{
                $t("Save")
              }}</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import VueUploadMultipleImage from "vue-upload-multiple-image";
import Cookies from "js-cookie";
import axios from "axios";

export default {
  components: {
    VueUploadMultipleImage,
  },
  data() {
    return {
      user: null,
      business: null,
      gridForm: {
        name: null,
        tagline: null,
        email: null,
        description: null,
        address1: null,
        address2: null,
        country: null,
        city: null,
        state: null,
        zip: null,
        logo: [],
        logo_preview: null,
        longitude: null,
        latitude: null,
      },
    };
  },
  async mounted() {
    this.user = JSON.parse(Cookies.get("user"));
    var business = JSON.parse(localStorage.getItem("user")).business;

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    };

    await axios
      .get(
        process.env.VUE_APP_STRAPI_API_URL + "/businesses/" + business.id,
        config
      )
      .then((response) => {
        this.business = response.data;
        this.gridForm.name = this.business.name;
        this.gridForm.tagline = this.business.tagline;
        this.gridForm.email = this.business.email;
        this.gridForm.description = this.business.description;
        this.gridForm.address1 = this.business.address1;
        this.gridForm.address2 = this.business.address2;
        this.gridForm.country = this.business.country;
        this.gridForm.city = this.business.city;
        this.gridForm.state = this.business.state;
        this.gridForm.zip = this.business.zip;
        this.gridForm.longitude = this.business.longitude;
        this.gridForm.latitude = this.business.latitude;

        if (this.business.logo) {
          this.logo_preview =
            process.env.VUE_APP_STRAPI_API_URL + this.business.logo.url;
        }
      })
      .catch((error) => {
        this.showError({
          message: error.message,
        });
      });
  },
  methods: {
    ...mapMutations({
      updateUser: "updateUser",
    }),
    async onBusinessInfoSubmit() {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      };
      const bodyParameters = {
        name: this.gridForm.name,
        tagline: this.gridForm.tagline,
        email: this.gridForm.email,
        description: this.gridForm.description,
        latitude: this.gridForm.latitude,
        longitude: this.gridForm.longitude,
      };
      await axios
        .put(
          process.env.VUE_APP_STRAPI_API_URL +
            "/businesses/" +
            this.business.id,
          bodyParameters,
          config
        )
        .then((response) => {
          this.showSuccess({
            message: "Business information updated successfully",
          });
          this.business = response.data;
        })
        .catch((error) => {
          this.showError({
            message: error.message,
          });
        });
    },
    async onCompanyAddressSubmit() {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      };
      const bodyParameters = {
        address1: this.gridForm.address1,
        address2: this.gridForm.address2,
        country: this.gridForm.country,
        city: this.gridForm.city,
        state: this.gridForm.state,
        zip: this.gridForm.zip,
      };
      await axios
        .put(
          process.env.VUE_APP_STRAPI_API_URL +
            "/businesses/" +
            this.business.id,
          bodyParameters,
          config
        )
        .then((response) => {
          this.showSuccess({
            message: "Company Address updated successfully",
          });
          this.business = response.data;
        })
        .catch((error) => {
          this.showError({
            message: error.message,
          });
        });
    },
    async onLogoSubmit() {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "Content-Type": "multipart/form-data",
        },
      };
      const image = this.gridForm.logo;
      const formData = new FormData();
      for (let i = 0; i < image.length; i++) {
        const dataURI = image[i].path;
        var byteString = atob(dataURI.split(",")[1]);
        var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var j = 0; j < byteString.length; j++) {
          ia[j] = byteString.charCodeAt(j);
        }
        var blob = new Blob([ab], { type: mimeString });
        // only 1 avatar charge last blob
        formData.append(`files`, blob, "logo_" + this.business.id);
      }

      await axios({
        method: "post",
        url: process.env.VUE_APP_STRAPI_API_URL + "/upload",
        data: formData,
        headers: config.headers,
      })
        .then((response) => {
          var image = response.data[0];
          var business = JSON.parse(localStorage.getItem("user")).business;

          const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
          };
          const bodyParameters = {
            logo: image.id,
          };
          axios
            .put(
              process.env.VUE_APP_STRAPI_API_URL + "/businesses/" + business.id,
              bodyParameters,
              config
            )
            .then((response) => {
              this.showSuccess({
                message: "Business logo updated successfully",
              });
              console.log(response.data);
              this.$router.go();
            })
            .catch((error) => {
              this.showError({
                message: error.message,
              });
            });
        })
        .catch((error) => {
          this.showError({
            message: error.message,
          });
        });
    },
    checkBusinessInfoForm: function () {
      this.errors = [];

      if (!this.gridForm.name) {
        this.errors.push(" The business name is required.");
      }
      if (!this.gridForm.email) {
        this.errors.push(" The business email is required.");
      }
      if (!this.gridForm.tagline) {
        this.errors.push(" The tagline is required.");
      }
      if (!this.gridForm.description) {
        this.errors.push(" The description is required.");
      }
      if (this.errors.length) {
        this.showError({ message: this.errors });
      } else {
        this.onBusinessInfoSubmit();
      }
    },
    checkCompanyAddressForm: function () {
      this.errors = [];

      if (!this.gridForm.country) {
        this.errors.push(" The country is required.");
      }
      if (!this.gridForm.state) {
        this.errors.push(" The state is required.");
      }
      if (!this.gridForm.city) {
        this.errors.push(" The city is required.");
      }
      if (!this.gridForm.zip) {
        this.errors.push(" The zip is required.");
      }
      if (!this.gridForm.address1) {
        this.errors.push(" The address 1 is required.");
      }
      if (this.errors.length) {
        this.showError({ message: this.errors });
      } else {
        this.onCompanyAddressSubmit();
      }
    },
    checkLogoForm: function () {
      this.errors = [];

      if (this.gridForm.logo.length < 1) {
        this.errors.push(" Must be at least 1 new logo.");
      }
      if (this.errors.length) {
        this.showError({ message: this.errors });
      } else {
        this.onLogoSubmit();
      }
    },
    uploadLogoSuccess: function (formData, index, fileList) {
      this.gridForm.logo = fileList;
    },
    beforeLogoRemove: function (index, done, fileList) {
      this.gridForm.logo = fileList;
    },
    editLogoImage: function (formData, index, fileList) {
      this.gridForm.logo = fileList;
    },
    helpBusinessInfoForm: function () {
      this.showInfo({
        message:
          "Fill in your company name and email, Tagline is one of the first things your visitors will see, just describe what you can do for they. Be clear and concise.",
      });
    },
    helpCompanyAddressForm: function () {
      this.showInfo({
        message:
          "Providing your business information is important so that your customers know how to locate you. All fields are necessary",
      });
    },
    helpLogoForm: function () {
      this.showInfo({
        message: `Upload your company logo so that your clients recognize your business
                  try to use a good quality image in .jpg or .png format, and that is at least 500x500 pixels
                  if you need more help uploading your logo.`,
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