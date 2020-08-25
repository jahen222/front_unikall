<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h1>Business</h1>
        <h5>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat.
        </h5>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Business Imformation')">
          <b-form @submit.prevent="onGridFormSubmit">
            <b-row>
              <b-colxx sm="6">
                <b-form-group :label="$t('Business Name')">
                  <b-form-input type="email" v-model="gridForm.email" />
                </b-form-group>
              </b-colxx>
              <b-colxx sm="6">
                <b-form-group :label="$t('Company Email')">
                  <b-form-input type="password" v-model="gridForm.password" />
                </b-form-group>
              </b-colxx>
              <b-colxx sm="6">
                <b-form-group :label="$t('Tagline Title')">
                  <b-form-input type="email" v-model="gridForm.email" />
                </b-form-group>
              </b-colxx>
              <b-colxx sm="6">
                <b-form-group :label="$t('Your work')">
                  <b-form-input type="password" v-model="gridForm.password" />
                </b-form-group>
              </b-colxx>
            </b-row>
            <b-button type="submit" variant="primary" class="mt-4">{{ $t('Save') }}</b-button>
          </b-form>
        </b-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Company Address')">
          <b-form @submit.prevent="onGridFormSubmit">
            <b-row>
              <b-colxx sm="12">
                <b-form-group :label="$t('forms.address')">
                  <b-form-input v-model="gridForm.address1"></b-form-input>
                </b-form-group>
              </b-colxx>
              <b-colxx sm="12">
                <b-form-group :label="$t('forms.address2')">
                  <b-form-input v-model="gridForm.address2"></b-form-input>
                </b-form-group>
              </b-colxx>
              <b-colxx sm="6">
                <b-form-group :label="$t('forms.city')">
                  <b-form-input v-model="gridForm.city"></b-form-input>
                </b-form-group>
              </b-colxx>
              <b-colxx sm="4">
                <b-form-group :label="$t('forms.state')">
                  <b-form-select v-model="gridForm.state" :options="stateOptions" plain />
                </b-form-group>
              </b-colxx>
              <b-colxx sm="2">
                <b-form-group :label="$t('forms.zip')">
                  <b-form-input v-model="gridForm.zip"></b-form-input>
                </b-form-group>
              </b-colxx>
            </b-row>
            <b-button type="submit" variant="primary" class="mt-4">{{ $t('Save') }}</b-button>
          </b-form>
        </b-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Logo')">
          <b-form @submit.prevent="onGridFormSubmit">
            <b-row>
              <b-colxx sm="12">
                <b-form-group>
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
                </b-form-group>
              </b-colxx>
            </b-row>
            <b-button type="submit" variant="primary" class="mt-4">{{ $t('Save') }}</b-button>
          </b-form>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";

export default {
  components: {
    VueUploadMultipleImage,
  },
  data() {
    return {
      stateOptions: ["", "Option1", "Option2", "Option3", "Option4", "Option5"],
      gridForm: {
        email: "",
        password: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        logo: null,
      },
    };
  },
  methods: {
    onGridFormSubmit() {
      console.log(JSON.stringify(this.gridForm));
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