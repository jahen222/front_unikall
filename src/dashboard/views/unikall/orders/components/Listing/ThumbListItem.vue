<template>
  <b-card
    @click.prevent="toggleItem($event, data.id)"
    :class="{
      'd-flex flex-row': true,
      active: selectedItems.includes(data.id),
    }"
    no-body
  >
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
      <div
        class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
      >
        <router-link :to="`/dashboard/app/orders/details/${data.id}`">
          <p class="list-item-heading mb-0 truncate">{{ data.id }}</p>
        </router-link>
        <p class="list-item-heading mb-0 truncate">{{ data.name }}</p>
        <p class="list-item-heading mb-0 truncate">
          {{ data.email }}
        </p>
        <p class="list-item-heading mb-0 truncate">
          {{ data.phone }}
        </p>
        <p class="list-item-heading mb-0 truncate">{{ data.total }}</p>
        <p class="mb-0 text-muted text-small w-15 w-sm-100">
          {{ data.shipping_address }}
        </p>
      </div>
    </div>
    <edit-modal :post="data"></edit-modal>
    <deleted-modal :post="data"></deleted-modal>
  </b-card>
</template>

<script>
export default {
  props: ["data", "selectedItems", "categories"],
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
