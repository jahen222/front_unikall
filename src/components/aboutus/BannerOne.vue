<template>
  <section class="banner-one aboutus-banner-one" id="home">
    <div class="container container_aboutusBannerOne">
      <div class="row">
        <div class="col-lg-12 d-flex">
          <div class="my-auto">
            <div class="aboutus-banner-one__content">
              <h3>
                Let’s make a strategic web profile
                <br />for your business
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerOne"
};
</script>

<style scoped>
.aboutus-banner-one {
  background-image: url("../../assets/unikall/images/Unikall-home-final-particion-learn-more-banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.aboutus-banner-one::before {
  background-image: none;
}
.aboutus-banner-one::after {
  background-image: none;
}
.container_aboutusBannerOne {
  margin-right: 30%;
  margin-bottom: 0%;
  margin-top: 10%;
}
.aboutus-banner-one__content {
  text-align: left;
}
.aboutus-banner-one__content h3 {
  font-size: 37px;
  font-weight: 900;
  margin: 0;
  color: white;
  letter-spacing: -0.02em;
}
.aboutus-banner-one__content h4 {
  color: #000000;
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
</style>