<template>
  <div class="page-wrapper">
    <section class="blog-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="blog-details__main">
              <div v-if="image" class="blog-details__image">
                <img :src="image" alt />
              </div>
              <div class="blog-details__content">
                <div v-if="date" class="blog-one__meta justify-content-start">
                  <a href="#">
                    <i class="far fa-clock"></i>
                    {{article.published_at}}
                  </a>
                </div>
                <div v-if="content" class="no-format" v-html="content"></div>
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
import axios from "axios";

export default {
  name: "ArticleDetail",
  props: ["article_id"],
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      image: "",
      article: "",
      date: "",
      content: "",
      metatitle: "",
      metadescription: "",
      metaimage: "",
    };
  },
  created() {
    axios
      .get(process.env.VUE_APP_STRAPI_API_URL + "/articles/" + this.article_id)
      .then((response) => {
        this.image =
          process.env.VUE_APP_STRAPI_API_URL + response.data.image.url;
        this.article = response.data;
        this.date = response.data.published_at;
        this.content = marked(
          this.article.content.replace(
            /\/uploads\//g,
            process.env.VUE_APP_STRAPI_API_URL + "/uploads/"
          )
        ).replace(
          /<img/g,
          '<img style="margin-left: auto;margin-right: auto; display: block;"'
        );

        this.metatitle = response.data.title;
        this.metadescription = response.data.content.substring(0, 45);
        this.metaimage =
          process.env.VUE_APP_STRAPI_API_URL +
          response.data.image.formats.small.url;
      });
  },
  metaInfo() {
    console.log("metaimage: ", this.metaimage);

    return {
      title: this.metatitle,
      titleTemplate: "%s | Unikall",
      meta: [
        // Facebook OpenGraph
        { name: "title", content: this.metatitle },
        { name: "description", content: this.metadescription },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "keywords", content: "Blog, Unikall, Ecommerce, Services" },
        { property: "og:title", content: this.metatitle },
        { property: "og:site_name", content: "Unikall" },
        {
          property: "og:url",
          content: process.env.VUE_APP_URL + "/article/" + this.article_id,
        },
        { property: "og:type", content: "article" },
        { property: "og:image", content: this.metaimage },
        { property: "og:description", content: this.metadescription },
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
