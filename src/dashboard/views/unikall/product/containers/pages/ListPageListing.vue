<template>
  <div>
    <b-row v-if="total == 0" style="padding-left: 45%">
      <plus-thumb-list-item
        :key="0"
        :selected-items="selectedItems"
        @toggle-item="toggleItem"
        v-contextmenu:contextmenu
      />
    </b-row>
    <b-row v-if="displayMode === 'thumb'" key="thumb">
      <b-colxx
        xxs="12"
        class="mb-3"
        v-for="(item, index) in items"
        :key="index"
        :id="item.id"
      >
        <thumb-list-item
          :key="item.id"
          :data="item"
          :selected-items="selectedItems"
          :categories="categories"
          @toggle-item="toggleItem"
          v-contextmenu:contextmenu
        />
      </b-colxx>
    </b-row>
    <b-row v-if="lastPage > 1">
      <b-colxx xxs="12">
        <b-pagination-nav
          :number-of-pages="lastPage"
          :link-gen="linkGen"
          :value="page"
          @change="(a) => changePage(a)"
          :per-page="perPage"
          align="center"
        >
          <template v-slot:next-text>
            <i class="simple-icon-arrow-right" />
          </template>
          <template v-slot:prev-text>
            <i class="simple-icon-arrow-left" />
          </template>
          <template v-slot:first-text>
            <i class="simple-icon-control-start" />
          </template>
          <template v-slot:last-text>
            <i class="simple-icon-control-end" />
          </template>
        </b-pagination-nav>
      </b-colxx>
    </b-row>

    <v-contextmenu @contextmenu="handleContextMenu" ref="contextmenu">
      <v-contextmenu-item @click="onContextMenuAction('copy')">
        <i class="simple-icon-docs" />
        <span>Copy</span>
      </v-contextmenu-item>
      <v-contextmenu-item @click="onContextMenuAction('move-to-archive')">
        <i class="simple-icon-drawer" />
        <span>Move to archive</span>
      </v-contextmenu-item>
      <v-contextmenu-item @click="onContextMenuAction('delete')">
        <i class="simple-icon-trash" />
        <span>Delete</span>
      </v-contextmenu-item>
    </v-contextmenu>
  </div>
</template>
<script>
import ThumbListItem from "../../components/Listing/ThumbListItem";
import axios from "axios";
import PlusthumbListItem from "../../components/Listing/PlusthumbListItem";

export default {
  components: {
    "thumb-list-item": ThumbListItem,
    "plus-thumb-list-item": PlusthumbListItem,
  },
  props: [
    "displayMode",
    "items",
    "selectedItems",
    "toggleItem",
    "lastPage",
    "perPage",
    "page",
    "changePage",
    "handleContextMenu",
    "onContextMenuAction",
    "total",
  ],
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    linkGen(pageNum) {
      return "#page-" + pageNum;
    },
    async loadCategories() {
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
  },
  mounted() {
    this.loadCategories();
  },
};
</script>
