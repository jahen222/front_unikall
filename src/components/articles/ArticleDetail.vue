<template>
  <div class="page-wrapper">
    <section class="blog-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="blog-details__main">
              <div v-if="article.image" class="blog-details__image">
                <img :src="api_url + article.image.url" alt />
              </div>
              <div class="blog-details__content">
                <div v-if="article.published_at" class="blog-one__meta justify-content-start">
                  <a href="#">
                    <i class="far fa-clock"></i>
                    {{article.published_at}}
                  </a>
                </div>
                <div class="no-format" v-html="content"></div>
              </div>
              <div class="blog-details__meta">
                <div class="blog-details__share">
                  <a
                    href="https://www.facebook.com/Unikall-100716974995202/?modal=admin_todo_tour"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a
                    href="https://instagram.com/unikall_official?igshid=1qy8c81exu80k"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "ArticleDetail",
  props: {
    article: {
      type: Object,
    },
  },
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
    };
  },
  computed: {
    content: function () {
      var content = null;

      content = marked(
        this.article.content.replace(
          /\/uploads\//g,
          process.env.VUE_APP_STRAPI_API_URL + "/uploads/"
        )
      ).replace(
        /<img/g,
        '<img style="margin-left: auto;margin-right: auto; display: block;"'
      );
      return content;
    },
    metatitle: function () {
      var title = null;
      title = this.article.title;
      console.log(this.article.image);
      return title;
    },
  },
  metaInfo() {
    return {
      title: this.metatitle,
      titleTemplate: "%s | Unikall",
      meta: [
        { name: "twitter:card", content: "Unikall" },
        { name: "twitter:title", content: this.metatitle },
        {
          name: "twitter:description",
          content: this.metatitle,
        },
        { name: "twitter:image", content: this.article.image.url },
        { property: "og:title", content: this.metatitle },
        { property: "og:site_name", content: "Unikall" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: this.article.image.url },
        {
          property: "og:description",
          content: this.metatitle,
        },
      ],
    };
  },
};
</script>

<style scoped>
.no-format {
  text-align: left !important;
}
</style>
