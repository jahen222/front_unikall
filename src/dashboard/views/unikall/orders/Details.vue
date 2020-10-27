<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h1>Orden Nro {{ item.id }}</h1>
        <div class="separator mb-5"></div>
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
              <p class="list-item-heading mb-0 truncate">Product</p>
              <p class="list-item-heading mb-0 truncate">Quantity</p>
              <p class="mb-0 text-muted text-small w-15 w-sm-100">Total</p>
            </div>
          </div>
        </b-card>
        <br /><br />
      </b-colxx>
    </b-row>
    <div v-for="(data, index) in items" :key="index">
      <b-row>
        <b-colxx>
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
                <p class="list-item-heading mb-0 truncate">{{ data.name }}</p>
                <p class="list-item-heading mb-0 truncate">
                  {{ data.quantity }}
                </p>
                <p class="mb-0 text-muted text-small w-15 w-sm-100">
                  {{ data.price }}
                </p>
              </div>
            </div>
            <edit-modal :post="data"></edit-modal>
            <deleted-modal :post="data"></deleted-modal>
          </b-card>
        </b-colxx>
      </b-row>
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import { commentWithLikesData } from "../../../data/comments";
import { detailsQuestionsData } from "../../../data/questions";

export default {
  data() {
    return {
      routeParam: this.$route.params.id,
      user: null,
      business: null,
      item: null,
      items: [],
      isLoad: false,
      detailImages: [],
      detailThumbs: [],
      commentWithLikesData,
      detailsQuestionsData,
    };
  },
  methods: {
    async loadItem() {
      await axios
        .get(process.env.VUE_APP_STRAPI_API_URL + "/orders/" + this.routeParam)
        .then((response) => {
          this.item = response.data;
          console.log(this.item);
          for (
            let index = 0;
            index < response.data.order_items.length;
            index++
          ) {
            const element = response.data.order_items[index];
            this.items[index] = element;
          }
        });
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoad = true;
    }, 50);
    this.user = JSON.parse(Cookies.get("user"));
    this.business = JSON.parse(localStorage.getItem("user")).business;
    this.loadItem();
  },
};
</script>
