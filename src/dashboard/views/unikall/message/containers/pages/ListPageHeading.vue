<template>
  <b-row>
    <b-colxx xxs="12">
      <h1>
        Messages
        <a @click="helpUserInfoForm">
          <i class="iconsminds-speach-bubble-asking" style="color: #007bff" />
        </a>
      </h1>
      <h5>Here you can see the messages that your clients have written you.</h5>
      <div class="separator mb-5" />
    </b-colxx>
  </b-row>
</template>
<script>
export default {
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
          "Here you can see the messages that your clients have written you.",
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
