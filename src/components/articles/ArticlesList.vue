<template>
  <section class="blog-grid" v-if="articles.length > 0">
    <div class="container">
      <div class="row">
        <div v-if="$apollo.queries.articles.loading">Loading...</div>
        <div v-for="article in articles" v-bind:key="article.id" class="col-lg-4 col-md-6">
          <div class="blog-one__single">
            <div class="blog-one__image" v-if="article.image && article.image.url">
              <img :src="api_url + article.image.url" alt />
            </div>
            <div class="blog-one__image" v-else>
              <img src="../../assets/unikall/images/default.jpg" alt />
            </div>
            <div class="blog-one__content">
              <div class="blog-one__meta">
                <a href="#">
                  <i class="far fa-clock"></i>
                  {{article.published_at}}
                </a>
              </div>
              <h3>
                <a :href="'/article/'+article.id">{{article.title}}</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="post-pagination">
        <a @click="previousPage()" v-show="start>0">
          <i class="far fa-angle-left"></i>
        </a>
        <a @click="nextPage()" v-show="(start+6)<articlesCount">
          <i class="far fa-angle-right"></i>
        </a>
      </div>
    </div>
  </section>
  <section v-else>
    <div class="container">
      <div class="row">
        <h3>there are no articles yet</h3>
      </div>
    </div>
  </section>
</template>

<script>
import GET_ARTICLES from "./queries/GET_ARTICLES";
import COUNT_ARTICLES from "./queries/COUNT_ARTICLES";

export default {
  name: "ArticlesList",
  data() {
    return {
      articles: [],
      articlesCount: 9999,
      limit: 6,
      start: 0,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
    };
  },
  apollo: {
    articles: {
      query: GET_ARTICLES,
      variables() {
        return {
          limit: this.limit,
          start: this.start,
        };
      },
    },
    articlesCount: COUNT_ARTICLES,
  },
  methods: {
    nextPage() {
      this.start = this.start + 6;
    },
    previousPage() {
      this.start = this.start - 6;
    },
  },
};
</script>

<style scoped>
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #ff844c;
  border-color: #ff844c;
}
.page-link {
  color: #ff844c;
}
.page-link:hover {
  color: #ff844c;
}
</style>