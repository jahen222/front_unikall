<template>
  <b-row>
    <b-colxx xxs="12">
      <h1>
        Products
        <a @click="helpUserInfoForm">
          <i class="iconsminds-speach-bubble-asking" style="color: #007bff" />
        </a>
      </h1>
      <div v-if="items.length < 5" class="top-right-button-container">
        <b-button
          v-b-modal.modalright
          variant="primary"
          class="top-right-button"
        >{{ $t('pages.add-new') }}</b-button>
      </div>
      <add-new-modal :categories="categories" :statuses="statuses"></add-new-modal>
      <div class="separator mb-5" />
    </b-colxx>
  </b-row>
</template>
<script>
/*import {
  DataListIcon,
  ThumbListIcon,
  ImageListIcon,
} from "../../components/Svg";*/
import AddNewModal from "./AddNewModal";
import axios from "axios";

export default {
  components: {
    //"data-list-icon": DataListIcon,
    //"thumb-list-icon": ThumbListIcon,
    //"image-list-icon": ImageListIcon,
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
    "items"
  ],
  data() {
    return {
      categories: [],
      statuses: [
        {
          text: "ON HOLD",
          value: 0,
        },
        {
          text: "PROCESSED",
          value: 1,
        },
      ],
      sortOptions: [
        {
          column: "title",
          label: "Product Name",
        },
        {
          column: "category",
          label: "Category",
        },
        {
          column: "status",
          label: "Status",
        },
      ],
      pageSizes: [4, 8, 12],
    };
  },
  async mounted() {
    await axios
      .get(process.env.VUE_APP_STRAPI_API_URL + "/product-categories")
      .then((response) => {
        var cat_object = response.data;
        for (let index = 0; index < cat_object.length; index++) {
          this.categories[index] = {
            label: cat_object[index].name,
            value: cat_object[index].id,
            subcategories: cat_object[index].product_subcategories,
          };
        }
      })
      .catch((error) => {
        this.showError({
          message: error.message,
        });
      });
  },
  methods: {
    helpUserInfoForm: function () {
      this.showInfo({
        message:
          "Product section, you can add, edit and delete products for your business page.",
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
