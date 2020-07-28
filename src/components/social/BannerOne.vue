<template>
  <section class="banner-one social-banner-one" id="home">
    <div class="container container_socialBannerOne">
      <div class="row">
        <div class="col-lg-12 d-flex">
          <div class="my-auto">
            <div class="social-banner-one__content">
              <img src="../../assets/unikall/images/unikall-logo-png (1).png" width="136" alt />
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

<style scope>
.social-banner-one {
  background-image: url("../../assets/unikall/images/Unikall-home-final-particion-hand.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.social-banner-one::before {
  background-image: none;
}
.social-banner-one::after {
  background-image: none;
}
.container_socialBannerOne {
  margin-right: 30%;
  margin-bottom: 0%;
  margin-top: 10%;
}
.social-banner-one__content {
  text-align: left;
}
.social-banner-one__content h3 {
  font-size: 37px;
  font-weight: 900;
  margin: 0;
  color: #000000;
  letter-spacing: -0.02em;
}
.social-banner-one__content h4 {
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