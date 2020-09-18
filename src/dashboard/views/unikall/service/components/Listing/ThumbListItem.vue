<template>
  <b-card
    @click.prevent="toggleItem($event,data.id)"
    :class="{'d-flex flex-row':true,'active' : selectedItems.includes(data.id)}"
    no-body
  >
    <router-link :to="`/dashboard/app/service/details/${data.id}`" class="d-flex">
      <img :src="data.img" class="list-thumbnail responsive border-0" :alt="data.title" />
    </router-link>
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
      <div
        class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
      >
        <router-link :to="`/dashboard/app/service/details/${data.id}`" class="w-40 w-sm-100">
          <p class="list-item-heading mb-0 truncate">{{data.title}}</p>
        </router-link>
        <p class="mb-0 text-muted text-small w-15 w-sm-100">{{data.description}}</p>
      </div>
      <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
        <b-button v-b-modal="'modaledit'+data.id" class="top-right-button">{{ $t('Edit') }}</b-button> /
        <b-button v-b-modal="'modaldeleted'+data.id" variant="danger" class="top-right-button">{{ $t('Deleted') }}</b-button> 
      </div>
    </div>
    <edit-modal :post="data"></edit-modal>
    <deleted-modal :post="data"></deleted-modal>
  </b-card>
</template>

<script>
import EditModal from "../../containers/pages/EditModal";
import DeletedModal from "../../containers/pages/DeletedModal";

export default {
  props: ["data", "selectedItems", "categories"],
  components: {
    "edit-modal": EditModal,
    "deleted-modal": DeletedModal,
  },
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
