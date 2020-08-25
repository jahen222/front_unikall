<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h1>Payment</h1>
        <h5>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat.
        </h5>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Paypal')">
          <b-form @submit.prevent="onGridFormSubmit">
            <b-row>
              <b-colxx sm="6">
                <b-form-group :label="$t('ID')">
                  <b-form-input type="email" v-model="gridForm.email" />
                </b-form-group>
              </b-colxx>
              <b-colxx sm="6">
                <b-form-group :label="$t('Key')">
                  <b-form-input type="password" v-model="gridForm.password" />
                </b-form-group>
              </b-colxx>
              <b-colxx xxs="6">
                <b-row>
                  <b-colxx xxs="12">
                    <label>{{$t('Enabled')}}</label>
                  </b-colxx>
                  <b-colxx xxs="12">
                    <switches v-model="secondaryInverse1" theme="custom" color="secondary-inverse"></switches>
                  </b-colxx>
                </b-row>
              </b-colxx>
            </b-row>
            <b-button type="submit" variant="primary" class="mt-4">{{ $t('Save') }}</b-button>
          </b-form>
        </b-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Amazon Pay')">
          <b-form @submit.prevent="onGridFormSubmit">
            <b-row>
              <b-colxx sm="6">
                <b-form-group :label="$t('ID')">
                  <b-form-input type="email" v-model="gridForm.email" />
                </b-form-group>
              </b-colxx>
              <b-colxx sm="6">
                <b-form-group :label="$t('Key')">
                  <b-form-input type="password" v-model="gridForm.password" />
                </b-form-group>
              </b-colxx>
              <b-colxx xxs="6">
                <b-row>
                  <b-colxx xxs="12">
                    <label>{{$t('Enabled')}}</label>
                  </b-colxx>
                  <b-colxx xxs="12">
                    <switches v-model="secondaryInverse2" theme="custom" color="secondary-inverse"></switches>
                  </b-colxx>
                </b-row>
              </b-colxx>
            </b-row>
            <b-button type="submit" variant="primary" class="mt-4">{{ $t('Save') }}</b-button>
          </b-form>
        </b-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Neteller')">
          <b-form @submit.prevent="onGridFormSubmit">
            <b-row>
              <b-colxx sm="6">
                <b-form-group :label="$t('ID')">
                  <b-form-input type="email" v-model="gridForm.email" />
                </b-form-group>
              </b-colxx>
              <b-colxx sm="6">
                <b-form-group :label="$t('Key')">
                  <b-form-input type="password" v-model="gridForm.password" />
                </b-form-group>
              </b-colxx>
              <b-colxx xxs="6">
                <b-row>
                  <b-colxx xxs="12">
                    <label>{{$t('Enabled')}}</label>
                  </b-colxx>
                  <b-colxx xxs="12">
                    <switches v-model="secondaryInverse3" theme="custom" color="secondary-inverse"></switches>
                  </b-colxx>
                </b-row>
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
import Switches from "vue-switches";

export default {
  components: {
    switches: Switches,
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
      },
      secondaryInverse1: true,
      secondaryInverse2: true,
      secondaryInverse3: true,
    };
  },
  methods: {
    onGridFormSubmit() {
      console.log(JSON.stringify(this.gridForm));
    },
  },
};
</script>