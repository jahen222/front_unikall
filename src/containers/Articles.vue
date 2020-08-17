<template>
  <div class="page-wrapper">
    <Header />
    <section class="page-header">
      <div class="container">
        <h2>Blog</h2>
        <ul class="list-unstyled thm-breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <span>Blog</span>
          </li>
        </ul>
      </div>
    </section>
    <ArticlesList></ArticlesList>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import ArticlesList from "@/components/articles/ArticlesList.vue";

export default {
  name: "Articles",
  components: {
    Header,
    ArticlesList,
    Footer,
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

