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
                  <b-form-select
                    v-model="layout.name"
                    :options="layoutOptions"
                    plain
                    @input="setSelected"
                  />
                </b-form-group>
              </b-colxx>
              <b-colxx sm="6">
                <b-form-group :label="$t('Link')">
                  <a :href="link">{{link}}</a>
                </b-form-group>
              </b-colxx>
            </b-row>
            <b-button type="submit" variant="primary" class="mt-4">{{ $t('Save') }}</b-button>
          </b-form>
        </b-card>
      </b-colxx>
    </b-row>
    <b-row v-if="preview">
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Preview')">
          <div class="centerLayout">
            <b-row>
              <b-colxx sm="12" style="tex">
                <b-form-group>
                  <img :src="preview" width="100%"/>
                </b-form-group>
              </b-colxx>
            </b-row>
          </div>
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
      complete_layouts: [],
      layoutOptions: [],
      layout: null,
      link: null,
      preview: null,
    };
  },
  async mounted() {
    this.user = JSON.parse(Cookies.get("user"));
    var layout = JSON.parse(localStorage.getItem("user")).layout;
    this.link = "http://localhost:8080/site/" + this.user.id;
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    };

    if (layout != null) {
      this.layout = layout;
      this.layoutOptions.push(layout.name);
      this.preview = process.env.VUE_APP_STRAPI_API_URL + layout.mockup.url;
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
          this.complete_layouts.push(options[index]);
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
        if (this.layout.name == this.layouts[index].name) {
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
    setSelected() {
      var preview = null;
      for (let index = 0; index < this.complete_layouts.length; index++) {
        if (this.layout.name == this.complete_layouts[index].name) {
          preview =
            process.env.VUE_APP_STRAPI_API_URL + this.complete_layouts[index].mockup.url;
        }
      }
      this.preview = preview;
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

<style scoped>
.centerLayout {
  text-align: center;
}
</style>