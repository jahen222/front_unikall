<template>
  <section class="blog-one" id="blog">
    <img src="../../assets/oapee/images/shapes/blog-shape-1-1.png" class="blog-one__bg-shape-1" alt />
    <img src="../../assets/oapee/images/shapes/blog-shape-1-2.png" class="blog-one__bg-shape-2" alt />
    <div class="container">
      <div class="block-title text-center">
        <h3>Featured categories</h3>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="blog-one__single">
            <div class="blog-one__image">
              <img src="../../assets/unikall/images/Recurso 2-24.png" alt />
            </div>
            <div class="blog-one__content">
              <h3>
                <a href="blog-details.html">E commerce</a>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="blog-one__single">
            <div class="blog-one__image">
              <img src="../../assets/unikall/images/Recurso 2-25.png" alt />
            </div>
            <div class="blog-one__content">
              <h3>
                <a href="blog-details.html">Marketing & Sales</a>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="blog-one__single">
            <div class="blog-one__image">
              <img src="../../assets/unikall/images/Recurso 2-26.png" alt />
            </div>
            <div class="blog-one__content">
              <h3>
                <a href="blog-details.html">Lessons</a>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="blog-one__single">
            <div class="blog-one__image">
              <img src="../../assets/unikall/images/Recurso 2-27.png" alt />
            </div>
            <div class="blog-one__content">
              <h3>
                <a href="blog-details.html">Household Services</a>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="blog-one__single">
            <div class="blog-one__image">
              <img src="../../assets/unikall/images/Recurso 2-28.png" alt />
            </div>
            <div class="blog-one__content">
              <h3>
                <a href="blog-details.html">Construction & Home Improvements</a>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="blog-one__single">
            <div class="blog-one__image">
              <img src="../../assets/unikall/images/Recurso 2-29.png" alt />
            </div>
            <div class="blog-one__content">
              <h3>
                <a href="blog-details.html">Events</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="/journey" class="thm-btn thm-btn_service-btn service-one__btn">
      <span>EXPLORE MORE</span>
    </a>
  </section>
</template>

<script>
export default {
  name: "CatalogOne"
};
</script>

<style>
.blog-one {
  background-color: #ffffff;
}
.blog-one__image {
  background-color: #504c54;
}
.blog-one__content::after {
  background-image: linear-gradient(90deg, #000 0%, #000 100%);
  height: 0px;
}
[class*="col-"]:nth-child(2) .blog-one__content::after {
  background-image: linear-gradient(90deg, #000 0%, #000 100%);
}
[class*="col-"]:nth-child(3) .blog-one__content::after {
  background-image: linear-gradient(90deg, #000 0%, #000 100%);
}
[class*="col-"]:nth-child(4) .blog-one__content::after {
  background-image: linear-gradient(90deg, #000 0%, #000 100%);
}
[class*="col-"]:nth-child(5) .blog-one__content::after {
  background-image: linear-gradient(90deg, #000 0%, #000 100%);
}
[class*="col-"]:nth-child(6) .blog-one__content::after {
  background-image: linear-gradient(90deg, #000 0%, #000 100%);
}
.blog-one__content h3 {
  color: #000;
}
</style>