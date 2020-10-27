<template>
  <b-row>
    <b-colxx xxs="12">
      <h1>
        Orders
        <a @click="helpUserInfoForm">
          <i class="iconsminds-speach-bubble-asking" style="color: #007bff" />
        </a>
      </h1>
      <h5>Here you can see the orders.</h5>
      <div class="separator mb-5" />
      <b-card
        :class="{
          'd-flex flex-row': true,
        }"
        no-body
      >
        <div class="pl-2 d-flex flex-grow-1 min-width-zero">
          <div
            class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
          >
            <p class="list-item-heading mb-0 truncate">Order</p>
            <p class="list-item-heading mb-0 truncate">Client</p>
            <p class="list-item-heading mb-0 truncate">Client Email</p>
            <p class="list-item-heading mb-0 truncate">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Phone</p>
            <p class="list-item-heading mb-0 truncate">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total</p>
            <p class="mb-0 text-muted text-small w-15 w-sm-100">Addreess</p>
          </div>
        </div>
      </b-card>
      <br /><br />
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
        message: "Here you can see the orders.",
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
