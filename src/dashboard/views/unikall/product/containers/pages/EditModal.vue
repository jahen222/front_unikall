<template>
  <b-modal
    :id="'modaledit' + product.id"
    :ref="'modaledit' + product.id"
    :title="$t('Edit Item')"
    modal-class="modal-right"
  >
    <b-form>
      <b-form-group :label="$t('pages.product-name')">
        <b-form-input type="text" v-model="newItem.name" />
      </b-form-group>
      <b-form-group :label="$t('pages.category')">
        <v-select
          :options="categories"
          v-model="newItem.category"
          @input="setSelected"
        />
      </b-form-group>
      <b-form-group :label="$t('Subcategory')">
        <v-select :options="subcategories" v-model="newItem.subcategory" />
      </b-form-group>
      <b-form-group :label="$t('pages.description')">
        <b-textarea v-model="newItem.description" :rows="2" :max-rows="2" />
      </b-form-group>
      <b-form-group :label="$t('Price')">
        <b-form-input type="number" v-model="newItem.price" min="0" />
      </b-form-group>
      <b-form-group :label="$t('Quantity')">
        <b-form-input type="number" v-model="newItem.quantity" min="0" />
      </b-form-group>
      <b-form-group :label="$t('Photos')">
        <vue-upload-multiple-image
          @upload-success="uploadPhotosSuccess"
          @before-remove="beforePhotosRemove"
          @edit-image="editPhotosImage"
          dragText="Click to upload file"
          browseText
          maxImage="3"
          primaryText="Primary"
          markIsPrimaryText="Mark as Primary"
          popupText="This image will be displayed as default"
        ></vue-upload-multiple-image>
      </b-form-group>
      <b-form-group :label="$t('Featured')">
        <b-form-radio-group
          stacked
          class="pt-2"
          :options="statuses"
          v-model="newItem.featured"
        />
      </b-form-group>
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
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import VueUploadMultipleImage from "vue-upload-multiple-image";
import Cookies from "js-cookie";
import axios from "axios";

export default {
  components: {
    "v-select": vSelect,
    VueUploadMultipleImage,
  },
  props: ["categories", "statuses", "product"],
  data() {
    return {
      user: null,
      business: null,
      browseText: "",
      newItem: {
        name: "",
        category: "",
        subcategory: "",
        description: "",
        featured: 0,
        status: 0,
        price: 0,
        quantity: 0,
        photos: [],
      },
    };
  },
  methods: {
    addNewItem() {
      const request = new XMLHttpRequest();
      const formData = new FormData();
      const data = {};
      data["name"] = this.newItem.name;
      data["product_subcategory"] = this.newItem.subcategory.value;
      data["description"] = this.newItem.description;
      data["status"] = this.newItem.status;
      data["price"] = this.newItem.price;
      data["quantity"] = this.newItem.quantity;
      data["business"] = this.business.id;
      data["featured"] = this.newItem.featured;

      const product_photos = this.newItem.photos;
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
        formData.append(`files.photos`, blob, product_photos[i].name);
      }

      formData.append("data", JSON.stringify(data));
      request.open(
        "PUT",
        process.env.VUE_APP_STRAPI_API_URL + "/products/" + this.product.id
      );
      request.setRequestHeader(
        "Authorization",
        "Bearer " + localStorage.getItem("jwt")
      );

      request.onreadystatechange = () => {
        if (request.readyState == 4) {
          if (request.status == 200) {
            this.showSuccess({ message: "Product updated successfully" });
            this.newItem = {
              name: "",
              category: "",
              subcategory: "",
              description: "",
              status: 0,
              featured: 0,
              price: 0,
              quantity: 0,
              photos: [],
            };
            this.$router.go();
            //this.hideModal("modalright");
          } else {
            this.showError({ message: request.response.message });
            this.newItem = {
              name: "",
              category: "",
              subcategory: "",
              description: "",
              status: 0,
              featured: 0,
              price: 0,
              quantity: 0,
              photos: [],
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

      if (!this.newItem.name) {
        this.errors.push(" The name is required.");
      }
      if (!this.newItem.price) {
        this.errors.push(" The price is required.");
      }
      if (!this.newItem.category) {
        this.errors.push(" The category is required.");
      }
      if (!this.newItem.subcategory) {
        this.errors.push(" The subcategory is required.");
      }
      if (!this.newItem.quantity) {
        this.errors.push(" The quantity is required.");
      }
      if (!this.newItem.description) {
        this.errors.push(" The description is required.");
      }
      /*if (this.newItem.photos.length < 1) {
        this.errors.push(" Must be at least 1 photo.");
      }*/
      if (this.errors.length) {
        this.showError({ message: this.errors });
      } else {
        this.addNewItem();
      }
    },
    uploadPhotosSuccess: function (formData, index, fileList) {
      this.newItem.photos = fileList;
    },
    beforePhotosRemove: function (index, done, fileList) {
      this.newItem.photos = fileList;
    },
    editPhotosImage: function (formData, index, fileList) {
      this.newItem.photos = fileList;
    },
    async loadCategories() {
      await axios
        .get(process.env.VUE_APP_STRAPI_API_URL + "/product-categories")
        .then((response) => {
          var cat_object = response.data;
          for (let index = 0; index < cat_object.length; index++) {
            this.categories[index] = {
              label: cat_object[index].name,
              value: cat_object[index].id,
              subcategories: cat_object[index].product_subcategories,
            };
          }
        })
        .catch((error) => {
          this.showError({
            message: error.message,
          });
        });
    },
    async loadItem() {
      await axios
        .get(
          process.env.VUE_APP_STRAPI_API_URL + "/products/" + this.product.id
        )
        .then((response) => {
          const item = response.data;
          /*console.log("lo que voy a buscar: ", this.product.id, " ", this.categories);
          console.log(
            "reactividad de la categoria encontrada: ",
            JSON.stringify(this.categories)
          );*/

          this.newItem = {
            name: item.name,
            category: this.search(
              item.product_subcategory.product_category,
              this.categories
            ),
            subcategory: {
              label: item.product_subcategory.name,
              value: item.product_subcategory.id,
            },
            description: item.description,
            featured: item.featured,
            price: item.price,
            quantity: item.quantity,
            photos: [],
          };

          console.log("a ver", this.newItem);
        });
    },
    search: function (nameKey, myArray) {
      if (myArray != "" && myArray != undefined) {
        for (var i = 0; i < myArray.length; i++) {
          if (myArray[i].value === nameKey) {
            return myArray[i];
          }
        }
      }
    },
  },
  computed: {
    subcategories: function () {
      var subcategories = [];
      //console.log("aqui perro: ", this.newItem.category);
      if (this.newItem.category != "" && this.newItem.category != undefined) {
        for (
          let index = 0;
          index < this.newItem.category.subcategories.length;
          index++
        ) {
          const element = this.newItem.category.subcategories[index];
          subcategories[index] = {
            label: element.name,
            value: element.id,
          };
        }
      }

      return subcategories;
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

