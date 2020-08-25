<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h1>Sales Channel</h1>
        <h5>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat.
        </h5>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Social Media')">
          <b-form @submit.prevent="onGridFormSubmit">
            <b-row>
              <b-colxx sm="12">
                <b-form-group :label="$t('Facebook')">
                  <b-form-input v-model="gridForm.address1"></b-form-input>
                </b-form-group>
              </b-colxx>
              <b-colxx sm="12">
                <b-form-group :label="$t('Instagram')">
                  <b-form-input v-model="gridForm.address2"></b-form-input>
                </b-form-group>
              </b-colxx>
              <b-colxx sm="12">
                <b-form-group :label="$t('Youtube')">
                  <b-form-input v-model="gridForm.address2"></b-form-input>
                </b-form-group>
              </b-colxx>
              <b-colxx sm="12">
                <b-form-group :label="$t('Pinterest')">
                  <b-form-input v-model="gridForm.address2"></b-form-input>
                </b-form-group>
              </b-colxx>
              <b-colxx sm="12">
                <b-form-group :label="$t('Twitter')">
                  <b-form-input v-model="gridForm.address2"></b-form-input>
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
export default {
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
      },
    };
  },
  methods: {
    onGridFormSubmit() {
      console.log(JSON.stringify(this.gridForm));
    },
  },
};
</script>
