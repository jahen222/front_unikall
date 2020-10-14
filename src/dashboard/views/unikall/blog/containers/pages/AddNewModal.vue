<template>
  <b-modal
    id="modalright"
    ref="modalright"
    :title="$t('pages.add-new-modal-title')"
    modal-class="modal-right"
  >
    <b-form>
      <div v-if="pre_blog_post">
        <b-form-group :label="$t('Post Title')">
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
      </div>
      <div v-else>
        <b-form-group :label="$t('Select a Default Blog Post')">
          <v-select
            :options="optionsBlogPosts"
            v-model="optionBlogPost"
            @input="selectBlogPost"
          />
        </b-form-group>
        <b-form-group :label="$t('Post Title')">
          <b-form-input type="text" v-model="newItem.title" disabled />
        </b-form-group>
        <b-form-group :label="$t('pages.description')">
          <b-textarea
            v-model="newItem.description"
            :rows="2"
            :max-rows="2"
            disabled
          />
        </b-form-group>
        <b-form-group :label="$t('Image')">
          <img v-if="imagenPreview" :src="imagenPreview" width="200px" />
        </b-form-group>
      </div>
      <div class="form-group">
        <b-form-checkbox
          id="checkbox-1"
          v-model="pre_blog_post"
          @change="changeBlogPost($event)"
        >
          write your own blog post
        </b-form-checkbox>
      </div>
    </b-form>

    <template slot="modal-footer">
      <b-button variant="outline-secondary" @click="hideModal('modalright')">{{
        $t("pages.cancel")
      }}</b-button>
      <b-button variant="primary" @click="checkNewProductForm()" class="mr-1">{{
        $t("pages.submit")
      }}</b-button>
    </template>
  </b-modal>
</template>
<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
//import Cookies from "js-cookie";
//import gql from "graphql-tag";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import axios from "axios";

export default {
  components: {
    VueUploadMultipleImage,
    "v-select": vSelect,
  },
  props: ["categories", "statuses"],
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
      predefinedBlogs: [],
      pre_blog_post: false,
      optionsBlogPosts: [],
      optionBlogPost: null,
      imagenPreview: null,
      imagenId: null,
    };
  },
  /*apollo: {
    predefinedBlogs: gql`
      query getPredefinedBlogs {
        predefinedBlogs {
          id
          title
          description
          image {
            id
            url
          }
          category {
            id
          }
        }
      }
    `,
  },*/
  async mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.business = JSON.parse(localStorage.getItem("user")).business;

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    };

    await axios
      .get(process.env.VUE_APP_STRAPI_API_URL + "/predefined-blogs", config)
      .then((response) => {
        this.predefinedBlogs = response.data;
        for (let index = 0; index < this.predefinedBlogs.length; index++) {
          const element = this.predefinedBlogs[index];
          if (element.category.id == this.user.layout.category) {
            this.optionsBlogPosts.push(element.title);
          }
        }
      })
      .catch((error) => {
        this.showError({
          message: error.message,
        });
      });
  },
  methods: {
    addNewItem() {
      const request = new XMLHttpRequest();
      const formData = new FormData();
      const data = {};
      data["title"] = this.newItem.title;
      data["description"] = this.newItem.description;
      data["business"] = this.business.id;

      if (!this.pre_blog_post) {
        data["image"] = this.imagenId;
      } else {
        console.log("entro");
        const product_photos = this.newItem.image;
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
      }

      formData.append("data", JSON.stringify(data));
      request.open("POST", process.env.VUE_APP_STRAPI_API_URL + "/blogs");
      request.setRequestHeader(
        "Authorization",
        "Bearer " + localStorage.getItem("jwt")
      );

      request.onreadystatechange = () => {
        if (request.readyState == 4) {
          if (request.status == 200) {
            this.showSuccess({ message: "Post added successfully" });
            this.newItem = {
              title: "",
              description: "",
              image: [],
            };
            this.imagenId = null;
            this.$router.go();
            //this.hideModal("modalright");
          } else {
            this.showError({ message: request.response.message });
            this.newItem = {
              title: "",
              description: "",
              image: [],
            };
            this.imagenId = null;
          }
        }
      };

      request.send(formData);
    },
    changeBlogPost(event) {
      this.newItem = {
        title: "",
        description: "",
      };
      this.optionBlogPost = null;
      this.imagenPreview = null;

      if (event == true) this.pre_tagline = false;
      else this.pre_tagline = true;
    },
    selectBlogPost() {
      if (this.predefinedBlogs != null && this.optionBlogPost != null) {
        for (let index = 0; index < this.predefinedBlogs.length; index++) {
          const element = this.predefinedBlogs[index];
          if (element.title == this.optionBlogPost) {
            this.newItem = {
              title: element.title,
              description: element.description,
            };
            this.imagenId = element.image.id;
            this.imagenPreview =
              process.env.VUE_APP_STRAPI_API_URL + element.image.url;
          }
        }
      }
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
      if (!this.pre_blog_post) {
        if (this.newItem.image == []) {
          this.errors.push(" Must be at least 1 photo.");
        }
      }
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

