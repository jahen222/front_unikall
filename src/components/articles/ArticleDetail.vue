<template>
  <div class="page-wrapper">
    <section class="blog-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="blog-details__main">
              <div class="blog-details__image">
                <img :src="api_url + article.image.url" alt />
              </div>
              <div class="blog-details__content">
                <div class="blog-one__meta justify-content-start">
                  <a href="#">
                    <i class="far fa-clock"></i> {{article.published_at}}
                  </a>
                </div>
                <h3>{{article.title}}</h3>
                <p>{{article.content}}</p>
              </div>
              <div class="blog-details__meta">
                <div class="blog-details__share">
                  <a href="https://www.facebook.com/Unikall-100716974995202/?modal=admin_todo_tour" target="_blank">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a href="https://instagram.com/unikall_official?igshid=1qy8c81exu80k" target="_blank">
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
export default {
  name: "ArticleDetail",
  props: {
    article: {
      type: Object,
    },
  },
  data: function () {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
    };
  },
};
</script>
