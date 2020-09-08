<template>
  <b-card
    @click.prevent="toggleItem($event,data.id)"
    :class="{'active' : selectedItems.includes(data.id)}"
    no-body
  >
    <div class="position-relative">
      <router-link :to="`?p=${data.id}`" class="w-40 w-sm-100">
        <img :src="data.img" class="card-img-top" :alt="data.title" />
      </router-link>
      <b-badge
        pill
        :variant="data.statusColor"
        class="position-absolute badge-top-left"
      >{{ data.status }}</b-badge>
    </div>
    <b-card-body>
      <b-row>
        <b-colxx xxs="2">
          <b-form-checkbox :checked="selectedItems.includes(data.id)" class="itemCheck mb-0" />
        </b-colxx>
        <b-colxx xxs="10" class="mb-3">
          <h6 class="mb-4 card-subtitle">{{data.title}}</h6>
          <p class="text-muted text-small mb-0 font-weight-light card-text">{{data.date}}</p>
        </b-colxx>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import axios from "axios";

export default {
  props: ["data", "selectedItems"],
  data() {
    return {
      subcategory: null,
    };
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    async loadItems() {
      await axios
        .get(
          process.env.VUE_APP_STRAPI_API_URL +
            "/product-subcategories/" +
            this.data.category
        )
        .then((response) => {
          this.subcategory = response.data.name;
        })
        .catch((error) => {
          this.showError({
            message: error.message,
          });
        });
    },
    toggleItem(event, itemId) {
      this.$emit("toggle-item", event, itemId);
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
