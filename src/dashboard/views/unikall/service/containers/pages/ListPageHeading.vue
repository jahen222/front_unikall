<template>
  <b-row>
    <b-colxx xxs="12">
      <h1>
        Services
        <a @click="helpUserInfoForm">
          <i class="iconsminds-speach-bubble-asking" style="color: #007bff" />
        </a>
      </h1>
      <div v-if="total < 5" class="top-right-button-container">
        <b-button
          v-b-modal.modalright
          variant="primary"
          class="top-right-button"
          >{{ $t("pages.add-new") }}</b-button
        >
      </div>
      <add-new-modal></add-new-modal>
      <h5>
        Services section, you can add, edit and delete services for your
        business page.
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
    "items",
  ],
  data() {
    return {
      categories: [],
      pageSizes: [4, 8, 12],
    };
  },
  methods: {
    helpUserInfoForm: function () {
      this.showInfo({
        message:
          "Services section, you can add, edit and delete services for your business page.",
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
