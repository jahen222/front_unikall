<template>
  <b-row>
    <b-colxx xxs="12">
      <h1>
        BLOG POSTS
        <a @click="helpUserInfoForm">
          <i class="iconsminds-speach-bubble-asking" style="color: #007bff" />
        </a>
      </h1>

      <div class="top-right-button-container" v-if="total < 5">
        <b-button
          v-b-modal.modalright
          variant="primary"
          class="top-right-button"
          >{{ $t("pages.add-new") }}</b-button
        >
      </div>
      <add-new-modal></add-new-modal>
      <h5>
        Welcome to your Business Blog! Here you can create Blog posts to your
        business and share this content through social media. *Attached you can
        find an example of a Blog Post for you to have better guidance and start
        sharing it
      </h5>
      <div class="separator mb-5" />
    </b-colxx>
  </b-row>
</template>
<script>
import AddNewModal from "./AddNewModal";

export default {
  components: {
    "add-new-modal": AddNewModal,
  },
  props: [
    "title",
    "selectAll",
    "isSelectedAll",
    "isAnyItemSelected",
    "keymap",
    "displayMode",
    "changeDisplayMode",
    "changeOrderBy",
    "changePageSize",
    "sort",
    "searchChange",
    "from",
    "to",
    "total",
    "perPage",
  ],
  data() {
    console.log("aqui", this.total);
    return {
      categories: [],
      pageSizes: [4, 8, 12],
    };
  },
  methods: {
    helpUserInfoForm: function () {
      this.showInfo({
        message:
          "Blog section, you can add, edit and delete post for your business page.",
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
    showInfo: {
      title: "Information",
      message: "Success",
      type: "info",
    },
  },
};
</script>
