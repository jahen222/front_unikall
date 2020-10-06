<template>
  <!-- Footer section -->
  <section class="py-5 sfooter" style="background-color: #232323">
    <div class="container-fluid text-left">
      <div class="row pl-2 pr-2 text-white font-12">
        <div class="col-9">
          <div class="row">
            <div class="col-2">
              <p><b>CONTACT US</b></p>
              <p class="mt-20">+123 123 1234</p>
              <p>test@server1.com</p>
              <p>Find a store</p>
            </div>

            <div class="col-2">
              <p>FREE PLAN</p>
              <p class="mt-20">Your own website layout</p>
              <p>Bussiness card</p>
              <p>Shareable content for social media(Flyers & Exclusive news)</p>
              <p class="text-right">More...</p>
            </div>

            <div class="col-2">
              <p>CUSTOM PLAN</p>
              <p class="mt-20">Custom website layout</p>
              <p>Custom business card</p>
              <p>Exclusive content for social media</p>
              <p class="text-right">More...</p>
            </div>

            <div class="col-2">
              <p>TEMPLATES</p>
              <p class="mt-20">Categories & subcategories names</p>
            </div>

            <div class="col-2">
              <p>SUPPORT</p>
              <p class="mt-20">FAQ</p>
              <p>Support Bot</p>
              <p>Find a store</p>
            </div>

            <div class="col-2">
              <p>BLOG</p>
              <p class="mt-20">Categories & subcategories names</p>
            </div>
          </div>
        </div>
        <div class="col-3">
          <form @submit.prevent="submit">
            <p>Subscribe to Unikal via Email</p>
            <p class="mt-20">
              Subscribe to our email offers and promotions Subscribe to our
              email offers and promotions
            </p>
            <p>
              <input
                type=" text"
                style="width: 60%"
                class="form-control d-inline"
                placeholder="Email"
                :class="{ hasError: $v.form.email.$error }"
                v-model="form.email"
                id="email"
                name="email"
              />
              <button
                type="submit"
                style="margin-bottom: 4px"
                class="btn btn-light d-inline"
              >
                SUBSCRIBE
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "EcommerceGeneralFooter",
  data() {
    return {
      form: {
        email: "",
      },
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
    },
  },
  computed: {
    businessid() {
      return this.$store.getters.BusinessId;
    },
  },
  methods: {
    async submit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      // to form submit after this
      let suscriber = {
        subscriber_email: this.form.email,
        business: this.businessid,
      };

      await axios
        .post(
          process.env.VUE_APP_STRAPI_API_URL + "/subscribers/",
          suscriber,
          {}
        )
        .then(() => {
          this.showSuccess({
            message: "Subscriber information updated successfully",
          });
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
