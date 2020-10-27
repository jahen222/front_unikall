<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h1>{{item.name}}</h1>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12" xl="8" class="col-left">
        <b-card class="mb-4" no-body>
          <b-card-body>
            <glide-component-thumbs
              :settingsImages="{ bound: true, rewind: false, focusAt: 0, startAt: 0, gap: 5, perView: 1, data: detailImages}"
              :settingsThumbs="{ bbound: true, rewind: false, focusAt: 0, startAt: 0, gap: 10, perView: 5, data: detailThumbs, breakpoints: { 576: { perView: 4 }, 420: { perView: 3 } } }"
            />
          </b-card-body>
        </b-card>

        <b-card class="mb-4" no-body>
          <b-tabs card no-fade>
            <b-tab :title="`${$t('pages.comments-title')} (19)`" active>
              <b-row>
                <b-colxx sm="12">
                  <b-card-text>
                    <comment-with-likes
                      v-for="(item,index) in commentWithLikesData"
                      :data="item"
                      :key="`comment_${index}`"
                    ></comment-with-likes>
                    <b-input-group class="comment-contaiener">
                      <b-form-input :placeholder="$t('pages.addComment')" />
                      <b-input-group-append>
                        <b-button variant="primary">
                          <span class="d-inline-block">{{$t('pages.send')}}</span>
                          <i class="simple-icon-arrow-right ml-2"></i>
                        </b-button>
                      </b-input-group-append>
                    </b-input-group>
                  </b-card-text>
                </b-colxx>
              </b-row>
            </b-tab>
            <b-tab :title="`${$t('pages.questions-title')} (6)`">
              <b-row>
                <b-colxx sm="12">
                  <b-card-text>
                    <question-answer
                      v-for="(item,index) in detailsQuestionsData"
                      :data="item"
                      :key="`question_${index}`"
                    ></question-answer>
                  </b-card-text>
                </b-colxx>
              </b-row>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-colxx>
      <b-colxx xxs="12" xl="4" class="col-right">
        <b-card class="mb-4">
          <p class="text-muted text-small mb-2">{{$t('Description')}}</p>
          <p class="mb-3">{{item.description}}</p>
          <p class="text-muted text-small mb-2">{{$t('Stock')}}</p>
          <p class="mb-3">{{ item.quantity }} Units</p>
          <p class="text-muted text-small mb-2">{{$t('Price')}}</p>
          <p class="mb-3">{{ item.price }}$</p>
          <p class="text-muted text-small mb-2">{{$t('Status')}}</p>
          <p class="mb-3">{{ item.status ? "ON HOLD" : "PROCESSED" }}</p>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import GlideComponentThumbs from "../../../components/Carousel/GlideComponentThumbs";
import CommentWithLikes from "../../../containers/pages/CommentWithLikes";
import QuestionAnswer from "../../../containers/pages/QuestionAnswer";
import axios from "axios";
import Cookies from "js-cookie";

import { commentWithLikesData } from "../../../data/comments";
import { detailsQuestionsData } from "../../../data/questions";

export default {
  components: {
    "glide-component-thumbs": GlideComponentThumbs,
    "comment-with-likes": CommentWithLikes,
    "question-answer": QuestionAnswer,
  },
  data() {
    return {
      routeParam: this.$route.params.id,
      user: null,
      business: null,
      item: null,
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
        .get(
          process.env.VUE_APP_STRAPI_API_URL + "/products/" + this.routeParam
        )
        .then((response) => {
          if (this.business.id != response.data.business.id) {
            // if product does not belong to the business
            this.$router.push("/");
          } else {
            this.item = response.data;

            for (let index = 0; index < response.data.photos.length; index++) {
              const element = response.data.photos[index];

              this.detailImages.push({
                id: index,
                img: process.env.VUE_APP_STRAPI_API_URL + element.url,
              });

              this.detailThumbs.push({
                id: index,
                img: process.env.VUE_APP_STRAPI_API_URL + element.url,
              });

              //console.log("aqui: ", this.item);
            }
          }

          //console.log("aqui: ", this.item);
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
