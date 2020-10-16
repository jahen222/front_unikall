<template>
  <b-card
    @click.prevent="toggleItem($event,data.id)"
    :class="{'d-flex flex-row':true,'active' : selectedItems.includes(data.id)}"
    no-body
  >
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
      <div
        class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
      >
        <p class="list-item-heading mb-0 truncate">{{data.first_name}} {{data.last_name}}</p>
        <p class="list-item-heading mb-0 truncate">{{data.email}}</p>
        <p class="list-item-heading mb-0 truncate">{{data.address}}</p>
        <p class="list-item-heading mb-0 truncate">{{data.phone}}</p>
        <p class="list-item-heading mb-0 truncate">{{data.date}}</p>
        <p class="list-item-heading mb-0 truncate">{{data.message}}</p>
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
  data (){
    console.log("aqui", this.data);
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
