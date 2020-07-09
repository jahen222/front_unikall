<template>
  <section class="banner-one" id="home">
    <div class="container container_bannerOne">
      <div class="row">
        <div class="col-lg-6 d-flex">
          <div class="my-auto">
            <div class="banner-one__content">
              <h3>
                We Give You An Online Presence
                <br />That Is Easy As Click Click Click!
              </h3>
              <p>A FREE go-to marketplace, to build your outstanding Web Profile</p>
              <a href="#" class="thm-btn banner-one__btn thm-btn_baneerOne-btn">
                <span>START FOR FREE</span>
              </a>
              <!-- /.thm-btn banner-one__btn -->
            </div>
            <!-- /.banner-one__content -->
          </div>
          <!-- /.my-auto -->
        </div>
        <!-- /.col-lg-6 -->
        <div class="col-lg-6 d-flex justify-content-end wow fadeInUp" data-wow-duration="1500ms">
          <div class="banner-one__image">
            <img
              class="banner-one__image_tag"
              src="../../assets/unikall/images/icons-window-seccion-uno.png"
              alt
            />
          </div>
          <!-- /.banner-one__image -->
        </div>
        <!-- /.col-lg-6 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.banner-one -->
</template>

<script>
export default {
  name: "BannerOne"
};
</script>

<style>
.banner-one {
  background-image: url("../../assets/unikall/images/banner_cut.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.banner-one::before {
  background-image: none;
}
.banner-one::after {
  background-image: none;
}
.container_bannerOne {
  margin-right: 30%;
  margin-bottom: 6.5%;
  margin-top: 3%;
}
.banner-one__content {
  text-align: left;
}
.banner-one__image_tag {
  width: 200%;
  padding-right: 10%;
  margin-top: 15%;
}
.banner-one__btn {
  border: none;
  border: solid 2px #ffffff;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0);
  font-size: 25px;
}
.thm-btn_baneerOne-btn:hover {
  color: #ff864c;
  transition: all 500ms ease;
  background-position: bottom;
}
.banner-one__content h3 {
  font-size: 37px;
  font-weight: 100;
}
.banner-one__content p {
  color: whitesmoke;
}
</style>