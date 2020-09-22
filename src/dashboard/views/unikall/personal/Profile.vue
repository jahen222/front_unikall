<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h1>Profile</h1>
        <h5>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat.
        </h5>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('User Information')" no-body>
          <b-card-body>
            <h4>
              User Information
              <a @click="helpUserInfoForm">
                <i class="iconsminds-speach-bubble-asking" style="color: #007bff" />
              </a>
            </h4>
            <b-form @submit.prevent="checkUserInfoForm">
              <b-row>
                <b-colxx sm="6">
                  <b-form-group :label="$t('Username')">
                    <b-form-input type="text" v-model="gridForm.username" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="6">
                  <b-form-group :label="$t('Fullname')">
                    <b-form-input type="text" v-model="gridForm.fullname" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="6">
                  <b-form-group :label="$t('forms.email')">
                    <b-form-input type="email" v-model="gridForm.email" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="6">
                  <b-form-group :label="$t('Phone')">
                    <b-form-input type="text" v-model="gridForm.phone" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="4">
                  <b-form-group :label="$t('Country')">
                    <b-form-input type="text" v-model="gridForm.country" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="4">
                  <b-form-group :label="$t('forms.state')">
                    <b-form-input type="text" v-model="gridForm.state" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="4">
                  <b-form-group :label="$t('forms.city')">
                    <b-form-input type="text" v-model="gridForm.city" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="10">
                  <b-form-group :label="$t('forms.address')">
                    <b-form-input type="text" v-model="gridForm.address"></b-form-input>
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="2">
                  <b-form-group :label="$t('forms.zip')">
                    <b-form-input type="number" v-model="gridForm.zip"></b-form-input>
                  </b-form-group>
                </b-colxx>
              </b-row>
              <b-button type="submit" variant="primary" class="mt-4">{{ $t('Save') }}</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Change Password')" no-body>
          <b-card-body>
            <h4>
              Change Password
              <a @click="helpPasswordForm">
                <i class="iconsminds-speach-bubble-asking" style="color: #007bff" />
              </a>
            </h4>
            <b-form @submit.prevent="checkPasswordForm">
              <b-row>
                <b-colxx sm="6">
                  <b-form-group :label="$t('forms.password')">
                    <b-form-input type="password" v-model="gridForm.password" />
                  </b-form-group>
                </b-colxx>
                <b-colxx sm="6">
                  <b-form-group :label="$t('Confirm Password')">
                    <b-form-input type="password" v-model="gridForm.confirm_password" />
                  </b-form-group>
                </b-colxx>
              </b-row>
              <b-button type="submit" variant="primary" class="mt-4">{{ $t('Save') }}</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Avatar')" no-body>
          <b-card-body>
            <h4>
              Avatar
              <a @click="helpAvatarForm">
                <i class="iconsminds-speach-bubble-asking" style="color: #007bff" />
              </a>
            </h4>
            <b-form @submit.prevent="checkAvatarForm">
              <b-row>
                <b-colxx sm="6">
                  <b-form-group :label="$t('Upload')">
                    <vue-upload-multiple-image
                      @upload-success="uploadAvatarSuccess"
                      @before-remove="beforeAvatarRemove"
                      @edit-image="editAvatarImage"
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
                    <img v-if="avatar_preview" :src="avatar_preview" width="200px" />
                  </b-form-group>
                </b-colxx>
              </b-row>
              <b-button type="submit" variant="primary" class="mt-4">{{ $t('Save') }}</b-button>
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
      gridForm: {
        username: null,
        fullname: null,
        email: null,
        phone: null,
        password: null,
        confirm_password: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        country: null,
        avatar: [],
        avatar_preview: null,
      },
    };
  },
  mounted() {
    this.user = JSON.parse(Cookies.get("user"));
    this.gridForm.username = this.user.username;
    this.gridForm.fullname = this.user.fullname;
    this.gridForm.email = this.user.email;
    this.gridForm.phone = this.user.phone;
    this.gridForm.address = this.user.address;
    this.gridForm.city = this.user.city;
    this.gridForm.state = this.user.state;
    this.gridForm.zip = this.user.zip;
    this.gridForm.country = this.user.country;
    if (this.user.avatar.url) {
      this.avatar_preview =
        process.env.VUE_APP_STRAPI_API_URL + this.user.avatar.url;
    }
  },
  methods: {
    ...mapMutations({
      updateUser: "updateUser",
    }),
    async onUserInfoSubmit() {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      };
      const bodyParameters = {
        username: this.gridForm.username,
        email: this.gridForm.email,
        phone: this.gridForm.phone,
        fullname: this.gridForm.fullname,
        address: this.gridForm.address,
        city: this.gridForm.city,
        state: this.gridForm.state,
        country: this.gridForm.country,
        zip: this.gridForm.zip,
      };
      await axios
        .put(
          process.env.VUE_APP_STRAPI_API_URL + "/users/" + this.user.id,
          bodyParameters,
          config
        )
        .then((response) => {
          this.showSuccess({
            message: "User information updated successfully",
          });
          this.updateUser(response.data);
          this.$router.go();
        })
        .catch((error) => {
          this.showError({
            message: error.message,
          });
        });
    },
    async onPasswordSubmit() {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      };
      const bodyParameters = {
        password: this.gridForm.password,
      };
      await axios
        .put(
          process.env.VUE_APP_STRAPI_API_URL + "/users/" + this.user.id,
          bodyParameters,
          config
        )
        .then(() => {
          this.showSuccess({
            message: "User password updated successfully",
          });
          this.$router.go();
        })
        .catch((error) => {
          this.showError({
            message: error.response.data.message[0].messages[0].message,
          });
        });
    },
    async onAvatarSubmit() {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "Content-Type": "multipart/form-data",
        },
      };
      const avatar = this.gridForm.avatar;
      const formData = new FormData();
      for (let i = 0; i < avatar.length; i++) {
        const dataURI = avatar[i].path;
        var byteString = atob(dataURI.split(",")[1]);
        var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var j = 0; j < byteString.length; j++) {
          ia[j] = byteString.charCodeAt(j);
        }
        var blob = new Blob([ab], { type: mimeString });
        // only 1 avatar charge last blob
        formData.append(`files`, blob, "avatar_" + this.user.id);
      }

      await axios({
        method: "post",
        url: process.env.VUE_APP_STRAPI_API_URL + "/upload",
        data: formData,
        headers: config.headers,
      })
        .then((response) => {
          var image = response.data[0];
          var user = JSON.parse(Cookies.get("user"));

          const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
          };
          const bodyParameters = {
            avatar: image.id,
          };
          axios
            .put(
              process.env.VUE_APP_STRAPI_API_URL + "/users/" + user.id,
              bodyParameters,
              config
            )
            .then((response) => {
              this.showSuccess({
                message: "User avatar updated successfully",
              });
              this.updateUser(response.data);
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
    checkUserInfoForm: function () {
      this.errors = [];

      if (!this.gridForm.username) {
        this.errors.push(" The username is required.");
      }
      if (!this.gridForm.email) {
        this.errors.push(" The email is required.");
      }
      if (!this.gridForm.phone) {
        this.errors.push(" The phone is required.");
      }
      if (this.errors.length) {
        this.showError({ message: this.errors });
      } else {
        this.onUserInfoSubmit();
      }
    },
    checkPasswordForm: function () {
      this.errors = [];

      if (!this.gridForm.password) {
        this.errors.push(" The password is required.");
      }
      if (!this.gridForm.confirm_password) {
        this.errors.push(" The confirm password is required.");
      }
      if (this.gridForm.password != this.gridForm.confirm_password) {
        this.errors.push(" The password and confirm password must match.");
      }
      if (this.errors.length) {
        this.showError({ message: this.errors });
      } else {
        this.onPasswordSubmit();
      }
    },
    checkAvatarForm: function () {
      this.errors = [];

      if (this.gridForm.avatar.length < 1) {
        this.errors.push(" Must be at least 1 new avatar.");
      }
      if (this.errors.length) {
        this.showError({ message: this.errors });
      } else {
        this.onAvatarSubmit();
      }
    },
    uploadAvatarSuccess: function (formData, index, fileList) {
      this.gridForm.avatar = fileList;
    },
    beforeAvatarRemove: function (index, done, fileList) {
      this.gridForm.avatar = fileList;
    },
    editAvatarImage: function (formData, index, fileList) {
      this.gridForm.avatar = fileList;
    },
    helpUserInfoForm: function () {
      this.showInfo({
        message: "Please fill in all the fields of your personal information",
      });
    },
    helpPasswordForm: function () {
      this.showInfo({ message: "Here you can change your personal password" });
    },
    helpAvatarForm: function () {
      this.showInfo({ message: "Here you can change your avatar or profile image" });
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
