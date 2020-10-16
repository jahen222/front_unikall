<template>
  <b-card
    @click.prevent="toggleItem($event, 0)"
    class="d-flex flex-row active"
    no-body
  >
    <b-button v-b-modal.modalright variant="primary" class="top-right-button">
      <img
        src="../../../../../../assets/unikall/images/plus.png"
        class="list-thumbnail responsive border-0"
    /></b-button>
  </b-card>
</template>

<script>
export default {
  methods: {
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
