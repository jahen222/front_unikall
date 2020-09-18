<template>
  <b-modal
    :id="'modaledit'+post.id"
    :ref="'modaledit'+post.id"
    :title="$t('Edit Item')"
    modal-class="modal-right"
  >
    <b-form>
      <b-form-group :label="$t('Service Title')">
        <b-form-input type="text" v-model="newItem.title" />
      </b-form-group>
      <b-form-group :label="$t('pages.description')">
        <b-textarea v-model="newItem.description" :rows="2" :max-rows="2" />
      </b-form-group>
      <b-form-group :label="$t('Image')">
        <vue-upload-multiple-image
          @upload-success="uploadPhotosSuccess"
          @before-remove="beforePhotosRemove"
          @edit-image="editPhotosImage"
          dragText="Click to upload file"
          browseText
          maxImage="1"
          primaryText="Primary"
          markIsPrimaryText="Mark as Primary"
          popupText="This image will be displayed as default"
        ></vue-upload-multiple-image>
      </b-form-group>
    </b-form>

    <template slot="modal-footer">
      <b-button
        variant="outline-secondary"
        @click="hideModal('modalright')"
      >{{ $t('pages.cancel') }}</b-button>
      <b-button
        variant="primary"
        @click="checkNewProductForm()"
        class="mr-1"
      >{{ $t('pages.submit') }}</b-button>
    </template>
  </b-modal>
</template>
<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
import Cookies from "js-cookie";
import axios from "axios";

export default {
  components: {
    VueUploadMultipleImage,
  },
  props: ["post"],
  data() {
    return {
      user: null,
      business: null,
      browseText: "",
      newItem: {
        title: "",
        description: "",
        image: [],
      },
    };
  },
  methods: {
    addNewItem() {
      const request = new XMLHttpRequest();
      const formData = new FormData();
      const data = {};
      data["title"] = this.newItem.title;
      data["description"] = this.newItem.description;

      const product_photos = this.newItem.image;
      //console.log(product_photos);
      for (let i = 0; i < product_photos.length; i++) {
        const dataURI = product_photos[i].path;
        var byteString = atob(dataURI.split(",")[1]);
        var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var j = 0; j < byteString.length; j++) {
          ia[j] = byteString.charCodeAt(j);
        }
        var blob = new Blob([ab], { type: mimeString });
        formData.append(`files.image`, blob, product_photos[i].name);
      }

      formData.append("data", JSON.stringify(data));
      request.open(
        "PUT",
        process.env.VUE_APP_STRAPI_API_URL + "/business-services/" + this.post.id
      );
      request.setRequestHeader(
        "Authorization",
        "Bearer " + localStorage.getItem("jwt")
      );

      request.onreadystatechange = () => {
        if (request.readyState == 4) {
          if (request.status == 200) {
            this.showSuccess({ message: "Service updated successfully" });
            this.newItem = {
              title: "",
              description: "",
              image: [],
            };
            this.$router.go();
            //this.hideModal("modalright");
          } else {
            this.showError({ message: request.response.message });
            this.newItem = {
              title: "",
              description: "",
              image: [],
            };
          }
        }
      };

      request.send(formData);
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
    setSelected() {
      this.newItem.subcategory = "";
    },
    checkNewProductForm: function () {
      this.errors = [];

      if (!this.newItem.title) {
        this.errors.push(" The title is required.");
      }
      if (!this.newItem.description) {
        this.errors.push(" The description is required.");
      }
      /*if (this.newItem.image.length < 1) {
        this.errors.push(" Must be at least 1 photo.");
      }*/
      if (this.errors.length) {
        this.showError({ message: this.errors });
      } else {
        this.addNewItem();
      }
    },
    uploadPhotosSuccess: function (formData, index, fileList) {
      this.newItem.image = fileList;
    },
    beforePhotosRemove: function (index, done, fileList) {
      this.newItem.image = fileList;
    },
    editPhotosImage: function (formData, index, fileList) {
      this.newItem.image = fileList;
    },
    async loadItem() {
      await axios
        .get(
          process.env.VUE_APP_STRAPI_API_URL + "/business-services/" + this.post.id
        )
        .then((response) => {
          const item = response.data;
          this.newItem = {
            title: item.title,
            description: item.description,
            image: [],
          };
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
  },
  mounted() {
    this.user = JSON.parse(Cookies.get("user"));
    this.business = JSON.parse(localStorage.getItem("user")).business;
    this.loadItem();
  },
};
</script>

