<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h1>Layout</h1>
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
          <b-form @submit.prevent="checkLayoutInfoForm">
            <b-row>
              <b-colxx sm="6">
                <b-form-group :label="$t('Layout')">
                  <b-form-select v-model="layout" :options="layoutOptions" plain />
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
import { mapMutations } from "vuex";
import Cookies from "js-cookie";
import axios from "axios";

export default {
  data() {
    return {
      user: null,
      business: null,
      layouts: [],
      layoutOptions: [],
      layout: null,
    };
  },
  async mounted() {
    this.user = JSON.parse(Cookies.get("user"));
    var layout = JSON.parse(localStorage.getItem("user")).layout;
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    };

    if (layout != null) {
      this.layout = layout.name;
      this.layoutOptions.push(layout.name);
    }

    await axios
      .get(process.env.VUE_APP_STRAPI_API_URL + "/layouts/", config)
      .then((response) => {
        var options = response.data;
        for (let index = 0; index < options.length; index++) {
          if (this.layoutOptions[0] != options[index].name) {
            this.layouts.push(options[index]);
            this.layoutOptions.push(options[index].name);
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
    ...mapMutations({
      updateUser: "updateUser",
    }),
    async onLayoutSubmit() {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      };

      var layout_id = null;
      for (let index = 0; index < this.layouts.length; index++) {
        if (this.layout == this.layouts[index].name) {
          layout_id = this.layouts[index].id;
        }
      }

      const bodyParameters = {
        layout: layout_id,
      };
      await axios
        .put(
          process.env.VUE_APP_STRAPI_API_URL + "/users/" + this.user.id,
          bodyParameters,
          config
        )
        .then((response) => {
          this.showSuccess({
            message: "Layout information updated successfully",
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
    checkLayoutInfoForm: function () {
      this.errors = [];

      this.onLayoutSubmit();
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