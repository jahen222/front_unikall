<template>
  <b-row>
    <b-colxx xxs="12">
      <h1>Products</h1>
      <div class="top-right-button-container">
        <b-button
          v-b-modal.modalright
          variant="primary"
          class="top-right-button"
        >{{ $t('pages.add-new') }}</b-button>
        <b-button-group>
          <b-dropdown split right @click="selectAll(true)" class="check-button" variant="primary">
            <label
              class="custom-control custom-checkbox pl-4 mb-0 d-inline-block"
              slot="button-content"
            >
              <input
                class="custom-control-input"
                type="checkbox"
                :checked="isSelectedAll"
                v-shortkey="{select: ['ctrl','a'], undo: ['ctrl','d']}"
                @shortkey="keymap"
              />
              <span
                :class="{
                'custom-control-label' :true,
                'indeterminate' : isAnyItemSelected
                }"
              >&nbsp;</span>
            </label>
            <b-dropdown-item>{{$t('pages.delete')}}</b-dropdown-item>
          </b-dropdown>
        </b-button-group>
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
      .get(
        process.env.VUE_APP_STRAPI_API_URL + "/product-categories",
      )
      .then((response) => {
          var cat_object = response.data;
          for (let index = 0; index < cat_object.length; index++) {
            this.categories[index] = {
              label: cat_object[index].name,
              value: cat_object[index].id,
              subcategories: cat_object[index].product_subcategories
            }   
          }
      })
      .catch((error) => {
        this.showError({
          message: error.message,
        });
      });
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
