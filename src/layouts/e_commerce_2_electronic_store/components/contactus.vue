<template>
  <!-- contact us modal section -->
  <b-modal id="my-booking" size="xl" hide-footer title="Book your Meeting">
    <div class="container">
      <form @submit.prevent="checkForm">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <p class="text-black" style="font-weight: 800; font-size: large;">
              We appreciate your contact with us about the pre-sale query. One
              of the members of our customer service team will be getting back
              to you shortly.
            </p>
          </div>
          <div class="col-2"></div>
        </div>
        <div class="row mt-5">
          <div class="col-6">
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type=" text"
                  class="form-control"
                  v-model="form.first_name"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="text"
                  class="form-control"
                  v-model="form.last_name"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="text"
                  placeholder="Email"
                  class="form-control"
                  v-model="form.email"
                  id="email"
                  name="email"
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="text"
                  placeholder="Phone"
                  class="form-control"
                  v-model="form.phone"
                  id="phone"
                  name="phone"
                />
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                placeholder="Address"
                class="form-control"
                v-model="form.address"
                id="address"
                name="address"
              />
            </div>
            <div class="form-group">
              <textarea
                placeholder="Message"
                class="form-control"
                v-model="form.message"
                rows="5"
                id="message"
                name="message"
              ></textarea>
            </div>
          </div>
          <div class="col-6">
            <h6>Please select the date you are planning to get the service or product:</h6>
            <datepicker
              :inline="true"
              v-model="form.date"
              name="date"
            ></datepicker>
          </div>
        </div>
        <div class="row mt-5">
          <button
            type="submit"
            class="btn brand-gbcolor text-white poppinfont m-auto"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  </b-modal>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import axios from "axios";

export default {
  name: "EcommerceContactUs",
  components: {
    Datepicker,
  },
  props: ["businessId"],
  data() {
    return {
      form: {
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        address: null,
        message: null,
        date: null,
      },
    };
  },
  methods: {
    checkForm: function () {
      this.errors = [];
      if (!this.form.first_name) {
        this.errors.push(" The first name is required");
      }
      if (!this.form.last_name) {
        this.errors.push(" The last name is required");
      }
      if (!this.form.email) {
        this.errors.push(" The email is required");
      }
      if (!this.form.phone) {
        this.errors.push(" The phone description is required");
      }
      if (!this.form.address) {
        this.errors.push(" The address is required");
      }
      if (!this.form.message) {
        this.errors.push(" The message is required");
      }
      if (!this.form.date) {
        this.errors.push(" Please select the date you are planning to get the service");
      }
      if (this.errors.length) {
        this.showError({ message: this.errors });
      } else {
        this.handleSubmit();
      }
    },
    async handleSubmit() {
      const bodyParameters = {
        first_name: this.form.first_name,
        last_name: this.form.last_name,
        email: this.form.email,
        phone: this.form.phone,
        address: this.form.address,
        message: this.form.message,
        date: this.form.date,
        business: this.businessId,
      };
      await axios
        .post(process.env.VUE_APP_STRAPI_API_URL + "/messages", bodyParameters)
        .then((response) => {
          this.showSuccess({
            message: "Send Message",
          });
          this.business = response.data;
        })
        .catch((error) => {
          this.showError({
            message: error.message,
          });
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
};
</script>

<style>
.vdp-datepicker__calendar {
  width: 100% !important;
}

.cell.day {
  border: 1px solid #d7d7d7 !important;
  padding: 1px;
}

.vdp-datepicker .vdp-datepicker__calendar,
.form-control {
  border: 1px solid #000000 !important;
  border-radius: 0.5rem !important;
}

.vdp-datepicker .vdp-datepicker__calendar .cell.day-header {
  color: #000000 !important;
}
</style>
