<template>
  <div class="page-wrapper">
    <Header />
    <section class="page-header">
      <div class="container">
        <h2>{{article.title}}</h2>
        <ul class="list-unstyled thm-breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/articles">Blog</a>
          </li>
          <li>
            <span>Blog Details</span>
          </li>
        </ul>
      </div>
    </section>
    <ArticleDetail :article="article"></ArticleDetail>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import ArticleDetail from "@/components/articles/ArticleDetail.vue";
import gql from "graphql-tag";

export default {
  name: "Article",
  components: {
    Header,
    ArticleDetail,
    Footer,
  },
  data() {
    return {
      article: {},
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id,
    };
  },
  apollo: {
    article: {
      query: gql`
        query Articles($id: ID!) {
          article(id: $id) {
            id
            title
            content
            image {
              url
            }
            published_at
          }
        }
      `,
      variables() {
        return {
          id: this.routeParam,
        };
      },
    },
  },
};
</script>

<style scoped>
.page-header {
    background-color: var(--thm-black);
    background-image: url("../assets/unikall/images/banner-fondo.jpg");
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: cover;
    padding-bottom: 84px;
    padding-top: 186px;
}
</style>