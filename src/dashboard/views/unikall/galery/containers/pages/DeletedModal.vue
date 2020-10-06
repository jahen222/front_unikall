<template>
  <b-modal
    :id="'modaldeleted'+post.id"
    :ref="'modaldeleted'+post.id"
    :title="$t('Delete Item')"
    modal-class="modal-right"
  >
    <template slot="modal-footer">
      <b-button
        variant="outline-secondary"
        @click="hideModal('modalright')"
      >{{ $t('pages.cancel') }}</b-button>
      <b-button
        variant="primary"
        @click="checkNewProductForm()"
        class="mr-1"
      >{{ $t('pages.submit') }}</b-button>
    </template>
  </b-modal>
</template>
<script>
import Cookies from "js-cookie";
import axios from "axios";

export default {
  components: {},
  props: ["post"],
  data() {
    return {
      user: null,
      business: null,
      item: null,
    };
  },
  methods: {
    hideModal(refname) {
      this.$refs[refname].hide();
    },
    checkNewProductForm: function () {
      const request = new XMLHttpRequest();
      const formData = new FormData();
      request.open(
        "DELETE",
        process.env.VUE_APP_STRAPI_API_URL + "/galeries/" + this.post.id
      );
      request.setRequestHeader(
        "Authorization",
        "Bearer " + localStorage.getItem("jwt")
      );

      request.onreadystatechange = () => {
        if (request.readyState == 4) {
          if (request.status == 200) {
            this.showSuccess({ message: "Image deleted successfully" });
            this.$router.go();
          } else {
            this.showError({ message: request.response.message });
          }
        }
      };

      request.send(formData);
    },
    async loadItem() {
      await axios
        .get(
          process.env.VUE_APP_STRAPI_API_URL + "/galeries/" + this.post.id
        )
        .then((response) => {
          this.item = response.data;
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
  mounted() {
    this.user = JSON.parse(Cookies.get("user"));
    this.business = JSON.parse(localStorage.getItem("user")).business;
    this.loadItem();
  },
};
</script>

