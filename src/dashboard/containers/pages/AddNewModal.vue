<template>
  <b-modal
    id="modalright"
    ref="modalright"
    :title="$t('pages.add-new-modal-title')"
    modal-class="modal-right"
  >
    <b-form>
      <b-form-group :label="$t('pages.product-name')">
        <b-form-input v-model="newItem.title" />
      </b-form-group>
      <b-form-group :label="$t('pages.category')">
        <v-select :options="categories" v-model="newItem.category" />
      </b-form-group>
      <b-form-group :label="$t('pages.description')">
        <b-textarea v-model="newItem.description" :rows="2" :max-rows="2" />
      </b-form-group>
      <b-form-group :label="$t('Price')">
        <b-form-input v-model="newItem.title" />
      </b-form-group>
      <b-form-group :label="$t('pages.description')">
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
      </b-form-group>

      <b-form-group :label="$t('pages.status')">
        <b-form-radio-group stacked class="pt-2" :options="statuses" v-model="newItem.status" />
      </b-form-group>
    </b-form>

    <template slot="modal-footer">
      <b-button
        variant="outline-secondary"
        @click="hideModal('modalright')"
      >{{ $t('pages.cancel') }}</b-button>
      <b-button variant="primary" @click="addNewItem()" class="mr-1">{{ $t('pages.submit') }}</b-button>
    </template>
  </b-modal>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import VueUploadMultipleImage from "vue-upload-multiple-image";

export default {
  components: {
    "v-select": vSelect,
    VueUploadMultipleImage,
  },
  props: ["categories", "statuses"],
  data() {
    return {
      newItem: {
        title: "",
        category: "",
        description: "",
        status: "",
      },
    };
  },
  methods: {
    addNewItem() {
      console.log("adding item : ", this.newItem);
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
    uploadLogoSuccess: function (formData, index, fileList) {
      this.logo = fileList;
    },
    beforeLogoRemove: function (index, done, fileList) {
      this.logo = fileList;
    },
    editLogoImage: function (formData, index, fileList) {
      this.logo = fileList;
    },
  },
};
</script>

