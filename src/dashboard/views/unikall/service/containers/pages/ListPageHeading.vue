<template>
  <b-row>
    <b-colxx xxs="12">
      <h1>Services</h1>
      <div class="top-right-button-container">
        <b-button
          v-b-modal.modalright
          variant="primary"
          class="top-right-button"
        >{{ $t('pages.add-new') }}</b-button>
      </div>
      <add-new-modal></add-new-modal>
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
    return {
      categories: [],
      pageSizes: [4, 8, 12],
    };
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
